import React from 'react';
import { AcademicCapIcon, HandRaisedIcon, UserGroupIcon, Cog6ToothIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    label: 'Blended Learning',
    description: 'Seamlessly integrating self-paced, online and in-person training for a flexible and impactful learning experience.',
    icon: <AcademicCapIcon className="w-8 h-8 text-purple-700" />,
    position: 'top-left',
  },
  {
    label: 'Continuous Learning Support',
    description: 'Continuous access to resources that support learning retention and skill reinforcement for lasting impact.',
    icon: <HandRaisedIcon className="w-8 h-8 text-purple-700" />,
    position: 'bottom-left',
  },
  {
    label: 'Global Pool of Certified Master Facilitators',
    description: 'Ensuring expert-led training with certified professionals in your preferred language (27+ languages) ensuring global reach and understanding.',
    icon: <UserGroupIcon className="w-8 h-8 text-purple-700" />,
    position: 'bottom-center',
  },
  {
    label: 'Onsite and/or Virtual (Facilitated) Delivery Options',
    description: 'Flexible training formats to suit your needs, whether in-person or online, providing seamless, facilitator-led learning experiences.',
    icon: <PresentationChartLineIcon className="w-8 h-8 text-purple-700" />,
    position: 'top-right',
  },
  {
    label: 'Flexible and Customizable Suite of Programs',
    description: 'Customizing learning journeys to align with your organization\'s unique goals and challenges.',
    icon: <Cog6ToothIcon className="w-8 h-8 text-purple-700" />,
    position: 'bottom-right',
  },
];

export function VanguardLeadershipLearningExperience() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-10">Learning Experience</h2>
      <div className="relative w-full max-w-4xl mx-auto aspect-[4/3]">
        {/* Central hexagon */}
        <div className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 bg-purple-600 clip-hexagon flex items-center justify-center text-white">
          <PresentationChartLineIcon className="w-10 h-10" />
        </div>

        {/* Surrounding hexagons */}
        {experiences.map(({ label, description, icon, position }) => {
          let style = 'absolute flex flex-col items-center max-w-xs text-center text-gray-700';

          switch (position) {
            case 'top-left':
              style += ' top-10 left-0';
              break;
            case 'bottom-left':
              style += ' bottom-10 left-0';
              break;
            case 'bottom-center':
              style += ' bottom-0 left-1/2 -translate-x-1/2';
              break;
            case 'top-right':
              style += ' top-10 right-0';
              break;
            case 'bottom-right':
              style += ' bottom-10 right-0';
              break;
            default:
              break;
          }

          return (
            <div key={label} className={style}>
              <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-md mb-2 flex items-center justify-center">
                {icon}
              </div>
              <p className="font-semibold">{label}</p>
              <p className="text-sm max-w-xs">{description}</p>
            </div>
          );
        })}
      </div>

      {/* Hexagon clip-path style */}
      <style>{`
        .clip-hexagon {
          clip-path: polygon(
            25% 5.77%,
            75% 5.77%,
            100% 50%,
            75% 94.23%,
            25% 94.23%,
            0% 50%
          );
        }
      `}</style>
    </section>
  );
}
