import React from "react";
import "../styles/Sobre.css";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { getLocaleContent } from "../content/portfolioContent";
import { useLocale } from "../contexts/LocaleContext";

export default function Sobre() {
  const { locale } = useLocale();
  const content = getLocaleContent(locale).about;

  return (
    <section id="about" className="about-section">
      <div className="section-shell">
        <SectionHeader eyebrow={content.eyebrow} title={content.title} />

        <Reveal className="about-card about-card--single">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}