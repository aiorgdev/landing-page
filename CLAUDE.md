# Landing Page Kit

## What This Is

This kit adds **GEO (Generative Engine Optimization)** to any Astro project. GEO helps your content appear in AI responses (ChatGPT, Perplexity, Claude, Google AI Overviews).

**This is NOT a complete template.** It's an enhancement layer that works with ANY Astro project.

## Quick Start

```bash
# 1. Install the kit
npx @aiorg/cli init landing-page ~/my-project
cd ~/my-project

# 2. Open Claude Code and run
/setup
```

The `/setup` command will:
1. Check if you have an Astro project
2. If not, help you install one (recommends AstroWind)
3. Analyze your project structure
4. Add GEO components to the right places

## What's Included

### GEO Components (`.claude/templates/components/geo/`)

These components are copied to your project during `/setup`:

| Component | Purpose | When to Use |
|-----------|---------|-------------|
| `AnswerBox` | Direct answer (40-60 words) | Top of article, answers main question |
| `KeyTakeaway` | Highlighted insight | Key points throughout content |
| `StatCitation` | Statistic with source | Every ~175 words for credibility |
| `FAQSection` | FAQ with JSON-LD schema | Common questions at end |
| `FreshnessBadge` | Content recency indicator | Shows last update date |

### JSON-LD Helpers (`.claude/templates/lib/schema.ts`)

Functions for structured data:
- `generateBlogPostSchema()` - Article markup
- `generateFAQSchema()` - FAQ markup
- `generateBreadcrumbSchema()` - Navigation
- `generateBlogIndexSchema()` - Blog listing

### Knowledge Files (`.claude/knowledge/`)

- `seo-geo-guide.md` - Research-backed best practices
- `astro-patterns.md` - How to recognize Astro project structures
- `geo-components.md` - Component usage guide

## Commands

| Command | Description |
|---------|-------------|
| `/setup` | **Start here.** Detects environment, installs template if needed, adds GEO components |
| `/blog` | Create a new GEO-optimized blog post |
| `/deploy` | Deploy to Cloudflare Pages or Vercel |

## How /setup Works

The `/setup` command adapts to YOUR project:

```
/setup
│
├─ No Astro project found?
│  └─ "Want to install AstroWind? (recommended)"
│     └─ Runs: npm create astro@latest -- --template onwidget/astrowind .
│
├─ Astro project exists?
│  └─ Analyzes structure:
│     • Where is content? (src/content/post/, src/content/blog/, etc.)
│     • Where are components? (src/components/)
│     • What schema fields exist?
│  └─ Copies GEO components to appropriate location
│  └─ Shows how to use them
│
└─ Non-Astro project (Next.js, etc.)?
   └─ "This kit is for Astro. For Next.js → use SaaS Dev Team"
```

## Why Astro?

Landing pages are content, not apps. They don't need React's 70KB runtime.

| Framework | Default JS | Best For |
|-----------|------------|----------|
| Astro | 0 KB | Content sites, landing pages |
| Next.js | 70+ KB | Full-stack web apps |

Cloudflare acquired Astro in January 2026. It's backed by the company that runs 20% of the internet.

**Need auth, database, payments?** Use [SaaS Dev Team](https://aiorg.dev/kits/saas-starter) instead.

## Using GEO Components

After `/setup`, import and use in your MDX posts:

```mdx
---
title: "How to Validate Your Startup Idea"
description: "A practical guide to customer discovery"
pubDate: 2026-02-01
---

import AnswerBox from '@/components/geo/AnswerBox.astro'
import KeyTakeaway from '@/components/geo/KeyTakeaway.astro'
import StatCitation from '@/components/geo/StatCitation.astro'
import FAQSection from '@/components/geo/FAQSection.astro'

<AnswerBox>
To validate a startup idea, talk to 20+ potential customers before writing code.
Focus on understanding their problems, not pitching your solution.
</AnswerBox>

## Why Customer Interviews Matter

<StatCitation
  stat="42%"
  context="of startups fail because there's no market need"
  source="CB Insights"
  url="https://cbinsights.com/research/startup-failure-reasons/"
/>

<KeyTakeaway>
The goal of validation is to find reasons NOT to build.
</KeyTakeaway>

<FAQSection questions={[
  {
    question: "How many interviews do I need?",
    answer: "Aim for 20-30. You'll see patterns after 10-15."
  }
]} />
```

## GEO Best Practices

### For AI Citations

1. **Lead with the answer** - AnswerBox at the top
2. **Add statistics** - One StatCitation per ~175 words
3. **Clear structure** - H2s that describe content
4. **Include FAQ** - Common questions with concise answers
5. **Stay fresh** - Update dates, use FreshnessBadge

### For SEO

1. **Unique titles** - Include primary keyword
2. **Meta descriptions** - 150-160 characters
3. **Internal links** - Link between related posts
4. **Image alt text** - Descriptive
5. **Schema markup** - Use JSON-LD helpers

## Project Structure After /setup

```
your-project/                    # AstroWind or other template
├── src/
│   ├── components/
│   │   ├── geo/                 # ← Added by /setup
│   │   │   ├── AnswerBox.astro
│   │   │   ├── KeyTakeaway.astro
│   │   │   ├── StatCitation.astro
│   │   │   ├── FAQSection.astro
│   │   │   └── FreshnessBadge.astro
│   │   └── ...                  # Template components
│   ├── content/
│   │   └── post/ or blog/       # Your content
│   ├── lib/
│   │   └── schema.ts            # ← Added by /setup
│   └── ...
├── .claude/                     # ← From kit
│   ├── commands/
│   ├── knowledge/
│   └── templates/               # Source for /setup copies
└── CLAUDE.md                    # ← From kit
```

## Recommended Template: AstroWind

When `/setup` asks which template to use, we recommend **AstroWind**:

- 4,100+ GitHub stars
- Active maintenance
- Blog built-in
- Dark mode
- Mobile responsive
- SEO optimized

Other options:
- **Astro Starter** - Minimal, for advanced users
- **Starlight** - For documentation sites
- **Your own** - Any Astro project works

## Troubleshooting

### "GEO components not found after import"

Restart the dev server after `/setup`:
```bash
# Stop (Ctrl+C), then:
npm run dev
```

### "MDX imports not working"

Check if MDX is installed:
```bash
npx astro add mdx
```

### "Styles look different"

GEO components include fallback CSS that works without Tailwind. If your template uses Tailwind, they'll use Tailwind classes instead.

## Version History

See `.claude/version.json` for changelog.

## Cross-Kit Integration

**Coming from Idea OS?**
Your validation insights can inform landing page copy.

**Ready to build full product?**
```bash
npx @aiorg/cli init saas-dev-team ~/my-saas
```

**Need marketing automation?**
```bash
npx @aiorg/cli init marketing-os .
```
