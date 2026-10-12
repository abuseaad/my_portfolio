import Section from "./Section.jsx";
import { pipeline } from "../data/skills.js";

export default function Pipeline() {
  return (
    <Section
      id="ai-fullstack"
      title="AI & full-stack development"
      lead="I don't only learn single tools. I learn how to connect them into one working application."
    >
      <ol className="pipeline">
        {pipeline.map((step, i) => (
          <li
            key={step.label}
            className={i === pipeline.length - 1 ? "last" : ""}
          >
            <strong>{step.label}</strong>
            <span>{step.note}</span>
          </li>
        ))}
      </ol>
      <p className="pipeline-note">
        Example: in the AI-Powered Evangadi Forum, a React interface calls an
        Express REST API, which stores data in MySQL and uses Gemini embeddings
        for semantic search.
      </p>
    </Section>
  );
}
