import React, { useState } from "react";
import ChatBubble from "./ChatBubble.tsx";
import ChatInput from "./ChatInput.tsx";
import userAvatar from "../assets/user avater.jpg";
import serviceProviderAvatar from "../assets/services user avater.jpg"
interface Message {
  id: number;
  sender: "user" | "service-provider";
  content: string;
  timestamp: string;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "service-provider",
      content: "Hello! How can I assist you today?",
      timestamp: "10:00 AM",
    },
  ]);
  const [typing, setTyping] = useState(false);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Simulate service provider response
    setTyping(true);
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          sender: "service-provider",
          content: "Thank you for your message. Let me check that for you!",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setTyping(false);
    }, 2000);
  };

  return (
    <div className="h-screen relative chatPage flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-4 px-6 flex items-center justify-between shadow-md">
        <h1 className="text-xl font-bold">Chat with Us</h1>
        <span className="text-sm opacity-80">Travel Assistant</span>
      </div>

      {/* Chat Area */}
      <div className="flex-grow overflow-y-auto px-4 py-6">
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            content={message.content}
            sender={message.sender}
            timestamp={message.timestamp}
            avatar={message.sender === "user" ? userAvatar : serviceProviderAvatar}
          />
        ))}

        {typing && (
          <div className="flex items-center space-x-3 px-4 py-2">
            <img
              src={serviceProviderAvatar}
              alt="Service Provider Typing"
              className="w-10 h-10 rounded-full"
            />
            <div className="bg-gray-300 text-gray-700 px-4 py-2 rounded-xl">
              Typing...
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatPage;
