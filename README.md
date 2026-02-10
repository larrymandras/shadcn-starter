# shadcn-starter

Next.js + shadcn/ui + Tailwind 4 starter template with [shadcnblocks](https://shadcnblocks.com) registry pre-configured.

## Quick Start

```bash
npx create-next-app --example https://github.com/larrymandras/shadcn-starter my-app
cd my-app
npm install
npm run dev
```

## Adding shadcn/ui Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

## Adding shadcnblocks

The shadcnblocks registry is pre-configured. Add any block:

```bash
npx shadcn@latest add shadcnblocks/hero-1
npx shadcn@latest add shadcnblocks/pricing-1
npx shadcn@latest add shadcnblocks/cta-1
```

Browse all free blocks: https://shadcnblocks.com/blocks/free

## What's Included

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- shadcn/ui (default style, neutral base)
- shadcnblocks registry
- Dark mode support (oklch colors)
- TypeScript
- Common Radix UI primitives
- Framer Motion
- Lucide icons
