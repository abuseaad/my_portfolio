import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaTelegram, FaEnvelope, FaHouse, FaUser, FaCode, FaBriefcase, FaFolderOpen, FaGraduationCap, FaPaperPlane, FaBars, FaXmark, FaMoon, FaSun, FaDownload } from "react-icons/fa6";
import { profile } from "../data/profile.js";

export const NAV = [
  { id: "home", label: "Home", icon: FaHouse },
  { id: "about", label: "About", icon: FaUser },
  { id: "skills", label: "Skills", icon: FaCode },
  { id: "experience", label: "Experience", icon: FaBriefcase },
  { id: "projects", label: "Projects", icon: FaFolderOpen },
  { id: "education", label: "Education", icon: FaGraduationCap },
  { id: "contact", label: "Contact", icon: FaPaperPlane },
];

export default function Sidebar({ active, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const base = import.meta.env.BASE_URL;
  const go = () => setOpen(false);

  return (
    <>
      <header className="topbar">
        <a href="#home" className="topbar-name">{profile.name}</a>
        <button className="icon-btn" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </header>
      {open && <div className="overlay" onClick={go} />}
      <aside className={`sidebar ${open ? "open" : ""}`} aria-label="Main navigation">
        <img className="avatar" src={profile.photo} alt="Tech Doctor logo: a stethoscope shaped like a circuit" />
        <h1 className="side-name">{profile.name}</h1>
        <p className="side-role">Full-Stack Developer · Medical Student</p>
        <div className="socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href={`https://t.me/${profile.telegram}`} target="_blank" rel="noreferrer" aria-label="Telegram"><FaTelegram /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><FaEnvelope /></a>
        </div>
        <nav>
          {NAV.map(({ id, label, icon: Icon }) => (
            <a key={id} href={`#${id}`} onClick={go} className={active === id ? "active" : ""} aria-current={active === id ? "true" : undefined}>
              <Icon aria-hidden /> {label}
            </a>
          ))}
        </nav>
        <div className="side-actions">
          <a className="btn btn-primary" href={`${base}${profile.cv}`} download="Sadik-Jemal-CV.pdf"><FaDownload /> Resume / CV</a>
          <button className="btn btn-ghost" onClick={onToggleTheme} aria-label="Toggle dark or light mode">
            {theme === "dark" ? <FaSun /> : <FaMoon />} {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </aside>
    </>
  );
}
