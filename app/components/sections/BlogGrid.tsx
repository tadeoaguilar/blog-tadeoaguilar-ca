// app/components/sections/BlogGrid.tsx
import { FC } from 'react';
import { BlogCard } from '../ui/BlogCard';
import { formatDate } from 'app/blog/utils';

interface BlogPost {
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
  };
  slug: string;
  content: string;
}

interface BlogGridProps {
  posts: BlogPost[];
}

export const BlogGrid: FC<BlogGridProps> = ({ posts }) => {
  // Calculate read time based on content length
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

   // Determine category based on content or slug
  const getCategory = (slug: string) => {
    if (slug.includes('static') || slug.includes('typing')) return 'Development';
    if (slug.includes('vim')) return 'Tools';
    return 'Technology';
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-normal text-slate-pro mb-4">
          Latest Articles
        </h2>
        <p className="text-slate-pro/80">
          Thoughtful perspectives on modern technology and peaceful productivity
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, 6).map((post) => (
          <BlogCard
            key={post.slug}
            category={getCategory(post.slug)}
            title={post.metadata.title}
            excerpt={post.metadata.summary}
            readTime={calculateReadTime(post.content)}
            date={formatDate(post.metadata.publishedAt)}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
};