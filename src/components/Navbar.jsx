import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
];

// overlay is a prop. Home passes overlay so the links sit clear of the portrait.
export default function Navbar({ overlay = false }) {
  const navClass = overlay ? "navbar navbar-overlay" : "navbar";

  return (
    <nav className={navClass}>
      <NavLink to="/" className="navbar-logo" aria-label="Home" end>
        <Logo />
      </NavLink>

      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link is-active" : "nav-link"
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
