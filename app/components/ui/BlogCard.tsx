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
      <article className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 border border-lavender-soft/30 hover:-translate-y-1 hover:shadow-xl hover:border-teal-balance cursor-pointer">
        <div className="h-48 bg-gradient-to-br from-lavender-soft to-sky-tech" />
        
        <div className="p-8">
          {category && (
            <span className="inline-block px-4 py-1.5 bg-lavender-soft text-indigo-deep text-sm rounded-full mb-4">
              {category}
            </span>
          )}
          
          <h3 className="text-xl font-medium text-slate-pro mb-4 line-clamp-2 group-hover:text-sky-tech transition-colors">
            {title}
          </h3>
          
          <p className="text-slate-pro/80 leading-relaxed mb-6 line-clamp-3">
            {excerpt}
          </p>
          
          <div className="flex justify-between items-center text-sm text-slate-pro/60">
            {readTime && <span>{readTime}</span>}
            <span>{date}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};