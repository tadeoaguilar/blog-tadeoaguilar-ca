// app/components/layout/Footer.tsx
import { FC } from 'react';
import Link from 'next/link';

const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com/yourusername' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  { label: 'GitHub', href: 'https://github.com/tadeoaguilar' },
  { label: 'RSS', href: '/rss' }
];

export const Footer: FC = () => {
  return (
    <footer className="bg-gradient-dark-end border-t border-gradient-purple-start/50 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center gap-6 sm:gap-8 mb-8">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-text-gradient-light hover:text-gradient-purple-end transition-colors"
              target={link.label !== 'RSS' ? '_blank' : undefined}
              rel={link.label !== 'RSS' ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <p className="text-text-gradient-light/60">
          © {new Date().getFullYear()} Tadeo Aguilar. Built with peace and purpose.
        </p>
      </div>
    </footer>
  );
};