import React from "react";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="hero">

      <div className="hero-container">

        <div className="hero-text">

          <h1 id="h1-hero">João Victor Macan Fontanella</h1>

          <h2>Desenvolvedor</h2>

          <p>
            Desenvolvedor focado em aplicações web utilizando React e Node.js.
            Tenho experiência acadêmica criando sistemas com integração de APIs 
            e bancos de dados relacionais como PostgreSQL e MySQL.
          </p>

          <div className="hero-buttons">
            <a href="#projects">
              <button className="btn-primary">Ver Projetos</button>
            </a>

            <a href="#contact">
              <button className="btn-secondary">Contato</button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}