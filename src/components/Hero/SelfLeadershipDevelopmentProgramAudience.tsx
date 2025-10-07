import React from 'react';
import { CheckCircle } from 'lucide-react';

const points = [
  'Strengthen personal productivity and focus',
  'Enhance communication and writing skills',
  'Optimize remote and hybrid work practices',
  'Foster collaboration and teamwork',
  'Master stress management techniques',
  'Develop critical thinking and problem-solving abilities',
  'Improve presentation and storytelling capabilities',
];

export function SelfLeadershipDevelopmentProgramAudience() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row gap-12 items-start">
        {/* Left Column */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold mb-2">Who Is This Program For</h2>
          <p className="mb-6 text-gray-300">Leaders who want to:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-4">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <span className="font-medium text-white text-base leading-tight">{point}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right Column: Testimonial */}
        <div className="md:w-1/2 w-full flex flex-col items-start md:pl-12 border-l border-gray-700">
          <blockquote className="text-gray-100 italic mb-6 relative text-base">
            <span className="text-4xl text-purple-400 font-bold absolute -left-6 top-0">“</span>
            The Self-Leadership Development Training Program has been transformative in refining my focus and boosting my productivity. The strategies for stress management and critical thinking have enhanced my professional capabilities and empowered me to lead with greater confidence and clarity.
            <span className="text-4xl text-purple-400 font-bold align-bottom">”</span>
          </blockquote>
          <hr className="border-gray-700 w-12 mb-4" />
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Sarah Williams"
              className="w-14 h-14 rounded-full object-cover border-2 border-purple-400"
            />
            <div>
              <div className="font-bold text-white text-lg">Sarah Williams,</div>
              <div className="text-purple-400 text-sm">Senior Marketing Manager</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 