# GEO Components Guide

GEO (Generative Engine Optimization) components help your content appear in AI responses from ChatGPT, Perplexity, Claude, and Google AI Overviews.

## Why GEO Matters

AI systems cite content that is:
1. **Clearly structured** - Distinct sections, clear headings
2. **Directly quotable** - Self-contained answers
3. **Credibly sourced** - Statistics with attribution
4. **Fresh** - Recently updated content
5. **Schema-marked** - JSON-LD structured data

GEO components are designed to satisfy all these criteria.

## Component Overview

| Component | Purpose | Placement |
|-----------|---------|-----------|
| `AnswerBox` | Direct answer to main question | Top of article, after intro |
| `KeyTakeaway` | Important insight | Throughout, at key points |
| `StatCitation` | Statistic with source | Every ~175 words |
| `FAQSection` | Common questions | End of article |
| `FreshnessBadge` | Content recency | Near title or meta |

## AnswerBox

**Purpose**: Provides a direct, quotable answer that AI can cite verbatim.

**Best practices**:
- 40-60 words (optimal for AI extraction)
- Answer the article's main question directly
- Use clear, factual language
- Avoid hedging or qualifiers

**Usage**:
```mdx
<AnswerBox>
To validate a startup idea, talk to 20+ potential customers before
writing any code. Focus on understanding their problems deeply, not
pitching your solution. The goal is to find reasons NOT to build.
</AnswerBox>
```

**Placement**: After the opening paragraph, before the first H2.

**Why it works**: AI systems look for self-contained answer blocks. The visual distinction and semantic markup (`role="complementary"`) signals this is a key answer.

## KeyTakeaway

**Purpose**: Highlights important insights that readers (and AI) should remember.

**Best practices**:
- One sentence, max two
- Make it memorable and actionable
- Use strong, clear language
- Don't repeat the surrounding text verbatim

**Usage**:
```mdx
<KeyTakeaway>
The best headlines communicate your unique value in under 10 words.
</KeyTakeaway>
```

**Placement**: After explaining a concept, to reinforce the key point.

**Why it works**: The visual callout and `role="note"` tells AI this is worth extracting. Studies show AI cites highlighted content 23% more often.

## StatCitation

**Purpose**: Adds credibility with properly attributed statistics.

**Best practices**:
- Include source name and URL
- Use recent statistics (last 2-3 years)
- One stat per ~175 words (research-backed density)
- Make the statistic relevant to your point

**Usage**:
```mdx
<StatCitation
  stat="42% of startups fail because there's no market need"
  source="CB Insights"
  year="2024"
  url="https://cbinsights.com/research/startup-failure-reasons/"
/>
```

**Props**:
- `stat` (required): The statistic text
- `source` (required): Source name
- `year` (optional): Publication year
- `url` (optional): Link to source

**Why it works**: AI systems prioritize content with verifiable sources. The structured format makes it easy to extract and cite with attribution.

## FAQSection

**Purpose**: Answers common questions with automatic JSON-LD schema.

**Best practices**:
- 3-7 questions per section
- Keep answers concise (2-4 sentences)
- Use actual questions people ask (check Google's "People also ask")
- Put most important questions first

**Usage**:
```mdx
<FAQSection questions={[
  {
    question: "How many customer interviews do I need?",
    answer: "Aim for 20-30 interviews to identify patterns. You'll start seeing consistent themes after 10-15 conversations."
  },
  {
    question: "What if nobody wants to talk to me?",
    answer: "Start with your existing network. Offer to buy coffee, ask for just 15 minutes, and be genuinely curious about their problems."
  },
  {
    question: "Should I show my prototype in interviews?",
    answer: "Not initially. Focus on understanding problems first. Show solutions only after you've validated the problem exists."
  }
]} />
```

**Placement**: End of article, before conclusion.

**Why it works**:
1. The FAQPage JSON-LD schema tells AI exactly how to parse Q&A content
2. FAQ-style content matches how people query AI assistants
3. Concise answers are easily extractable

## FreshnessBadge

**Purpose**: Signals content recency to both users and AI systems.

**Best practices**:
- Show actual last updated date, not publish date
- Update content regularly (quarterly at minimum)
- Place prominently near the title

**Usage**:
```mdx
<FreshnessBadge lastUpdated="2026-01-15" />

// Or with a Date object from frontmatter
<FreshnessBadge lastUpdated={frontmatter.lastUpdated} />
```

**Props**:
- `lastUpdated` (required): Date string or Date object

**Appearance**:
- Green badge: Updated within 30 days
- Gray badge: Older than 30 days

**Why it works**: AI systems factor freshness into citation decisions. Recent content is cited more often, especially for rapidly evolving topics.

## Complete Example

```mdx
---
title: "How to Validate Your Startup Idea in 2026"
description: "A practical guide to customer discovery and idea validation"
pubDate: 2026-02-01
lastUpdated: 2026-02-01
author:
  name: "Jane Founder"
  twitter: "@janefounder"
tags: ["validation", "customer-discovery", "startups"]
---

import AnswerBox from '~/components/geo/AnswerBox.astro'
import KeyTakeaway from '~/components/geo/KeyTakeaway.astro'
import StatCitation from '~/components/geo/StatCitation.astro'
import FAQSection from '~/components/geo/FAQSection.astro'
import FreshnessBadge from '~/components/geo/FreshnessBadge.astro'

<FreshnessBadge lastUpdated="2026-02-01" />

# How to Validate Your Startup Idea

Most founders skip validation and regret it later. Here's how to do it right.

<AnswerBox>
To validate a startup idea, conduct 20+ customer interviews before writing code.
Focus on understanding problems, not pitching solutions. The goal is to find
reasons NOT to build, not to confirm your assumptions.
</AnswerBox>

## Why Most Ideas Fail

<StatCitation
  stat="42% of startups fail because there's no market need"
  source="CB Insights"
  year="2024"
  url="https://cbinsights.com/research/startup-failure-reasons/"
/>

This isn't about bad execution—it's about building things nobody wants.

<KeyTakeaway>
The best validation finds reasons NOT to build. If you can't find any after
20+ interviews, you might have something worth building.
</KeyTakeaway>

## The Interview Process

[Content about conducting interviews...]

<StatCitation
  stat="Founders who validate properly are 2.5x more likely to succeed"
  source="Startup Genome Report"
  year="2023"
  url="https://startupgenome.com/report"
/>

## Common Questions

<FAQSection questions={[
  {
    question: "How many customer interviews do I need?",
    answer: "Aim for 20-30 interviews. You'll see patterns after 10-15."
  },
  {
    question: "What questions should I ask?",
    answer: "Focus on their problems, not your solution. Ask about current workflows, pain points, and what they've tried before."
  },
  {
    question: "How do I find people to interview?",
    answer: "Start with your network, then expand to LinkedIn, Twitter, and relevant communities. Offer value in return."
  }
]} />

## Conclusion

[Wrap up...]
```

## Density Guidelines

Based on research from Semrush, Ahrefs, and AI citation studies:

| Article Length | AnswerBox | KeyTakeaway | StatCitation | FAQSection |
|---------------|-----------|-------------|--------------|------------|
| 500 words | 1 | 1-2 | 2-3 | 1 (3 items) |
| 1000 words | 1 | 2-3 | 4-6 | 1 (5 items) |
| 2000 words | 1-2 | 4-5 | 8-12 | 1-2 (5-7 items each) |

**Rule of thumb**: One StatCitation per ~175 words.

## Import Paths

Depending on your project setup:

```astro
// AstroWind
import AnswerBox from '~/components/geo/AnswerBox.astro'

// With @/ alias
import AnswerBox from '@/components/geo/AnswerBox.astro'

// Relative path
import AnswerBox from '../../components/geo/AnswerBox.astro'
```

Check your `tsconfig.json` for configured path aliases.

## Styling

GEO components include:
1. **Tailwind classes** - Used when Tailwind is available
2. **Fallback CSS** - Works without Tailwind
3. **Dark mode** - Automatic via `prefers-color-scheme`

If your template uses custom colors, you may want to adjust the component styles to match your brand.
