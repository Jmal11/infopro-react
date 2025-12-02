import React from 'react';

export function MidCareerDevelopmentContent() {
  const leftOutcomes = [
    {
      title: "Managing Difficult Conversations:",
      description: "Engage productively when emotions are high and opinions differ."
    },
    {
      title: "Effective Team Management:",
      description: "Optimize team engagement and performance."
    },
    {
      title: "Executive Communication:",
      description: "Master communication with stakeholders."
    }
  ];

  const rightOutcomes = [
    {
      title: "Integrated Thinking:",
      description: "Learning to apply strategic thinking, systems thinking and critical thinking simultaneously."
    },
    {
      title: "Conflict Resolution:",
      description: "Manage workplace conflicts."
    },
    {
      title: "Change Management:",
      description: "Navigate organizational change."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left side heading */}
        <div className="lg:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Boosting Mid-Career Development Through Advanced Leadership Programs
          </h2>
        </div>

        {/* Right side content */}
        <div className="lg:w-2/3 space-y-6 text-gray-700">
          <p className="leading-relaxed">
            Mid-career professionals often face unique challenges as they navigate complex responsibilities and prepare for senior leadership roles. Recognizing this, organizations invest in structured programs that blend advanced coaching, mentoring, and specialized courses. Our evidence-based mid-career development solutions enhance leadership capabilities, ensuring these leaders are equipped to drive strategic initiatives and foster organizational growth.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-6">Development Outcomes:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Left Column */}
            <div className="space-y-8">
              {leftOutcomes.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <img 
                    src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg" 
                    alt="Check" 
                    className="w-5 h-5 mt-1 flex-shrink-0"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{item.title}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {rightOutcomes.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <img 
                    src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg" 
                    alt="Check" 
                    className="w-5 h-5 mt-1 flex-shrink-0"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{item.title}</p>
                    <p className="text-gray-600">{item.description}</p>
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

export default MidCareerDevelopmentContent;