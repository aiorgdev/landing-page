# Landing Page Kit

[![Version](https://img.shields.io/badge/version-3.0.3-blue)](https://github.com/aiorgdev/landing-page/releases)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Free](https://img.shields.io/badge/price-free-brightgreen)](https://aiorg.dev/kits/landing-page)
[![Claude Code](https://img.shields.io/badge/built%20for-Claude%20Code-blueviolet)](https://docs.anthropic.com/en/docs/claude-code)

**Add GEO (Generative Engine Optimization) to any Astro project.** Make your content appear in AI responses from ChatGPT, Perplexity, Claude, and Google AI Overviews.

> This is NOT a template. It's an enhancement layer that works with ANY Astro project.

## Quick Start

```bash
npx @aiorg/cli init landing-page ~/my-site
cd ~/my-site
# Open in Claude Code, then run:
/setup
```

## What `/setup` Does

```
/setup
│
├─ No Astro project?
│  └─ Offers to install AstroWind (recommended, 4k+ GitHub stars)
│
├─ Astro project found?
│  └─ Analyzes your structure
│  └─ Copies GEO components to src/components/geo/
│  └─ Adds JSON-LD helpers to src/lib/schema.ts
│
└─ Not Astro? (Next.js, etc.)
   └─ Points you to SaaS Dev Team instead
```

## GEO Components

Components that help AI systems cite your content:

| Component | Purpose | Usage |
|-----------|---------|-------|
| `AnswerBox` | Direct answer block (40-60 words) | Top of article, answers the main question |
| `KeyTakeaway` | Highlighted insight | Key points throughout content |
| `StatCitation` | Statistic with source attribution | Every ~175 words for credibility |
| `FAQSection` | FAQ accordion with JSON-LD schema | Common questions at end of article |
| `FreshnessBadge` | Content recency indicator | Shows when content was last updated |

### Example Usage

```mdx
---
title: "How to Validate Your Startup Idea"
pubDate: 2026-02-01
---

import AnswerBox from '@/components/geo/AnswerBox.astro'
import StatCitation from '@/components/geo/StatCitation.astro'
import FAQSection from '@/components/geo/FAQSection.astro'

<AnswerBox>
Talk to 20+ potential customers before writing code.
Focus on understanding their problems, not pitching your solution.
</AnswerBox>

## Why Customer Interviews Matter

<StatCitation
  stat="42%"
  context="of startups fail because there's no market need"
  source="CB Insights"
  url="https://cbinsights.com/research/startup-failure-reasons/"
/>

<FAQSection questions={[
  {
    question: "How many interviews do I need?",
    answer: "Aim for 20-30. You'll see patterns after 10-15."
  }
]} />
```

## JSON-LD Helpers

Structured data functions in `schema.ts`:

| Function | Schema Type |
|----------|------------|
| `generateBlogPostSchema()` | BlogPosting with @id linking |
| `generateFAQSchema()` | FAQPage for FAQ sections |
| `generateBreadcrumbSchema()` | BreadcrumbList for navigation |
| `generateBlogIndexSchema()` | CollectionPage for blog index |

## Commands

| Command | What it does |
|---------|-------------|
| `/setup` | Detect environment, install template if needed, add GEO components |
| `/blog` | Create a new GEO-optimized blog post |
| `/deploy` | Deploy to Cloudflare Pages or Vercel |

## Why Astro?

Landing pages are content, not apps. They don't need a JavaScript runtime.

| Framework | Default JS sent to browser | Best for |
|-----------|---------------------------|----------|
| **Astro** | **0 KB** | Content sites, landing pages, blogs |
| Next.js | 70+ KB | Full-stack web apps with auth/DB |

Cloudflare acquired Astro in January 2026. Astro is backed by the company that runs 20% of the internet.

**Need auth, database, payments?** Use [SaaS Dev Team](https://aiorg.dev/kits/saas-dev-team) instead.

## Project Structure After `/setup`

```
your-project/
├── src/
│   ├── components/
│   │   ├── geo/                    # Added by /setup
│   │   │   ├── AnswerBox.astro
│   │   │   ├── KeyTakeaway.astro
│   │   │   ├── StatCitation.astro
│   │   │   ├── FAQSection.astro
│   │   │   └── FreshnessBadge.astro
│   │   └── ...                     # Your template's components
│   ├── content/
│   │   └── post/ or blog/          # Your content
│   └── lib/
│       └── schema.ts               # Added by /setup
├── .claude/                        # Kit commands & knowledge
│   ├── commands/
│   ├── knowledge/
│   └── templates/                  # Source files for /setup
└── CLAUDE.md
```

## GEO Best Practices

### For AI Citations

1. **Lead with the answer** — put AnswerBox at the top of every article
2. **Add statistics** — one StatCitation per ~175 words builds credibility
3. **Clear headings** — H2s should describe content (AI uses them for context)
4. **Include FAQ** — common questions with concise answers
5. **Stay fresh** — update dates regularly, use FreshnessBadge

### For SEO

1. Unique titles with primary keyword
2. Meta descriptions (150-160 characters)
3. Internal links between related posts
4. Descriptive image alt text
5. JSON-LD structured data via schema helpers

## Requirements

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) CLI
- Node.js 20+

## Related Kits

| Kit | When to use |
|-----|------------|
| [Idea OS](https://aiorg.dev/kits/idea-os) | Validate your idea before building |
| [SaaS Dev Team](https://aiorg.dev/kits/saas-dev-team) | Full-stack SaaS with auth, DB, payments |
| [Marketing OS](https://aiorg.dev/kits/marketing-os) | Automate content marketing and SEO |

## Links

- **Documentation:** https://aiorg.dev/docs/kits/landing-page
- **All kits:** https://aiorg.dev/kits
- **Issues:** https://github.com/aiorgdev/landing-page/issues

## License

MIT
