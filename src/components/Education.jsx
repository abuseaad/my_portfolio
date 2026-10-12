import Section from "./Section.jsx";
import { education } from "../data/experience.js";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="edu-grid">
        {education.map((e) => (
          <article className="card" key={e.school}>
            <h3>{e.school}</h3>
            <p className="edu-program">{e.program}</p>
            <p className="muted">
              {e.level} · {e.period}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
