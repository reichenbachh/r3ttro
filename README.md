# r3ttro

Personal site for George Wiredu Ansong. React Router (framework mode), TypeScript, Tailwind v4.

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck
npm run build      # -> build/client + build/server
npm start          # serve the production build
```

## Layout

```
app/
├── routes/          # home, work, blog, contact (registered in routes.ts)
├── components/      # page-shell, site-nav, tag
├── data/content.ts  # all site copy: experience, principles, stack, posts, contact links
└── app.css          # theme tokens, animations
```

All content lives in `app/data/content.ts`. Editing your experience, principles, or stack means
editing that one file: nothing is hardcoded in the route components.

`EXPERIENCE` is ordered most-recent-first. Each role's `highlights` may carry an optional `client`
and `clientLocation`, which render as an accent label above the bullet for agency-side work.

## Product screenshots

Cards in the `[ 01 / live ]` section read from `public/work/*.jpg`. To add or refresh one, drop the
full-size capture in the repo root and resize it:

```bash
sips -Z 1400 -s format jpeg -s formatOptions 72 shot.png --out public/work/name.jpg
```

Full-resolution PNGs should not live in `public/` — everything there ships to the browser.

## Deployment

`Dockerfile` builds a container running the built-in `react-router-serve`. Any Node host works;
deploy the contents of `build/`.
