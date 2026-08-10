# haydenslaughter.co.uk

Personal portfolio of Hayden Slaughter — a zero-to-one product builder in Brighton.

The site is **Slaughter OS**: a portfolio that behaves like a desktop operating
system, with a static content spine underneath for SEO, sharing and no-JS access.

## Stack

- **[Astro](https://astro.build)** — build tool, static output, SEO/asset shell.
- **[Preact](https://preactjs.com)** — the interactive "OS" layer (window manager,
  icons, launcher) mounts as a client island.
- **GitHub Pages** — hosting, deployed by GitHub Actions on every push to `main`.
- Custom domain: [haydenslaughter.co.uk](https://haydenslaughter.co.uk).

## Architecture

The desktop is a delight layer on top of real, pre-rendered pages. Core content
(CV, case studies, about) is authored as structured content and rendered both
into OS windows and as plain, crawlable pages — so the site works with JavaScript
off and reads well to search engines and screen readers.

Design source: the "Slaughter OS" project in Claude Design. Prototype artifacts
there (`.dc.html`, `support.js`) are references, not shipped code — the UI is
rebuilt in production code here.

## Develop

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
npm run build    # build to ./dist
npm run preview  # preview the production build locally
npm run check    # type-check
```

Node 22+ (see `.nvmrc`).

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with Astro
and publishes to GitHub Pages. `public/CNAME` keeps the custom domain bound across
deploys.
