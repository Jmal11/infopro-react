import React from 'react';
import { CheckCircle } from 'lucide-react';

export function EarlyCareerDevelopmentProgramAudience() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row gap-12">
        {/* Left Column */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold mb-6">Who Is This Program For</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {[
              'New managers transitioning to leadership roles',
              'Frontline leaders',
              'Individual contributors',
              'Emerging leaders aiming to develop core leadership skills',
              'Professionals seeking to enhance team management abilities',
              'Managers looking to improve performance review techniques',
              'Leaders wanting to master feedback and communication',
              'Individuals focused on building a unique leadership brand',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <blockquote className="text-gray-300 italic mb-6">
            “The Emerging Leader Series has been transformative in my journey from individual contributor to a confident leader. It provided me with the essential tools to manage teams effectively and build a distinctive leadership brand. This program is invaluable for anyone aspiring to accelerate their leadership career trajectory.”
          </blockquote>
          <div className="flex items-center space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Michael D."
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-white">Michael D.,</p>
              <p className="text-gray-400">Frontline Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
