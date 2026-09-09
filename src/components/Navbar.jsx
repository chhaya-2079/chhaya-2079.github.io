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
        <button
          type="button"
          id="font-10-percentage"
          aria-label="Increase font size by 10 percent"
        >
          Font +10%
        </button>
        <button type="button" id="read" aria-label="Turn reading mode off">
          {/* Braoza: Reading Mode -> Off */}
        </button>
        <button type="button" id="links" aria-label="Toggle highlighted links">
          {/* Braoza: Highlight Links -> Toggle */}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
