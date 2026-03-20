import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <Link to="/analyze">Go to Code Analyzer</Link>
    </div>
  );
}
