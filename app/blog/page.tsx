import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end">
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-light text-text-gradient-white mb-6 leading-tight">
              My Blog
            </h1>
            <p className="text-xl text-text-gradient-light/70 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on web development, technology, and more
            </p>
          </div>
          <BlogPosts />
        </div>
      </div>
    </section>
  )
}
