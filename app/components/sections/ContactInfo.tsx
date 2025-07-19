// app/components/sections/ContactInfo.tsx
import { FC } from 'react';

interface ContactMethod {
  icon: string;
  title: string;
  description: string;
  link?: string;
  action?: string;
}

export const ContactInfo: FC = () => {
  const contactMethods: ContactMethod[] = [
    {
      icon: '📧',
      title: 'Email',
      description: 'Send me a direct message',
      link: 'mailto:contact@tadeoaguilar.ca',
      action: 'contact@tadeoaguilar.ca'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      description: 'Connect professionally',
      link: 'https://www.linkedin.com/in/tadeo-aguilar-pmp/',
      action: 'linkedin.com/in/tadeo-aguilar-pmp'
    },
    {
      icon: '📞',
      title: 'Schedule a Call',
      description: 'Book a consultation',
      action: 'Available upon request'
    },
    {
      icon: '🌍',
      title: 'Location',
      description: 'Based in Canada',
      action: 'Remote & On-site Available'
    }
  ];

  const responseInfo = [
    {
      title: 'Response Time',
      description: 'I typically respond within 24 hours during business days'
    },
    {
      title: 'Best For',
      description: 'Cloud architecture, enterprise solutions, technical consulting'
    },
    {
      title: 'Availability',
      description: 'Open to new projects and collaboration opportunities'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div>
        <h3 className="text-2xl font-semibold text-text-gradient-white mb-6">
          Get In Touch
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="p-4 bg-gradient-to-r from-gradient-purple-start/10 to-gradient-purple-mid/10 border border-gradient-purple-start/20 rounded-lg hover:border-gradient-purple-start/40 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-2xl">{method.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-text-gradient-white mb-1">
                    {method.title}
                  </h4>
                  <p className="text-text-gradient-light text-sm mb-2">
                    {method.description}
                  </p>
                  {method.link ? (
                    <a
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : '_self'}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gradient-purple-start hover:text-gradient-purple-mid transition-colors text-sm font-medium"
                    >
                      {method.action}
                    </a>
                  ) : (
                    <span className="text-gradient-purple-start text-sm font-medium">
                      {method.action}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Response Information */}
      <div>
        <h3 className="text-2xl font-semibold text-text-gradient-white mb-6">
          What to Expect
        </h3>
        <div className="space-y-4">
          {responseInfo.map((info, index) => (
            <div
              key={index}
              className="p-4 bg-gradient-to-r from-gradient-purple-start/5 to-gradient-purple-mid/5 border border-gradient-purple-start/20 rounded-lg"
            >
              <h4 className="font-semibold text-text-gradient-white mb-2">
                {info.title}
              </h4>
              <p className="text-text-gradient-light text-sm">
                {info.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Overview */}
      <div>
        <h3 className="text-2xl font-semibold text-text-gradient-white mb-6">
          How I Can Help
        </h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-gradient-purple-start rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-text-gradient-light">
              <span className="font-medium text-text-gradient-white">Cloud Architecture:</span> 
              {' '}Design scalable, secure cloud solutions and migration strategies
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-gradient-purple-start rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-text-gradient-light">
              <span className="font-medium text-text-gradient-white">Enterprise Architecture:</span> 
              {' '}System integration, digital transformation, and technology strategy
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-gradient-purple-start rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-text-gradient-light">
              <span className="font-medium text-text-gradient-white">Software Architecture:</span> 
              {' '}Application design patterns, microservices, and development best practices
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-gradient-purple-start rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-text-gradient-light">
              <span className="font-medium text-text-gradient-white">Technical Consulting:</span> 
              {' '}Code reviews, architecture assessments, and strategic guidance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};