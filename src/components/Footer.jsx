import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { getLocaleContent } from "../content/portfolioContent";
import { useLocale } from "../contexts/LocaleContext";

export default function Footer() {
  const { locale } = useLocale();
  const content = getLocaleContent(locale).footer;

  return (
    <footer className="site-footer">
      <Reveal className="site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__kicker">João Fontanella</span>
          <p>
            {content.brandDescription}
          </p>
        </div>

        <div className="site-footer__links">
          <span>{content.mapLabel}</span>
          <Link to="/#hero">{locale === "pt-BR" ? "Início" : "Home"}</Link>
          <Link to="/#about">{locale === "pt-BR" ? "Sobre" : "About"}</Link>
          <Link to="/#projects">{locale === "pt-BR" ? "Projetos" : "Projects"}</Link>
          <Link to="/experiencia">{locale === "pt-BR" ? "Experiência" : "Experience"}</Link>
        </div>

        <div className="site-footer__social">
          <span>{content.contactLabel}</span>
          <a href="mailto:joaofontanella31@gmail.com">
            <FaEnvelope />
            {content.emailLabel}
          </a>
          <a href="https://wa.me/5548998068177" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
            WhatsApp
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
        <span>{content.bottomRights}</span>
        <span>{content.bottomStack}</span>
      </div>
    </footer>
  );
}