import React from "react";
import "../styles/Projetos.css";
import AnimatedText from "./AnimatedText";
import { GitHubIcon, VercelIcon, ReactIcon, NodeIcon, PostgreSQLIcon, PythonIcon, PHPIcon, FigmaIcon, GitIcon } from "./icons";

const projects = [
  {
    name: "D'Oliva E-commerce",
    desc: "Plataforma de e-commerce desenvolvida em equipe para venda de cosméticos, com autenticação de usuários, catálogo de produtos e chatbot com IA.",
    tech: ["React", "PHP", "PostgreSQL", "Figma", "Git"],
    github: "#projects",
    deploy: null,
    team: true,
    repo_priv: true,
  },
  {
    name: "Plataforma de Assinaturas",
    desc: "Aplicação web com sistema de assinaturas mensal e anual para liberação de conteúdo exclusivo. Desenvolvido com integração de API do Mercado Pago para processamento de pagamentos",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: null,
    deploy: null,
    team: false,
    repo_priv: true,
  },
  {
    name: "Projeto Banco de Dados II",
    desc: "Projeto acadêmico de modelagem e consultas SQL em banco de dados relacional, com um pequeno CRUD em Python para realização de operações básicas.",
    tech: ["Python", "PostgreSQL", "Git"],
    github: "https://github.com/JoaoFontanella/ABP_Banco_de_dados_II",
    deploy: null,
    team: false,
    repo_priv: false,
  },
  {
    name: "Portfólio",
    desc: "Aplicação web desenvolvida em React para apresentação profissional de projetos, habilidades e contatos. Atualmente um dos unicos projetos com deploy, hospedado no Vercel.",
    tech: ["React", "Vercel", "Git"],
    github: "https://github.com/JoaoFontanella/Portfolio",
    deploy: "https://fontanella-portfolio.vercel.app",
    team: false,
    repo_priv: false,
  },
  {
    name: "ContaComigo",
    desc: "Aplicação mobile desenvolvida em equipe com foco em organização financeira pessoal, permitindo o controle de contas, despesas e gestão de informações do usuário de forma prática e intuitiva.",
    tech: ["React", "Git"],
    github: "https://github.com/weslainesantana/ContaComigo",
    deploy: null,
    team: true,
    repo_priv: false,
  }
];

function renderTechIcon(techName) {
  switch (techName) {
    case "React":
      return <ReactIcon key={techName} />;
    case "Node.js":
      return <NodeIcon key={techName} />;
    case "PostgreSQL":
      return <PostgreSQLIcon key={techName} />;
    case "Python":
      return <PythonIcon key={techName} />;
    case "PHP":
      return <PHPIcon key={techName} />;
    case "Figma":
      return <FigmaIcon key={techName} />;
    case "Git":
      return <GitIcon key={techName} />;
    case "Vercel":
      return <VercelIcon key={techName} />;
    default:
      return null;
  }
}

export default function Projetos() {
  return (
    <section id="projects">
      <h2>
        <AnimatedText text="Projetos" />
      </h2>

      <div className="projects-list">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>
              <AnimatedText text={p.name} />
            </h3>
            {p.team && <span className="team-tag">Projeto em equipe</span>}
            {!p.team && <span className="solo-tag">Projeto individual</span>}
            {p.repo_priv && <span className="private-repo-tag">Repositório privado</span>}
            {!p.repo_priv && <span className="public-repo-tag">Repositório público</span>}
            <p>
              <AnimatedText text={p.desc} />
            </p>

            <div className="tech-icons">
              {p.tech && p.tech.map((t) => renderTechIcon(t))}
            </div>

            {(!p.repo_priv || p.deploy) && (
              <div className="project-buttons">
                {!p.repo_priv && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <button className="btn-code">
                      <GitHubIcon />
                      Código
                    </button>
                  </a>
                )}
                {p.deploy && (
                  <a href={p.deploy} target="_blank" rel="noopener noreferrer">
                    <button className="btn-deploy">
                      <VercelIcon />
                      Deploy
                    </button>
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}