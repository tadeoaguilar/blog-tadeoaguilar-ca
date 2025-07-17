// app/components/ui/BlogCard.tsx
import { FC } from 'react';
import Link from 'next/link';

interface BlogCardProps {
  category?: string;
  title: string;
  excerpt: string;
  readTime?: string;
  date: string;
  slug: string;
}

export const BlogCard: FC<BlogCardProps> = ({
  category = 'Technology',
  title,
  excerpt,
  readTime = '5 min read',
  date,
  slug
}) => {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 border border-gradient-purple-start/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-gradient-purple-mid/20 hover:border-gradient-purple-mid cursor-pointer">
        <div className="h-48 bg-gradient-to-br from-gradient-purple-start to-gradient-purple-mid" />
        
        <div className="p-8">
          {category && (
            <span className="inline-block px-4 py-1.5 bg-gradient-purple-start/20 text-gradient-purple-end text-sm rounded-full mb-4">
              {category}
            </span>
          )}
          
          <h3 className="text-xl font-medium text-text-gradient-white mb-4 line-clamp-2 group-hover:text-gradient-purple-end transition-colors">
            {title}
          </h3>
          
          <p className="text-text-gradient-light/80 leading-relaxed mb-6 line-clamp-3">
            {excerpt}
          </p>
          
          <div className="flex justify-between items-center text-sm text-text-gradient-light/60">
            {readTime && <span>{readTime}</span>}
            <span>{date}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};