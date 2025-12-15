import React from 'react';

const pointsLeft = [
  {
    title: 'Tailored Learning Experience:',
    description: "Custom content precisely aligned with your organization's unique challenges, culture, and objectives.",
  },
  {
    title: 'Enhanced Learner Engagement:',
    description: 'Content designed to resonate with modern learning preferences, increasing participation and retention.',
  },
  {
    title: 'Measurable Impact:',
    description: 'Custom solutions focused on delivering tangible, impactful learning outcomes that can be measured and demonstrated.',
  },
];

const pointsRight = [
  {
    title: 'Flexible Solutions:',
    description: 'A range of options from comprehensive blended programs to targeted digital modules, fitting various budgets and needs.',
  },
  {
    title: 'Business Goal Alignment:',
    description: 'Learning materials crafted to directly support and drive your specific organizational objectives.',
  },
  {
    title: 'AI-Powered Content Development:',
    description: 'Cutting-edge AI technology integrated into content creation, ensuring adaptive, personalized, and efficient learning experiences.',
  },
];

export function CustomContentTailoredSolutions() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Heading always at top left */}
          <div className="md:col-span-1">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-8">
              Elevating Learning<br />
              Through Tailored<br />
              Content Solutions
            </h2>
          </div>
          {/* Right-side content */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <p className="mb-4 text-gray-700 text-lg">
                Today's learners demand content that is not only engaging and relevant but also aligned with organizational objectives and culture. At Infopro Learning, we partner with you to understand your unique challenges and design tailored solutions that address them. From comprehensive blended programs to precise digital learning modules, we offer flexible content development options that meet your budget and elevate your learners' experience.
              </p>
              <p className="mb-4 text-gray-700 text-lg">
                We specialize in developing and delivering bespoke content solutions that drive impactful learning outcomes. Recognizing that learning is an evolving journey, we craft custom content that integrates seamlessly with modern learning preferences and business goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="space-y-7">
                {pointsLeft.map(({ title, description }) => (
                  <div key={title} className="flex items-start space-x-3">
                    <img 
                      src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg"
                      alt="Check"
                      className="w-6 h-6 mt-1 flex-shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{title}</p>
                      <p className="text-gray-700 text-base">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-7">
                {pointsRight.map(({ title, description }) => (
                  <div key={title} className="flex items-start space-x-3">
                    <img 
                      src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg"
                      alt="Check"
                      className="w-6 h-6 mt-1 flex-shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{title}</p>
                      <p className="text-gray-700 text-base">{description}</p>
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