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
  const hasGithub =
    Boolean(project.github) && !project.github.includes("<repo>");

  // The photo + icons are one link when a demo exists
  const Media = hasDemo ? "a" : "div";
  const mediaProps = hasDemo
    ? {
        href: project.demo,
        target: "_blank",
        rel: "noreferrer",
        "aria-label": `Open live demo of ${project.name}`,
      }
    : {};

  return (
    <article className={`card project ${project.featured ? "featured" : ""}`}>
      <Media className="project-media" {...mediaProps}>
        <div className="cover-wrap">
          <Cover project={project} />
          {hasDemo && (
            <>
              <span className="media-badge" aria-hidden="true">
                <FaArrowUpRightFromSquare />
              </span>
              <span className="media-hover" aria-hidden="true">
                <FaArrowUpRightFromSquare /> View live demo
              </span>
            </>
          )}
        </div>
        <div
          className="tech-panel"
          aria-label={`Technologies used in ${project.name}`}
        >
          {project.tech.map((t) => (
            <TechIcon key={t} name={t} />
          ))}
        </div>
      </Media>

      <div className="project-foot">
        <h3>{project.name}</h3>

        {project.status && <em className="badge">{project.status}</em>}

        {hasGithub ? (
          <a
            className="btn btn-primary sm"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        ) : (
          <button
            className="btn btn-primary sm"
            disabled
            title="GitHub link coming soon"
          >
            <FaGithub /> GitHub
          </button>
        )}
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