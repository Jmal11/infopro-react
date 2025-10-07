import React from 'react';
import { CheckCircle } from 'lucide-react';

const points = [
  'Prepare for senior roles',
  'Develop strategic thinking abilities',
  'Improve senior stakeholder communication',
  'Refine advanced leadership skills',
  'Enhance team and conflict management',
  'Master change management',
];

export function MidCareerDevelopmentProgramAudience() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row gap-12 items-center">
        {/* Left Column */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold mb-4">Who Is This Program For</h2>
          <p className="mb-8 text-gray-300">Professionals willing to:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
            {points.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3 audience-check">
                <CheckCircle className="text-purple-400 w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Right Column - Testimonial */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start border-l border-gray-700 pl-8">
          <blockquote className="text-gray-200 italic mb-6 relative text-lg">
            <span className="text-4xl text-purple-400 leading-none absolute -left-6 -top-4">“</span>
            The Mid-Career Development Program has been pivotal in my transition to senior leadership. It sharpened my strategic thinking, refined my leadership skills, and enabled me to confidently manage complex challenges. This program is a game-changer for anyone aiming to elevate their career to the next level.
            <span className="text-4xl text-purple-400 leading-none absolute -right-6 -bottom-4">”</span>
          </blockquote>
          <hr className="border-gray-700 w-12 mb-4" />
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Laura M."
              className="w-16 h-16 rounded-full object-cover border-2 border-purple-400"
            />
            <div>
              <p className="font-semibold text-white text-lg">Laura M.,</p>
              <p className="text-purple-400 text-sm">Senior Operations Manager</p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .audience-check:hover {
          background: none !important;
          color: inherit !important;
        }
      `}</style>
    </section>
  );
} 