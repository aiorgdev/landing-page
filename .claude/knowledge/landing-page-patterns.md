# Landing Page Patterns

This guide covers common landing page section types, layouts, and best practices.

## Section Types

### Hero Section
The most important section - first thing visitors see.

**Components:**
- Navigation (logo + links + CTA)
- Headline (clear value proposition)
- Subheadline (supporting detail)
- Primary CTA button
- Secondary action (optional)
- Social proof hint
- Hero image/visual (optional)

**Variations:**
1. **Centered Hero** - Text centered, CTA below
2. **Split Hero** - Text left, image right (or vice versa)
3. **Video Hero** - Background video or embedded video
4. **Product Screenshot Hero** - Show the product immediately

**Best for:**
- SaaS: Split hero with product screenshot
- Agency: Full-width visual impact
- Waitlist: Centered, focused on signup

### Features Section
Showcase what your product does.

**Patterns:**
1. **Grid Layout** - 3x2 or 2x3 feature cards
2. **Alternating** - Feature + image, alternating sides
3. **Icon List** - Simple icons with descriptions
4. **Tabs** - Interactive, one feature at a time

**Components per feature:**
- Icon or illustration
- Feature title (benefit-focused)
- Short description (2-3 sentences)
- Optional: Link to learn more

### Testimonials Section
Social proof from real customers.

**Patterns:**
1. **Carousel** - One at a time, scrollable
2. **Grid** - 3 testimonials side by side
3. **Featured** - One large testimonial, hero-style
4. **Wall of Love** - Many small quotes

**Components:**
- Quote text
- Author name
- Author title/company
- Author photo (strongly recommended)
- Company logo (optional)

### Pricing Section
Show your pricing tiers clearly.

**Patterns:**
1. **Three Tiers** - Good/Better/Best
2. **Two Tiers** - Free/Paid or Monthly/Annual
3. **Single CTA** - "Contact for pricing"
4. **Feature Comparison Table** - Detailed breakdown

**Best practices:**
- Highlight recommended tier
- Show annual savings if applicable
- List most important features
- Clear CTA per tier

### FAQ Section
Answer common objections and questions.

**Pattern:**
- Accordion style (collapsible)
- Covers: pricing, security, support, features
- Usually 5-8 questions

**Good FAQ categories:**
- Getting started
- Billing & pricing
- Features & limits
- Security & privacy
- Support & contact

### CTA Section
Final push for conversion.

**Patterns:**
1. **Contrasting Color** - Dark/primary background
2. **Minimal** - Just headline + CTA
3. **Form Embedded** - Email signup right there
4. **Dual CTA** - Primary + secondary action

### Footer
Navigation and legal.

**Components:**
- Logo
- Navigation links (grouped by category)
- Social media links
- Legal links (Privacy, Terms)
- Copyright

## Page Types

### Waitlist / Coming Soon
**Goal:** Collect emails before launch

**Sections:**
1. Hero with email signup
2. Brief features/benefits (3-4)
3. Social proof (if any)
4. Footer (minimal)

**Key elements:**
- Single email field
- Clear value proposition
- Estimated launch date (optional)
- Progress indicator (optional)

### Product Launch
**Goal:** Drive immediate signups/purchases

**Sections:**
1. Hero with product screenshot
2. Problem/Solution
3. Features (detailed)
4. Social proof
5. Pricing
6. FAQ
7. Final CTA
8. Footer

### Lead Magnet
**Goal:** Collect emails in exchange for content

**Sections:**
1. Hero with form
2. What's included (preview)
3. Who it's for
4. Author/credibility
5. Testimonials
6. FAQ
7. Final CTA

### SaaS Landing Page
**Goal:** Drive trial signups

**Sections:**
1. Hero (problem + solution)
2. Social proof (logos)
3. Features
4. How it works
5. Testimonials
6. Pricing
7. FAQ
8. Final CTA
9. Footer

## Layout Patterns

### Container Widths
```css
/* Tailwind defaults */
max-w-7xl  /* 80rem - full width content */
max-w-5xl  /* 64rem - pricing, features */
max-w-3xl  /* 48rem - text content */
max-w-2xl  /* 42rem - forms, narrow text */
```

### Spacing
```css
/* Section padding */
py-20 md:py-32  /* Generous, premium feel */
py-16 md:py-24  /* Standard */
py-12 md:py-16  /* Compact */
```

### Background Variations
1. **White** - Clean, default
2. **Muted** - Subtle gray background
3. **Primary** - Brand color for emphasis
4. **Gradient** - Modern, dynamic feel

## Mobile Considerations

### Above the Fold
What must be visible without scrolling:
1. Logo
2. Headline
3. Primary CTA

### Touch Targets
- Minimum 44x44px for buttons
- 48x48px for primary CTA
- Space between clickable elements

### Content Order
- Most important content first
- CTAs easily reachable by thumb
- Forms simplified on mobile

## Performance

### Image Loading
- Hero images: `priority`
- Below fold: lazy load
- Use Next.js Image component

### Critical CSS
- Keep above-fold styles inline
- Defer non-critical styles

### JavaScript
- Minimize JS in hero section
- Lazy load interactive components
