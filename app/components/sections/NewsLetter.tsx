// app/components/sections/Newsletter.tsx
'use client';

import { FC, FormEvent, useState } from 'react';
import { Button } from '../ui/Button';

export const Newsletter: FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      console.log('Newsletter signup:', email);
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };
  
  return (
    <section className="bg-gradient-to-br from-gradient-purple-mid to-gradient-purple-end py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-normal text-text-gradient-white mb-4">
          Stay Connected
        </h3>
        
        <p className="text-text-gradient-light mb-8">
          Join our peaceful community of developers and designers. 
          Receive weekly insights on mindful technology.
        </p>
        
        {status === 'success' ? (
          <div className="bg-gradient-purple-end/20 text-text-gradient-white py-3 px-4 rounded-lg">
            ✓ Successfully subscribed! Check your email to confirm.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-6 py-3.5 border-2 border-gradient-purple-start/30 bg-white/10 backdrop-blur-sm rounded-lg text-base text-text-gradient-white placeholder-text-gradient-light/50 focus:outline-none focus:border-gradient-purple-end transition-colors"
              disabled={status === 'loading'}
            />
            <Button 
              type="submit" 
              variant="primary"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};