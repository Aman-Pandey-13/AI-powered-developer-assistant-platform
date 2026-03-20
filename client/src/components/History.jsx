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
    <div style={{ marginTop: "30px" }}>
      <h3>Analysis History</h3>

      {history.length === 0 && <p>No history yet</p>}

      {history.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h4>Code:</h4>
          <pre>{item.code}</pre>

          <h4>Result:</h4>
          <pre>{item.result}</pre>
        </div>
      ))}
    </div>
  );
}
