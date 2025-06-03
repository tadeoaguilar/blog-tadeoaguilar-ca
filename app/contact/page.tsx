// app/contact/page.tsx
'use client'

import { useState, FormEvent } from 'react'
//import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../components/ui/Button'

// Note: Since this uses client-side features, we'll export metadata separately
/*export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Tadeo Aguilar for consulting, collaborations, or just to say hello.',
}*/

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    description: 'Drop me a line anytime',
    value: 'hello@tadeoaguilar.ca',
    link: 'mailto:hello@tadeoaguilar.ca',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A10.99 10.99 0 0112 21c-5.523 0-10-4.477-10-10S6.477 1 12 1c2.852 0 5.498 1.016 7.5 2.85" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 4v6h-6" />
      </svg>
    ),
    title: 'LinkedIn',
    description: 'Connect professionally',
    value: 'in/tadeoaguilar',
    link: 'https://linkedin.com/in/tadeoaguilar',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'GitHub',
    description: 'Check out my code',
    value: 'tadeoaguilar',
    link: 'https://github.com/tadeoaguilar',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Location',
    description: 'Based in',
    value: 'Toronto, Canada',
    link: null,
  },
]

const reasons = [
  {
    title: 'Technical Consulting',
    description: 'Architecture reviews, technology strategy, and system design guidance'
  },
  {
    title: 'Project Leadership',
    description: 'Leading complex technical projects from conception to delivery'
  },
  {
    title: 'Mentorship',
    description: 'Guiding development teams and individual developers'
  },
  {
    title: 'Speaking Engagements',
    description: 'Sharing insights at conferences, meetups, and workshops'
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-lavender-soft/20 via-white-warm to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-light text-indigo-deep mb-6 animate-fade-in-up">
            Let's Connect
          </h1>
          
          <p className="text-xl text-slate-pro mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Whether you have a project in mind, need technical guidance, or just want 
            to discuss the latest in technology, I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-lavender-soft/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-sky-tech/10 to-lavender-soft rounded-lg flex items-center justify-center mb-4 text-sky-tech">
                  {method.icon}
                </div>
                <h3 className="text-lg font-medium text-slate-pro mb-1">{method.title}</h3>
                <p className="text-sm text-slate-pro/70 mb-2">{method.description}</p>
                {method.link ? (
                  <a 
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-tech hover:text-sky-600 transition-colors text-sm break-all"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-slate-pro text-sm">{method.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-light text-indigo-deep mb-6">
                How Can I Help?
              </h2>
              
              <p className="text-lg text-slate-pro mb-8">
                I'm always interested in new challenges and opportunities to help 
                businesses leverage technology effectively. Here are some ways we 
                can work together:
              </p>
              
              <div className="space-y-6 mb-8">
                {reasons.map((reason) => (
                  <div key={reason.title} className="flex gap-4">
                    <div className="w-2 h-2 bg-teal-balance rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-pro mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-slate-pro/70">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-lavender-soft/50 to-transparent p-6 rounded-lg border-l-4 border-sky-tech">
                <p className="text-slate-pro italic">
                  "The best time to plant a tree was 20 years ago. 
                  The second best time is now."
                </p>
                <p className="text-sm text-slate-pro/70 mt-2">
                  — Let's start building something great together
                </p>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-lg border border-lavender-soft/30 p-8">
                <h2 className="text-2xl font-light text-indigo-deep mb-6">
                  Send Me a Message
                </h2>
                
                {status === 'success' ? (
                  <div className="bg-teal-balance/10 border border-teal-balance/30 text-teal-balance p-6 rounded-lg text-center">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                    <p>Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-pro mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-lavender-soft rounded-lg focus:outline-none focus:border-sky-tech transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-pro mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-lavender-soft rounded-lg focus:outline-none focus:border-sky-tech transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-pro mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-lavender-soft rounded-lg focus:outline-none focus:border-sky-tech transition-colors"
                      >
                        <option value="">Select a topic</option>
                        <option value="consulting">Technical Consulting</option>
                        <option value="project">Project Inquiry</option>
                        <option value="mentorship">Mentorship</option>
                        <option value="speaking">Speaking Engagement</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-pro mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-lavender-soft rounded-lg focus:outline-none focus:border-sky-tech transition-colors resize-none"
                        placeholder="Tell me about your project or how I can help..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="primary" 
                      fullWidth
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-lavender-soft/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-indigo-deep text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-lavender-soft/30">
              <h3 className="text-lg font-medium text-slate-pro mb-2">
                What's your typical response time?
              </h3>
              <p className="text-slate-pro/70">
                I aim to respond to all inquiries within 24-48 hours during business days. 
                For urgent matters, please mention it in your message.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-lavender-soft/30">
              <h3 className="text-lg font-medium text-slate-pro mb-2">
                Do you offer remote consulting?
              </h3>
              <p className="text-slate-pro/70">
                Yes! I work with clients globally and am comfortable with remote collaboration 
                tools. Time zones are never a barrier to great work.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-lavender-soft/30">
              <h3 className="text-lg font-medium text-slate-pro mb-2">
                What size projects do you take on?
              </h3>
              <p className="text-slate-pro/70">
                I work on projects of all sizes, from quick consultations to long-term 
                enterprise transformations. Let's discuss your specific needs.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-lavender-soft/30">
              <h3 className="text-lg font-medium text-slate-pro mb-2">
                Do you work with startups?
              </h3>
              <p className="text-slate-pro/70">
                Absolutely! I enjoy helping startups build solid technical foundations 
                that can scale with their growth. Special rates available for early-stage companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-slate-pro mb-8">
            Prefer a more casual conversation? Feel free to connect with me on social media.
          </p>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://linkedin.com/in/tadeoaguilar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-pro hover:text-sky-tech transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/tadeoaguilar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-pro hover:text-sky-tech transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://twitter.com/tadeoaguilar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-pro hover:text-sky-tech transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}