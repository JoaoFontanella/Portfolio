import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Sobre from "../components/Sobre";
import Skills from "../components/Skills";
import Projetos from "../components/Projetos";
import Contato from "../components/Contato";
import "../styles/Home.css";

export default function Home() {
  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = "hero";
    }
  }, []);

  return (
    <div className="app dark-theme">
      <Hero />
      <Sobre />
      <Skills />
      <Projetos />
      <Contato />
    </div>
  );
}