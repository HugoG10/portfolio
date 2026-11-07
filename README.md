# Hugo Guerra-Garcia — IT portfolio

Personal site for IT support, networking, and computer science work. Deployed at [hugog10.github.io/portfolio](https://hugog10.github.io/portfolio/).

## Local preview

```bash
npm install
npm run dev
```

Open [http://localhost:5173/portfolio/](http://localhost:5173/portfolio/).

```bash
npm run build
npm run preview
```

## Add a project

Edit `src/data/projects.ts`. Each object needs a unique `slug`, a `filters` list, and the detail-page fields. Set `featured: true` to place it in the main group.

Filters: `it-support`, `networking`, `cybersecurity`, `software`, `data`.

Screenshots go in `public/projects/`. Reference them from the project’s `screenshots` array with a path relative to `public/`, for example `projects/my-lab.png`. Leave `screenshots` off until you have a real image.

Do not mark a lab complete until you have done the work. Ideas that are not finished live in `src/data/planned-projects.ts` and are not rendered.

## Resume

The Resume button opens `/resume`. Use **Save as PDF** in the browser print dialog. To swap in a file later, put it in `public/` and point the button at that file.

## GitHub Pages

The live site is a built app, not the source files. `.github/workflows/deploy.yml` builds `dist` and publishes it with GitHub Actions.

Before the first deploy, change the repository Pages setting from “Deploy from a branch” (`main` / `/`) to **GitHub Actions**:

1. GitHub → Settings → Pages
2. Build and deployment → Source → GitHub Actions

Then push to `main`. The workflow publishes `https://hugog10.github.io/portfolio/`.

Project URLs such as `/portfolio/projects/wallet-worth` use `public/404.html` to return visitors to the right route. The Vite `base` in `vite.config.ts` is `/portfolio/` because this is a project site, not a user site at the domain root.
