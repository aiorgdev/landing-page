# SEO & GEO Master Guide

This guide synthesizes research from 15+ authoritative sources on how to optimize blog content for both traditional search engines (Google, Bing) and AI systems (ChatGPT, Perplexity, Claude, Google AI Overviews).

---

## Part 1: Understanding the Landscape

### What is GEO?

**Generative Engine Optimization (GEO)** is optimizing content to appear as sources and citations in AI-generated responses. Unlike traditional SEO (climbing SERPs through keywords), GEO focuses on how LLMs fetch, filter, and synthesize information.

### Key Statistics

- **AI traffic up 527%** - AI-referred sessions jumped 527% between January and May 2025
- **1 billion+ daily prompts** - ChatGPT alone processes over 1 billion prompts daily
- **71% of Americans** use AI search to research purchases
- **LLMs cite only 2-7 domains** per response (vs Google's 10 blue links)
- **Content freshness** - Content updated within 30 days earns 3.2x more AI citations

### Platform Differences

| Platform | Primary Signal | Citation Style | Preferred Content |
|----------|---------------|----------------|-------------------|
| **ChatGPT** | Wikipedia dominance (43%) | Authoritative, encyclopedic | Training data + browsing |
| **Perplexity** | Reddit (6.6%), freshness | Real-time, user experiences | Content <2 hours old gets 38% more citations |
| **Google AI Overviews** | Existing top-ranking content | Multiple sources synthesized | Featured snippet optimized |
| **Claude** | Source authority, E-E-A-T | Grounded in provided documents | Deep expertise, balanced |

---

## Part 2: Content Structure for AI Citations

### The Answer-First Pattern

AI systems prefer content that provides **direct answers immediately**. Research shows:

> "Pages with paragraph-length summaries at the top have 35% better inclusion in AI-generated snippets"

**Implementation:**

1. **Answer Capsule** (40-60 words): Place direct answer in first paragraph under each H2
2. **Inverted Pyramid**: Most critical information at top, details below
3. **Test**: "Can someone copy the first two sentences and still have the answer?"

**Example:**

```markdown
## How Long Should a Landing Page Be?

A high-converting landing page should be 1,500-3,000 words, long enough
to address objections but short enough to maintain attention. The key
is answering every question your prospect might have.

[Then expand with details, examples, data...]
```

### Content Length Guidelines

| Purpose | Recommended Length |
|---------|-------------------|
| SEO/Ranking | 1,500-2,500 words |
| AI Overview appearance | Concise answer blocks (40-60 words per section) |
| Pillar pages | 1,500-3,000 words |
| Social sharing | 1,000-1,800 words |
| Service pages | 500-1,000 words |

**Important:** Word count is NOT a direct ranking factor, but comprehensive coverage is.

### Statistics Density

Research shows:
- Pages with **original data tables earn 4.1x more AI citations**
- Adding **specific statistics boosts citation performance by 5.5%+**
- **Keep statistics current** - content updated within 30 days earns 3.2x more citations

**Best Practice:** Include one statistic every 150-200 words throughout your content.

---

## Part 3: Schema Markup Implementation

### Why Schema Matters for GEO

- Sites with structured data see **up to 30% higher visibility** in AI overviews
- Proper Article and FAQ schema increases AI citations by **28%**
- JSON-LD is used by 45,000,000+ domains
- Entity-rich markup can deliver **15× AI search visibility**

### Required BlogPosting Schema Properties

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": "https://yoursite.com/blog/post-slug#article",
  "headline": "Your Title (under 60 chars)",
  "description": "Meta description 150-160 chars",
  "datePublished": "2025-01-31",
  "dateModified": "2025-02-01",
  "wordCount": 2000,
  "author": {
    "@type": "Person",
    "@id": "https://yoursite.com/authors/name#person",
    "name": "Author Name",
    "jobTitle": "Founder",
    "sameAs": ["https://twitter.com/handle", "https://linkedin.com/in/handle"]
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://yoursite.com#organization"
  }
}
```

### Author Schema for E-E-A-T

Author schema directly improves E-E-A-T by:
- Attributing content to a specific expert
- Linking credentials (jobTitle, education, awards)
- Connecting to verifiable profiles (sameAs)

**Best Practice:** Create dedicated author bio pages with:
- Qualifications and expertise
- Professional headshot
- Links to all articles by the author
- External links demonstrating expertise

### FAQ Schema

FAQPage schema is particularly effective because it pre-formats content as question-answer pairs that AI systems can easily extract:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is a landing page?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A landing page is a standalone web page..."
    }
  }]
}
```

---

## Part 4: E-E-A-T Optimization

### What is E-E-A-T?

**E-E-A-T** = Experience, Expertise, Authoritativeness, Trustworthiness

Google uses E-E-A-T to evaluate content quality. AI systems also factor this into citation decisions.

### Demonstrating E-E-A-T

**Experience:**
- Share first-hand experiences and case studies
- Include personal anecdotes (Perplexity loves these)
- Show proof of actual work in the field

**Expertise:**
- Display author credentials prominently
- Link to professional profiles
- Include relevant qualifications in schema

**Authoritativeness:**
- Get mentioned on reputable third-party sites
- Build backlinks from authoritative domains
- Publish original research

**Trustworthiness:**
- Cite sources for all claims
- Keep content updated
- Display clear author information
- Include contact information

### Author Bio Best Practices

```markdown
## About the Author

**Jane Doe** is a Conversion Optimization Specialist at [Company]
with 10+ years of experience optimizing landing pages for SaaS companies.
She's helped clients increase conversion rates by an average of 47%.

- [Twitter](https://twitter.com/janedoe)
- [LinkedIn](https://linkedin.com/in/janedoe)
- [All articles by Jane](/authors/jane-doe)
```

---

## Part 5: Platform-Specific Optimization

### For ChatGPT

- **Wikipedia-style content**: Factual, encyclopedic, well-structured
- **Authoritative domains**: ChatGPT favors established publications
- **Fresh content**: 60.5% of cited pages published within last 2 years
- **Commerce queries**: Amazon (19%) and Reddit (15%) dominate

### For Perplexity

- **Content freshness is #1**: 40% weight on recency
- **Reddit-style authenticity**: User experiences, personal anecdotes
- **Real-time relevance**: 50% of citations are content from 2025
- **Direct answers**: Start sections with clear, direct responses
- **Avoid polished marketing copy**: Casual, authentic tone wins

### For Google AI Overviews

- **Featured snippet optimization**: Content in snippets feeds AI Overviews
- **8+ word queries**: 7x more likely to trigger AI Overviews
- **157 words average**: Keep answer blocks concise and extractable
- **Already ranking content**: Pages in top 2 positions most likely to appear
- **Hierarchical headings**: Clear H2/H3 structure

### For Claude

- **Deep expertise**: Specialized knowledge over generic content
- **Balanced perspectives**: Multiple viewpoints on complex topics
- **Evidence-based claims**: Clear citations and sources
- **Source authority**: E-E-A-T signals matter significantly

---

## Part 6: Technical SEO Checklist

### Core Web Vitals

- **LCP (Largest Contentful Paint)**: Under 2.5 seconds
- **INP (Interaction to Next Paint)**: Replaced FID in 2024
- **CLS (Cumulative Layout Shift)**: Minimize visual instability

**LCP directly affects SEO rankings.** Common issues to avoid:

| Issue | Impact | Fix |
|-------|--------|-----|
| `content-visibility: auto` on hero | +500ms LCP | Remove from above-fold images |
| `loading="lazy"` on hero image | +300ms LCP | Use `loading="eager"` + `fetchpriority="high"` |
| Chat widgets (Crisp, Intercom) sync load | +300-800ms | Load on scroll/interaction, not page load |
| Analytics in `<head>` without defer | +200-500ms | Add `defer` or move to body end |
| Unused font weights | +100-300ms | Import only weights you use (400, 600) |
| Hero image > 500KB | +500ms+ | Compress to < 200KB, use WebP/AVIF |
| No preload for LCP image | +100-300ms | Add `<link rel="preload" as="image">` |
| Astro `output: "server"` | +50-1500ms TTFB | Use `"hybrid"` or `"static"` |

**Quick wins for Astro projects:**
```javascript
// astro.config.mjs
export default defineConfig({
  output: 'hybrid', // Not 'server' - prerender static pages
  compressHTML: true,
})
```

```html
<!-- Hero image preload in <head> -->
<link rel="preload" href="/hero.webp" as="image" fetchpriority="high">

<!-- Defer third-party scripts -->
<script defer src="https://analytics.example.com/script.js"></script>
```

### robots.txt for AI Crawlers

Allow AI bots to crawl your content:

```
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /
```

### Internal Linking Strategy

**CRITICAL: Homepage must link directly to blog posts.**

Google treats pages discovered only through sitemap as less important than pages discovered through internal links. If your homepage only links to `/blog` (the index), and individual posts are only reachable via the blog listing or sitemap, Google may:
- Deprioritize crawling those posts
- Leave them in "Discovered - currently not indexed" limbo
- Assign lower PageRank to them

**The fix:** Add a "Latest Posts" or "From Our Blog" section on your homepage that links directly to 3-4 recent blog posts. This is the single most effective internal linking change for a new site with DR 0-10.

**Why it works:**
- Homepage is the most crawled page on any site
- Direct links from homepage = "these pages are important, crawl them"
- Increases crawl priority for new blog posts
- Passes link equity from your highest-authority page
- Reduces click depth from 3 (homepage → /blog → post) to 1 (homepage → post)

**Topic Cluster Model:**

```
Homepage
    ├── Latest Posts section (3-4 direct links to recent posts)
    └── /blog (index)
            ├── Cluster Article 1 (specific subtopic)
            ├── Cluster Article 2 (specific subtopic)
            ├── Cluster Article 3 (specific subtopic)
            └── Cluster Article 4 (specific subtopic)
```

**Best Practices:**
- Homepage links directly to 3-4 most recent/important blog posts
- Every cluster page links back to pillar with keyword-rich anchor text
- 10-20 internal links per pillar page is optimal
- Limit click depth to 3 or fewer from homepage
- Use descriptive anchor text (not "click here")
- Update homepage "Latest Posts" when publishing new content

---

## Part 7: Content Creation Workflow

### Pre-Writing Checklist

1. [ ] Identify target keyword
2. [ ] Analyze top 3-5 ranking articles for that keyword
3. [ ] Define search intent (informational, commercial, transactional)
4. [ ] Plan content length based on competitor analysis
5. [ ] Outline with H2/H3 structure
6. [ ] Plan statistics (1 per 150-200 words)
7. [ ] Prepare FAQ section (3-5 questions)

### Writing Checklist

1. [ ] Write direct answer in first 40-60 words of each section
2. [ ] Include `<AnswerBox>` at top with main takeaway
3. [ ] Add `<KeyTakeaway>` for 2-3 important insights
4. [ ] Include `<StatCitation>` with sources
5. [ ] Write `directAnswer` frontmatter (2-3 sentence TL;DR)
6. [ ] Add `<FAQSection>` at end

### Post-Writing Checklist

1. [ ] Title under 60 characters, keyword near beginning
2. [ ] Meta description 150-160 characters
3. [ ] Featured image from Unsplash (1200x630)
4. [ ] Internal links to related content (5-10 links)
5. [ ] External links to authoritative sources (2-5 links)
6. [ ] Schema markup validated
7. [ ] `lastUpdated` date set

---

## Part 8: Measuring Success

### Traditional SEO Metrics

- Organic traffic
- Keyword rankings
- Backlinks acquired
- Click-through rate (CTR)

### GEO-Specific Metrics

- **Citation Share**: % of AI responses citing your content
- **AI Citation Rate**: Cited pages / tracked pages
- **Response Inclusion Rate**: Prompts including your brand / total tested
- **Visibility Score**: More important than rank in GEO

### Tools for Monitoring

- Google Search Console (traditional SEO)
- Ahrefs/SEMrush (backlinks, keywords)
- Manual testing with ChatGPT, Perplexity, Claude
- Track brand mentions in AI responses

---

## Part 9: GEO Components Reference

### AnswerBox

```mdx
<AnswerBox>
A landing page needs 7 key sections: hero, social proof, features,
pricing, FAQ, and CTA. Your headline is the most critical element.
</AnswerBox>
```

**When to use:** Top of article, directly answers the main question.
**GEO impact:** +30 points (high)

### KeyTakeaway

```mdx
<KeyTakeaway>
Your headline should communicate unique value in under 10 words.
</KeyTakeaway>
```

**When to use:** 2-3 times throughout article for key insights.
**GEO impact:** +10 points

### StatCitation

```mdx
<StatCitation
  stat="Landing pages with social proof convert 34% better"
  source="Unbounce Conversion Benchmark Report"
  year="2024"
  url="https://unbounce.com/report"
/>
```

**When to use:** Every 150-200 words when citing data.
**GEO impact:** +15 points

### FAQSection

```mdx
<FAQSection items={[
  {
    question: "What is a landing page?",
    answer: "A standalone web page designed for a marketing campaign..."
  }
]} />
```

**When to use:** End of article, 3-5 common questions.
**GEO impact:** +15 points (includes JSON-LD schema)

### FreshnessBadge

Automatically displayed when `lastUpdated` frontmatter is set.
**GEO impact:** +15 points (signals content recency)

---

## Part 10: Quick Reference Card

### The Perfect Blog Post Formula

```
1. Title (under 60 chars, keyword at start)
2. Featured image (Unsplash, 1200x630)
3. AnswerBox (40-60 words, main answer)
4. Introduction (hook + expertise signal)
5. H2 Section 1
   - Direct answer first paragraph
   - Supporting details
   - StatCitation
6. H2 Section 2
   - Direct answer first paragraph
   - KeyTakeaway
   - Examples
7. H2 Section 3...
8. FAQSection (3-5 questions)
9. Conclusion with CTA
10. Author bio with credentials
```

### Frontmatter Template

```yaml
---
title: "How to X: Complete Guide (2025)"
description: "150-160 char description with target keyword"
date: "2025-01-31"
lastUpdated: "2025-01-31"
author:
  name: "Author Name"
  twitter: "@handle"
  jobTitle: "Title"
  company: "Company"
  linkedin: "https://linkedin.com/in/handle"
featuredImage: "/blog/image.jpg"
tags: ["tag1", "tag2", "tag3"]
targetKeyword: "target keyword"
directAnswer: "2-3 sentence quotable answer. This is what AI will cite directly. Make it complete and standalone."
articleType: "HowToArticle"
---
```

---

## Sources

This guide synthesizes research from:

- [tryprofound.com - GEO Guide 2025](https://www.tryprofound.com/guides/generative-engine-optimization-geo-guide-2025)
- [directiveconsulting.com - GEO Best Practices](https://directiveconsulting.com/blog/a-guide-to-generative-engine-optimization-geo-best-practices/)
- [searchengineland.com - AI Citation Research](https://searchengineland.com/how-to-get-cited-by-ai-seo-insights-from-8000-ai-citations-455284)
- [ahrefs.com - ChatGPT Citation Analysis](https://ahrefs.com/blog/most-cited-domains-in-chatgpt/)
- [Google Search Central - Article Schema](https://developers.google.com/search/docs/appearance/structured-data/article)
- [firebrand.marketing - GEO 2026](https://www.firebrand.marketing/2025/12/geo-best-practices-2026/)
- [rankshift.ai - Perplexity Optimization](https://www.rankshift.ai/blog/how-to-get-cited-as-a-source-in-perplexity-ai/)
- [brightedge.com - Claude Search Best Practices](https://www.brightedge.com/claude-search)
