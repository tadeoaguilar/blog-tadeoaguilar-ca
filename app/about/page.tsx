// app/about/page.tsx
import { FC } from 'react';
import { Timeline } from '../components/sections/Timeline';
import { Button } from '../components/ui/Button';
import aboutData from '../data/about.json';

interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  type: 'career' | 'education' | 'certification';
}

const AboutPage: FC = () => {
  const { profile, experience, education, certifications, skills, timeline } = aboutData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-dark-start via-gradient-purple-start to-gradient-purple-mid">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-text-gradient-white mb-6 leading-tight">
              About {profile.name}
            </h1>
            <p className="text-xl text-text-gradient-light max-w-3xl mx-auto leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Professional Summary */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-semibold text-text-gradient-white mb-6">
                Core Expertise
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-text-gradient-white mb-2">
                    Cloud Architecture
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.cloud.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-gradient-purple-start to-gradient-purple-mid text-text-gradient-white text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-text-gradient-white mb-2">
                    Enterprise Architecture
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.architecture.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-gradient-purple-start to-gradient-purple-mid text-text-gradient-white text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-text-gradient-white mb-6">
                Certifications
              </h2>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 bg-gradient-to-r from-gradient-purple-start/20 to-gradient-purple-mid/20 rounded-lg border border-gradient-purple-start/30"
                  >
                    <h3 className="font-medium text-text-gradient-white">
                      {cert.name}
                    </h3>
                    <p className="text-text-gradient-light text-sm">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-text-gradient-white mb-12 text-center">
              Professional Journey
            </h2>
            <Timeline items={timeline as TimelineItem[]} />
          </div>

          {/* Experience Details */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-text-gradient-white mb-12 text-center">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="p-6 bg-gradient-to-r from-gradient-purple-start/10 to-gradient-purple-mid/10 rounded-lg border border-gradient-purple-start/20"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-text-gradient-white">
                        {exp.position}
                      </h3>
                      <p className="text-text-gradient-light font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-text-gradient-light">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-text-gradient-light mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gradient-to-r from-gradient-purple-start/30 to-gradient-purple-mid/30 text-text-gradient-white text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-text-gradient-white mb-6">
              Let's Connect
            </h2>
            <p className="text-text-gradient-light mb-8 max-w-2xl mx-auto">
              Interested in discussing cloud architecture, enterprise solutions, or software design patterns?
              I'd love to connect and share insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">Connect on LinkedIn</Button>
              </a>
              <a href="/blog">
                <Button variant="secondary">Read My Articles</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;