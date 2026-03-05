import React from "react";
import "../styles/Projetos.css";

const projects = [
  {
    name: "D'Oliva E-commerce",
    desc: "Plataforma de e-commerce desenvolvida em equipe para venda de cosméticos, com autenticação de usuários, catálogo de produtos e chatbot com IA.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/joshuaffaraco/d-oliva-e-commerce",
    deploy: null,
    team: true,
  },
  {
    name: "Projeto Banco de Dados II",
    desc: "Projeto acadêmico de modelagem e consultas SQL em banco de dados relacional, com um pequeno CRUD em Python para realização de operações básicas.",
    github: "https://github.com/JoaoFontanella/ABP_Banco_de_dados_II",
    deploy: null,
    team: false,
  },
  {
    name: "Portfólio",
    desc: "Aplicação web desenvolvida em React para apresentação profissional de projetos, habilidades e contatos. Atualmente um dos unicos projetos com deploy, hospedado no Vercel.",
    github: "NULL",
    deploy: "NULL",
    team: false,
  }
];

export default function Projetos() {
  return (
    <section id="projects">
      <h2>Projetos</h2>

      <div className="projects-list">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.name}</h3>
            {p.team && <span className="team-tag">Trabalho em equipe</span>}
            <p>{p.desc}</p>

            <div className="project-buttons">
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                <button className="btn-code">Código</button>
              </a>
              {p.deploy && (
                <a href={p.deploy} target="_blank" rel="noopener noreferrer">
                  <button className="btn-deploy">Deploy</button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}