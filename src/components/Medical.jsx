import Section from "./Section.jsx";
import { medicalThemes } from "../data/experience.js";

export default function Medical() {
  return (
    <Section id="medical" title="Medical background" lead="Medical training shapes how I think about software. It supports my developer work, and I am still a student working under supervision.">
      <div className="med-grid">
        {medicalThemes.map((m) => (
          <div className="med-item" key={m.title}><strong>{m.title}</strong><span>{m.text}</span></div>
        ))}
      </div>
    </Section>
  );
}
