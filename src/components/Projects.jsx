import { useState } from "react";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Section from "./Section.jsx";
import { projects } from "../data/projects.js";
import TechIcon from "./TechIcon.jsx";

function Cover({ project }) {
  const [failed, setFailed] = useState(false);
  const src = `${import.meta.env.BASE_URL}projects/${project.image}`;
  if (failed || !project.image) {
    const initials = project.name
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0])
      .join("");
    return (
      <div
        className="cover placeholder"
        role="img"
        aria-label={`${project.name} cover placeholder`}
      >
        <span>{initials}</span>
        <small>Add image: public/projects/{project.image}</small>
      </div>
    );
  }
  return (
    <img
      className="cover"
      src={src}
      alt={`${project.name} screenshot`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function Card({ project }) {
  const hasDemo = Boolean(project.demo);
  return (
    <article className={`card project ${project.featured ? "featured" : ""}`}>
      <Cover project={project} />
      <div
        className="tech-panel"
        aria-label={`Technologies used in ${project.name}`}
      >
        {project.tech.map((t) => (
          <TechIcon key={t} name={t} />
        ))}
      </div>
      <div className="project-foot">
        <h3>
          {project.name}
          {project.status && <em className="badge">{project.status}</em>}
        </h3>
        <div className="project-links">
          {hasDemo ? (
            <a
              className="btn btn-primary sm"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <FaArrowUpRightFromSquare /> Live demo
            </a>
          ) : (
            <button
              className="btn btn-primary sm"
              disabled
              title="Live demo link coming soon"
            >
              <FaArrowUpRightFromSquare /> Live demo
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      lead="From frontend development to full-stack projects and AI-powered applications."
    >
      <div className="project-grid">
        {projects.map((p) => (
          <Card key={p.name} project={p} />
        ))}
      </div>
    </Section>
  );
}
