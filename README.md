# Sadik Jemal: Portfolio (React + Vite)

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in /dist

## Edit your content (all in src/data/)
- profile.js    name, email, phone, Telegram, GitHub, LinkedIn URL, CV path, About text, soft skills
- projects.js   each project: github link, demo link, image, tech, features
- skills.js     skill groups and the AI/full-stack pipeline
- experience.js experience, education, medical themes (replace the [YEAR] placeholders)

## Replace assets
- Photo:          src/assets/profile.jpg (same name)
- CV:             public/cv/Sadik-Jemal-CV.pdf (same name)
- Project images: put files in public/projects/ using the names in projects.js
- Demo links:     set `demo: "https://..."` in projects.js (the button turns on automatically)
- GitHub links:   replace <repo> in projects.js
- Contact form:   copy .env.example to .env and set VITE_FORMSPREE_ID (otherwise it opens the email app)

## Deploy
Vercel or Netlify: import the GitHub repo (build: npm run build, output: dist).
GitHub Pages: set `base: "/<repo>/"` in vite.config.js.
