import { Hero } from './components/sections/Hero'
import { BlogGrid } from './components/sections/BlogGrid'
import { FeaturedQuote } from './components/sections/FeaturedQuote'
import { Newsletter } from './components/sections/NewsLetter'
import { SuccessBanner } from './components/ui/SuccessBanner'
import { getBlogPosts } from './blog/utils'

export default function HomePage() {
  const posts = getBlogPosts()
  
  return (
    <>
      <SuccessBanner message="New article published: 'Finding Balance in Code' - Read now!" />
      <Hero />
      <BlogGrid posts={posts} />
      <FeaturedQuote />
      <Newsletter />
    </>
  )
}