import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import Chatbot from './components/chatbot'; // Import the chatbot
import './index.scss';

function App() {
  const [mode, setMode] = useState<string>('dark');

  // Check the saved theme in localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      setMode(savedMode);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // Update theme and save to localStorage
  const handleModeChange = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  };

  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />

      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        <Timeline />
        <Project />
        <Contact />
      </FadeIn>

      <Footer />

      {/* Add the Chatbot here so it floats on all pages */}
      <Chatbot />
    </div>
  );
}

export default App;
