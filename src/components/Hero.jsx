import { FaDownload } from "react-icons/fa6";
import { profile, heroText } from "../data/profile.js";

export default function Hero() {
  const base = import.meta.env.BASE_URL;
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <p className="hello">Hi, I'm {profile.name}</p>
        <h2 className="hero-title">{profile.title}</h2>
        <p className="hero-sub">& {profile.subtitle}</p>
        <p className="hero-text">{heroText}</p>
        <div className="cta">
          <a className="btn btn-primary" href="#projects">
            View my projects
          </a>
          <a className="btn btn-outline" href="#contact">
            Contact me
          </a>
          <a
            className="btn btn-outline"
            href={`${base}${profile.cv}`}
            // download="#"
          >
            {/* <FaDownload /> Download CV */}
          </a>
        </div>
      </div>
      <figure
        className="code-card"
        aria-label="Summary of skills written as code"
      >
        <div className="code-bar">
          <i />
          <i />
          <i />
          <span>sadik.js</span>
        </div>
        <pre>
          <code>
            <span className="k">const</span> sadik = {"{"}
            {"\n"}
            {"  "}role: <span className="s">"Full-Stack Developer"</span>,{"\n"}
            {"  "}stack: [<span className="s">"React"</span>,{" "}
            <span className="s">"Node.js"</span>,{"\n"}
            {"          "}
            <span className="s">"Express"</span>,{" "}
            <span className="s">"MySQL"</span>],{"\n"}
            {"  "}ai: <span className="s">"AI API integration"</span>,{"\n"}
            {"  "}studying:{" "}
            <span className="s">"Medicine, Arsi University"</span>,{"\n"}
            {"  "}year: <span className="n">5</span>,{"\n"}
            {"  "}lookingFor: [<span className="s">"internships"</span>,{" "}
            <span className="s">"freelance"</span>,{"\n"}
            {"               "}
            <span className="s">"team projects"</span>],{"\n"}
            {"}"};
          </code>
        </pre>
      </figure>
    </section>
  );
}
