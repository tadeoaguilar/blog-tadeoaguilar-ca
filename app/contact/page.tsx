// app/contact/page.tsx
import { FC } from 'react';
import { ContactForm } from '../components/ui/ContactForm';
import { ContactInfo } from '../components/sections/ContactInfo';

const ContactPage: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-dark-start via-gradient-purple-start to-gradient-purple-mid">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-text-gradient-white mb-6 leading-tight">
              Let's Work Together
            </h1>
            <p className="text-xl text-text-gradient-light max-w-3xl mx-auto leading-relaxed">
              Ready to transform your technology infrastructure? Let's discuss how cloud architecture, 
              enterprise solutions, and strategic software design can drive your business forward.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-gradient-purple-start/5 to-gradient-purple-mid/5 border border-gradient-purple-start/20 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-text-gradient-white mb-6">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2">
              <ContactInfo />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-semibold text-text-gradient-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-gradient-purple-start/10 to-gradient-purple-mid/10 border border-gradient-purple-start/20 rounded-lg">
                  <h3 className="font-semibold text-text-gradient-white mb-3">
                    What types of projects do you work on?
                  </h3>
                  <p className="text-text-gradient-light text-sm leading-relaxed">
                    I specialize in cloud architecture design, enterprise system integration, 
                    digital transformation initiatives, and software architecture consulting. 
                    Projects range from migration strategies to full-scale system redesigns.
                  </p>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-gradient-purple-start/10 to-gradient-purple-mid/10 border border-gradient-purple-start/20 rounded-lg">
                  <h3 className="font-semibold text-text-gradient-white mb-3">
                    Do you work with startups and small businesses?
                  </h3>
                  <p className="text-text-gradient-light text-sm leading-relaxed">
                    Absolutely! I work with organizations of all sizes, from early-stage startups 
                    needing scalable architecture to established enterprises requiring modernization. 
                    Each solution is tailored to your specific needs and budget.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-gradient-purple-start/10 to-gradient-purple-mid/10 border border-gradient-purple-start/20 rounded-lg">
                  <h3 className="font-semibold text-text-gradient-white mb-3">
                    What's your typical project timeline?
                  </h3>
                  <p className="text-text-gradient-light text-sm leading-relaxed">
                    Project timelines vary based on scope and complexity. Consulting engagements 
                    might take a few weeks, while full architecture implementations can span 
                    several months. I'll provide a detailed timeline during our initial consultation.
                  </p>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-gradient-purple-start/10 to-gradient-purple-mid/10 border border-gradient-purple-start/20 rounded-lg">
                  <h3 className="font-semibold text-text-gradient-white mb-3">
                    Do you offer ongoing support?
                  </h3>
                  <p className="text-text-gradient-light text-sm leading-relaxed">
                    Yes, I provide various support options including architecture reviews, 
                    performance optimization, troubleshooting, and strategic guidance. 
                    We can discuss the best support model for your ongoing needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center bg-gradient-to-r from-gradient-purple-start/10 to-gradient-purple-mid/10 rounded-lg border border-gradient-purple-start/20 p-8">
            <h2 className="text-2xl font-semibold text-text-gradient-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-text-gradient-light mb-6 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to explore possibilities, 
              I'm here to help. Let's schedule a conversation about your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@tadeoaguilar.ca"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gradient-purple-start to-gradient-purple-mid text-text-gradient-white font-medium rounded-lg hover:from-gradient-purple-mid hover:to-gradient-purple-end transition-all duration-300"
              >
                Email Me Directly
              </a>
              <a
                href="https://www.linkedin.com/in/tadeo-aguilar-pmp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-gradient-purple-start text-text-gradient-white font-medium rounded-lg hover:bg-gradient-purple-start/10 transition-all duration-300"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;