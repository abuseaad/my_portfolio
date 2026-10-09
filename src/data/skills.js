// Skill groups. `icon` names map to icons in components/Skills.jsx (optional).
export const skillGroups = [
  { title: "Frontend", items: [
    { name: "HTML5", icon: "html" }, { name: "CSS3", icon: "css" }, { name: "Responsive Design" },
    { name: "Media Queries" }, { name: "Bootstrap", icon: "bootstrap" }, { name: "JavaScript", icon: "js" },
    { name: "DOM" }, { name: "jQuery", icon: "jquery" }, { name: "React", icon: "react" }, { name: "Vite", icon: "vite" },
  ]},
  { title: "Backend", items: [
    { name: "Node.js", icon: "node" }, { name: "Express.js", icon: "express" }, { name: "REST APIs" },
    { name: "API Integration" }, { name: "Backend Architecture" }, { name: "Authentication & Authorization" },
  ]},
  { title: "Database", items: [
    { name: "MySQL", icon: "mysql" }, { name: "SQL" }, { name: "Database Design" }, { name: "CRUD Operations" },
  ]},
  { title: "AI & Integration", items: [
    { name: "AI API Integration" }, { name: "AI-powered Features" }, { name: "Semantic Search" }, { name: "RAG Concepts" },
  ]},
  { title: "Tools", items: [
    { name: "Git", icon: "git" }, { name: "GitHub", icon: "github" }, { name: "VS Code" },
    { name: "Branching & Pull Requests" }, { name: "Team Collaboration" },
  ]},
];

export const pipeline = [
  { label: "React", note: "Frontend UI" },
  { label: "Node.js / Express", note: "Server" },
  { label: "REST API", note: "Contract" },
  { label: "MySQL", note: "Data" },
  { label: "AI API / Model", note: "Intelligence" },
  { label: "AI-powered app", note: "Result" },
];
