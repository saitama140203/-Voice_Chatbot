import React, { useState } from 'react';
import Message from './Message';
import MicrophoneButton from './MicrophoneButton';

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState([
    { text: 'Welcome to Voice Chat App!', isUser: false },
    { text: 'Thank you!', isUser: true },
  ]);

  const handleStartTalking = () => {
    setMessages((prev) => [
      ...prev,
      { text: 'Listening...', isUser: true },
    ]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-128px)] overflow-hidden bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} isUser={message.isUser} />
        ))}
      </div>
      <div className="p-4 bg-white shadow-md flex justify-center items-center gap-4">
        <MicrophoneButton onClick={handleStartTalking} />
        <button
          onClick={() => alert('Start typing functionality coming soon!')}
          className="bg-accent px-4 py-2 rounded-lg text-white shadow hover:bg-orange-500 transition"
        >
          Start Typing
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
