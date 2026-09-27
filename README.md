# DataStudio website

Single-page static landing site built with Astro and plain CSS. All page content,
metadata, and styles live in `src/pages/index.astro`. `public/` contains only the
logo, favicon, and font.

## Development

Use nvm to select Node.js 24 (which includes npm). Run `nvm install` first if it
isn't installed yet.

```sh
nvm use
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

The build outputs static files to `dist/`. Cloudflare hosting uses the existing
`wrangler.jsonc` configuration. To publish after building, run `npx wrangler deploy`.
