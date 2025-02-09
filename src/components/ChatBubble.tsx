import React from "react";

interface ChatBubbleProps {
  content: string;
  sender: "user" | "service-provider";
  timestamp: string;
  avatar: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ content, sender, timestamp, avatar }) => {
  const isUser = sender === "user";

  return (
    <div
      className={`flex items-start ${
        isUser ? "justify-end" : "justify-start"
      } mb-4`}
    >
      {!isUser && <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full mr-3" />}
      <div
        className={`max-w-sm px-4 py-2 rounded-lg shadow-md ${
          isUser ? "bg-primary text-white self-end" : "bg-gray-200 text-gray-800"
        }`}
      >
        <p className="text-sm">{content}</p>
        <span className="text-xs text-gray-500 block mt-1">{timestamp}</span>
      </div>
      {isUser && <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full ml-3" />}
    </div>
  );
};

export default ChatBubble;
