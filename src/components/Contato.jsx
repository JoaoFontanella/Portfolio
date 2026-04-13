import React from "react";
import "../styles/Contato.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { getLocaleContent } from "../content/portfolioContent";
import { useLocale } from "../contexts/LocaleContext";

export default function Contato() {
  const { locale } = useLocale();
  const content = getLocaleContent(locale).contact;

  return (
    <section id="contact" className="contact-section">
      <div className="section-shell">
        <SectionHeader eyebrow={content.eyebrow} title={content.title} />

        <Reveal className="contact-grid">
          <div className="contact-actions">
            <a href={`mailto:${content.email}`} className="social-btn social-btn--email">
              <FaEnvelope />
              <span>Email</span>
            </a>

            <a
              href={content.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn social-btn--whatsapp"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://github.com/JoaoFontanella"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-victor-macan-fontanella"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}