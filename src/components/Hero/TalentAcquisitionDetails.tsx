import React from 'react';
import { CheckCircle } from 'lucide-react';

const points = [
  {
    title: 'Vast Talent Network:',
    description: 'Access our extensive global database of skilled professionals across diverse industries and specialties.',
  },
  {
    title: 'Flexible Engagement Models:',
    description: 'Choose from a range of options including contract staffing, project-based hires, and full-time placements.',
  },
  {
    title: 'Scalable Workforce Solutions:',
    description: 'Easily adjust your team size and composition to meet fluctuating business demands.',
  },
  {
    title: 'Precision Skill Mapping:',
    description: 'Utilize our advanced assessment tools to accurately identify and match candidate competencies with your specific job requirements.',
  },
  {
    title: 'Rapid Deployment:',
    description: 'Quickly fill critical skill gaps with our readily available, pre-vetted talent pool.',
  },
  {
    title: 'Cost-Effective Hiring:',
    description: 'Reduce recruitment costs and time-to-hire through our streamlined, skills-focused acquisition process.',
  },
];

export function TalentAcquisitionDetails() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Accelerate Recruitment Process with Skills-Based Hiring Strategy</h2>
          <p className="mb-4">
            An organization&apos;s efficiency is closely tied to the capabilities of its workforce. We blend human expertise with advanced AI to optimize your talent acquisition strategy. With a Skills-based Organization (SBO) approach and flexible staffing solutions, we help you cultivate a high-performing, adaptable workforce.
          </p>
          <p>
            Our approach speeds up onboarding, enhances productivity, and promotes long-term employee engagement. Let us help you achieve your business goals through talent optimization.
          </p>
        </div>
        <div className="space-y-6">
          {points.map(({ title, description }) => (
            <div key={title} className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <strong>{title}</strong> {description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
