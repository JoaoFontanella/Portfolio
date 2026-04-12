import React from "react";
import AnimatedText from "./AnimatedText";

export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-header section-header--${align}`}>
      {eyebrow && <span className="section-kicker">{eyebrow}</span>}
      <h2>
        <AnimatedText text={title} />
      </h2>
      {description && (
        <p>
          <AnimatedText text={description} />
        </p>
      )}
    </div>
  );
}