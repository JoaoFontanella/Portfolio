import React, { useEffect } from "react";
import "../styles/Experiencia.css";
import AnimatedText from "../components/AnimatedText";

export default function Experiencia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certificados = [
    {
      titulo: "Desenvolvedor de Software",
      instituicao: "Unisatc",
      horas: "480h",
      ano: "2025",
      link: "https://drive.google.com/file/d/1DnOEjjNnuEuG7cj9yvUa1tQfIlUKepfT/view?usp=sharing"
    },
    {
      titulo: "Analista em Requisitos de Software",
      instituicao: "Unisatc",
      horas: "400h",
      ano: "2025",
      link: "https://drive.google.com/file/d/1s0IwtsY5BD2wc_ZjMcjfslZ8CJq-p0Hd/view?usp=sharing"
    },
  ];

  return (
    <section className="experiencia">
      <div className="container">
        <div className="exp-block">
          <h2>
            <AnimatedText text="🎓 Formação" />
          </h2>

          <div className="exp-card">
            <h3>
              <AnimatedText text="Técnico em Informática integrado ao Ensino Médio" />
            </h3>
            <p>
              <AnimatedText text="Formação técnica concluída no CEDUP em 4 anos, integrada ao ensino médio, com foco em informática, suporte técnico, manutenção de computadores, lógica de programação e fundamentos de desenvolvimento de sistemas." />
            </p>
          </div>

          <div className="exp-card">
            <h3>
              <AnimatedText text="Engenharia de Software" />
            </h3>
            <p>
              <AnimatedText text="Graduação em andamento na UniSATC, atualmente cursando a 6ª fase e no último ano da formação, desenvolvendo conhecimentos em desenvolvimento de software, banco de dados, arquitetura de sistemas, APIs e práticas modernas da engenharia de software." />
            </p>
          </div>

        </div>

        <div className="exp-block">
          <h2>
            <AnimatedText text="💼 Experiência" />
          </h2>

          <div className="exp-card">
            <h3>
              <AnimatedText text="Assistente Técnico" />
            </h3>
            <p>
              <AnimatedText text="Mais de 4 anos de experiência na área de suporte técnico, com atuação em montagem, manutenção e configuração de computadores e notebooks, atendimento remoto e presencial a clientes, diagnóstico e resolução de problemas em sistemas Windows, além de conhecimentos em redes e uso de ferramentas especializadas para análise, reparo e otimização de sistemas." />
            </p>
          </div>
        </div>

        <div className="exp-block">
          <h2>
            <AnimatedText text="📜 Certificados" />
          </h2>

          <div className="certificados-grid">
            {certificados.map((cert, index) => (
              <div className="exp-card certificado-card" key={index}>
                <h3>
                  <AnimatedText text={cert.titulo} />
                </h3>
                <p>
                  <AnimatedText text={`${cert.instituicao} • ${cert.ano} Carga Horaria: ${cert.horas}`} />
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificado-link"
                >
                  Ver certificado
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}