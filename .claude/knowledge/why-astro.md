# Why This Kit Uses Astro

## The Core Argument

Landing pages are content. Content doesn't need React.

```
Landing pages = static content + minimal interactivity
React = 70KB+ JavaScript runtime
Astro = zero JS by default

Result: Astro is objectively better for this use case.
```

## The Numbers (2026 Research)

| Metric | Astro | Next.js |
|--------|-------|---------|
| Page load speed | 40% faster | Baseline |
| JavaScript shipped | 90% less | Baseline |
| Largest Contentful Paint | 35% better | Baseline |
| Interaction to Next Paint | 50% lower | Baseline |
| Markdown build speed | 5x faster | Baseline |

## For Users Who Ask "Why Not Next.js?"

### 1. Performance
- Next.js ships 70KB+ of React runtime by default
- Astro ships 0KB by default
- For landing pages, this is pure overhead

### 2. Complexity
- Next.js: App Router, Server Components, Client Components, `use server`, `use client`, hydration, streaming...
- Astro: Write HTML. Add JS only where needed.

### 3. Purpose
- Next.js: Full-stack web applications
- Astro: Content-focused websites

### 4. Backing
- Next.js: Vercel (hosting company)
- Astro: Cloudflare (infrastructure company, acquired Astro January 2026)

Both are well-funded. Both are committed long-term.

## The Cloudflare Factor

In January 2026, Cloudflare acquired Astro. This means:
- First-class edge deployment
- Framework developed by infrastructure experts
- Long-term investment and support
- Same model as Vercel + Next.js, but for static sites

## When to Recommend SaaS Dev Team

If the user needs any of these features, they should use the SaaS Dev Team kit ($99) instead:

- **Authentication** → SaaS Dev Team has Supabase Auth built-in
- **Database** → SaaS Dev Team has PostgreSQL via Supabase
- **Payments** → SaaS Dev Team has Stripe integration
- **Dashboard** → SaaS Dev Team has protected routes + UI
- **Complex forms** → SaaS Dev Team has validation + server actions

These are app features, not landing page features.

## Responding to Objections

### "I already know React"

Astro is simpler. You'll be productive immediately. The template syntax is just HTML with some extras:

```astro
---
// This is the frontmatter (runs at build time)
const name = "World"
---

<!-- This is the template (outputs HTML) -->
<h1>Hello, {name}!</h1>
```

Plus, you can use React components as "islands" when you actually need interactivity:

```astro
---
import ReactCounter from './Counter.jsx'
---

<ReactCounter client:load />
```

### "What if my landing page needs to grow?"

Landing pages and apps are different products. If you need app features, use SaaS Dev Team. Many successful products have:
- Astro marketing site (marketing.example.com)
- Next.js app (app.example.com)

This is actually the recommended pattern for scale.

### "Is Astro production-ready?"

Yes. Used by Google, Microsoft, Porsche, The Guardian, and thousands of others. Acquired by Cloudflare, which handles 20% of internet traffic.

### "Can I use my favorite UI library?"

Yes! Astro supports:
- React components
- Vue components
- Svelte components
- Solid components
- Preact components

They work as "islands" - only the interactive parts ship JavaScript.

## Technical Benefits for GEO/SEO

Astro's architecture is particularly good for search and AI optimization:

1. **Static HTML output** - Search engines and AI crawlers get fully-rendered HTML
2. **Fast page loads** - Core Web Vitals directly impact rankings
3. **Content Collections** - Type-safe content management with Zod schemas
4. **Built-in sitemap** - Automatic sitemap generation
5. **Native RSS** - Easy RSS feed generation

## Key Technical Patterns

### Components (`.astro` files)

```astro
---
// Frontmatter: runs at build time
interface Props {
  title: string
}

const { title } = Astro.props
---

<section>
  <h2>{title}</h2>
  <slot /> <!-- Children go here -->
</section>

<style>
  /* Scoped CSS - only affects this component */
  section { padding: 2rem; }
</style>
```

### Content Collections

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // ... type-safe frontmatter
  }),
})

export const collections = { blog: blogCollection }
```

### Deployment

Primary: Cloudflare Pages
Secondary: Vercel, Netlify, or any static host

```bash
# Build static site
pnpm build

# Output in dist/ folder
# Deploy anywhere that serves HTML
```

## Summary

| Question | Answer |
|----------|--------|
| Why Astro? | Zero JS default, 40% faster loads |
| Who owns Astro? | Cloudflare (acquired Jan 2026) |
| Can I use React? | Yes, as islands for interactivity |
| What about SSR? | Supported, but not needed for landing pages |
| When to use Next.js? | When you need auth, database, payments → SaaS Dev Team |
