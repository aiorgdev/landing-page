# Blog System Quick Reference

This landing page includes a world-class blog system optimized for both traditional SEO and Generative Engine Optimization (GEO).

**For the complete guide with research sources, see: `seo-geo-masterguide.md`**

---

## Quick Start

1. Create a post in `src/content/blog/my-post.mdx`
2. Add frontmatter (see template below)
3. Use GEO components for AI citations
4. Visit `/blog` to see your posts

---

## Frontmatter Template

```yaml
---
title: "How to X: Complete Guide (2025)"
description: "150-160 char description with target keyword"
date: "2025-01-31"
lastUpdated: "2025-01-31"
author:
  name: "Author Name"
  twitter: "@handle"
  jobTitle: "Founder"
  company: "Company"
  linkedin: "https://linkedin.com/in/handle"
featuredImage: "/blog/image.jpg"
tags: ["tag1", "tag2", "tag3"]
targetKeyword: "primary keyword"
directAnswer: "2-3 sentence TL;DR that AI can quote directly"
articleType: "HowToArticle"
---
```

---

## GEO Components

| Component | Purpose | Usage |
|-----------|---------|-------|
| `<AnswerBox>` | Direct answer (40-60 words) | TOP of article |
| `<KeyTakeaway>` | Highlighted insight | 2-3 per article |
| `<StatCitation>` | Stats with source | 1 per 175 words |
| `<FAQSection>` | FAQ + JSON-LD | End of article |
| `<FreshnessBadge>` | Last updated | Auto-shown if `lastUpdated` set |

---

## Key Metrics

| Metric | Target | Why |
|--------|--------|-----|
| Direct answer | 40-60 words | 35% better AI inclusion |
| Stats density | 1 per 175 words | 4.1x more citations |
| Freshness | Update <30 days | 3.2x more citations |
| Word count | 1,500-2,500 | Comprehensive coverage |

---

## Images

Use **Unsplash**: https://unsplash.com

- Download to `public/blog/`
- 1200x630 for featured images
- Descriptive filenames: `landing-page-conversion.jpg`

---

## File Structure

```
src/
├── content/blog/          # Your MDX posts
├── components/
│   ├── blog/              # Blog UI components
│   └── geo/               # GEO components
├── lib/
│   ├── blog.ts            # Blog utilities
│   └── schema.ts          # JSON-LD generators
└── app/
    ├── blog/              # Blog routes
    ├── sitemap.ts         # Auto sitemap
    ├── robots.ts          # Crawler rules
    └── feed.xml/          # RSS feed
```

---

## Commands

- `/blog new [topic]` - Create new post
- `/blog optimize [file]` - Optimize existing
- `/blog ideas` - Generate content ideas
- `/blog audit` - Check GEO quality
