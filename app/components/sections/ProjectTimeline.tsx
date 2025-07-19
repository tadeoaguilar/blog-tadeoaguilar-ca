// app/components/sections/ProjectTimeline.tsx
import { FC } from 'react';
import { ProjectCard } from '../ui/ProjectCard';

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

interface ProjectTimelineProps {
  projects: Project[];
  categories: Array<{
    id: string;
    name: string;
    description: string;
    color: string;
  }>;
}

export const ProjectTimeline: FC<ProjectTimelineProps> = ({ projects, categories }) => {
  // Group projects by year
  const projectsByYear = projects.reduce((acc, project) => {
    const year = project.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  // Sort years in descending order
  const sortedYears = Object.keys(projectsByYear).sort((a, b) => parseInt(b) - parseInt(a));


  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gradient-purple-start to-gradient-purple-mid hidden lg:block"></div>
      
      {sortedYears.map((year) => (
        <div key={year} className="relative mb-16 last:mb-0">
          {/* Year marker */}
          <div className="flex items-center mb-8">
            <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-gradient-purple-start to-gradient-purple-mid rounded-full relative z-10 hidden lg:block"></div>
            <div className="lg:ml-8">
              <h2 className="text-3xl font-bold text-text-gradient-white">
                {year}
              </h2>
              <p className="text-text-gradient-light">
                {projectsByYear[year].length} project{projectsByYear[year].length !== 1 ? 's' : ''} completed
              </p>
            </div>
          </div>

          {/* Projects grid for this year */}
          <div className="lg:ml-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectsByYear[year].map((project) => (
              <div key={project.id} className="relative">
                {/* Category indicator line */}
                <div className="absolute -left-4 top-8 w-3 h-0.5 bg-gradient-to-r from-gradient-purple-start to-gradient-purple-mid hidden lg:block"></div>
                
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  technologies={project.technologies}
                  duration={project.duration}
                  year={project.year}
                  status={project.status}
                  highlights={project.highlights}
                  impact={project.impact}
                  links={project.links}
                  client={project.client}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Category Legend */}
      <div className="mt-12 p-6 bg-gradient-to-r from-gradient-purple-start/10 to-gradient-purple-mid/10 rounded-lg border border-gradient-purple-start/20">
        <h3 className="text-lg font-semibold text-text-gradient-white mb-4">
          Project Categories
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
              <div key={category.id} className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${getCategoryColorClass(category.color)}`}></div>
                <div>
                  <h4 className="text-sm font-medium text-text-gradient-white">
                    {category.name}
                  </h4>
                  <p className="text-xs text-text-gradient-light">
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};