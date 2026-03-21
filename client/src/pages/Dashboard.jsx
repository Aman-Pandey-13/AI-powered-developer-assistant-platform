import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Welcome to DevInsight AI</h1>

      <Link to="/analyze">Go to Code Analyzer</Link>
    </div>
  );
}
