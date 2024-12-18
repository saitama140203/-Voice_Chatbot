import React from 'react';
import { FaMicrophone } from 'react-icons/fa';

interface MicrophoneButtonProps {
  onClick: () => void;
}

const MicrophoneButton: React.FC<MicrophoneButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-white p-4 rounded-full shadow-glow hover:scale-110 transition"
    >
      <FaMicrophone size={24} />
    </button>
  );
};

export default MicrophoneButton;
