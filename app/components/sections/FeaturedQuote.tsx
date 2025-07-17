// app/components/sections/FeaturedQuote.tsx
import { FC } from 'react';

export const FeaturedQuote: FC = () => {
  return (
    <section className="bg-gradient-to-br from-gradient-purple-start to-gradient-purple-mid py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-normal text-text-gradient-white mb-8">
          Philosophy of Peaceful Development
        </h2>
        
        <div className="bg-white/10 backdrop-blur-sm border-l-4 border-gradient-purple-end p-6 sm:p-8 rounded-lg shadow-2xl">
          <p className="text-lg sm:text-xl italic text-text-gradient-white leading-relaxed">
            "In the midst of complexity, we find simplicity. In the heart of 
            technology, we discover humanity. Code with intention, design with 
            empathy, and build with purpose."
          </p>
        </div>
        
        <p className="mt-8 text-text-gradient-light">
          Creating technology that enhances life without overwhelming it.
        </p>
      </div>
    </section>
  );
};