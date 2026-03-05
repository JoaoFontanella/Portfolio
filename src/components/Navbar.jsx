import React from "react";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <div className="nav-links">
        <Link to="/#hero">Home</Link>
        <Link to="/#about">Sobre</Link>
        <Link to="/#skills">Skills</Link>
        <Link to="/#projects">Projetos</Link>
        <Link to="/#contact">Contato</Link>
        {/* <Link to="/experiencia">Experiência</Link> */}
      </div>
    </nav>
  );
}