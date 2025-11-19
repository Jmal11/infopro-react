import React from 'react';

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
  const col1 = [points[0], points[2], points[4]];
  const col2 = [points[1], points[3], points[5]];

  return (
    <section className="w-full-50 py-20">
      <div className="mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Column: Only Heading - 37.5% width */}
          <div className="md:w-[37.5%]">
            <h2 className="text-4xl font-bold leading-snug text-gray-900">
              Accelerate Recruitment Process with Skills-Based Hiring Strategy
            </h2>
          </div>

          {/* Right Column: Description + Feature Points - 62.5% width */}
          <div className="md:w-[62.5%]">
            {/* Description Paragraphs */}
            <div className="mb-10">
              <p className="mb-6 text-base text-gray-700 leading-relaxed">
                An organization's efficiency is closely tied to the capabilities of its workforce. We blend human expertise with advanced AI to optimize your talent acquisition strategy. With a Skills-based Organization (SBO) approach and flexible staffing solutions, we help you cultivate a high-performing, adaptable workforce.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Our approach speeds up onboarding, enhances productivity, and promotes long-term employee engagement. Let us help you achieve your business goals through talent optimization.
              </p>
            </div>

            {/* Feature Points in Two Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {/* Column 1 */}
              <div className="space-y-8">
                {col1.map((point) => (
                  <div key={point.title} className="flex items-start gap-3">
                    <img
                      src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg"
                      alt="Check"
                      className="w-6 h-6 mt-0.5 flex-shrink-0"
                    />
                    <div className="text-base text-gray-800 leading-relaxed">
                      <strong className="font-semibold text-gray-900">{point.title}</strong> {point.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-8">
                {col2.map((point) => (
                  <div key={point.title} className="flex items-start gap-3">
                    <img
                      src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg"
                      alt="Check"
                      className="w-6 h-6 mt-0.5 flex-shrink-0"
                    />
                    <div className="text-base text-gray-800 leading-relaxed">
                      <strong className="font-semibold text-gray-900">{point.title}</strong> {point.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}