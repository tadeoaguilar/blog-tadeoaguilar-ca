// app/about/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../components/ui/Button'

export const metadata: Metadata = {
  title: 'About',
  description: 'Software Architect with 25+ years of experience bridging technology and business strategy.',
}

const skills = [
  {
    category: 'Cloud & Architecture',
    items: ['Azure', 'Cloud Computing', 'Microservices', 'System Design', 'Scalable Architecture']
  },
  {
    category: 'Development',
    items: ['C# / .NET', 'TypeScript', 'React', 'Next.js', 'API Design']
  },
  {
    category: 'Business & Strategy',
    items: ['ERP Consulting', 'Acumatica', 'Project Management', 'Technical Leadership', 'Solution Architecture']
  },
  {
    category: 'Security & Best Practices',
    items: ['Security Frameworks', 'DevOps', 'CI/CD', 'Code Quality', 'Performance Optimization']
  }
]

const timeline = [
  {
    year: '1999',
    title: 'Started Journey',
    description: 'Began my career in software development, focusing on enterprise solutions'
  },
  {
    year: '2005',
    title: 'Architecture Focus',
    description: 'Transitioned to software architecture, designing scalable systems'
  },
  {
    year: '2010',
    title: 'Cloud Adoption',
    description: 'Early adopter of cloud technologies, specializing in Azure'
  },
  {
    year: '2015',
    title: 'Business Integration',
    description: 'Expanded into ERP consulting and business strategy alignment'
  },
  {
    year: '2020',
    title: 'Modern Stack',
    description: 'Embraced modern development practices with microservices and DevOps'
  },
  {
    year: 'Today',
    title: 'Thought Leadership',
    description: 'Sharing insights and mentoring the next generation of developers'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-lavender-soft/20 via-white-warm to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl font-light text-indigo-deep mb-6 animate-fade-in-up">
                Hello, I'm Tadeo Aguilar
              </h1>
              
              <p className="text-xl text-slate-pro mb-6 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                A Software Architect with over 25 years of experience in the industry, 
                specializing in bridging the gap between complex technical solutions and 
                business objectives.
              </p>
              
              <p className="text-lg text-slate-pro/80 mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                I've developed an agnostic approach to tools and technologies, focusing 
                instead on selecting the right solutions for each unique business challenge. 
                My journey has taken me from enterprise development to cloud architecture, 
                always with a focus on creating sustainable, scalable solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <Link href="/contact">
                  <Button variant="primary">Get in Touch</Button>
                </Link>
                <Link href="/projects">
                  <Button variant="secondary">View My Work</Button>
                </Link>
              </div>
            </div>
            
            {/* Image/Avatar Placeholder */}
            <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-sky-tech to-indigo-deep rounded-full flex items-center justify-center text-white text-6xl font-light">
                  TA
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-balance/20 rounded-full blur-2xl"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-lavender-soft rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-indigo-deep mb-8">
            My Philosophy
          </h2>
          
          <div className="bg-gradient-to-r from-lavender-soft to-white-warm p-8 rounded-2xl border-l-4 border-teal-balance">
            <p className="text-xl text-slate-pro leading-relaxed italic">
              "Technology should serve business, not the other way around. 
              The best solutions are those that elegantly solve complex problems 
              while remaining maintainable, scalable, and understandable."
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-tech/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sky-tech" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-slate-pro mb-2">Innovation</h3>
              <p className="text-slate-pro/70">
                Embracing new technologies while maintaining pragmatic skepticism
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-balance/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-balance" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-slate-pro mb-2">Balance</h3>
              <p className="text-slate-pro/70">
                Finding harmony between technical excellence and business value
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-deep/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-slate-pro mb-2">Collaboration</h3>
              <p className="text-slate-pro/70">
                Building bridges between technical teams and business stakeholders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-lavender-soft/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-light text-indigo-deep text-center mb-12">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={skillGroup.category} 
                className="bg-white rounded-xl p-6 shadow-sm border border-lavender-soft/30 hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-medium text-indigo-deep mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center text-slate-pro">
                      <span className="w-2 h-2 bg-teal-balance rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-light text-indigo-deep text-center mb-12">
            My Journey
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-lavender-soft"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 w-4 h-4 bg-sky-tech rounded-full -translate-x-1/2 mt-1.5 z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-20 bg-gradient-to-r from-lavender-soft/20 to-transparent p-6 rounded-lg">
                    <span className="text-sky-tech font-medium">{item.year}</span>
                    <h3 className="text-xl font-medium text-slate-pro mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-pro/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-lavender-soft to-white-warm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-indigo-deep mb-6">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-slate-pro mb-8">
            Whether you're looking for technical leadership, architecture consulting, 
            or strategic guidance, I'm here to help bridge your business goals with 
            technical excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary">Start a Conversation</Button>
            </Link>
            <Link href="/blog">
              <Button variant="secondary">Read My Insights</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}