// app/components/layout/Header.tsx
'use client';

import { FC } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' }
];

export const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white-warm/95 backdrop-blur-md border-b border-lavender-soft/50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-light text-indigo-deep hover:text-sky-tech transition-colors">
             <span className="font-semibold">PERCEPTRONICS</span>
          </Link>
          
          <ul className="hidden md:flex gap-8 lg:gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="text-slate-pro hover:text-sky-tech transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button name='button' className="md:hidden text-slate-pro hover:text-sky-tech">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};