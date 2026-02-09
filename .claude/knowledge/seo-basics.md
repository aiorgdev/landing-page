# SEO Basics for Landing Pages

Essential SEO knowledge for landing pages - meta tags, Open Graph, structured data, and performance.

## Meta Tags

### Title Tag
```tsx
// src/app/layout.tsx
export const metadata: Metadata = {
  title: 'Your Product Name - Brief Value Proposition',
  // Optimal: 50-60 characters
  // Include: brand name + main keyword
}
```

**Good examples:**
- "Notion - Your wiki, docs, & projects. Together."
- "Linear - The issue tracking tool you'll enjoy using"

**Bad examples:**
- "Home - Welcome to Our Website"
- "Product | Features | Pricing | About | Contact"

### Meta Description
```tsx
export const metadata: Metadata = {
  description: 'Clear, benefit-focused description of what you do. Include a call to action.',
  // Optimal: 150-160 characters
  // Include: main benefit + target audience + CTA hint
}
```

**Good example:**
"Build your SaaS faster with our Next.js template. Auth, payments, and database ready in 10 minutes. Start your free trial today."

### Keywords
```tsx
export const metadata: Metadata = {
  keywords: ['saas template', 'nextjs starter', 'saas boilerplate'],
  // Less important now, but include if relevant
}
```

## Open Graph Tags

For social media sharing (Facebook, LinkedIn, Twitter).

```tsx
export const metadata: Metadata = {
  openGraph: {
    title: 'Your Product Name',
    description: 'Your product description for social sharing',
    url: 'https://yoursite.com',
    siteName: 'Your Product Name',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Your Product Name - Brief description',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}
```

### OG Image Requirements
- **Size:** 1200x630 pixels (1.91:1 ratio)
- **Format:** PNG or JPG
- **File size:** Under 8MB (ideally under 1MB)
- **Content:** Logo, product name, tagline, visual

## Twitter Card

```tsx
export const metadata: Metadata = {
  twitter: {
    card: 'summary_large_image',
    title: 'Your Product Name',
    description: 'Your product description for Twitter',
    images: ['/og-image.png'],
    creator: '@yourhandle',
  },
}
```

### Card Types
- `summary` - Small square image
- `summary_large_image` - Large image above text (recommended)

## Structured Data (JSON-LD)

Help search engines understand your content.

### Organization
```tsx
// src/app/layout.tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yoursite.com",
      "logo": "https://yoursite.com/logo.png",
      "sameAs": [
        "https://twitter.com/yourhandle",
        "https://linkedin.com/company/yourcompany"
      ]
    })
  }}
/>
```

### Software Application (for SaaS)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Your Product Name",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "29.00",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
}
```

### FAQ Page
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does the free trial work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You get full access for 14 days, no credit card required."
      }
    }
  ]
}
```

## Core Web Vitals

Google's performance metrics that affect rankings.

### LCP (Largest Contentful Paint)
- Target: < 2.5 seconds
- **Fix:** Optimize hero image, use `priority` attribute
- **Fix:** Minimize server response time
- **Fix:** Preload critical fonts

### FID (First Input Delay) / INP (Interaction to Next Paint)
- Target: < 100ms FID, < 200ms INP
- **Fix:** Minimize JavaScript execution
- **Fix:** Break up long tasks
- **Fix:** Use `startTransition` for non-urgent updates

### CLS (Cumulative Layout Shift)
- Target: < 0.1
- **Fix:** Set explicit width/height on images
- **Fix:** Reserve space for dynamic content
- **Fix:** Avoid inserting content above existing content

## Technical SEO

### Robots
```tsx
export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
```

### Sitemap
Next.js can generate sitemaps automatically:

```tsx
// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yoursite.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://yoursite.com/pricing',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
```

### Canonical URL
```tsx
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://yoursite.com',
  },
}
```

## Quick Checklist

- [ ] Title tag (50-60 chars, includes brand + keyword)
- [ ] Meta description (150-160 chars, includes CTA)
- [ ] OG image (1200x630, under 1MB)
- [ ] OG title and description
- [ ] Twitter card (summary_large_image)
- [ ] Structured data (Organization, FAQ, or Product)
- [ ] Sitemap generated
- [ ] Canonical URL set
- [ ] Images have alt text
- [ ] H1 contains main keyword
- [ ] Mobile-friendly
- [ ] HTTPS enabled
- [ ] Core Web Vitals passing
