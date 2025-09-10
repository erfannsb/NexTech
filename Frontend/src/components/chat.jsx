import { Send, User, X } from "lucide-react";
import { useRef, useState, useEffect, use } from "react";
import useUIStore from "../ui_storage";
import { isLoggedIn } from "../../data/users";

export default function Chat() {
  const [isLogged, setLogged] = useState(false);
  const socket = useRef(null);
  const [messages, setMessages] = useState([
    { msg: "Hello How can I Help You sir?", sender: false },
  ]);
  const setChatOpen = useUIStore((state) => state.setChatOpen);

  const messageRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const onSendClick = () => {
    const messageText = messageRef.current.value.trim();
    if (messageText === "") return;

    console.log("Socket State: ", socket.current);
    console.log("Socket State: ", socket.current.readyState === WebSocket.OPEN);
    console.log("Socket State: ", socket.current.readyState);
    console.log("Socket State What it should be: ", WebSocket);
    if (socket.current && socket.current.readyState === WebSocket.OPEN) {
      console.log("did i ran?");
      socket.current.send(JSON.stringify({ message: messageText }));
    }

    setMessages((prev) => [...prev, { msg: messageText, sender: true }]);
    messageRef.current.value = "";
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    const scroll = scrollContainerRef.current;
    if (scroll) {
      scroll.scrollTop = scroll.scrollHeight;
    }
  }, [messages]);

  // WebSocket setup
  useEffect(() => {
    const fetching = async () => {
      const logged = await isLoggedIn();
      setLogged(logged);
    };
    fetching();

    const wsScheme = window.location.protocol === "https:" ? "wss" : "ws";
    const wsUrl = `${wsScheme}://${window.location.host}/ws/chat/`;
    socket.current = new WebSocket(wsUrl);

    socket.current.onopen = () => {
      console.log("✅ Connected to WebSocket");
    };

    socket.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, { msg: data.message, sender: false }]);
    };

    socket.current.onclose = () => {
      console.log("❌ WebSocket closed");
    };

    return () => {
      if (socket.current) {
        socket.current.close();
      }
    };
  }, []);
  //   close window
  const onClose = () => {
    setChatOpen(false);
  };

  return (
    <div className="min-w-[350px] min-h-[400px] h-[500px] flex flex-col py-5 text-white rounded-xl shadow-xl overflow-hidden">
      {/* Check If user isn't logged in then force */}
      {!isLogged ? (
        <div className="flex flex-col items-center justify-center h-full px-5 text-center">
          <p className="mb-4">Please log in to use the chat feature.</p>
        </div>
      ) : (
        <>
          {/* Header */}

          <div className="flex items-center border-white/20 border-b pb-4 px-5">
            <div className="bg-white w-8 h-8 flex justify-center items-center rounded-full mr-2">
              <User size={22} color="black" fontWeight={300} />
            </div>
            <p className="text-sm font-bold">Ali From Support Team</p>
            <X className="ml-auto cursor-pointer" onClick={onClose} size={17} />
          </div>

          {/* Message Body */}
          <div
            ref={scrollContainerRef}
            className="flex-1 px-5 flex flex-col gap-3 overflow-y-auto my-5"
          >
            {messages.map((e, i) => (
              <MessageBubble key={i} text={e.msg} isSender={e.sender} />
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center px-5 mt-auto">
            <input
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  onSendClick();
                }
              }}
              placeholder="Send Message"
              ref={messageRef}
              className="border-[#676767] text-sm border-[1.5px] outline-0 py-2 px-3 rounded-full w-full mr-2 bg-transparent text-white"
            />
            <button
              onClick={onSendClick}
              className="bg-[#6274F7] hover:bg-[#505999] transition h-[40px] aspect-square flex items-center justify-center rounded-full cursor-pointer"
            >
              <Send size={16} />
            </button>
          </div>
        </>
      )}
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
