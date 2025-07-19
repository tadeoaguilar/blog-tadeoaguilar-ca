// app/components/sections/Timeline.tsx
import { FC } from 'react';

interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  type: 'career' | 'education' | 'certification';
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: FC<TimelineProps> = ({ items }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'career':
        return 'bg-blue-500';
      case 'education':
        return 'bg-green-500';
      case 'certification':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gradient-purple-start to-gradient-purple-mid"></div>
      
      {items.map((item) => (
        <div key={item.id} className="relative flex items-start mb-12 last:mb-0">
          <div className={`flex-shrink-0 w-4 h-4 rounded-full ${getTypeColor(item.type)} relative z-10 mt-2`}></div>
          
          <div className="ml-8 flex-grow">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-semibold text-text-gradient-white">
                {item.title}
              </h3>
              <span className="text-sm font-medium text-text-gradient-light bg-gradient-to-r from-gradient-purple-start to-gradient-purple-mid px-3 py-1 rounded-full">
                {item.year}
              </span>
            </div>
            <p className="text-text-gradient-light leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};