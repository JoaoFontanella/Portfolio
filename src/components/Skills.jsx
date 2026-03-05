import React from "react";
import "../styles/Skills.css";

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
    name: "Figma",
    icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Figma-Dark.svg",
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Tecnologias</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}