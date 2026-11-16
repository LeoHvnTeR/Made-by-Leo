import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrgSite = repositoryName?.endsWith(".github.io");
const base = process.env.GITHUB_ACTIONS
  ? (isUserOrOrgSite ? "/" : `/${repositoryName}/`)
  : "/";

export default defineConfig({
  base,
  build: {
    rollupOptions: {
      input: {
        home: resolve(projectRoot, "index.html"),
        about: resolve(projectRoot, "about.html"),
        projects: resolve(projectRoot, "projects.html"),
        skills: resolve(projectRoot, "skills.html"),
        contact: resolve(projectRoot, "contact.html")
      }
    }
  }
});
