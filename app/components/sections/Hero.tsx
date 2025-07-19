// app/components/sections/Hero.tsx
import { FC } from 'react';
import { Button } from '../ui/Button';
import Link from 'next/link';

export const Hero: FC = () => {
  return (
    <section className="bg-gradient-to-br from-gradient-dark-start via-gradient-purple-start to-gradient-purple-mid py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-text-gradient-white mb-6 leading-tight animate-fade-in-up">
          Cloud & Enterprise Architecture Insights
        </h1>
        
        <p className="text-lg sm:text-xl text-text-gradient-light mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Exploring modern software architecture patterns, cloud solutions, and enterprise design strategies.
          Join me as I share insights from the trenches of system design and digital transformation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <Link href="/blog">
            <Button variant="primary">Explore Articles</Button>
          </Link>
          <Link href="/projects">
            <Button variant="secondary">View Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};