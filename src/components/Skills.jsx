import { SiHtml5, SiCss, SiBootstrap, SiJavascript, SiJquery, SiReact, SiVite, SiNodedotjs, SiExpress, SiMysql, SiGit, SiGithub } from "react-icons/si";
import Section from "./Section.jsx";
import { skillGroups } from "../data/skills.js";

const ICONS = { html: SiHtml5, css: SiCss, bootstrap: SiBootstrap, js: SiJavascript, jquery: SiJquery, react: SiReact, vite: SiVite, node: SiNodedotjs, express: SiExpress, mysql: SiMysql, git: SiGit, github: SiGithub };

export default function Skills() {
  return (
    <Section id="skills" title="Skills" lead="Technologies I have learned and used in my projects.">
      <div className="skill-grid">
        {skillGroups.map((g) => (
          <div className="skill-group" key={g.title}>
            <h3>{g.title}</h3>
            <ul className="chips">
              {g.items.map(({ name, icon }) => {
                const Icon = ICONS[icon];
                return <li key={name}>{Icon && <Icon aria-hidden />}{name}</li>;
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
