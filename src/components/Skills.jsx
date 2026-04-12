import React from "react";
import "../styles/Skills.css";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const skills = [
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg",
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg",
  },
  {
    name: "HTML",
    icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg",
  },
  {
    name: "CSS",
    icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CSS.svg",
  },
  {
    name: "NodeJS",
    icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NodeJS-Dark.svg",
  },
  {
    name: "Python",
    icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Python-Dark.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/PostgreSQL-Dark.svg",
  },
  {
    name: "MySQL",
    icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MySQL-Dark.svg",
  },
  {
    name: "Docker",
    icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Docker.svg",
  },
  {
    name: "Git",
    icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg",
  },
  {
    name: "Github",
    icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Github-Dark.svg",
  },
  {
    name: "Figma",
    icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Figma-Dark.svg",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Stack"
          title="Tecnologias"
        />
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <Reveal key={index} className="skill-card" delay={index * 0.03}>
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}