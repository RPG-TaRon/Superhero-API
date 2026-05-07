import { Link } from "react-router-dom";
// Navbar provides site-wide navigation and theme toggling.
function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className="navbar">
      <h2 className="logo">Multiverse Archive</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/battle">Battle Arena</Link>
        <Link to="/favorites">Favorites</Link>

        <button className="theme-toggle-btn" onClick={onToggleTheme}>
          {theme === "hero" ? "Hero Mode" : "Villain Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;