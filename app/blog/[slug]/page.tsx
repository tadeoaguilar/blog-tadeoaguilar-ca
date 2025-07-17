// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
//import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import Link from 'next/link'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function BlogPost({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Calculate read time
  const wordsPerMinute = 200;
  const words = post.content.split(/\s+/).length;
  const readTime = Math.ceil(words / wordsPerMinute);

  return (
    <article className="min-h-screen bg-gradient-to-b from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Tadeo Aguilar',
            },
          }),
        }}
      />
      
      {/* Article Header */}
      <header className="bg-gradient-to-br from-gradient-dark-start via-gradient-purple-start to-gradient-purple-mid pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/blog"
            className="inline-flex items-center text-text-gradient-light hover:text-text-gradient-white transition-colors mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to articles
          </Link>
          
          <h1 className="text-4xl sm:text-5xl font-light text-text-gradient-white mb-6 leading-tight">
            {post.metadata.title}
          </h1>
          
          <div className="flex items-center justify-center gap-4 text-text-gradient-light/70">
            <span>Tadeo Aguilar</span>
            <span>•</span>
            <time dateTime={post.metadata.publishedAt}>
              {formatDate(post.metadata.publishedAt)}
            </time>
            <span>•</span>
            <span>{readTime} min read</span>
          </div>
        </div>
      </header>
      
      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gradient-purple-start/20 p-8 sm:p-12 -mt-8">
          <div className="prose prose-lg prose-slate max-w-none
            prose-headings:font-light prose-headings:text-slate-pro
            prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
            prose-p:text-slate-pro prose-p:leading-relaxed
            prose-a:text-gradient-purple-mid prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-pro prose-strong:font-medium
            prose-code:text-gradient-purple-mid prose-code:bg-gradient-purple-start/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-gradient-dark-start prose-pre:text-text-gradient-white
            prose-blockquote:border-l-4 prose-blockquote:border-gradient-purple-mid prose-blockquote:bg-gradient-purple-start/10 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:italic
            prose-ul:list-disc prose-ol:list-decimal
            prose-img:rounded-lg prose-img:shadow-md">
        {/*    <CustomMDX source={post.content} /> */}
          </div>
        </div>
        
        {/* Article Footer */}
        <div className="mt-12 pt-8 border-t border-gradient-purple-start/30">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <Link 
              href="/blog"
              className="text-text-gradient-light hover:text-text-gradient-white transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              View all articles
            </Link>
            
            <div className="flex gap-4">
              <span className="text-text-gradient-light/60">Share:</span>
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.metadata.title)}&url=${baseUrl}/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-gradient-light hover:text-gradient-purple-mid transition-colors"
              >
                Twitter
              </a>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${baseUrl}/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-gradient-light hover:text-gradient-purple-mid transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}