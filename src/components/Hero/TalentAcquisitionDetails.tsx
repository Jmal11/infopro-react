import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const points = [
  {
    title: 'Vast Talent Network:',
    description: 'Access our extensive global database of skilled professionals across diverse industries and specialties.',
  },
  {
    title: 'Precision Skill Mapping:',
    description: 'Utilize our advanced assessment tools to accurately identify and match candidate competencies with your specific job requirements.',
  },
  {
    title: 'Flexible Engagement Models:',
    description: 'Choose from a range of options including contract staffing, project-based hires, and full-time placements.',
  },
  {
    title: 'Rapid Deployment:',
    description: 'Quickly fill critical skill gaps with our readily available, pre-vetted talent pool.',
  },
  {
    title: 'Scalable Workforce Solutions:',
    description: 'Easily adjust your team size and composition to meet fluctuating business demands.',
  },
  {
    title: 'Cost-Effective Hiring:',
    description: 'Reduce recruitment costs and time-to-hire through our streamlined, skills-focused acquisition process.',
  },
];

export function TalentAcquisitionDetails() {
  // split the items into two columns as in your image
  const col1 = [points[0], points[2], points[4]];
  const col2 = [points[1], points[3], points[5]];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="md:grid md:grid-cols-2 md:gap-10 flex flex-col">
          {/* Left: Heading and Description */}
          <div>
            <h2 className="text-4xl font-extrabold mb-6 leading-tight text-black">
              Accelerate Recruitment Process with Skills-<br />
              Based Hiring Strategy
            </h2>
            <p className="mb-3 text-base text-gray-800">
              An organization's efficiency is closely tied to the capabilities of its workforce.
              We blend human expertise with advanced AI to optimize your talent acquisition strategy. With a Skills-based Organization (SBO) approach and flexible staffing solutions, we help you cultivate a high-performing, adaptable workforce.
            </p>
            <p className="text-base text-gray-800">
              Our approach speeds up onboarding, enhances productivity, and promotes long-term employee engagement.
              Let us help you achieve your business goals through talent optimization.
            </p>
          </div>
          {/* Right: Feature Points in two columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mt-10 md:mt-0">
            {[col1, col2].map((col, idx) => (
              <div key={idx} className="space-y-8">
                {col.map((point) => (
                  <div key={point.title} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-black">{point.title}</span>
                      <span className="text-gray-800"> {point.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
