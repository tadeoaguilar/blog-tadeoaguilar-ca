'use client';

import { motion } from 'motion/react';
import { ArrowRight, Linkedin, Github, Mail } from 'lucide-react';
import { Logo } from '../ui/Logo';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-400 rounded-full backdrop-blur-sm"
            >
              Welcome to my tech space 👋
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white mb-6 text-4xl md:text-6xl font-bold"
            >
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Tadeo Aguilar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 mb-8 max-w-lg text-lg"
            >
              A technology professional passionate about SAP Finance, Software Architecture, Data Analytics, and AI. Join me as I share insights, tutorials, and real-world experiences from the IT industry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all flex items-center gap-2"
              >
                Read Articles <ArrowRight size={20} />
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-slate-900 text-slate-300 rounded-lg border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 transition-all"
              >
                Learn More
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <a href="#" className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Central neural network logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 border-2 border-cyan-500/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute w-48 h-48 border-2 border-blue-500/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute w-32 h-32 border-2 border-purple-500/30 rounded-full"
                />
                <div className="absolute flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-50" />
                    <div className="relative bg-slate-950 p-6 rounded-full border-2 border-cyan-500/50">
                      <Logo size="lg" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech stack floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 right-0 bg-slate-900 border border-cyan-500/30 p-4 rounded-lg shadow-lg shadow-cyan-500/20"
              >
                <span className="text-cyan-400">SAP Finance</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute top-1/3 -left-5 bg-slate-900 border border-blue-500/30 p-4 rounded-lg shadow-lg shadow-blue-500/20"
              >
                <span className="text-blue-400">Software Architecture</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-[200px] right-5 bg-slate-900 border border-purple-500/30 p-4 rounded-lg shadow-lg shadow-purple-500/20"
              >
                <span className="text-purple-400">AI & ML</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 3.2, repeat: Infinity }}
                className="absolute bottom-32 left-10 bg-slate-900 border border-pink-500/30 p-4 rounded-lg shadow-lg shadow-pink-500/20"
              >
                <span className="text-pink-400">Data Analytics</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.8, repeat: Infinity }}
                className="absolute top-5 left-1/4 bg-slate-900 border border-indigo-500/30 p-4 rounded-lg shadow-lg shadow-indigo-500/20"
              >
                <span className="text-indigo-400">Enterprise Architecture</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 3.4, repeat: Infinity }}
                className="absolute bottom-[76px] right-[calc(25%-20px)] bg-slate-900 border border-emerald-500/30 p-4 rounded-lg shadow-lg shadow-emerald-500/20"
              >
                <span className="text-emerald-400">Cloud Computing</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
