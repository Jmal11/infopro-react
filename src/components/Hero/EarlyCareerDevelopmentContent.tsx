import React from 'react';

export function EarlyCareerDevelopmentContent() {
  const leftOutcomes = [
    {
      title: "Transition to Leadership:",
      description: "Manage and motivate teams."
    },
    {
      title: "Giving and Receiving Feedback:",
      description: "Foster growth through feedback."
    },
    {
      title: "Your Personal Leadership Brand:",
      description: "Align your leadership style and focus with your deepest values."
    }
  ];

  const rightOutcomes = [
    {
      title: "Conduct effective, objective and productive:",
      description: "reviews that boost employee engagement."
    },
    {
      title: "Effective Performance Reviews:",
      description: "Conduct effective, objective and productive reviews that boost employee engagement."
    },
    {
      title: "Building Self-Esteem and Self-Confidence:",
      description: "Boost confidence and credibility to enhance your ability to drive change."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left side heading */}
        <div className="lg:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Empower Your Early Career Leaders for Success
          </h2>
        </div>

        {/* Right side content */}
        <div className="lg:w-2/3 space-y-6 text-gray-700">
          <p className="leading-relaxed">
            Transitioning into leadership can be challenging for early career professionals. Many new leaders navigate this shift without adequate support or training. Recognizing this, organizations invest in structured programs that blend coaching, mentoring, and specialized courses. Our research-backed early career development solutions cultivate essential leadership capabilities, ensuring new managers are well-prepared to lead effectively and drive growth.
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