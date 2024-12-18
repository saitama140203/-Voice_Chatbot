import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary text-white p-4 shadow-md flex items-center justify-between">
      <div className="flex items-center gap-2">
        <AiOutlineMessage size={24} />
        <h1 className="text-xl font-bold">Voice Chat App</h1>
      </div>
      <button className="bg-secondary px-4 py-2 rounded-lg text-white shadow hover:bg-green-600 transition">
        Profile
      </button>
    </nav>
  );
};

export default Navbar;
