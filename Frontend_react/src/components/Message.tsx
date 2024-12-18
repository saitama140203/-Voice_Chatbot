import React from 'react';

interface MessageProps {
  text: string;
  isUser: boolean;
}

const Message: React.FC<MessageProps> = ({ text, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-xs px-4 py-2 rounded-xl shadow ${
          isUser
            ? 'bg-primary text-white animate-pulse'
            : 'bg-gray-300 text-black'
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;
