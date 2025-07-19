// app/components/layout/Header.tsx
'use client';

import { FC, useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' }
];

export const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-dark-start/95 backdrop-blur-md border-b border-gradient-purple-start/50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 text-2xl font-light text-text-gradient-white hover:text-gradient-purple-end transition-all duration-300 group">
            <div className="w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transform">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="32" height="32" className="filter drop-shadow-sm">
                <defs>
                  <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#6b46c1', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#7c3aed', stopOpacity:1}} />
                  </linearGradient>
                  <linearGradient id="neuronGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#e2e8f0', stopOpacity:0.9}} />
                    <stop offset="100%" style={{stopColor:'#6b46c1', stopOpacity:0.8}} />
                  </linearGradient>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#e2e8f0', stopOpacity:0.7}} />
                    <stop offset="100%" style={{stopColor:'#6b46c1', stopOpacity:0.5}} />
                  </linearGradient>
                </defs>
                
                <circle cx="100" cy="100" r="90" fill="none" stroke="url(#gradientStroke)" strokeWidth="1.5" opacity="0.2"/>
                
                <g stroke="url(#connectionGradient)" strokeWidth="1.2" opacity="0.6">
                  <line x1="40" y1="60" x2="80" y2="80" />
                  <line x1="40" y1="100" x2="80" y2="80" />
                  <line x1="40" y1="140" x2="80" y2="80" />
                  <line x1="40" y1="60" x2="80" y2="120" />
                  <line x1="40" y1="100" x2="80" y2="120" />
                  <line x1="40" y1="140" x2="80" y2="120" />
                  <line x1="80" y1="80" x2="120" y2="100" />
                  <line x1="80" y1="120" x2="120" y2="100" />
                  <path d="M 120 100 Q 140 80 160 100" stroke="url(#connectionGradient)" strokeWidth="1.5" fill="none" opacity="0.4"/>
                  <path d="M 120 100 Q 140 120 160 100" stroke="url(#connectionGradient)" strokeWidth="1.5" fill="none" opacity="0.4"/>
                </g>
                
                <g>
                  <circle cx="40" cy="60" r="6" fill="url(#neuronGradient)" stroke="#e2e8f0" strokeWidth="0.8"/>
                  <circle cx="40" cy="100" r="6" fill="url(#neuronGradient)" stroke="#e2e8f0" strokeWidth="0.8"/>
                  <circle cx="40" cy="140" r="6" fill="url(#neuronGradient)" stroke="#e2e8f0" strokeWidth="0.8"/>
                  <circle cx="80" cy="80" r="8" fill="url(#neuronGradient)" stroke="#e2e8f0" strokeWidth="0.8"/>
                  <circle cx="80" cy="120" r="8" fill="url(#neuronGradient)" stroke="#e2e8f0" strokeWidth="0.8"/>
                  <circle cx="120" cy="100" r="10" fill="url(#neuronGradient)" stroke="#ffffff" strokeWidth="1.2"/>
                </g>
                
                <g fill="url(#neuronGradient)" opacity="0.5">
                  <path d="M 160 100 Q 170 80 180 90 Q 185 85 180 95 Q 175 100 160 100" />
                  <path d="M 160 100 Q 170 120 180 110 Q 185 115 180 105 Q 175 100 160 100" />
                  <circle cx="160" cy="60" r="4" opacity="0.4"/>
                  <circle cx="160" cy="140" r="4" opacity="0.4"/>
                </g>
                
                <g>
                  <circle cx="50" cy="80" r="1.5" fill="#7c3aed" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="90" cy="100" r="1.5" fill="#7c3aed" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;0.1;0.6" dur="1.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="130" cy="90" r="1.5" fill="#7c3aed" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.8s" repeatCount="indefinite"/>
                  </circle>
                </g>
              </svg>
            </div>
            <span className="font-semibold tracking-wide">PERCEPTRONICS</span>
          </Link>
          
          <ul className="hidden md:flex gap-8 lg:gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="text-text-gradient-light hover:text-gradient-purple-end transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-gradient-light hover:text-gradient-purple-end transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gradient-purple-start/30">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-text-gradient-light hover:text-gradient-purple-end transition-colors duration-300 py-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};