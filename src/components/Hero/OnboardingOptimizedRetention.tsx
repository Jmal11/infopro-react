import React from 'react';
import { CheckCircle } from 'lucide-react';

const pointsLeft = [
  {
    title: 'Accelerated Productivity:',
    description: 'Streamline the integration process to get new hires contributing effectively faster.',
  },
  {
    title: 'Cultural Immersion:',
    description: 'Foster immediate connection to company values, mission, and team dynamics.',
  },
  {
    title: 'Digital-First Approach:',
    description: 'Leverage cutting-edge technology for seamless, engaging, and accessible onboarding experiences.',
  },
];

const pointsRight = [
  {
    title: 'Customized Welcome Experience:',
    description: 'Tailor onboarding journeys to specific roles, departments, and individual needs.',
  },
  {
    title: 'Compliance Assurance:',
    description: 'Ensure all necessary paperwork, training, and legal requirements are completed efficiently.',
  },
  {
    title: 'Continuous Feedback Loop:',
    description: 'Implement mechanisms for real-time feedback to continuously improve the onboarding process.',
  },
];

export function OnboardingOptimizedRetention() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Optimized Onboarding for Enhanced Employee Retention and Performance</h2>
        </div>
        <div>
          <p className="mb-6 text-gray-700">
            A strong onboarding experience directly impacts employee retention. Our onboarding programs help you offer an engaging and impactful new hire experience across all key dimensions: Company, Culture, and Craft. Specializing in workforce transformation, we reduce time-to-proficiency, streamline onboarding time, and boost talent retention. Combining advanced technology with a human-centered approach, we deliver increased performance within the first six months. Connect with us to build a performance-ready workforce that drives your business forward.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              {pointsLeft.map(({ title, description }) => (
                <div key={title} className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-600 w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-gray-600 text-sm">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {pointsRight.map(({ title, description }) => (
                <div key={title} className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-600 w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-gray-600 text-sm">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
