import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>DevInsight AI</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Home;
