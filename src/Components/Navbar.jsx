import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Education", "#education"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Coding Profiles", "#coding-profiles"],
  ["Achievements", "#achievements"],
  ["Contact", "#contact"],
];

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>

        <button
          className="navbar-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

      </div>
    </nav>
  );
}

export default Navbar;