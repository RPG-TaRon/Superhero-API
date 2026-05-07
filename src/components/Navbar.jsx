import { Link } from "react-router-dom";


// Navbarshows links to Home, Battle Arena, and Favorites pages.
function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Multiverse Archive</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/battle">Battle Arena</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}

export default Navbar;