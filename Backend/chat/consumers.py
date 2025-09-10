import json
from channels.generic.websocket import AsyncWebsocketConsumer

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        # Initialize defaults to avoid attribute errors if we close early
        self.is_agent = False
        self.user_id = None
        self.customer_group = None
        self.agent_group = None

        self.user = self.scope.get("user")

        print("user:", self.user)
        self.is_agent = getattr(self.user, "isshopadmin", False)  # mark agent if staff
        self.user_id = getattr(self.user, "customerid", None)
        # Build a display name from the authenticated user
        first_name = getattr(self.user, "firstname", "") or ""
        last_name = getattr(self.user, "lastname", "") or ""
        self.display_name = f"{first_name} {last_name}".strip() or getattr(self.user, "emailaddress", "User")
        if self.user_id is None:
            await self.close()
            return

        # Accept early so the handshake completes before group operations
        await self.accept()

        # Customer group
        if not self.is_agent:
            self.customer_group = f"support_chat_{self.user_id}"
            print(f"customer, {self.scope['user']} is added to the support chat")

            try:
                await self.channel_layer.group_add(self.customer_group, self.channel_name) # type: ignore
            except Exception as e:
                print("group_add customer failed:", e)
                await self.close()
                return
        # Agent group
        if self.is_agent:
            self.agent_group = "support_chat_agent"
            print(f"agent, {self.scope['user']} is added to the support chat")

            try:
                await self.channel_layer.group_add(self.agent_group, self.channel_name) # type: ignore
            except Exception as e:
                print("group_add agent failed:", e)
                await self.close()
                return
        print("connected successfully")

    async def disconnect(self, code):
        # Guard against missing attributes if connect closed early
        if not getattr(self, "is_agent", False):
            if getattr(self, "customer_group", None):
                await self.channel_layer.group_discard(self.customer_group, self.channel_name) # type: ignore
        else:
            if getattr(self, "agent_group", None):
                await self.channel_layer.group_discard(self.agent_group, self.channel_name) # type: ignore

    async def receive(self, text_data=None, bytes_data=None):
        if text_data is None:
            return
        try:
            data = json.loads(text_data)
        except Exception as e:
            print("invalid ws payload:", text_data, e)
            return
        if not isinstance(data, dict):
            print("unexpected ws payload (not dict):", data)
            return
        message = data.get("message")
        if message is None:
            print("missing 'message' in payload:", data)
            return

        # Customer sends message → broadcast to agent
        if not self.is_agent:
            await self.channel_layer.group_send( # type: ignore
                "support_chat_agent",
                {
                    "type": "chat_message",
                    "message": message,
                    "user_id": self.user_id,
                    "name": self.display_name,
                }
            )
        # Agent sends message → broadcast to customer
        else:
            customer_id = data.get("user_id")
            if customer_id is None:
                # Inform client and avoid crashing the consumer
                await self.send(text_data=json.dumps({
                    "error": "Missing user_id for agent message",
                }))
                return
            customer_group = f"support_chat_{customer_id}"
            await self.channel_layer.group_send( # type: ignore
                customer_group,
                {
                    "type": "chat_message",
                    "message": message,
                    "user_id": customer_id,
                    "name": self.display_name,
                }
            )

    async def chat_message(self, event):
        print("event is this:", event)
        message = event["message"]
        user_id = event["user_id"]
        name = event.get("name")

        await self.send(text_data=json.dumps({
            "message": message,
            "user_id": user_id,
            "name": name,
        }))
