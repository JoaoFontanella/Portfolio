import React from "react";
import { useEffect } from "react";
import "../styles/Experiencia.css";

export default function Experiencia() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="experiencia">
      <div className="container">

        <h1 className="page-title">Experiência & Conhecimentos</h1>
        <div className="exp-block">
          <h2>🎓 Formação</h2>
          <div className="exp-card">
            <h3>Tecnico em Informatica</h3>
            <p>
              Desenvolvimento Full Stack, APIs REST, Banco de Dados,
              Arquitetura de Sistemas e Engenharia de Dados.
            </p>
          </div>
          <div className="exp-card">
            <h3>Engenharia de Software</h3>
            <p>
              Desenvolvimento Full Stack, APIs REST, Banco de Dados,
              Arquitetura de Sistemas e Engenharia de Dados.
            </p>
          </div>
        </div>

        {/* Experiência */}
        <div className="exp-block">
          <h2>💼 Experiência</h2>

          <div className="exp-card">
            <h3>Projetos Full Stack</h3>
            <p>
              Desenvolvimento de aplicações com React, Node.js,
              PostgreSQL, autenticação JWT, integração com APIs externas
              e deploy em ambientes cloud.
            </p>
          </div>

          <div className="exp-card">
            <h3>Back-end & APIs</h3>
            <p>
              Criação de APIs REST seguras, integração com bancos relacionais,
              controle de autenticação e estruturação de arquitetura escalável.
            </p>
          </div>
        </div>

        {/* Conhecimentos Técnicos */}
        <div className="exp-block">
          <h2>🧠 Conhecimentos Técnicos</h2>

          <div className="exp-grid">
            <div className="mini-card">Arquitetura MVC</div>
            <div className="mini-card">JWT Authentication</div>
            <div className="mini-card">REST APIs</div>
            <div className="mini-card">Banco de Dados Relacional</div>
            <div className="mini-card">Docker & Containers</div>
            <div className="mini-card">Deploy Cloud</div>
            <div className="mini-card">Git & Versionamento</div>
            <div className="mini-card">Engenharia de Dados</div>
          </div>
        </div>

      </div>
    </section>
  );
}