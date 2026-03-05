import React from "react";
import "../styles/Contato.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contato() {
  return (
    <section id="contact">
      <h2>Entre em contato</h2>

      <div className="email">
        <FaEnvelope />
        <span>joaofontanella31@gmail.com</span>
      </div>

      <div className="socials">
        <a
          href="https://github.com/JoaoFontanella"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-victor-macan-fontanella"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >
          <FaLinkedin />
          LinkedIn
        </a>
      </div>
    </section>
  );
}