'use client';

import { motion } from 'motion/react';
import { DollarSign, Layers, BarChart3, Brain, Cloud, Database, Network, Code } from 'lucide-react';

export function Expertise() {
  const expertiseAreas = [
    {
      icon: DollarSign,
      title: 'SAP Finance',
      description: 'Deep expertise in SAP FI/CO, S/4HANA Finance, and financial process optimization.',
      skills: ['SAP FI/CO', 'S/4HANA Finance', 'Financial Reporting', 'Revenue Recognition'],
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-cyan-500/30',
      hoverColor: 'hover:border-cyan-500',
      shadowColor: 'shadow-cyan-500/20',
      textColor: 'text-cyan-400'
    },
    {
      icon: Layers,
      title: 'Software Architecture',
      description: 'Designing scalable, maintainable systems using modern architectural patterns and best practices.',
      skills: ['Microservices', 'Event-Driven', 'Domain-Driven Design', 'API Design'],
      color: 'from-blue-500 to-indigo-500',
      borderColor: 'border-blue-500/30',
      hoverColor: 'hover:border-blue-500',
      shadowColor: 'shadow-blue-500/20',
      textColor: 'text-blue-400'
    },
    {
      icon: Network,
      title: 'Enterprise Architecture',
      description: 'Strategic technology planning and enterprise-wide solution design aligned with business goals.',
      skills: ['TOGAF', 'EA Frameworks', 'Business Alignment', 'Technology Roadmaps'],
      color: 'from-indigo-500 to-purple-500',
      borderColor: 'border-indigo-500/30',
      hoverColor: 'hover:border-indigo-500',
      shadowColor: 'shadow-indigo-500/20',
      textColor: 'text-indigo-400'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transforming data into actionable insights using advanced analytics and visualization techniques.',
      skills: ['Power BI', 'Tableau', 'SQL', 'Data Visualization', 'Statistical Analysis'],
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/30',
      hoverColor: 'hover:border-purple-500',
      shadowColor: 'shadow-purple-500/20',
      textColor: 'text-purple-400'
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Implementing AI/ML solutions to solve complex business problems and automate processes.',
      skills: ['Machine Learning', 'NLP', 'Deep Learning', 'TensorFlow', 'Python'],
      color: 'from-pink-500 to-rose-500',
      borderColor: 'border-pink-500/30',
      hoverColor: 'hover:border-pink-500',
      shadowColor: 'shadow-pink-500/20',
      textColor: 'text-pink-400'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Cloud-native development and migration strategies across major cloud platforms.',
      skills: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Serverless', 'DevOps'],
      color: 'from-emerald-500 to-teal-500',
      borderColor: 'border-emerald-500/30',
      hoverColor: 'hover:border-emerald-500',
      shadowColor: 'shadow-emerald-500/20',
      textColor: 'text-emerald-400'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Building robust data pipelines and modern data warehouse solutions.',
      skills: ['ETL/ELT', 'Data Pipelines', 'Apache Spark', 'Data Warehousing'],
      color: 'from-orange-500 to-amber-500',
      borderColor: 'border-orange-500/30',
      hoverColor: 'hover:border-orange-500',
      shadowColor: 'shadow-orange-500/20',
      textColor: 'text-orange-400'
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building modern web applications with cutting-edge technologies and frameworks.',
      skills: ['React', 'Node.js', 'TypeScript', 'Next.js', 'REST APIs'],
      color: 'from-violet-500 to-fuchsia-500',
      borderColor: 'border-violet-500/30',
      hoverColor: 'hover:border-violet-500',
      shadowColor: 'shadow-violet-500/20',
      textColor: 'text-violet-400'
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-slate-950 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-3xl md:text-4xl font-bold">Areas of Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Exploring diverse technology domains to deliver comprehensive solutions across the enterprise technology landscape
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl bg-slate-900 border ${area.borderColor} ${area.hoverColor} hover:shadow-lg ${area.shadowColor} transition-all cursor-pointer group relative overflow-hidden`}
            >
              {/* Hover gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

              <div className={`relative w-14 h-14 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-4 shadow-lg ${area.shadowColor} group-hover:scale-110 transition-transform`}>
                <area.icon className="text-white" size={28} />
              </div>
              <h3 className={`text-white mb-2 text-lg font-semibold group-hover:${area.textColor} transition-colors`}>{area.title}</h3>
              <p className="text-slate-400 relative mb-4 text-sm">{area.description}</p>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2 relative">
                {area.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-slate-950 border border-slate-800 text-slate-400 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">
            Want to collaborate or discuss a project?
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
