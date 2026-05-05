import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Multiverse Archive</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/battle">Battle Arena</Link>
        <a href="#">Favorites</a>
      </div>
    </nav>
  );
}

export default Navbar;