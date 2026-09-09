import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        INDIAN<span>BIKES</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/contact">Contact</Link>
        <button
          type="button"
          id="accessibilityWidget"
          aria-label="Open accessibility options"
        >
          Accessibility
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
