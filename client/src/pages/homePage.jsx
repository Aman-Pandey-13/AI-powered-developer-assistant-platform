
import { useState, useEffect } from "react";

const texts = [
  "analyzes your code instantly...",
  "detects bugs intelligently...",
  "helps you write better logic...",
];

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;

    const typingInterval = setInterval(() => {
      setDisplayText(texts[textIndex].slice(0, i));
      i++;

      if (i > texts[textIndex].length) {
        clearInterval(typingInterval);

        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 4500);
      }
    }, 60);

    return () => clearInterval(typingInterval);
  }, [textIndex]);
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* 🔥 Background Gradient Glow */}
      <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-600 opacity-20 blur-[150px] rounded-full"></div>

      {/* 🔥 Content */}
      <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        AI-Powered Code Analyzer
      </h1>

      <p className="mt-4 text-lg text-blue-400 font-mono">
        AI {displayText}
        <span className="animate-pulse">|</span>
      </p>

      {/* 🚀 Buttons */}
      <div className="mt-10 flex gap-4">
        <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">
          🚀 Get Started
        </button>

        <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          🔐 Login
        </button>
      </div>
    </div>
  );
}
