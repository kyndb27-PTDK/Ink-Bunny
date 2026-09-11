# Ink Bunny Tattoo Studio

Premium single-page website for Ink Bunny Tattoo Studio, a private Bradford tattoo studio.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/ink-bunny-studio/src/pages/Home.tsx` — homepage composition
- `artifacts/ink-bunny-studio/src/components/hero/` — hero artwork and motion
- `artifacts/ink-bunny-studio/src/components/sections/` — studio narrative sections and footer
- `artifacts/ink-bunny-studio/src/components/3d/` — future-ready React Three Fiber scene boundary
- `artifacts/ink-bunny-studio/src/index.css` — shared Ink Bunny visual language and responsive rules
- `artifacts/ink-bunny-studio/public/ink-bunny-reference.png` — supplied hero artwork

## Architecture decisions

- The supplied artwork remains the source of truth for the hero, including the bunny, logo, and neon sign.
- The homepage is frontend-only for now; booking is a real client-side interaction ready to connect to a scheduling backend later.
- The 3D layer is dynamically loaded and skipped when WebGL is unavailable so the artwork never depends on GPU support.

## Product

- Full responsive studio homepage with anchor navigation
- Consultation booking dialog with confirmation state
- Filterable placeholder portfolio architecture for future tattoo work
- Responsive mobile navigation and reduced-motion support

## User preferences

Keep the supplied Ink Bunny reference artwork central; do not replace it with generic tattoo imagery.

## Gotchas

- The frontend workflow provides `PORT` and `BASE_PATH`; use the managed workflow for previews.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
