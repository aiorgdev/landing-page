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

**If no package.json at all:** Go to STEP 3A (kit-only directory)

**If package.json exists but no Astro:** Go to STEP 3B (non-Astro project)

---

## STEP 3A: Kit-Only Directory (no package.json)

The directory only has kit files (.claude/, CLAUDE.md) but no project. The user probably installed the kit in its own folder instead of inside their existing project.

Output:

"This folder only has the kit files — there's no project here yet.

**If you have an existing Astro project**, move the kit there:"

```
cp -r .claude/ ~/path/to/your-project/
cp CLAUDE.md ~/path/to/your-project/
cd ~/path/to/your-project
claude
/setup
```

Use AskUserQuestion:
- Question: "What would you like to do?"
- Header: "Setup"
- Options:
  1. "I have an existing Astro project" - "I'll move the kit files there (instructions above)"
  2. "Start fresh with AstroWind (Recommended)" - "Install AstroWind template in this folder"
  3. "I'll set up Astro myself" - "Manual setup — you handle the Astro installation"

**If "I have an existing Astro project":**

Output:

"Copy the kit files to your project and run /setup there:

```bash
cp -r .claude/ /path/to/your-astro-project/
cp CLAUDE.md /path/to/your-astro-project/
cd /path/to/your-astro-project
claude
/setup
```

Replace `/path/to/your-astro-project/` with the actual path.

**Not Astro?** This kit is for Astro projects only. For Next.js, use [SaaS Dev Team](https://aiorg.dev/kits/saas-starter)."

Stop here. Do not proceed with further steps.

**If "Start fresh with AstroWind":**

```bash
npm create astro@latest -- --template onwidget/astrowind .
```

Tell user to answer the terminal prompts, then wait for confirmation.

After install, verify:
```bash
test -f astro.config.mjs && echo "SUCCESS" || echo "FAILED"
```

Go to STEP 4.

---

## STEP 3B: Non-Astro Project (has package.json, no Astro)

Output:

"I see a project here, but it's not an Astro project. This kit is designed for Astro.

**Options:**
- **Keep your framework**: The SEO knowledge in `.claude/knowledge/` still works — read `seo-geo-masterguide.md` for universal SEO/GEO tips
- **For Next.js apps**: Use [SaaS Dev Team](https://aiorg.dev/kits/saas-starter) instead
- **Switch to Astro**: Install AstroWind in a new folder for your landing page"

Use AskUserQuestion:
- Question: "What would you like to do?"
- Header: "Framework"
- Options:
  1. "Install AstroWind here" - "Replace this with an Astro landing page (won't touch your existing code if in separate folder)"
  2. "Keep my framework" - "Just use the SEO knowledge files"

**If "Keep my framework":**

Output:

"The GEO components and commands are Astro-specific, but the SEO knowledge is universal.

Useful files you can read:
- `.claude/knowledge/seo-geo-masterguide.md` — Research-backed SEO & GEO guide
- `.claude/knowledge/seo-basics.md` — Meta tags, structured data, Core Web Vitals

For a full AI-powered marketing toolkit, check out [Marketing OS](https://aiorg.dev/kits/marketing-os)."

Stop here.

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
