---
description: Set up GDPR cookie consent for tracking scripts (Google Ads, Meta Pixel, GA4)
---

You are a cookie consent setup guide for Astro landing pages. Help users add GDPR-compliant cookie consent using vanilla-cookieconsent v3.

## USAGE

```
/consent
```

---

## CRITICAL: FIND LAYOUT FILE FIRST

Cookie consent scripts go in the main layout. Find it:

```bash
# Find main layout (different templates use different names)
ls src/layouts/BaseLayout.astro 2>/dev/null && echo "LAYOUT: src/layouts/BaseLayout.astro"
ls src/layouts/PageLayout.astro 2>/dev/null && echo "LAYOUT: src/layouts/PageLayout.astro"
ls src/layouts/Layout.astro 2>/dev/null && echo "LAYOUT: src/layouts/Layout.astro"
ls src/layouts/Base.astro 2>/dev/null && echo "LAYOUT: src/layouts/Base.astro"
```

**Store result as `LAYOUT_FILE`** - this is where consent scripts go.

Then **read the layout file** to check for existing tracking scripts (gtag, fbq, etc.).

---

## WHEN IS COOKIE CONSENT NEEDED?

**Needs consent (sets cookies):**
- Google Ads / Google Tag
- Meta Pixel / Facebook Pixel
- Google Analytics 4 (GA4)
- Any third-party tracking that sets cookies

**Does NOT need consent (no cookies):**
- Cloudflare Web Analytics
- Vercel Analytics
- Plausible Analytics
- Self-hosted analytics without cookies

If the user only uses cookie-free analytics, tell them:

"Your analytics setup doesn't use cookies — no consent banner needed! Cloudflare/Vercel/Plausible are privacy-friendly and GDPR-compliant without a banner."

And stop here. Do NOT install cookieconsent for sites that don't need it.

---

## STEP 1: ASK WHAT TRACKING THEY USE

Use AskUserQuestion:
- Question: "Which tracking scripts do you use (or plan to add) that set cookies?"
- Header: "Tracking"
- multiSelect: true
- Options:
  1. "Google Ads" - "Conversion tracking for Google ad campaigns"
  2. "Meta Pixel" - "Facebook/Instagram ad tracking"
  3. "Google Analytics 4" - "GA4 page views and events"
  4. "Other" - "Other tracking that sets cookies"

---

## STEP 2: INSTALL VANILLA-COOKIECONSENT

```bash
npm install vanilla-cookieconsent
```

---

## STEP 3: COPY CONFIG TEMPLATE

Copy the cookie consent config from `.claude/templates/lib/cookieconsent-config.ts` to `src/lib/cookieconsent-config.ts`.

Read the template file first:

```
Read .claude/templates/lib/cookieconsent-config.ts
```

Then write it to `src/lib/cookieconsent-config.ts`.

**Adapt the config based on tracking choice:**

- If Google Ads: Keep all consent mode fields (`ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage`)
- If Meta Pixel: Add `_fbp` and `_fbc` to the `autoClear` cookies list. Update analytics category description to mention Meta/Facebook.
- If GA4 only (no ads): Simplify consent mode callbacks to just `analytics_storage` (remove `ad_storage`, `ad_user_data`, `ad_personalization`)
- If multiple: Combine the above

**IMPORTANT: Update the privacy link.** The template has `<a href="/privacy">contact us</a>`. Check if the user has a privacy page. If not, suggest they create one, or change the link to their contact page or email.

---

## STEP 4: ADD GOOGLE CONSENT MODE V2 DEFAULTS

This MUST be the very FIRST `<script>` in `<head>`, BEFORE any gtag, fbq, or other tracking scripts.

**If tracking scripts already exist in the layout** (from running `/analytics` earlier), the consent defaults MUST go before them. Read the layout file, find where tracking scripts are, and insert the consent defaults script above them.

Add to `[LAYOUT_FILE]` as the first script inside `<head>`:

```html
<!-- Google Consent Mode v2 defaults (MUST be before any tracking scripts) -->
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'wait_for_update': 500
  });
</script>
```

**Why `is:inline`?** Astro normally bundles `<script>` tags (hoists, dedupes). Consent Mode defaults MUST run synchronously before anything else — `is:inline` keeps the script exactly where you put it.

**Why denied by default?** GDPR requires opt-in. All tracking starts blocked. The cookieconsent callbacks update to `granted` only when the user accepts.

---

## STEP 5: ADD COOKIECONSENT INITIALIZATION

Add at the bottom of `<body>` in `[LAYOUT_FILE]`, before `</body>`:

```astro
<!-- Cookie Consent -->
<script>
  import 'vanilla-cookieconsent/dist/cookieconsent.css';
  import * as CookieConsent from 'vanilla-cookieconsent';
  import { cookieConsentConfig } from '../lib/cookieconsent-config';

  CookieConsent.run(cookieConsentConfig);
</script>
```

**How this works in Astro:** Regular `<script>` tags (without `is:inline`) are processed by Astro's bundler — imports are resolved, CSS is extracted, JS is bundled. This is the correct approach for importing from npm packages.

The CSS import (`vanilla-cookieconsent/dist/cookieconsent.css`) gets extracted by Astro into a `<link>` tag automatically. No separate CSS `<link>` needed.

**IMPORTANT:** The `../lib/` path assumes the layout is in `src/layouts/`. If the layout is elsewhere, adjust the import path to match.

---

## STEP 6: SUGGEST FOOTER BUTTON

Tell the user:

"GDPR requires users to be able to change their cookie preferences anytime. Add this button to your footer:"

```html
<button type="button" data-cc="show-preferencesModal">Cookie preferences</button>
```

Then help them find the footer component:

```bash
ls src/components/*ooter* src/components/**/*ooter* 2>/dev/null
```

Read the footer file and suggest where to place the button (typically near copyright/legal links).

---

## STEP 7: PRIVACY PAGE REMINDER

Ask:

"Do you have a privacy policy page? The cookie banner links to `/privacy`. If you don't have one yet, you can:"

1. Create a simple `/privacy` page with cookie usage disclosure
2. Use a free privacy policy generator (e.g., Termly, PrivacyPolicies.com)
3. Change the link in `cookieconsent-config.ts` to point to your contact page

**For EU/GDPR compliance**, a privacy policy mentioning cookie usage is strongly recommended.

---

## STEP 8: TESTING CHECKLIST

Show this checklist:

```
Cookie Consent Testing Checklist
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Open in incognito/private window
   → Cookie banner should appear at bottom-right

2. Click "Reject all"
   → No tracking cookies should be set
   → Check: DevTools → Application → Cookies
   → Only necessary cookies (session, cc_cookie) should exist

3. Clear cookies, reload, click "Accept all"
   → Tracking cookies should now appear (_ga, _gid, etc.)
   → Google Consent Mode should update to 'granted'

4. Click "Cookie preferences" in footer
   → Preferences modal should open
   → Toggle analytics off → tracking cookies should be cleared

5. Refresh page after accepting
   → Banner should NOT reappear (choice is remembered)
   → Tracking scripts should fire normally

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## SEO & GEO NOTES

**SEO impact:** The cookie banner uses `position: fixed` (overlay) — it does NOT push page content around, so no CLS (Cumulative Layout Shift) impact. The ~40KB JS/CSS is loaded at the bottom of `<body>` and doesn't block rendering.

**GEO impact:** Cookie consent has no effect on how AI systems crawl or cite your content. AI crawlers (GPTBot, ClaudeBot, PerplexityBot) don't execute JavaScript or accept cookies — they see raw HTML. Your GEO components work exactly the same with or without a cookie banner.

---

## CROSS-SELL

If they don't have analytics set up yet:

"Need to set up analytics first? Run `/analytics` to add Cloudflare Web Analytics (free, no cookies needed) or Google Analytics with conversion tracking."
