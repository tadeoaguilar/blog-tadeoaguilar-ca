import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="space-y-6">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group block"
            href={`/blog/${post.slug}`}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gradient-purple-start/20 hover:border-gradient-purple-mid/40 transition-all duration-300 hover:shadow-2xl hover:shadow-gradient-purple-mid/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-light text-text-gradient-white group-hover:text-gradient-purple-end transition-colors mb-2">
                    {post.metadata.title}
                  </h3>
                  {post.metadata.summary && (
                    <p className="text-text-gradient-light/70 group-hover:text-text-gradient-light transition-colors">
                      {post.metadata.summary}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-text-gradient-light/60">
                  <time className="tabular-nums">
                    {formatDate(post.metadata.publishedAt, false)}
                  </time>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
