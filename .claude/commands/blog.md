# /blog - Create GEO-Optimized Blog Posts

Create blog posts optimized for AI citation (ChatGPT, Perplexity, Claude, Google AI Overviews).

This command adapts to YOUR project structure - it will find where your content lives and create posts there.

## USAGE

```
/blog [action] [topic]
```

**Actions:**
- `new` - Create a new blog post (default)
- `optimize` - Optimize an existing post for SEO/GEO
- `ideas` - Generate blog post ideas
- `audit` - Audit content quality and GEO signals

---

## CRITICAL: DETECT PROJECT STRUCTURE FIRST

Before creating any content, you MUST detect the project structure:

```bash
# Find content directory
for dir in src/content/post src/content/blog src/content/posts src/content/articles; do
  test -d "$dir" && echo "CONTENT_DIR: $dir"
done

# Find import alias
cat tsconfig.json 2>/dev/null | grep -E '"~|"@' | head -1
```

**Store results:**
- `CONTENT_DIR` = where to create posts (e.g., `src/content/post/`)
- `IMPORT_ALIAS` = how to import components (e.g., `~/` or `@/`)

**If no content directory found:**
"I don't see a content directory. Your project might not have a blog set up yet.

Common locations:
- AstroWind: `src/content/post/`
- Generic: `src/content/blog/`

Would you like me to check your project structure?"

---

## Research-Backed Guidelines

**Read first:** `.claude/knowledge/seo-geo-masterguide.md`

### Key Statistics

- AI-referred traffic up **527%** in 2025
- LLMs cite only **2-7 domains** per response
- Content updated within 30 days earns **3.2x more citations**
- Pages with original data earn **4.1x more AI citations**
- Direct answers in first 40-60 words improve citation rate by **35%**

---

## Creating a New Post

### Step 1: Detect Structure

Run the detection commands above. Store `CONTENT_DIR` and `IMPORT_ALIAS`.

### Step 2: Gather Information

Ask the user:
1. **Topic**: What is the main topic/question?
2. **Target keyword**: What should this rank for?
3. **Audience**: Who is reading this?
4. **Goal**: Inform, convert, or build authority?

### Step 3: Check GEO Components

```bash
# Verify GEO components exist
test -d src/components/geo && echo "GEO_READY" || echo "GEO_MISSING"
```

**If GEO_MISSING:**
"GEO components are not installed yet. Run `/setup` first to add them."

### Step 4: Create the MDX File

Create in `[CONTENT_DIR]/[slug].mdx`:

**IMPORTANT:** Use the detected `IMPORT_ALIAS` for imports!

```mdx
---
# Frontmatter - adapt field names to match your content schema
title: "How to [X]: Complete Guide (2026)"
description: "150-160 char description with target keyword near start"
pubDate: 2026-XX-XX          # or 'date' depending on schema
# Add other fields your schema requires
---

import AnswerBox from '[IMPORT_ALIAS]components/geo/AnswerBox.astro'
import KeyTakeaway from '[IMPORT_ALIAS]components/geo/KeyTakeaway.astro'
import StatCitation from '[IMPORT_ALIAS]components/geo/StatCitation.astro'
import FAQSection from '[IMPORT_ALIAS]components/geo/FAQSection.astro'

# How to [X]

<AnswerBox>
Direct, quotable 40-60 word answer to the main question. This standalone
paragraph should completely answer what the reader is looking for. AI systems
will extract and cite this verbatim.
</AnswerBox>

Brief introduction (2-3 sentences) establishing credibility and what
the reader will learn.

## First H2 Section

**Direct answer first:** Start with the answer to this section's implied
question in the first paragraph (40-60 words).

Then expand with details, examples, and context...

<KeyTakeaway>
One memorable insight from this section that readers should remember.
</KeyTakeaway>

## Second H2 Section

**Direct answer first:** Again, lead with the answer.

Include data where relevant:

<StatCitation
  stat="Your compelling statistic with specific number"
  source="Authoritative Source Name"
  year="2024"
  url="https://source-url.com"
/>

## Third H2 Section

Continue pattern: answer first, then elaborate...

## Frequently Asked Questions

<FAQSection questions={[
  {
    question: "First common question about the topic?",
    answer: "Clear, direct answer in 2-3 sentences. Make it quotable."
  },
  {
    question: "Second common question?",
    answer: "Another standalone answer that AI can cite directly."
  },
  {
    question: "Third common question?",
    answer: "Final answer, same pattern."
  }
]} />

## Conclusion

Summarize key points and include a call to action.
```

### Step 5: Verify Content Schema

Read the project's content config to understand what fields are required:

```bash
# Astro 5+
test -f src/content.config.ts && cat src/content.config.ts

# Astro 4
test -f src/content/config.ts && cat src/content/config.ts
```

**Adapt frontmatter to match the schema:**
- Some projects use `pubDate`, others use `date`
- Some require `author` as object, others as string
- Some have required fields like `image` or `category`

### Step 6: Verify GEO Checklist

**CRITICAL:** Every post MUST have:

- [ ] `<AnswerBox>` with 40-60 word direct answer at TOP
- [ ] At least 1 `<StatCitation>` per 200 words
- [ ] `<FAQSection>` with 3-5 questions at end
- [ ] 2-3 `<KeyTakeaway>` throughout article
- [ ] Clear H2 structure with descriptive headings

### Step 7: Verify Build

After creating the post:

```bash
npm run build 2>&1 | tail -20
```

**If build fails:**
- Check frontmatter matches schema
- Check import paths are correct
- Check component syntax

---

## Platform-Specific Tips

### For ChatGPT Citations
- Wikipedia-style factual content
- Encyclopedic structure
- Fresh content (within 2 years)

### For Perplexity Citations
- **Freshness is #1** - update content regularly
- User experiences and personal anecdotes
- Casual, authentic tone

### For Google AI Overviews
- Optimize for featured snippets
- Keep answer blocks concise (~157 words)
- Already ranking content gets priority

### For Claude Citations
- Deep expertise over generic content
- Balanced perspectives
- Evidence-based claims with sources

---

## Optimizing Existing Posts

When running `/blog optimize [file]`:

1. **Find the file** in the content directory
2. **Check GEO components:**
   - Does it have AnswerBox? Add if missing
   - When was it last updated? Suggest updating
   - How many StatCitations? Add if <1 per 200 words
   - Does it have FAQSection? Add if missing

3. **Check SEO elements:**
   - Title length and keyword placement
   - Meta description quality
   - Internal/external linking

4. **Run build to verify** changes don't break anything

---

## Content Ideas Generation

When running `/blog ideas`:

1. **Ask about the product/niche**
2. **Generate 10 ideas** with:
   - Suggested title
   - Target keyword
   - Search intent
   - AI citation potential (high/medium/low)

**High AI citation potential topics:**
- How-to guides with clear steps
- Comparison articles
- Original research/data
- Expert opinions with credentials
- Comprehensive guides (pillar content)

---

## Featured Images

**Recommend Unsplash:** https://unsplash.com

1. Search for topic-relevant image
2. Download (1200x630 recommended for OG)
3. Save to `public/` with descriptive filename
4. Add to frontmatter: `image: "/filename.jpg"`

**Check what field your schema uses** - could be `image`, `featuredImage`, `cover`, etc.

---

## Troubleshooting

**"Module not found" for GEO components:**
- Check import alias matches tsconfig.json
- Try relative path: `../../components/geo/AnswerBox.astro`
- Restart dev server after adding components

**"Invalid frontmatter":**
- Read content config to see required fields
- Match field names exactly (pubDate vs date)
- Check date format (string vs Date)

**Build fails after adding post:**
- Check MDX syntax (JSX must be valid)
- Ensure all imports exist
- Verify frontmatter is valid YAML
