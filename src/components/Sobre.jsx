import React from "react";
import "../styles/Sobre.css"
import AnimatedText from "./AnimatedText";

export default function Sobre() {
  return (
    <section id="about">
      <h2>
        <AnimatedText text="Sobre mim" />
      </h2>
      <p>
        <AnimatedText text="Sou estudante de Engenharia de Software na UNISATC e desenvolvedor em início de carreira. Tenho experiência com JavaScript, React, Node.js, HTML e CSS, além de trabalhar com APIs REST e integração com bancos de dados como PostgreSQL e MySQL." />
      </p>

      <p>
        <AnimatedText text="Ao longo dos meus projetos acadêmicos e pessoais, venho desenvolvendo aplicações completas com foco em boas práticas de código, interfaces responsivas e organização de arquitetura. Também possuo experiência com ferramentas como Git, GitHub, Docker e plataformas de deploy como Vercel, Railway e Render." />
      </p>

      <p>
        <AnimatedText text="Atualmente busco minha primeira oportunidade profissional como desenvolvedor, onde eu possa evoluir tecnicamente, contribuir em projetos reais e crescer em um ambiente colaborativo." />
      </p>
    </section>
  );
}