'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, Tag, Search, Filter } from 'lucide-react';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { useState } from 'react';

export function BlogPosts() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'SAP Finance', 'Architecture', 'AI & Analytics', 'Data Engineering', 'Cloud', 'Data Analytics'];

  const blogPosts = [
    {
      id: 1,
      title: 'S/4HANA Migration: Lessons Learned from Real-World Implementation',
      excerpt: 'Key insights and best practices from migrating enterprise systems to SAP S/4HANA, including common pitfalls and success strategies.',
      date: 'November 28, 2024',
      readTime: '8 min read',
      category: 'SAP Finance',
      tags: ['SAP', 'S/4HANA', 'Migration'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Microservices Architecture: Design Patterns for Scalability',
      excerpt: 'Exploring proven architectural patterns for building scalable microservices, with practical examples and implementation guidelines.',
      date: 'November 25, 2024',
      readTime: '12 min read',
      category: 'Architecture',
      tags: ['Microservices', 'Architecture', 'Scalability'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Leveraging AI for Financial Forecasting and Analytics',
      excerpt: 'How machine learning models can transform financial planning and analysis, with case studies from the finance industry.',
      date: 'November 22, 2024',
      readTime: '10 min read',
      category: 'AI & Analytics',
      tags: ['AI', 'Machine Learning', 'Finance'],
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Building Real-Time Data Pipelines with Modern ETL Tools',
      excerpt: 'A comprehensive guide to designing and implementing efficient data pipelines for real-time analytics and reporting.',
      date: 'November 18, 2024',
      readTime: '15 min read',
      category: 'Data Engineering',
      tags: ['ETL', 'Data Pipeline', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Cloud-Native Development: Best Practices for Enterprise Apps',
      excerpt: 'Essential practices for building cloud-native applications that are resilient, scalable, and cost-effective.',
      date: 'November 15, 2024',
      readTime: '9 min read',
      category: 'Cloud',
      tags: ['Cloud', 'DevOps', 'Best Practices'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'Data Visualization: Telling Stories with Business Intelligence',
      excerpt: 'Creating compelling data visualizations that drive decision-making using modern BI tools and storytelling techniques.',
      date: 'November 12, 2024',
      readTime: '7 min read',
      category: 'Data Analytics',
      tags: ['BI', 'Visualization', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
    },
    {
      id: 7,
      title: 'Enterprise Architecture Frameworks: TOGAF in Practice',
      excerpt: 'A practical guide to implementing TOGAF framework for enterprise architecture initiatives and digital transformation.',
      date: 'November 8, 2024',
      readTime: '14 min read',
      category: 'Architecture',
      tags: ['TOGAF', 'Enterprise Architecture', 'Framework'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      title: 'SAP Fiori: Building Custom Apps for Enhanced User Experience',
      excerpt: 'Step-by-step guide to developing custom SAP Fiori applications that improve user productivity and satisfaction.',
      date: 'November 5, 2024',
      readTime: '11 min read',
      category: 'SAP Finance',
      tags: ['SAP Fiori', 'UX', 'Development'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
    },
    {
      id: 9,
      title: 'Neural Networks Demystified: A Practical Introduction',
      excerpt: 'Understanding neural networks from first principles with hands-on examples using Python and TensorFlow.',
      date: 'November 1, 2024',
      readTime: '16 min read',
      category: 'AI & Analytics',
      tags: ['Neural Networks', 'Deep Learning', 'Python'],
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop'
    }
  ];

  const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
    'SAP Finance': { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30' },
    'Architecture': { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
    'AI & Analytics': { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
    'Data Engineering': { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/30' },
    'Cloud': { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
    'Data Analytics': { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-500/30' }
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4 text-3xl md:text-4xl font-bold">Latest Articles</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Insights, tutorials, and thought leadership on enterprise technology and innovation
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <Filter className="text-slate-400" size={20} />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg border transition-all ${selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/30'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-slate-400 text-center mb-8"
        >
          Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all cursor-pointer group"
            >
              <div className="relative h-48 bg-slate-900 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full ${categoryColors[post.category].bg} ${categoryColors[post.category].text} border ${categoryColors[post.category].border} backdrop-blur-sm`}>
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-slate-500 mb-3 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-white mb-3 text-lg font-semibold group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-400 mb-4 line-clamp-3 text-sm">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-2 py-1 bg-slate-900 border border-slate-800 text-slate-400 rounded text-xs"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* No results message */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-400 text-lg">No articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2 bg-slate-950 text-cyan-400 border border-slate-800 rounded-lg hover:border-cyan-500/50 transition-all"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
}
