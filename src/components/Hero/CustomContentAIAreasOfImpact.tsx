import React from 'react';
import { Cpu, BarChart2, FileText, Users, Activity, Layers, UserCheck, BookOpen } from 'lucide-react';

const areas = [
  { icon: Cpu, label: 'AI platforms for skills mapping' },
  { icon: BookOpen, label: 'AI-powered academies for always-on-learning' },
  { icon: UserCheck, label: 'Personalized and adaptive learning pathways' },
  { icon: FileText, label: 'AI tools for efficient content development' },
  { icon: Users, label: 'Personalized coaching and support using AI agents' },
  { icon: Layers, label: 'AI-supported content curation' },
  { icon: Activity, label: 'Synthetic media and transactions' },
  { icon: BarChart2, label: 'Learning analytics and dashboards' },
];

export function CustomContentAIAreasOfImpact() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold mb-4">Our AI-Powered Learning Design & Development Approach</h2>
      <p className="max-w-3xl mx-auto mb-12 text-gray-700">
        At Infopro Learning, we leverage AI through our Intelligent Design Framework (IDF) for learning content design and development. This AI-powered approach delivers exceptional quality while ensuring time and cost efficiencies for our customers.
      </p>
      <div className="relative w-full max-w-4xl mx-auto h-[500px]">
        {/* Central Hexagon */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white font-bold py-4 px-6 rounded-lg hexagon"
          style={{ width: '140px', height: '120px' }}
        >
          AI AREAS<br />OF IMPACT
        </div>

        {/* Circular layout of areas */}
        {areas.map(({ icon: Icon, label }, index) => {
          // Calculate position around circle
          const angle = (index / areas.length) * 2 * Math.PI;
          const radius = 180; // Distance from the center
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={label}
              className="absolute flex flex-col items-center"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              {/* Circle with icon */}
              <div
                className="bg-white p-3 rounded-full shadow-md mb-2"
                style={{ width: '40px', height: '40px' }}
              >
                <Icon className="w-6 h-6 text-purple-600" />
              </div>

              {/* Label */}
              <p className="text-sm font-semibold text-gray-800 text-center">{label}</p>

              {/* Connecting line */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: `${Math.abs(x)}px`,
                  height: `${Math.abs(y)}px`,
                  backgroundColor: 'transparent',
                  pointerEvents: 'none',
                }}
              >
                <svg
                  viewBox={`0 0 ${Math.abs(x) * 2} ${Math.abs(y) * 2}`}
                  preserveAspectRatio="none"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <line
                    x1="50%"
                    y1="50%"
                   x2={`${x > 0 ? '100%' : '0%'}`}
y2={`${y > 0 ? '100%' : '0%'}`}
                    stroke="purple"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
      <style>{`
        .hexagon {
          clip-path: polygon(
            25% 0%, 75% 0%, 
            100% 50%, 75% 100%, 
            25% 100%, 0% 50%
          );
          line-height: 1.2;
          white-space: pre-line;
        }
      `}</style>
    </section>
  );
}