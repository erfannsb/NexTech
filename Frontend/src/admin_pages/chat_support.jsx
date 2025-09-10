import { Send } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function SupportChat({}) {
  const [text, setText] = useState("");
  const [people, setPeople] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentPerson, setCurrentPerson] = useState(null);

  const socketRef = useRef(null);

  // handling websocket
  useEffect(() => {
    const wsScheme = window.location.protocol === "https:" ? "wss" : "ws";
    const wsUrl = `${wsScheme}://${window.location.host}/ws/chat/`;
    socketRef.current = new WebSocket(wsUrl);
    socketRef.current.onopen = () => {
      console.log("✅ Connected to support chat");
    };

    socketRef.current.onmessage = (event) => {
      console.log("new message", event.data);
      const data = JSON.parse(event.data);

      setPeople((prev) => {
        let found = false;

        const updated = prev.map((person) => {
          if (person.id === data.user_id) {
            found = true;
            return {
              ...person,
              new: currentPerson?.id == person.id ? 0 : (person.new || 0) + 1,
              messages: [
                ...(person.messages || []),
                { msg: data.message, sender: false },
              ],
            };
          }
          return person;
        });

        // If user not found, append them
        if (!found) {
          updated.push({
            id: data.user_id,
            name: data.name,
            messages: [{ msg: data.message, sender: false }],
            new: 1,
          });
        }

        return updated;
      });
    };

    socketRef.current.onclose = () => {
      console.log("❌ Disconnected from support chat");
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    if (!currentPerson) return;

    const person = people.find((p) => p.id === currentPerson.id);
    if (!person || !person.messages.length) return;

    const lastMessage = person.messages[person.messages.length - 1];

    setMessages((prev) => [...prev, lastMessage]);
  }, [people]);

  const handleInputChange = (e) => {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const messageRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const onSendClick = () => {
    const messageText = text.trim();
    if (!messageText || !socketRef.current) return;

    // send to server
    socketRef.current.send(
      JSON.stringify({ message: messageText, user_id: currentPerson?.id })
    );

    // update UI
    setMessages((prev) => [...prev, { msg: messageText, sender: true }]);

    setText("");
    if (messageRef.current) {
      messageRef.current.style.height = "auto"; // reset height
    }
  };

  const onChatClick = (person) => {
    setCurrentPerson(person);
    setMessages(people.filter((m) => m.id === person.id)[0]?.messages || []);
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    const scroll = scrollContainerRef.current;
    if (scroll) {
      scroll.scrollTop = scroll.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      className="grid h-screen w-full"
      style={{
        gridTemplateColumns: " 1fr minmax(200px, 30%)",
        gridTemplateRows: "60px auto",
      }}
    >
      <div className="col-span-2 flex items-center px-5 border-b border-[#26262B]">
        <h1 class="text-2xl font-bold text-[#6274F7] ">NexTech</h1>
      </div>
      {/* Chat Component */}
      <div className="h-full flex flex-col w-full">
        {/* Header */}
        <div className="flex h-[67px] items-center px-5 border-b border-[#26262B]">
          <div className="bg-neutral-800 w-10 h-10 rounded-full mr-2"></div>
          <h3 className="font-medidum font-semibold">
            {currentPerson?.name ? currentPerson.name : "No One Selected"}
          </h3>
        </div>
        {/* Chat */}
        <div className="flex-1">
          {/* Message Body */}
          <div
            ref={scrollContainerRef}
            className="flex-1 px-5 flex flex-col gap-3 overflow-y-auto my-5"
          >
            {messages.map((e, i) => (
              <MessageBubble key={i} text={e.msg} isSender={e.sender} />
            ))}
          </div>{" "}
        </div>
        {/* Input */}
        <div className="min-h-[50px] max-h-[100px] flex justify-between border-t border-[#26262B]  px-3">
          <textarea
            className="w-full h-auto min-h-[50px] max-h-[100px] bg-transparent resize-none p-3 outline-none overflow-y-auto"
            ref={messageRef}
            value={text}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                onSendClick();
              }
            }}
            placeholder="Type your message..."
          ></textarea>
          <button
            onClick={onSendClick}
            className="text-[#e9e9e9] hover:text-[#949494] transition aspect-square flex items-center justify-center rounded-full cursor-pointer"
          >
            <Send size={18} />
          </button>
        </div>
      </div>

      {/* People */}
      <div className="h-full">
        <div className="h-full border-l border-[#26262B]">
          {people.map((person, index) => (
            <div
              onClick={() => onChatClick(person)}
              key={index}
              className="p-4 hover:bg-[#1a1a1a] cursor-pointer border-[#1a1a1b] border-b flex justify-between items-center"
            >
              <div>
                <p className="font-semibold text-white">{person.name}</p>
                <p className="text-sm text-gray-400">{person.lastMessage}</p>
              </div>
              <div>
                {person.new > 0 && (
                  <span className="bg-[#6274F7] text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {person.new}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const MessageBubble = ({ text, isSender = true }) => {
  return (
    <div
      className={`flex items-end not-first:mt-1 ${
        isSender ? "justify-end" : "justify-start"
      } `}
    >
      <div className="relative max-w-md">
        {/* Bubble */}
        <div
          className={`text-white text-sm px-5 py-2 rounded-3xl ${
            isSender ? "bg-[#4C4C51]" : "bg-[#7573FE]"
          }`}
        >
          {text}
        </div>

        {/* Tail using SVG */}
        {isSender ? (
          <svg
            className="absolute right-[6px] bottom-0"
            width="15"
            height="20"
            viewBox="0 0 15 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0 C10 10, 10 10, 15 20 L0 20 Z" fill="#4C4C51" />
          </svg>
        ) : (
          <svg
            className="absolute left-[6px] bottom-0"
            width="15"
            height="20"
            viewBox="0 0 15 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 0 C5 10, 5 10, 0 20 L15 20 Z" fill="#7573FE" />
          </svg>
        )}
      </div>
    </div>
  );
};
