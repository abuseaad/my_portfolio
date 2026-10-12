import Section from "./Section.jsx";
import TechIcon from "./TechIcon.jsx";
import { skillGroups } from "../data/skills.js";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      lead="Technologies I have learned and used in my projects."
    >
      <div className="skill-grid">
        {skillGroups.map((g) => (
          <div className="skill-group" key={g.title}>
            <h3>{g.title}</h3>
            <div className="icon-row">
              {g.items.map((key) => (
                <TechIcon key={key} name={key} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
