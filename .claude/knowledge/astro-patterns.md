# Astro Project Patterns

This guide helps Claude understand common Astro project structures for dynamic adaptation during `/setup`.

## Common Project Structures

### AstroWind (Most Popular)

```
astrowind/
├── src/
│   ├── assets/           # Images processed by Astro
│   ├── components/       # Shared components
│   │   ├── ui/          # UI primitives
│   │   ├── widgets/     # Larger composed components
│   │   └── common/      # Layout components
│   ├── content/
│   │   └── post/        # ⚠️ Note: 'post' not 'blog'
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro
│   │   └── [slug].astro # Dynamic blog routes
│   └── utils/           # Utility functions
├── src/content/config.ts # Content collections config
├── astro.config.mjs
└── package.json
```

**Key markers:**
- `onwidget` in package.json
- Content in `src/content/post/` (not blog)
- Uses `~/` import alias
- Has MDX pre-installed

### Astro Starter (Minimal)

```
astro-starter/
├── src/
│   ├── components/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── public/
├── astro.config.mjs
└── package.json
```

**Key markers:**
- Minimal `package.json`
- No content collections by default
- No MDX by default

### Starlight (Documentation)

```
starlight/
├── src/
│   ├── content/
│   │   └── docs/        # Documentation pages
│   └── assets/
├── astro.config.mjs     # Has starlight() integration
└── package.json
```

**Key markers:**
- `@astrojs/starlight` in package.json
- Content in `src/content/docs/`
- Built-in search and navigation

### Custom Projects

Custom projects may have any structure. Look for:

1. **Content location**: `src/content/*`
2. **Config location**: `src/content.config.ts` OR `src/content/config.ts`
3. **Components**: Usually `src/components/`
4. **Import aliases**: Check `tsconfig.json` for `paths`

## Content Collections

### Astro 5.x Style (Current)

```typescript
// src/content.config.ts (note: root of src/, not in content/)
import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    // ...
  }),
})

export const collections = { blog }
```

### Astro 4.x Style (Legacy)

```typescript
// src/content/config.ts (note: inside content/)
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // ...
  }),
})

export const collections = { blog }
```

### Common Collection Names

| Template | Collection Name | Location |
|----------|----------------|----------|
| AstroWind | `post` | `src/content/post/` |
| Generic | `blog` | `src/content/blog/` |
| Starlight | `docs` | `src/content/docs/` |
| Custom | varies | varies |

## Import Aliases

### Check tsconfig.json

```json
{
  "compilerOptions": {
    "paths": {
      "~/*": ["./src/*"],           // AstroWind style
      "@/*": ["./src/*"],           // Common alternative
      "@components/*": ["./src/components/*"]
    }
  }
}
```

### Usage Patterns

```astro
---
// AstroWind
import Component from '~/components/geo/AnswerBox.astro'

// Generic with @
import Component from '@/components/geo/AnswerBox.astro'

// Relative (always works)
import Component from '../../components/geo/AnswerBox.astro'
---
```

## MDX Detection

### Check package.json

```bash
grep -q "@astrojs/mdx" package.json && echo "MDX installed"
```

### Check astro.config.mjs

```javascript
// Look for mdx() in integrations array
import mdx from '@astrojs/mdx'

export default defineConfig({
  integrations: [mdx()],
})
```

## Common Integration Points

### Where to Add GEO Components

1. **AstroWind**: `src/components/geo/`
2. **Starlight**: `src/components/geo/` (then import in MDX)
3. **Custom**: Follow existing component structure

### How to Register for MDX Auto-Import (Optional)

Some projects auto-import components for MDX. Check `astro.config.mjs`:

```javascript
export default defineConfig({
  markdown: {
    // MDX config here
  },
  integrations: [
    mdx({
      // Some templates configure global components here
    }),
  ],
})
```

For most projects, explicit imports in MDX files are preferred for clarity.

## Version Detection

### Astro Version

```bash
grep -o '"astro": "[^"]*"' package.json
```

| Version | Key Features |
|---------|-------------|
| 5.x | Content Layer API, `glob()` loader |
| 4.x | Content Collections v2, View Transitions |
| 3.x | View Transitions, improved performance |
| 2.x | Content Collections v1 |

### Breaking Changes to Watch

- **Astro 5**: Config moved from `src/content/config.ts` to `src/content.config.ts`
- **Astro 5**: Use `render(entry)` instead of `entry.render()`
- **Astro 5**: Use `entry.id` instead of `entry.slug`

## Detection Scripts

### Is this Astro?

```bash
grep -q '"astro"' package.json && echo "ASTRO"
```

### Which template?

```bash
grep -q "onwidget\|astrowind" package.json && echo "ASTROWIND"
grep -q "@astrojs/starlight" package.json && echo "STARLIGHT"
```

### Where is content?

```bash
for dir in src/content/post src/content/blog src/content/posts; do
  test -d "$dir" && echo "CONTENT: $dir"
done
```

### Content config location?

```bash
test -f src/content.config.ts && echo "CONFIG: src/content.config.ts"
test -f src/content/config.ts && echo "CONFIG: src/content/config.ts"
```
