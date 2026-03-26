import { useState, useEffect } from "react";
import { Brain, Zap, History } from "lucide-react";
import { useNavigate } from "react-router-dom";
const texts = [
  "analyzes your code instantly...",
  "detects bugs intelligently...",
  "helps you write better logic...",
];

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let i = 0;

    const typingInterval = setInterval(() => {
      setDisplayText(texts[textIndex].slice(0, i));
      i++;

      if (i > texts[textIndex].length) {
        clearInterval(typingInterval);

        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [textIndex]);

  return (
    <div className="bg-black text-white relative z-10">
      {/* ================= HERO ================= */}
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Glow */}
        <div className="absolute w-[600px] h-[600px] bg-blue-600 opacity-20 blur-[150px] rounded-full top-[-100px] left-1/2 -translate-x-1/2 pointer-events: none"></div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          AI-Powered Code Analyzer
        </h1>

        {/* Typing Effect */}
        <p className="mt-4 text-lg text-blue-400 font-mono">
          AI {displayText}
          <span className="animate-pulse">|</span>
        </p>

        <p className="mt-6 text-gray-400 max-w-2xl">
          Detect bugs, improve code quality, and get intelligent insights
          instantly.
        </p>

        <div className="mt-10 flex gap-4 relative z-10">
          <button
            onClick={() => navigate("/register")}
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
          >
            🚀 Get Started
          </button>

          <button
            onClick={() => navigate("/login")}
            className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            🔐 Login
          </button>
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Features</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* CARD 1 */}
          <div className="relative group">
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-60 transition"></div>

            {/* Glass Card */}
            <div className="relative bg-gray-900/60 backdrop-blur-lg p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition transform hover:-translate-y-2 hover:shadow-xl">
              <Brain className="text-blue-400 mb-4" size={40} />

              <h3 className="text-xl font-semibold mb-2">AI Code Analysis</h3>

              <p className="text-gray-400 text-sm">
                Analyze your code and detect bugs instantly with AI.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-60 transition"></div>

            <div className="relative bg-gray-900/60 backdrop-blur-lg p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition transform hover:-translate-y-2 hover:shadow-xl">
              <Zap className="text-yellow-400 mb-4" size={40} />

              <h3 className="text-xl font-semibold mb-2">
                Instant Suggestions
              </h3>

              <p className="text-gray-400 text-sm">
                Get smart recommendations to improve your code quality.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-60 transition"></div>

            <div className="relative bg-gray-900/60 backdrop-blur-lg p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition transform hover:-translate-y-2 hover:shadow-xl">
              <History className="text-green-400 mb-4" size={40} />

              <h3 className="text-xl font-semibold mb-2">History Tracking</h3>

              <p className="text-gray-400 text-sm">
                Access your previous analyses anytime with stored history.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
