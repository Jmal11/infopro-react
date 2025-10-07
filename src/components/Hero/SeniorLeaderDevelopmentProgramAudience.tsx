import React from 'react';
import { CheckCircle } from 'lucide-react';

const points = [
  'Refine strategic thinking and planning skills',
  'Enhance executive presence',
  'Enhance ability to navigate high-stakes situations/environments',
  'Develop stress and energy management skills',
];

export function SeniorLeaderDevelopmentProgramAudience() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row gap-12 items-center">
        {/* Left Column */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl font-bold mb-2">Who Is This Program For</h2>
          <p className="mb-6 text-gray-200">Senior/C-Suite leaders willing to:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <span className="font-semibold text-white text-sm leading-tight">{point}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right Column: Testimonial */}
        <div className="md:w-1/2 w-full flex flex-col items-start md:pl-12 border-l border-gray-700">
          <blockquote className="text-gray-100 italic mb-6 relative">
            <span className="text-3xl text-purple-400 font-bold absolute -left-6 top-0">“</span>
            The Senior Leader Development Program has been pivotal in elevating my strategic thinking and executive presence. The focus on managing high-stakes environments and building resilience has empowered me to lead more confidently and clearly in the most challenging situations.
            <span className="text-3xl text-purple-400 font-bold align-bottom">”</span>
          </blockquote>
          <div className="flex items-center gap-4">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael R." className="w-12 h-12 rounded-full border-2 border-purple-400" />
            <div>
              <div className="font-bold text-white">Michael R.,</div>
              <div className="text-gray-300 text-sm">Chief Operating Officer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 