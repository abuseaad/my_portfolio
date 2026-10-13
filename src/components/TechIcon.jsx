import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiGooglegemini,
  SiJquery,
  SiVite,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  TbApi,
  TbDevices,
  TbDeviceDesktop,
  TbShieldLock,
  TbServerCog,
  TbSitemap,
  TbDatabase,
  TbDatabaseEdit,
  TbSql,
  TbSearch,
  TbFileSearch,
  TbBrain,
  TbGitBranch,
  TbUsers,
} from "react-icons/tb";

// key (used in projects.js and skills.js) -> icon, hover label, color
export const TECH = {
  // brands
  react: { Icon: SiReact, label: "React", color: "#61DAFB" },
  js: { Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  html: { Icon: SiHtml5, label: "HTML", color: "#E34F26" },
  css: { Icon: SiCss, label: "CSS", color: "#1572B6" },
  bootstrap: { Icon: SiBootstrap, label: "Bootstrap", color: "#7952B3" },
  jquery: { Icon: SiJquery, label: "jQuery", color: "#0769AD" },
  vite: { Icon: SiVite, label: "Vite", color: "#A78BFA" },
  node: { Icon: SiNodedotjs, label: "Node.js", color: "#5FA04E" },
  express: { Icon: SiExpress, label: "Express.js", color: "#9CA3AF" },
  mysql: { Icon: SiMysql, label: "MySQL", color: "#4479A1" },
  gemini: { Icon: SiGooglegemini, label: "Google Gemini", color: "#8E75F2" },
  git: { Icon: SiGit, label: "Git", color: "#F05032" },
  github: { Icon: SiGithub, label: "GitHub", color: "#9CA3AF" },
  vscode: { Icon: VscVscode, label: "VS Code", color: "#007ACC" },

  // concepts
  responsive: { Icon: TbDevices, label: "Responsive Design", color: "#2DD4BF" },
  media: { Icon: TbDeviceDesktop, label: "Media Queries", color: "#2DD4BF" },
  dom: { Icon: TbSitemap, label: "DOM", color: "#F59E0B" },
  api: { Icon: TbApi, label: "REST APIs / API integration", color: "#2DD4BF" },
  backend: {
    Icon: TbServerCog,
    label: "Backend Architecture",
    color: "#60A5FA",
  },
  auth: {
    Icon: TbShieldLock,
    label: "Authentication & Authorization",
    color: "#F472B6",
  },
  sql: { Icon: TbSql, label: "SQL", color: "#4479A1" },
  dbdesign: { Icon: TbDatabase, label: "Database Design", color: "#4479A1" },
  crud: { Icon: TbDatabaseEdit, label: "CRUD Operations", color: "#4479A1" },
  ai: { Icon: TbBrain, label: "AI-powered Features", color: "#C084FC" },
  search: { Icon: TbSearch, label: "Semantic Search", color: "#C084FC" },
  rag: { Icon: TbFileSearch, label: "RAG Concepts", color: "#C084FC" },
  branching: {
    Icon: TbGitBranch,
    label: "Branching & Pull Requests",
    color: "#F05032",
  },
  team: { Icon: TbUsers, label: "Team Collaboration", color: "#2DD4BF" },
};

export default function TechIcon({ name }) {
  const t = TECH[name];
  if (!t) return null;
  const { Icon, label, color } = t;
  return (
    <span className="tech-icon" data-label={label} tabIndex={0}>
      <Icon style={{ color }} aria-hidden />
      <span className="sr-only">{label}</span>
    </span>
  );
}