import { useEffect, useState } from "react";
import API from "../services/api";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await API.get("/api/history");
      setHistory(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      
      className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition"
    >
      <h2 className="text-2xl mb-4">📜 Analysis History</h2>

      {history.length === 0 && (
        <p className="text-gray-400">
          No analysis yet. Start by analyzing code 🚀
        </p>
      )}

      <div className="space-y-4">
        {history.map((item, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded">
            <p className="text-sm text-gray-400">Code:</p>
            <pre className="text-green-400">{item.code}</pre>

            <p className="text-sm text-gray-400 mt-2">Result:</p>
            <pre>{item.result}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
