import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Reveal className="site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__kicker">João Fontanella</span>
          <p>
            Desenvolvedor front-end com foco em interfaces elegantes, experiências responsivas e projetos com boa
            arquitetura visual.
          </p>
        </div>

        <div className="site-footer__links">
          <span>Mapa</span>
          <Link to="/#hero">Início</Link>
          <Link to="/#about">Sobre</Link>
          <Link to="/#projects">Projetos</Link>
          <Link to="/experiencia">Experiência</Link>
        </div>

        <div className="site-footer__social">
          <span>Contato</span>
          <a href="mailto:joaofontanella31@gmail.com">
            <FaEnvelope />
            E-mail
          </a>
          <a href="https://github.com/JoaoFontanella" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-victor-macan-fontanella"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </Reveal>

      <div className="site-footer__bottom">
        <span>© 2026 João Fontanella. Todos os direitos reservados.</span>
        <span>Feito com React, Vite e framer-motion.</span>
      </div>
    </footer>
  );
}