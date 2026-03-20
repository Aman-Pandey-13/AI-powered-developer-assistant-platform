import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import CodeAnalyzer from "./pages/CodeAnalyzer";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<h1>Welcome to DevInsight AI</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/analyze"
          element={
            <PrivateRoute>
              <CodeAnalyzer />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
