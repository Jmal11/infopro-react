import React from 'react';
import { Users, BookOpen, Globe, Monitor, Layers } from 'lucide-react';

const features = [
  {
    title: 'Blended Learning',
    desc: 'Seamlessly integrating self-paced, online and in-person training for a flexible and impactful learning experience.',
    icon: <Layers className="w-7 h-7 text-white" />,
    position: 'left-top',
  },
  {
    title: 'Continuous Learning Support',
    desc: 'Continuous access to resources that support learning retention and skill reinforcement for lasting impact.',
    icon: <BookOpen className="w-7 h-7 text-white" />,
    position: 'left-bottom',
  },
  {
    title: 'Global Pool of Certified Master Facilitators',
    desc: 'Ensuring expert-led training with certified professionals in your preferred language (27+ languages) ensuring global reach and understanding.',
    icon: <Globe className="w-7 h-7 text-white" />,
    position: 'bottom',
  },
  {
    title: 'Onsite and/or Virtual (Facilitated) Delivery Options',
    desc: 'Flexible training formats to suit your needs, whether in-person or online, providing seamless, facilitator-led learning experiences.',
    icon: <Monitor className="w-7 h-7 text-white" />,
    position: 'right-top',
  },
  {
    title: 'Flexible and Customizable Suite of Programs',
    desc: 'Customizing learning journeys to align with your organization’s unique goals and challenges.',
    icon: <Users className="w-7 h-7 text-white" />,
    position: 'right-bottom',
  },
];

export function SeniorLeaderDevelopmentLearningExperience() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <h2 className="text-3xl font-bold text-center mb-12">Learning Experience</h2>
        <div className="relative flex flex-col items-center justify-center">
          {/* Central Hexagon */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="bg-gradient-to-br from-purple-600 to-purple-400 w-32 h-32 flex items-center justify-center rounded-2xl shadow-lg">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="text-white">
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="currentColor" />
                <path d="M12 22V12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="8" r="2" fill="#fff" />
              </svg>
            </div>
          </div>
          {/* Feature spokes */}
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center pointer-events-none">
            {/* Top left */}
            <div className="absolute left-0 top-8 w-64 max-w-xs flex items-center gap-4">
              <div className="bg-purple-600 rounded-xl p-3 shadow-lg">{features[0].icon}</div>
              <div>
                <div className="font-bold text-gray-900">{features[0].title}</div>
                <div className="text-gray-700 text-sm">{features[0].desc}</div>
              </div>
            </div>
            {/* Bottom left */}
            <div className="absolute left-0 bottom-8 w-64 max-w-xs flex items-center gap-4">
              <div className="bg-purple-600 rounded-xl p-3 shadow-lg">{features[1].icon}</div>
              <div>
                <div className="font-bold text-gray-900">{features[1].title}</div>
                <div className="text-gray-700 text-sm">{features[1].desc}</div>
              </div>
            </div>
            {/* Bottom center */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-80 max-w-xs flex flex-col items-center gap-2">
              <div className="bg-purple-600 rounded-xl p-3 shadow-lg">{features[2].icon}</div>
              <div className="text-center">
                <div className="font-bold text-gray-900">{features[2].title}</div>
                <div className="text-gray-700 text-sm">{features[2].desc}</div>
              </div>
            </div>
            {/* Top right */}
            <div className="absolute right-0 top-8 w-64 max-w-xs flex items-center gap-4 text-right justify-end">
              <div>
                <div className="font-bold text-gray-900">{features[3].title}</div>
                <div className="text-gray-700 text-sm">{features[3].desc}</div>
              </div>
              <div className="bg-purple-600 rounded-xl p-3 shadow-lg">{features[3].icon}</div>
            </div>
            {/* Bottom right */}
            <div className="absolute right-0 bottom-8 w-64 max-w-xs flex items-center gap-4 text-right justify-end">
              <div>
                <div className="font-bold text-gray-900">{features[4].title}</div>
                <div className="text-gray-700 text-sm">{features[4].desc}</div>
              </div>
              <div className="bg-purple-600 rounded-xl p-3 shadow-lg">{features[4].icon}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 