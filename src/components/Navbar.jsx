import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        INDIAN<span>BIKES</span>
      </Link>

      <div className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Categories
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Contact
        </NavLink>
        <button
          type="button"
          id="accessibilityWidget"
          aria-label="Open accessibility options"
        >
          Accessibility
        </button>
        <button type="button" id="read" aria-label="Turn reading mode off">
          {/* Braoza: Reading Mode -> Off */}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
