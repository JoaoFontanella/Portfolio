import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <nav className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}>
      <div className="site-nav__inner">
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label="Abrir menu de navegação"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/#hero">Início</Link>
          <Link to="/#about">Sobre</Link>
          <Link to="/#skills">Skills</Link>
          <Link to="/#projects">Projetos</Link>
          <Link to="/#contact">Contato</Link>
          <Link to="/experiencia">Experiência</Link>
        </div>
      </div>
    </nav>
  );
}