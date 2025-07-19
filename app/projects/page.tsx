// app/projects/page.tsx
import { FC } from 'react';
import { ProjectTimeline } from '../components/sections/ProjectTimeline';
import { Button } from '../components/ui/Button';
import projectsData from '../data/projects.json';

interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  category: string;
  technologies: string[];
  duration: string;
  year: string;
  status: 'completed' | 'in-progress' | 'planned';
  highlights: string[];
  challenges?: string;
  solutions?: string;
  impact?: string;
  links?: {
    demo?: string;
    github?: string;
    case_study?: string;
  };
  images?: string[];
  client?: string;
  teamSize?: string;
}

const ProjectsPage: FC = () => {
  const { projects, categories, stats } = projectsData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-dark-start via-gradient-purple-start to-gradient-purple-mid">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-text-gradient-white mb-6 leading-tight">
              Project Portfolio
            </h1>
            <p className="text-xl text-text-gradient-light max-w-3xl mx-auto leading-relaxed mb-8">
              A showcase of cloud architecture, enterprise solutions, and software design projects 
              that demonstrate strategic technology implementation and innovative problem-solving.
            </p>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-text-gradient-white mb-2">
                  {stats.totalProjects || projects.length}
                </div>
                <div className="text-text-gradient-light text-sm">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-text-gradient-white mb-2">
                  {stats.yearsExperience || '10+'}
                </div>
                <div className="text-text-gradient-light text-sm">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-text-gradient-white mb-2">
                  {stats.technologiesUsed || '50+'}
                </div>
                <div className="text-text-gradient-light text-sm">
                  Technologies Used
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-text-gradient-white mb-2">
                  {stats.clientsSatisfied || '25+'}
                </div>
                <div className="text-text-gradient-light text-sm">
                  Clients Satisfied
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-text-gradient-white mb-8 text-center">
              Areas of Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => {
                const getCategoryColorClass = (color: string) => {
                  switch (color) {
                    case 'blue':
                      return 'bg-blue-500';
                    case 'green':
                      return 'bg-green-500';
                    case 'purple':
                      return 'bg-purple-500';
                    case 'orange':
                      return 'bg-orange-500';
                    default:
                      return 'bg-gray-500';
                  }
                };

                return (
                  <div
                    key={category.id}
                    className="p-6 bg-gradient-to-br from-gradient-purple-start/10 to-gradient-purple-mid/10 rounded-lg border border-gradient-purple-start/20 text-center hover:border-gradient-purple-start/40 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full ${getCategoryColorClass(category.color)} flex items-center justify-center`}>
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-text-gradient-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-text-gradient-light text-sm">
                      {category.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Project Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-text-gradient-white mb-12 text-center">
              Project Timeline
            </h2>
            {projects.length > 0 ? (
              <ProjectTimeline projects={projects as Project[]} categories={categories} />
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🚧</div>
                <h3 className="text-xl font-semibold text-text-gradient-white mb-2">
                  Projects Coming Soon
                </h3>
                <p className="text-text-gradient-light max-w-md mx-auto">
                  I'm currently updating this section with detailed case studies of my recent projects. 
                  Check back soon for comprehensive project showcases.
                </p>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-gradient-purple-start/10 to-gradient-purple-mid/10 rounded-lg border border-gradient-purple-start/20 p-8">
            <h2 className="text-2xl font-semibold text-text-gradient-white mb-4">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-text-gradient-light mb-6 max-w-2xl mx-auto">
              Whether you need cloud architecture design, enterprise system integration, 
              or custom software solutions, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/about">
                <Button variant="primary">Learn About My Experience</Button>
              </a>
              <a href="/blog">
                <Button variant="secondary">Read Technical Articles</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;