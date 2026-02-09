---
description: Set up GEO components for your Astro project
---

# /setup - Landing Page Kit Setup

You are a setup wizard. Be simple and direct. Do NOT run many bash commands in parallel.

## RULES

1. **ONE bash command at a time** - never run multiple bash commands in parallel
2. **Use Read tool** for reading files (not cat or grep)
3. **Ask before modifying** existing files
4. **Verify after changes** - run build to confirm nothing broke

---

## STEP 1: Welcome

Output directly (no bash):

🚀 **Landing Page Kit v3.0**

GEO-optimized content for AI citations.

Let me check your project...

---

## STEP 2: Check for Astro

Read `package.json` using the Read tool. Look for `"astro"` in dependencies.

**If Astro found:** Go to STEP 4

**If no package.json or no Astro:** Go to STEP 3

---

## STEP 3: No Astro Project

Output:

"I don't see an Astro project here.

I recommend **AstroWind** - popular template with blog, dark mode, SEO."

Use AskUserQuestion:
- Question: "Install AstroWind template?"
- Header: "Template"
- Options:
  1. "Yes, install AstroWind (recommended)" - "Full template with blog"
  2. "No, I'll set up Astro myself" - "Manual setup"

**If yes:**

```bash
npm create astro@latest -- --template onwidget/astrowind .
```

Tell user to answer the terminal prompts, then wait for confirmation.

After install, verify:
```bash
test -f astro.config.mjs && echo "SUCCESS" || echo "FAILED"
```

---

## STEP 4: Analyze Project

Read these files using Read tool (NOT bash):
1. `package.json` - check for astro version, mdx
2. `tsconfig.json` - find import alias (~/... or @/...)

Then run ONE bash command to check directories:

```bash
echo "=== Project Structure ===" && \
test -d src/components && echo "Components: src/components" || echo "Components: not found" && \
test -d src/content/post && echo "Content: src/content/post" || \
test -d src/content/blog && echo "Content: src/content/blog" || echo "Content: not found" && \
test -d src/lib && echo "Lib: src/lib" || \
test -d src/utils && echo "Utils: src/utils" || echo "Lib/Utils: not found"
```

Report findings to user in a simple table.

---

## STEP 5: Add GEO Components

"I'll add GEO components to `src/components/geo/`"

Create directory:
```bash
mkdir -p src/components/geo
```

Copy each component by reading from `.claude/templates/components/geo/` and writing to `src/components/geo/`:

1. Read `.claude/templates/components/geo/AnswerBox.astro`
2. Write to `src/components/geo/AnswerBox.astro`
3. Repeat for: KeyTakeaway.astro, StatCitation.astro, FAQSection.astro, FreshnessBadge.astro

Then copy schema.ts:
- Read `.claude/templates/lib/schema.ts`
- Write to `src/lib/schema.ts` (create src/lib if needed)

---

## STEP 6: Verify

Run ONE command to check all files:

```bash
echo "=== Checking Files ===" && \
test -f src/components/geo/AnswerBox.astro && echo "✓ AnswerBox" || echo "✗ AnswerBox" && \
test -f src/components/geo/KeyTakeaway.astro && echo "✓ KeyTakeaway" || echo "✗ KeyTakeaway" && \
test -f src/components/geo/StatCitation.astro && echo "✓ StatCitation" || echo "✗ StatCitation" && \
test -f src/components/geo/FAQSection.astro && echo "✓ FAQSection" || echo "✗ FAQSection" && \
test -f src/components/geo/FreshnessBadge.astro && echo "✓ FreshnessBadge" || echo "✗ FreshnessBadge"
```

Then verify build:
```bash
npm run build 2>&1 | tail -10
```

If build fails, help fix it. If success, continue.

---

## STEP 7: Done

Based on tsconfig.json alias (from STEP 4), show correct import:

**If `~/` alias:**
```mdx
import AnswerBox from '~/components/geo/AnswerBox.astro'
```

**If `@/` alias:**
```mdx
import AnswerBox from '@/components/geo/AnswerBox.astro'
```

Output:

"✅ **Setup complete!**

GEO components installed:
- AnswerBox - direct answers for AI to quote
- KeyTakeaway - highlighted insights
- StatCitation - statistics with sources
- FAQSection - FAQ with JSON-LD schema
- FreshnessBadge - content recency

**Next:** Run `/blog new` to create your first GEO-optimized post.

**Dev server:** `npm run dev`"
