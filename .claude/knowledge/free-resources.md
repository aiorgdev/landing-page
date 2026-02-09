# Free Resources for Landing Pages

When creating landing pages, use these free resources for images and assets.

## Stock Images

### Unsplash (Recommended)
**URL:** https://unsplash.com

Free high-quality stock photos. No attribution required (but appreciated).

**How to use:**
1. Search on unsplash.com for relevant images
2. Get the image URL in format: `https://images.unsplash.com/photo-[ID]?w=[width]&q=[quality]`
3. Download with curl:
   ```bash
   curl -L "https://images.unsplash.com/photo-1556740772-1a741367b93e?w=1200&q=80" -o image.jpg
   ```

**URL parameters:**
- `w=1200` - width in pixels (recommended: 1200 for hero, 800 for features)
- `q=80` - quality 1-100 (80 is good balance)
- `fm=jpg` - format (jpg, png, webp)

**When to use:**
- Hero background images
- Feature section illustrations
- Testimonial backgrounds
- About/team photos

### Other Free Sources
- **Pexels** (pexels.com) - Similar to Unsplash
- **Pixabay** (pixabay.com) - Illustrations too
- **Undraw** (undraw.co) - Free illustrations (SVG)

## Icons

### Lucide React (Pre-installed)
This template includes Lucide React icons. Use them directly:

```tsx
import { ArrowRight, Check, Star } from 'lucide-react'

<ArrowRight className="w-4 h-4" />
```

Browse all icons: https://lucide.dev/icons

### Other Icon Resources
- **Heroicons** (heroicons.com) - By Tailwind team
- **Phosphor** (phosphoricons.com) - Flexible icon family
- **Tabler Icons** (tabler-icons.io) - 4,000+ free icons

## Fonts

### Google Fonts (Pre-installed)
This template uses Inter by default. To change:

```tsx
// src/app/layout.tsx
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})
```

**Recommended font pairings:**
- **Inter + Inter** - Clean, modern, versatile
- **Poppins + Inter** - Friendly headlines, readable body
- **Space Grotesk + Inter** - Techy, modern feel
- **Plus Jakarta Sans + Inter** - Professional, contemporary

## Illustrations

### Undraw (undraw.co)
Free, customizable illustrations in SVG format.
- Change colors to match your brand
- No attribution required

### Humaaans (humaaans.com)
Mix-and-match human illustrations.
- Free for personal use
- Great for diverse representation

### Blush (blush.design)
Customizable illustrations by independent artists.
- Some free, some paid
- High quality, unique styles

## Color Palettes

### Tailwind Colors
This template uses Tailwind's color system. Customize in `globals.css`:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  /* Change to your brand color */
}
```

### Color Tools
- **Coolors** (coolors.co) - Generate palettes
- **Realtime Colors** (realtimecolors.com) - See colors in action
- **Huemint** (huemint.com) - AI-generated palettes

## OG Image Generation

### Placeholder for Development
Create a simple OG image at 1200x630px:
- Use Figma, Canva, or any design tool
- Include: Logo, Product name, Tagline
- Save as `public/og-image.png`

### Free OG Image Tools
- **Figma** (figma.com) - Free design tool
- **Canva** (canva.com) - Easy templates
- **OG Image Playground** - Generate programmatically

## Performance Tips

### Image Optimization
- Use Next.js Image component for automatic optimization
- Prefer WebP format for modern browsers
- Size images appropriately (don't use 4K for thumbnails)

### Loading
- Use `priority` on above-fold images
- Lazy load images below the fold
- Use blur placeholder for better UX

```tsx
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority
  placeholder="blur"
  blurDataURL="/hero-blur.jpg"
/>
```
