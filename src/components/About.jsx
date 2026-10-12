import Section from "./Section.jsx";
import { about } from "../data/profile.js";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="about-grid">
        <div className="prose">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="highlights">
          {about.highlights.map((h) => (
            <li key={h.title}>
              <strong>{h.title}</strong>
              <span>{h.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <h3>Soft skills</h3>
      <ul className="chips">
        {about.softSkills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </Section>
  );
}
