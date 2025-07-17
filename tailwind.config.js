// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Your peaceful color palette
        'sky-tech': '#0EA5E9',
        'slate-pro': '#475569',
        'lavender-soft': '#E0E7FF',
        'teal-balance': '#14B8A6',
        'white-warm': '#FAFAF9',
        'indigo-deep': '#4338CA',
        'navy-deep': '#0F172A',
        'slate-dark': '#1E293B',
        
        // New gradient colors from layout.jpeg
        'gradient-dark-start': '#1a1a2e',
        'gradient-dark-mid': '#16213e',
        'gradient-dark-end': '#2d1b69',
        'gradient-purple-start': '#4a4e69',
        'gradient-purple-mid': '#6b46c1',
        'gradient-purple-end': '#7c3aed',
        'text-gradient-light': '#e2e8f0',
        'text-gradient-white': '#ffffff',
        
        // Keep existing blog colors for compatibility
        'blog-silver': '#BFBFBF',
        'blog-cardinal': '#8F2541',
        'blog-raisinBlack': '#1D1D27',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}