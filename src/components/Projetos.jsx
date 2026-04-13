import React from "react";
import "../styles/Projetos.css";
import AnimatedText from "./AnimatedText";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { GitHubIcon, VercelIcon, ReactIcon, NodeIcon, PostgreSQLIcon, PythonIcon, PHPIcon, FigmaIcon, GitIcon } from "./icons";
import { getLocaleContent } from "../content/portfolioContent";
import { useLocale } from "../contexts/LocaleContext";

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
  const { locale } = useLocale();
  const content = getLocaleContent(locale).projects;

  return (
    <section id="projects" className="projects-section">
      <div className="section-shell">
        <SectionHeader eyebrow={content.eyebrow} title={content.title} />

        <div className="projects-list">
          {content.items.map((p, i) => (
            <Reveal key={i} className="project-card" delay={i * 0.05}>
              <div className="project-card__top">
                <h3>
                  <AnimatedText text={p.name} />
                </h3>
                <div className="project-badges">
                  <span className={`project-badge ${p.repoPrivate ? "project-badge--private" : "project-badge--public"}`}>
                    {p.repoPrivate ? content.privateRepo : content.publicRepo}
                  </span>
                  <span className={`project-badge ${p.team ? "project-badge--team" : "project-badge--solo"}`}>
                    {p.team ? content.team : content.solo}
                  </span>
                </div>
              </div>

              <p>
                <AnimatedText text={p.desc} />
              </p>

              <div className="tech-icons">
                {p.tech && p.tech.map((t) => renderTechIcon(t))}
              </div>

              {(!p.repoPrivate || p.deploy) && (
                <div className="project-buttons">
                  {!p.repoPrivate && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-code">
                      <GitHubIcon />
                      {content.code}
                    </a>
                  )}
                  {p.deploy && (
                    <a href={p.deploy} target="_blank" rel="noopener noreferrer" className="btn-deploy">
                      <VercelIcon />
                      {content.deploy}
                    </a>
                  )}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}