// app/components/sections/Hero.tsx
import { FC } from 'react';
import { Button } from '../ui/Button';
import Link from 'next/link';

export const Hero: FC = () => {
  return (
    <section className="bg-gradient-to-br from-lavender-soft via-white-warm to-white-warm py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-indigo-deep mb-6 leading-tight animate-fade-in-up">
          Bridging Technology and Strategy
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-pro mb-4 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Welcome to my corner of world, where enterprise solutions meet cloud innovation.
          I've spent the last 25 years Architecting SAP Financial systems and designing scalable 
          cloud solutions on Azure, I've learned that the best solutions often come from unexpected places. 
        </p>  
        <p className="text-lg sm:text-xl text-slate-pro mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          My journey has taken me through the fascinating realms of AI implementation, business intelligence transformation,
          and the ever-evolving landscape of cybersecurity. 
          Here, I share real-world insights, lessons learned, and practical approaches to complex technical challenges.
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