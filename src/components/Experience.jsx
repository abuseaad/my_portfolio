import Section from "./Section.jsx";
import { experience } from "../data/experience.js";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.role} className={e.kind}>
            <div className="t-head">
              <h3>{e.role}</h3>
              <span className="period">{e.period}</span>
            </div>
            <p className="org">{e.org}</p>
            {e.note && <p className="note">{e.note}</p>}
            <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
