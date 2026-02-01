import { useState } from "react";
import logo from "./assets/logo.webp";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="Header">
      <div className="w">
        <img className="logo" src={logo} alt="logo" />
      </div>

      {/* Burger Icon */}
      <div
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <nav className={`nav-item ${menuOpen ? "show" : ""}`}>
        <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutme">About Me</a></li>
          <li><a href="#feature">Features</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        <li>
  <a
    href="https://wa.me/96178979310"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="Contactme">Contact Me</button>
  </a>
</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
