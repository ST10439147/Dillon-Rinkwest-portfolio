# Portfolio

Personal portfolio site built with [Astro](https://astro.build) and TypeScript.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
```

## Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the static site and publishes it to GitHub Pages. The workflow reads the site URL and base path from the Pages settings, so the same config works for a `<user>.github.io` repo, a project repo or a custom domain.

One-time setup: **Settings → Pages → Source: GitHub Actions**.

## Editing

All content lives in [`src/pages/index.astro`](src/pages/index.astro). Projects are an array at the top of the file. Their order on the page is the order in the array.
