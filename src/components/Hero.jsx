import React from "react";
import "../styles/Hero.css";
import AnimatedText from "./AnimatedText";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <Reveal className="hero-text">
          <span className="eyebrow">Portfólio / front-end</span>
          <h1 id="h1-hero">
            <AnimatedText text="João Fontanella" />
          </h1>
          <h2 id="h2-hero">
            <AnimatedText text="Desenvolvedor focado em aplicações web" />
          </h2>
          <p id="p-hero">
            <AnimatedText text="Utilizando React como principal framework tenho experiência acadêmica criando sistemas com integração de APIs e bancos de dados relacionais como PostgreSQL e MySQL." />
          </p>
          <div className="hero-buttons">
            <Link to="/#projects" className="btn-primary">
              Ver projetos
            </Link>
            <Link to="/experiencia" className="btn-secondary">
              Experiência
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}