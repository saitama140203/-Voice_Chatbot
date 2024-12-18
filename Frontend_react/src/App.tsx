import React from 'react';
import Navbar from './components/Navbar';
import ChatBox from './components/ChatBox';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <ChatBox />
    </div>
  );
};

export default App;
