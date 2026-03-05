import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/#hero" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/#about" onClick={() => setMenuOpen(false)}>Sobre</Link>
        <Link to="/#skills" onClick={() => setMenuOpen(false)}>Skills</Link>
        <Link to="/#projects" onClick={() => setMenuOpen(false)}>Projetos</Link>
        <Link to="/#contact" onClick={() => setMenuOpen(false)}>Contato</Link>
      </div>
    </nav>
  );
}