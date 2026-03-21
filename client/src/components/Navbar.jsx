import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">🚀 DevInsight AI</h1>

      <div className="space-x-4">
        <Link to="/analyze" className="hover:text-blue-400">
          Analyze
        </Link>
        <Link to="/history" className="hover:text-blue-400">
          History
        </Link>
      </div>
    </div>
  );
}
