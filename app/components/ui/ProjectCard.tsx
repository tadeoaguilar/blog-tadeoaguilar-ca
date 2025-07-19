// app/components/ui/ProjectCard.tsx
import { FC } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  duration: string;
  year: string;
  status: 'completed' | 'in-progress' | 'planned';
  highlights: string[];
  impact?: string;
  links?: {
    demo?: string;
    github?: string;
    case_study?: string;
  };
  client?: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  category,
  technologies,
  duration,
  year,
  status,
  highlights,
  impact,
  links,
  client
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'planned':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'cloud-architecture':
        return 'from-blue-500 to-blue-600';
      case 'enterprise-architecture':
        return 'from-green-500 to-green-600';
      case 'software-architecture':
        return 'from-purple-500 to-purple-600';
      case 'digital-transformation':
        return 'from-orange-500 to-orange-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gradient-purple-start/10 to-gradient-purple-mid/10 rounded-lg border border-gradient-purple-start/20 p-6 hover:border-gradient-purple-start/40 transition-all duration-300 hover:transform hover:scale-105">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-text-gradient-white mb-2">
            {title}
          </h3>
          {client && (
            <p className="text-sm text-text-gradient-light mb-2">
              Client: {client}
            </p>
          )}
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className={`px-2 py-1 ${getStatusColor(status)} text-white text-xs rounded-full`}>
            {status.replace('-', ' ').toUpperCase()}
          </span>
          <span className="text-sm text-text-gradient-light">
            {year}
          </span>
        </div>
      </div>

      {/* Category Badge */}
      <div className={`inline-block bg-gradient-to-r ${getCategoryColor(category)} text-white px-3 py-1 rounded-full text-sm font-medium mb-4`}>
        {category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
      </div>

      {/* Description */}
      <p className="text-text-gradient-light mb-4 leading-relaxed">
        {description}
      </p>

      {/* Duration */}
      <div className="flex items-center text-sm text-text-gradient-light mb-4">
        <span className="font-medium">Duration:</span>
        <span className="ml-2">{duration}</span>
      </div>

      {/* Technologies */}
      {technologies.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-text-gradient-white mb-2">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gradient-to-r from-gradient-purple-start/30 to-gradient-purple-mid/30 text-text-gradient-white text-xs rounded border border-gradient-purple-start/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Highlights */}
      {highlights.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-text-gradient-white mb-2">
            Key Highlights:
          </h4>
          <ul className="space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-text-gradient-light flex items-start">
                <span className="text-gradient-purple-start mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Impact */}
      {impact && (
        <div className="mb-4 p-3 bg-gradient-to-r from-gradient-purple-start/20 to-gradient-purple-mid/20 rounded border border-gradient-purple-start/30">
          <h4 className="text-sm font-medium text-text-gradient-white mb-1">
            Impact:
          </h4>
          <p className="text-sm text-text-gradient-light">
            {impact}
          </p>
        </div>
      )}

      {/* Links */}
      {links && Object.values(links).some(link => link) && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-gradient-purple-start/20">
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm rounded hover:from-blue-600 hover:to-blue-700 transition-colors"
            >
              Live Demo
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-sm rounded hover:from-gray-700 hover:to-gray-800 transition-colors"
            >
              GitHub
            </a>
          )}
          {links.case_study && (
            <a
              href={links.case_study}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm rounded hover:from-green-600 hover:to-green-700 transition-colors"
            >
              Case Study
            </a>
          )}
        </div>
      )}
    </div>
  );
};