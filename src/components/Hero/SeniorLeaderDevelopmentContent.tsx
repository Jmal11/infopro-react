import React from 'react';

export function SeniorLeaderDevelopmentContent() {
  const leftOutcomes = [
    {
      title: "Strategic Alignment:",
      description: "Unite values, culture, and engagement."
    },
    {
      title: "Data-Driven Decisions:",
      description: "Utilize objective, insightful information."
    },
    {
      title: "Stress Mastery:",
      description: "Transform stress into innovation."
    }
  ];

  const rightOutcomes = [
    {
      title: "Executive Presence:",
      description: "Develop a leadership persona that instills trust, confidence, and moves others to action."
    },
    {
      title: "Effective Communication:",
      description: "Minimize misunderstandings and conflicts."
    },
    {
      title: "Confident Leadership:",
      description: "Navigate uncertainty with assurance."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left side heading */}
        <div className="lg:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Evolving Senior Leaders for a Complex and Hyper-Competitive Business Environment
          </h2>
        </div>

        {/* Right side content */}
        <div className="lg:w-2/3 space-y-6 text-gray-700">
          <p className="leading-relaxed">
            As senior leaders navigate complex, high-stakes business environments, it's crucial to refine their strategic leadership abilities, boost their high-impact communication skills, and enable them to demonstrate a strong executive presence. Our Senior Leader Development Programs are each tailored to meet these needs, providing courses that enhance strategic thinking, stress management, and effective leadership in volatile, uncertain, complex, and ambiguous settings. Our expertly designed courses empower senior leaders to drive organizational success with confidence and clarity.
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