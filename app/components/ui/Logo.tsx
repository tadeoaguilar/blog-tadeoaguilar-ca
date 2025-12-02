'use client';

import { motion } from 'motion/react';

export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dimensions = {
    sm: { container: 'w-8 h-8', node: 2.5, line: 1 },
    md: { container: 'w-10 h-10', node: 3, line: 1.5 },
    lg: { container: 'w-16 h-16', node: 4, line: 2 }
  };

  const dim = dimensions[size];

  return (
    <div className={`${dim.container} relative flex items-center justify-center`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Connection lines */}
        <motion.line
          x1="12" y1="10" x2="20" y2="20"
          stroke="url(#gradient1)"
          strokeWidth={dim.line}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        />
        <motion.line
          x1="12" y1="30" x2="20" y2="20"
          stroke="url(#gradient1)"
          strokeWidth={dim.line}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.line
          x1="28" y1="10" x2="20" y2="20"
          stroke="url(#gradient2)"
          strokeWidth={dim.line}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.line
          x1="28" y1="30" x2="20" y2="20"
          stroke="url(#gradient2)"
          strokeWidth={dim.line}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <motion.line
          x1="6" y1="20" x2="12" y2="10"
          stroke="url(#gradient1)"
          strokeWidth={dim.line}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 0.6, delay: 0 }}
        />
        <motion.line
          x1="6" y1="20" x2="12" y2="30"
          stroke="url(#gradient1)"
          strokeWidth={dim.line}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
        <motion.line
          x1="34" y1="20" x2="28" y2="10"
          stroke="url(#gradient2)"
          strokeWidth={dim.line}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
        <motion.line
          x1="34" y1="20" x2="28" y2="30"
          stroke="url(#gradient2)"
          strokeWidth={dim.line}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />

        {/* Neurons (nodes) */}
        <motion.circle
          cx="6" cy="20" r={dim.node}
          fill="url(#gradient1)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
        />
        <motion.circle
          cx="12" cy="10" r={dim.node}
          fill="url(#gradient1)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <motion.circle
          cx="12" cy="30" r={dim.node}
          fill="url(#gradient1)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.circle
          cx="20" cy="20" r={dim.node * 1.2}
          fill="url(#gradient3)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.circle
          cx="28" cy="10" r={dim.node}
          fill="url(#gradient2)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.circle
          cx="28" cy="30" r={dim.node}
          fill="url(#gradient2)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <motion.circle
          cx="34" cy="20" r={dim.node}
          fill="url(#gradient2)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
