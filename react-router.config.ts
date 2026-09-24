import { vercelPreset } from "@vercel/react-router/vite";
import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  // Vercel sets VERCEL=1 at build time; elsewhere (npm start, Docker) keep the standard build/server/index.js output
  presets: process.env.VERCEL ? [vercelPreset()] : [],
} satisfies Config;
