import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const audiencePoints = [
  "Team leaders, leaders of leaders, strategic organizational leaders",
  "Individuals willing to transition to leadership roles",
  "Teams needing emotional and social intelligence to manage diverse, cross-functional groups",
  "Enterprises prioritizing strategic thinking to gain a competitive edge in a digital-first landscape",
  "Professionals eager to lead beyond traditional boundaries",
  "Organizations facing AI disruptions, seeking leaders who can integrate AI into strategy",
  "Organizations facing AI disruptions, seeking leaders who can integrate AI into business strategy",
];

export function VanguardLeadershipProgramAudience() {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* Left side - Audience list */}
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold mb-6">Who Is This Program For</h2>
          <ul className="space-y-3 text-gray-300">
            {audiencePoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side - Testimonial */}
        <div className="lg:w-1/2 flex flex-col justify-center bg-gray-800 p-8 rounded shadow-lg">
          <blockquote className="text-gray-300 italic mb-6 relative before:content-['“'] before:absolute before:-left-4 before:-top-2 before:text-6xl before:text-purple-600 after:content-['”'] after:absolute after:-right-4 after:-bottom-2 after:text-6xl after:text-purple-600">
            Through the Vanguard Leadership Development Program, my approach to leadership evolved, embracing collaboration, inclusion and innovation like never before. Across cultural, technical, strategic and social boundaries, this program equipped me to lead my teams forward into the next phase of our growth success.
          </blockquote>
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Alex M."
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-white">Alex M.,</p>
              <p className="text-purple-500 text-sm">Chief Innovation Officer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
