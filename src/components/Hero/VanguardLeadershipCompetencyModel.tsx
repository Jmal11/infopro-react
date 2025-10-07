import React from 'react';
import { UserGroupIcon, LightBulbIcon, ChatBubbleLeftRightIcon, CpuChipIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const competencies = [
  {
    label: 'Remote Leadership and Collaboration',
    icon: <UserGroupIcon className="w-8 h-8 text-purple-600" />,
    position: 'top',
  },
  {
    label: 'Strategic Thinking and Execution',
    icon: <LightBulbIcon className="w-8 h-8 text-purple-600" />,
    position: 'right',
  },
  {
    label: 'High-Impact Communication',
    icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-purple-600" />,
    position: 'bottom-right',
  },
  {
    label: 'Emotional and Social Intelligence',
    icon: <UserCircleIcon className="w-8 h-8 text-purple-600" />,
    position: 'bottom-left',
  },
  {
    label: 'AI+Digital Mastery',
    icon: <CpuChipIcon className="w-8 h-8 text-purple-600" />,
    position: 'left',
  },
];

export function VanguardLeadershipCompetencyModel() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-10">Vanguard Leader Competency Model</h2>
      <div className="relative w-full max-w-lg mx-auto aspect-square">
        {/* Central triangle */}
        <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-purple-600 to-purple-400 clip-triangle"></div>

        {/* Competency hexagons */}
        {competencies.map(({ label, icon, position }) => {
          let style = '';
          let labelStyle = 'absolute text-sm max-w-xs w-32 text-center text-gray-700';

          switch (position) {
            case 'top':
              style = 'absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center';
              labelStyle += ' mt-2';
              break;
            case 'right':
              style = 'absolute top-1/2 right-0 -translate-y-1/2 flex flex-col items-center';
              labelStyle += ' ml-2';
              break;
            case 'bottom-right':
              style = 'absolute bottom-10 right-10 flex flex-col items-center';
              labelStyle += ' mt-2';
              break;
            case 'bottom-left':
              style = 'absolute bottom-10 left-10 flex flex-col items-center';
              labelStyle += ' mt-2';
              break;
            case 'left':
              style = 'absolute top-1/2 left-0 -translate-y-1/2 flex flex-col items-center';
              labelStyle += ' mr-2';
              break;
            default:
              break;
          }

          return (
            <div key={label} className={style}>
              <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-md flex items-center justify-center">
                {icon}
              </div>
              <p className={labelStyle}>{label}</p>
            </div>
          );
        })}
      </div>

      {/* Triangle clip-path style */}
      <style>{`
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </section>
  );
}
