import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/drivers"> Fahrer</Link> |
      <Link to="/teams"> Teams</Link> |
      <Link to="/races"> Rennen</Link> |
      <Link to="/dashboard"> Dashboard</Link> |
      <Link to="/login"> Login</Link>
    </nav>
  );
}

export default Navbar;