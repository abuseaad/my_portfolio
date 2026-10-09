// ============================================================
// PROJECTS. Edit each project here.
//  - github: replace <repo> with the real repository name.
//  - demo:   paste the live website link (leave "" until deployed).
//  - image:  put a file in public/projects/ and write its name, e.g. "forum.png".
//            If the file is missing, a placeholder cover is shown.
//  - tech / features: check these and edit anything that isn't accurate.
// ============================================================
export const projects = [
  {
    name: "AI-Powered Evangadi Forum",
    featured: true,
    status: "In development",
    description:
      "A Q&A forum for course cohorts with AI-assisted search. Questions are found by meaning, and a course-document RAG feature answers from uploaded material.",
    tech: ["React", "Node.js", "Express", "MySQL", "Gemini API", "REST API"],
    features: ["Semantic search with Gemini embeddings", "Course-document RAG (planned)", "Express + MySQL backend", "Responsive landing page"],
    github: "https://github.com/abuseaad/<repo>",
    demo: "",
    image: "forum.png",
  },
  {
    name: "Netflix Clone",
    description: "A Netflix-style streaming interface with rows of titles and a familiar browsing layout.",
    tech: ["React", "JavaScript", "CSS3"],
    features: ["Component-based UI", "Responsive layout"],
    github: "https://github.com/abuseaad/<repo>", demo: "", image: "netflix.png",
  },
  {
    name: "Movie App",
    description: "A movie browser with a poster grid, search and a favorites page.",
    tech: ["React", "JavaScript", "REST API", "CSS3"],
    features: ["Search for movies", "Favorites page", "Poster grid"],
    github: "https://github.com/abuseaad/<repo>", demo: "", image: "movie-app.png",
  },
  {
    name: "ChatGPT Clone",
    description: "A chat-style interface modeled on ChatGPT, with a sidebar and message input.",
    tech: ["React", "JavaScript", "CSS3"],
    features: ["Chat layout with sidebar", "Message input"],
    github: "https://github.com/abuseaad/<repo>", demo: "", image: "chatgpt-clone.png",
  },
  {
    name: "Apple Website Clone",
    description: "A fully responsive clone of the Apple website, built to practice layout and media queries.",
    tech: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"],
    features: ["Responsive across devices", "Product sections"],
    github: "https://github.com/abuseaad/<repo>", demo: "", image: "apple-clone.png",
  },
  {
    name: "Medical Libraries",
    description: "A study hub that organizes clinical-year files by department: Pediatrics, OBS/GYNE, Surgery and Internal Medicine.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    features: ["Files grouped by clinical department", "Simple, fast navigation"],
    github: "https://github.com/abuseaad/<repo>", demo: "", image: "medical-libraries.png",
  },
  {
    name: "Nokia Snake Game",
    description: "The classic Nokia snake game rebuilt in the browser.",
    tech: ["HTML5", "CSS3", "JavaScript", "DOM"],
    features: ["Keyboard-controlled snake", "Food and growth logic"],
    github: "https://github.com/abuseaad/<repo>", demo: "", image: "snake-game.png",
  },
];
