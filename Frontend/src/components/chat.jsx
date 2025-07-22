import { Send, User, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import useUIStore from "../ui_storage";

export default function Chat() {
  const [messages, setMessages] = useState([
    { msg: "Hello How can I Help You sir?", sender: false },
    { msg: "Yes, I need help.", sender: true },
  ]);
  const setChatOpen = useUIStore((state) => state.setChatOpen);

  const messageRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const onSendClick = () => {
    const messageText = messageRef.current.value.trim();
    if (messageText === "") return;

    setMessages([...messages, { msg: messageText, sender: true }]);
    messageRef.current.value = "";
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    const scroll = scrollContainerRef.current;
    if (scroll) {
      scroll.scrollTop = scroll.scrollHeight;
    }
  }, [messages]);

  //   close window
  const onClose = () => {
    setChatOpen(false);
  };

  return (
    <div className="min-w-[350px] min-h-[400px] h-[500px] flex flex-col py-5 text-white rounded-xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center border-white/20 border-b pb-4 px-5">
        <div className="bg-white w-8 h-8 flex justify-center items-center rounded-full mr-2">
          <User size={22} color="black" fontWeight={300} />
        </div>
        <p className="text-sm font-bold">Ali From Support Team</p>
        <X className="ml-auto" onClick={onClose} size={17} />
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
          className="border-[#676767] border-[1.5px] outline-0 py-2 px-3 rounded-full w-full mr-2 bg-transparent text-white"
        />
        <button
          onClick={onSendClick}
          className="bg-[#6274F7] h-[40px] aspect-square flex items-center justify-center rounded-full cursor-pointer"
        >
          <Send size={16} />
        </button>
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
