import Sidebar, { NAV } from "./components/Sidebar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Pipeline from "./components/Pipeline.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Medical from "./components/Medical.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useTheme from "./hooks/useTheme.js";
import useActiveSection from "./hooks/useActiveSection.js";

const IDS = NAV.map((n) => n.id);

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const active = useActiveSection(IDS);
  return (
    <>
      <Sidebar active={active} theme={theme} onToggleTheme={toggleTheme} />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Pipeline />
        <Experience />
        <Projects />
        <Education />
        <Medical />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
