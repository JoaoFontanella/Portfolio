import React from "react";
import "../styles/Hero.css";
import AnimatedText from "./AnimatedText";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { getLocaleContent } from "../content/portfolioContent";
import { useLocale } from "../contexts/LocaleContext";

export default function Hero() {
  const { locale } = useLocale();
  const content = getLocaleContent(locale).hero;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <Reveal className="hero-text">
          <span className="eyebrow">{content.eyebrow}</span>
          <h1 id="h1-hero">
            <AnimatedText text={content.title} />
          </h1>
          <h2 id="h2-hero">
            <AnimatedText text={content.subtitle} />
          </h2>
          <p id="p-hero">
            <AnimatedText text={content.description} />
          </p>
          <div className="hero-buttons">
            <Link to="/#projects" className="btn-primary">
              {content.primaryAction}
            </Link>
            <Link to="/experiencia" className="btn-secondary">
              {content.secondaryAction}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}