# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # Start Next.js dev server (includes embedded Sanity Studio at /studio)
bun build        # Production build
bun lint         # Run ESLint
bun typegen      # Regenerate sanity/extract.json and sanity/types.ts after schema changes
```

## Architecture

This is a Next.js 16 application with an embedded Sanity Studio CMS. The project uses:
- **React 19** with React Compiler (babel-plugin-react-compiler)
- **Tailwind CSS 4** with `@tailwindcss/postcss`
- **shadcn/ui** components (radix-maia style, Base UI + Radix primitives)
- **next-sanity** for Sanity integration and live content updates

### Route Groups

- `app/(huxley)/` - Main website routes with the public layout
- `app/(studio)/studio/` - Embedded Sanity Studio at `/studio` path

### Sanity CMS Structure

Schema types are defined in `sanity/schemaTypes/`:
- `page-type.ts` - Document type for pages with title, slug, content (pageBuilder), and mainImage
- `page-builder-type.ts` - Array type that composes block types (currently: hero)
- `hero-type.ts` - Object type for hero blocks with image, title, and button

Key Sanity files:
- `sanity/env.ts` - Environment variables (projectId, dataset, apiVersion)
- `sanity/lib/client.ts` - Sanity client instance
- `sanity/lib/live.ts` - Live content API (`sanityFetch`, `SanityLive`)
- `sanity/structure.ts` - Studio desk structure configuration

### UI Components

- `components/ui/` - shadcn/ui primitives (button, input, card, etc.)
- `components/blocks/` - Page builder block components (e.g., `hero-block.tsx`)

### Path Aliases

`@/*` maps to project root (configured in tsconfig.json).

## Environment Variables

Required:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

Optional:
- `NEXT_PUBLIC_SANITY_API_VERSION` (defaults to `2026-01-27`)

## Typescript conventions
- Use types over interfaces unless you need to extend a type, then use interface

## Workflow
- Always run `bun typegen` after modifying any Sanity schema types in `sanity/schemaTypes/`