import React from "react";
import Hero from "../components/Hero";
import Sobre from "../components/Sobre";
import Skills from "../components/Skills";
import Projetos from "../components/Projetos";
import Contato from "../components/Contato";

export default function Home() {
  return (
    <div className="page page-home">
      <Hero />
      <Sobre />
      <Skills />
      <Projetos />
      <Contato />
    </div>
  );
}