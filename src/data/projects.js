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
    // status: "In development",
   description:
  "A Q&A forum for course cohorts with AI-assisted search. Questions are found by meaning, and a RAG feature answers from course documents.",
features: ["Semantic search with Gemini embeddings", "Course-document RAG", "Express + MySQL backend", "Responsive landing page"],
    tech: ["react", "node", "express", "mysql", "gemini", "rag","api"],
    features: ["Semantic search with Gemini embeddings", "Course-document RAG (planned)", "Express + MySQL backend", "Responsive landing page"],

    github: "https://github.com/abuseaad/AI-Powered-Evangadi-Forum",

    demo: "https://evangadi-ai-forum-nu.vercel.app/",
    image: "forum.png",
  },
   {
    name: "ChatGPT Clone",
    description: "A chat-style interface modeled on ChatGPT, with a sidebar and message input.",
   tech: ["react", "node", "express", "mysql", "gemini", "api"],
    features: ["Chat layout with sidebar", "Message input"],
    github: "https://github.com/abuseaad/gpt-clone",
   demo: "https://sadiksgptclone.netlify.app/", image: "chatgpt-clone.png",
  },
  {
    name: "Netflix Clone",
    description: "A Netflix-style streaming interface with rows of titles and a familiar browsing layout.",
    tech: ["react"],
    features: ["Component-based UI", "Responsive layout"],
    github: "https://github.com/abuseaad/Netflix_clone",
    demo: "https://netflix-clon-eight-beta.vercel.app/", image: "netflix.png",
  },
  {
    name: "Apple Website Clone",
    description: "A fully responsive clone of the Apple website, built to practice layout and media queries.",
    tech: ["html", "css", "bootstrap"],
    features: ["Responsive across devices", "Product sections"],
    github: "https://github.com/abuseaad/final-apple-website-responsive",
    demo: "https://apple-website-responsive.vercel.app/", image: "apple-clone.png",
  },
  {
    name: "Movie App",
    description: "A movie browser with a poster grid, search and a favorites page.",
    tech: ["react", "api"],
    features: ["Search for movies", "Favorites page", "Poster grid"],
    github: "https://github.com/abuseaad/movieee",
    demo: "https://movieappppp.vercel.app/", image: "movie-app.png",
  },
 
   {
    name: "Nokia Snake Game",
    description: "The classic Nokia snake game rebuilt in the browser.",
    	tech: ["js"],
    features: ["Keyboard-controlled snake", "Food and growth logic"],
    github: "https://github.com/abuseaad/phase2_BonusWeek",
    demo: "https://nokiagame.vercel.app/", image: "snake-game.png",
  },
  {
    name: "Medical Libraries",
    description: "A study hub that organizes clinical-year files by department: Pediatrics, OBS/GYNE, Surgery and Internal Medicine.",
    tech: ["css", "js"],
    features: ["Files grouped by clinical department", "Simple, fast navigation"],
    github: "https://github.com/abuseaad/medical-document-library",
      status: "In development",
    demo: "https://medicallibrary.vercel.app/", image: "medical-libraries.png",
  },
 
];
