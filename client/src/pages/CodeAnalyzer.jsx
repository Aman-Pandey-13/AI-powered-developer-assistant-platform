import { useState } from "react";
import API from "../services/api";
import History from "../components/History";

export default function CodeAnalyzer() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    try {
      const res = await API.post("/api/analyze-code", { code });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Error analyzing code");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>AI Code Analyzer</h2>

      <textarea
        rows="10"
        cols="60"
        placeholder="Paste your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleAnalyze}>Analyze Code</button>

      <br />
      <br />

      {result && (
        <div>
          <h3>Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}

      {/* ✅ History component */}
      <History />
    </div>
  );
}
