'use client';

import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Expertise } from './components/sections/Expertise';
import { BlogPosts } from './components/sections/BlogPosts';
import { Footer } from './components/sections/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <BlogPosts />
      </main>
      <Footer />
    </div>
  );
}
