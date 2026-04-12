import React from "react";
import "../styles/Contato.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Contato() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contato"
          title="Entre em contato"
        />

        <Reveal className="contact-grid">
          <div className="contact-actions">
            <a href="mailto:joaofontanella31@gmail.com" className="social-btn social-btn--email">
              <FaEnvelope />
              <span>joaofontanella31@gmail.com</span>
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