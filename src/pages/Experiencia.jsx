import React, { useEffect } from "react";
import "../styles/Experiencia.css";
import AnimatedText from "../components/AnimatedText";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { getLocaleContent } from "../content/portfolioContent";
import { useLocale } from "../contexts/LocaleContext";

export default function Experiencia() {
  const { locale } = useLocale();
  const content = getLocaleContent(locale).experience;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="experiencia">
      <div className="container">
        <SectionHeader eyebrow={content.eyebrow} title={content.title} description={content.description} />

        <div className="exp-block">
          <h2>
            <AnimatedText text={content.educationTitle} />
          </h2>

          {content.educationItems.map((item, index) => (
            <Reveal className="exp-card" key={item.title} delay={index * 0.05}>
              <h3>
                <AnimatedText text={item.title} />
              </h3>
              <p>
                <AnimatedText text={item.description} />
              </p>
            </Reveal>
          ))}

        </div>

        <div className="exp-block">
          <h2>
            <AnimatedText text={content.workTitle} />
          </h2>

          {content.workItems.map((item) => (
            <Reveal className="exp-card" key={item.title}>
              <h3>
                <AnimatedText text={item.title} />
              </h3>
              <p>
                <AnimatedText text={item.description} />
              </p>
            </Reveal>
          ))}
        </div>

        <div className="exp-block">
          <h2>
            <AnimatedText text={content.certificatesTitle} />
          </h2>

          <div className="certificados-grid">
            {content.certificates.map((cert, index) => (
              <Reveal className="exp-card certificado-card" key={index} delay={index * 0.05}>
                <h3>
                  <AnimatedText text={cert.title} />
                </h3>
                <p>
                  <AnimatedText text={`${cert.institution} • ${cert.year} ${locale === "pt-BR" ? "Carga horária" : "Hours"}: ${cert.hours}`} />
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificado-link"
                >
                  {content.certificateLink}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}