'use client';

import { motion } from 'motion/react';
import { Code2, Target, Lightbulb } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Code2,
      title: 'Practical Solutions',
      description: 'Sharing real-world implementations and best practices from enterprise environments.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Focus on delivering measurable value through technology and innovation.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'Always exploring emerging technologies and sharing the journey with the community.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-3xl md:text-4xl font-bold">About This Blog</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A platform dedicated to sharing knowledge and insights from the ever-evolving world of enterprise technology, finance systems, and modern software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-shadow">
                <value.icon className="text-white" size={24} />
              </div>
              <h3 className="text-white mb-2 text-xl font-semibold group-hover:text-cyan-400 transition-colors">{value.title}</h3>
              <p className="text-slate-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    </section>
  );
}
