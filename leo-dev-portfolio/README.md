# LEO.DEV — Personal Developer Portfolio

Multi-page portfolio starter using Vite, HTML, CSS, and vanilla JavaScript. It is configured to deploy to GitHub Pages with GitHub Actions.

## Requirements
Install Node.js 18 or newer (Node.js 22 is used for the GitHub Pages build).

## Run locally
```bash
npm install
npm run dev
```
Open the local URL Vite prints (normally http://localhost:5173).

## Build
```bash
npm run build
npm run preview
```
The production files are created in `dist/`.

## Personalize first
Edit `src/js/config.js`:
- Replace the placeholder email and GitHub username.
- Add your LinkedIn URL if you want one.
- Edit project descriptions, tags, repository/demo links, and skills so they accurately reflect your work.
- Put your résumé at `public/resume.pdf` if you want to use that file later.

## Deploy to GitHub Pages
1. Create a GitHub repository. For example, `leo-dev-portfolio`.
2. Upload or push the contents of this project folder to the repository's `main` branch. The `.github/workflows/deploy.yml` file must be included.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Open the **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to finish successfully.
6. Your site will be available at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

The Vite configuration automatically uses the repository name during GitHub Actions builds, so you do not need to edit the base path when you rename the repository. If your repository is named `YOUR-USERNAME.github.io`, the site will be published at the root domain.

For future updates, commit and push your changes to `main`; GitHub Actions will deploy them automatically.

## Project images
Put image files in `public/images/projects/`, then set a project's `image` field, e.g.:
`image: "/images/projects/flood-dashboard.png"`
Leave it empty to use the built-in visual placeholder.

## Notes
GitHub Pages hosts static files. This portfolio needs no PHP or Python backend. The contact email opens the visitor's email application; it does not submit a server-side form. Replace all placeholders and check your project details before publishing.
