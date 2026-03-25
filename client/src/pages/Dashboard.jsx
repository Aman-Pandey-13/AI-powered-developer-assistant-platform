import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  <Navbar />;
  return (
    <div>
      <h1>Welcome to DevInsight AI</h1>

      <Link to="/analyze">Go to Code Analyzer</Link>
    </div>
  );
}
