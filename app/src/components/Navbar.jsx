import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">🏎️ F1 App</h1>

      <button
        className="burger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/Drivers" onClick={() => setMenuOpen(false)}>Fahrer</Link>
        <Link to="/Teams" onClick={() => setMenuOpen(false)}>Teams</Link>
        <Link to="/Races" onClick={() => setMenuOpen(false)}>Rennen</Link>
        <Link to="/Dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
        <Link to="/Statistiken" onClick={() => setMenuOpen(false)}>Statistiken</Link>
        <Link to="/Chart" onClick={() => setMenuOpen(false)}>Charts</Link>
        <Link to="/About_me" onClick={() => setMenuOpen(false)}>About Me</Link>
      </div>
    </nav>
  );
}

export default Navbar;