import React from "react";
import "../styles/Hero.css";
import AnimatedText from "./AnimatedText";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 id="h1-hero">
            <AnimatedText text="João Fontanella" />
          </h1>
          <h2 id="h2-hero">
            <AnimatedText text="Desenvolvedor" />
          </h2>
          <p id="p-hero">
            <AnimatedText text="Desenvolvedor focado em aplicações web utilizando React como principal framework. 
            Tenho experiência acadêmica criando sistemas com integração de APIs e bancos de dados relacionais como PostgreSQL e MySQL." />
          </p>
          <div className="hero-buttons">
            <Link to="/#projects">
              <button className="btn-primary">Ver Projetos</button>
            </Link>
            <Link to="/experiencia">
              <button className="btn-secondary">Experiência</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}