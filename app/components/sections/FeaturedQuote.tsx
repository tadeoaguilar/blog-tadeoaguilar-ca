// app/components/sections/FeaturedQuote.tsx
import { FC } from 'react';

export const FeaturedQuote: FC = () => {
  return (
    <section className="bg-lavender-soft py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-normal text-indigo-deep mb-8">
          Philosophy of Peaceful Development
        </h2>
        
        <div className="bg-white border-l-4 border-teal-balance p-6 sm:p-8 rounded-lg shadow-sm">
          <p className="text-lg sm:text-xl italic text-slate-pro leading-relaxed">
            "In the midst of complexity, we find simplicity. In the heart of 
            technology, we discover humanity. Code with intention, design with 
            empathy, and build with purpose."
          </p>
        </div>
        
        <p className="mt-8 text-slate-pro">
          Creating technology that enhances life without overwhelming it.
        </p>
      </div>
    </section>
  );
};