'use client';

import { Linkedin, Github, Mail, Twitter } from 'lucide-react';
import { Logo } from '../ui/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-slate-900 rounded-lg p-2 shadow-lg shadow-blue-500/30">
                <Logo size="sm" />
              </div>
              <div className="flex flex-col">
                <span className="text-white">Tadeo Aguilar</span>
                <span className="text-xs text-slate-400">Tech Insights</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-md">
              Sharing insights and experiences from the world of SAP Finance, Software Architecture, Data Analytics, AI, and enterprise technology.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#expertise" className="hover:text-cyan-400 transition-colors">Expertise</a></li>
              <li><a href="#blog" className="hover:text-cyan-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4 font-semibold">Topics</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">SAP Finance</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Architecture</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Data Analytics</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">AI & ML</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            © {currentYear} Tadeo Aguilar. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="p-2 hover:bg-slate-900 rounded-lg transition-colors hover:text-cyan-400">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 hover:bg-slate-900 rounded-lg transition-colors hover:text-cyan-400">
              <Github size={20} />
            </a>
            <a href="#" className="p-2 hover:bg-slate-900 rounded-lg transition-colors hover:text-cyan-400">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 hover:bg-slate-900 rounded-lg transition-colors hover:text-cyan-400">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
