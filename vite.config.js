import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages at https://abuseaad.github.io/<repo>/ set base to "/<repo>/".
export default defineConfig({ plugins: [react()], base: "/" });
