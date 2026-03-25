import { useState } from "react";
import API from "../services/api";
import History from "../components/History";
import Navbar from "../components/Navbar";

export default function CodeAnalyzer() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    try {
      setLoading(true);

      const res = await API.post("/api/analyze-code", { code });

      setResult(res.data.result);
    } catch (err) {
      console.error(err);
      alert("Error analyzing code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-3xl font-bold mb-6">🚀 DevInsight AI</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-xl mb-2">Code Editor</h2>

            <textarea
              className="w-full h-64 p-3 rounded bg-gray-800 border border-gray-700"
              placeholder="Paste your code here..."
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />

            <button
              onClick={handleAnalyze}
              className="mt-4 bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              🚀 Analyze Code
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <h2 className="text-xl mb-2">AI Result</h2>

            <div className="bg-gray-800 p-4 rounded h-64 overflow-auto">
              {loading
                ? "Analyzing..."
                : result || "AI output will appear here..."}
            </div>
          </div>
        </div>

        {/* HISTORY */}
        <div className="mt-10">
          <History />
        </div>
      </div>
    </>
  );
}
