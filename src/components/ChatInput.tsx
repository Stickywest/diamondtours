import React, { useState } from "react";

interface ChatInputProps {
  onSendMessage: (content: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center px-4 py-3 bg-white border-t shadow-sm"
    >
      <input
        type="text"
        className="flex-grow border rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="ml-3 bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
