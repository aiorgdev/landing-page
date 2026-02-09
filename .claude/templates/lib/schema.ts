/**
 * Schema generation utilities for JSON-LD
 *
 * STANDALONE VERSION - No external dependencies required.
 * Copy this file to your project's src/lib/ or src/utils/ folder.
 *
 * Based on research:
 * - Sites with structured data see up to 30% higher visibility in AI overviews
 * - Proper Article and FAQ schema increases AI citations by 28%
 * - Author schema with credentials directly improves E-E-A-T signals
 */

export interface Author {
  name: string
  twitter?: string
  avatar?: string
  bio?: string
  jobTitle?: string
  company?: string
  linkedin?: string
}

export interface PostData {
  slug: string
  title: string
  description: string
  date: string
  lastUpdated?: string
  author: Author
  featuredImage?: string
  tags: string[]
  wordCount: number
  articleType?: string
}

/**
 * Generate blog post schema with article and breadcrumb
 *
 * Usage:
 * const { articleSchema, breadcrumbSchema } = generatePostSchema(postData, 'https://example.com')
 */
export function generatePostSchema(post: PostData, siteUrl: string) {
  const authorSameAs: string[] = []
  if (post.author.twitter) {
    authorSameAs.push(`https://twitter.com/${post.author.twitter.replace('@', '')}`)
  }
  if (post.author.linkedin) {
    authorSameAs.push(post.author.linkedin)
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': post.articleType || 'BlogPosting',
    '@id': `${siteUrl}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    image: post.featuredImage ? `${siteUrl}${post.featuredImage}` : undefined,
    datePublished: post.date,
    dateModified: post.lastUpdated || post.date,
    wordCount: post.wordCount,
    keywords: post.tags.join(', '),
    author: {
      '@type': 'Person',
      '@id': `${siteUrl}/authors/${post.author.name.toLowerCase().replace(/\s+/g, '-')}#person`,
      name: post.author.name,
      url: post.author.twitter
        ? `https://twitter.com/${post.author.twitter.replace('@', '')}`
        : undefined,
      jobTitle: post.author.jobTitle,
      sameAs: authorSameAs.length > 0 ? authorSameAs : undefined,
      image: post.author.avatar ? `${siteUrl}${post.author.avatar}` : undefined,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}#organization`,
      name: 'Your Company', // Customize this
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`,
    },
    isPartOf: {
      '@id': `${siteUrl}#website`,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${siteUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${siteUrl}/blog/${post.slug}`,
      },
    ],
  }

  return { articleSchema, breadcrumbSchema }
}

/**
 * Generate FAQ schema for FAQ sections
 *
 * FAQPage schema is particularly effective because it pre-formats content
 * as question-answer pairs that AI systems can easily extract and cite.
 *
 * Usage:
 * const faqSchema = generateFAQSchema([
 *   { question: 'What is X?', answer: 'X is...' }
 * ])
 */
export function generateFAQSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

/**
 * Generate HowTo schema for step-by-step guides
 *
 * Usage:
 * const howToSchema = generateHowToSchema(
 *   'How to Validate a Startup Idea',
 *   'A step-by-step guide to customer discovery',
 *   [{ name: 'Step 1', text: 'Talk to customers' }],
 *   'PT2H' // 2 hours
 * )
 */
export function generateHowToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string; image?: string }[],
  totalTime?: string // ISO 8601 duration format, e.g., "PT30M"
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    totalTime,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  }
}

/**
 * Generate Organization schema
 *
 * Usage:
 * const orgSchema = generateOrganizationSchema(
 *   'Acme Corp',
 *   'https://acme.com',
 *   'https://acme.com/logo.png',
 *   ['https://twitter.com/acme', 'https://linkedin.com/company/acme']
 * )
 */
export function generateOrganizationSchema(
  name: string,
  siteUrl: string,
  logoUrl: string,
  sameAs?: string[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name,
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
    },
    sameAs,
  }
}

/**
 * Generate WebSite schema
 *
 * Usage:
 * const siteSchema = generateWebSiteSchema(
 *   'Acme Corp',
 *   'https://acme.com',
 *   'Building the future of widgets'
 * )
 */
export function generateWebSiteSchema(
  name: string,
  siteUrl: string,
  description: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    name,
    url: siteUrl,
    description,
    publisher: {
      '@id': `${siteUrl}#organization`,
    },
  }
}

/**
 * Generate CollectionPage schema for blog index
 *
 * Helps AI systems understand the blog structure and find relevant posts
 *
 * Usage:
 * const { collectionPageSchema, breadcrumbSchema } = generateBlogIndexSchema(
 *   'https://example.com',
 *   posts.map(p => ({ id: p.id, title: p.title, description: p.description, date: p.date }))
 * )
 */
export function generateBlogIndexSchema(
  siteUrl: string,
  posts: { id: string; title: string; description: string; date: Date }[]
) {
  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteUrl}/blog#webpage`,
    name: 'Blog',
    description: 'Articles, guides, and insights',
    url: `${siteUrl}/blog`,
    isPartOf: {
      '@id': `${siteUrl}#website`,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.slice(0, 10).map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteUrl}/blog/${post.id}`,
        name: post.title,
      })),
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${siteUrl}/blog`,
      },
    ],
  }

  return { collectionPageSchema, breadcrumbSchema }
}
