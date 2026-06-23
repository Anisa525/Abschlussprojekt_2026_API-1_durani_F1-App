import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">🏎️ F1 App</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Drivers">Fahrer</Link>
        <Link to="/Teams">Teams</Link>
        <Link to="/Races">Rennen</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Statistiken">Statistiken</Link>
        <Link to="/Chart">Charts</Link>
        <Link to="Circuit">Circuit</Link>
      </div>
    </nav>
  );
}

export default Navbar;