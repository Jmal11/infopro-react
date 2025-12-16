import React from 'react';

const leftColumnOutcomes = [
  {
    title: 'Digital Tool Mastery:',
    desc: 'Participants will master digital tools for seamless workplace integration.',
  },
  {
    title: 'Data-Driven Decision Making:',
    desc: 'Analyze data using Excel and Power BI.',
  },
  {
    title: 'AI and Automation Proficiency:',
    desc: 'Gain practical knowledge to leverage AI for productivity, innovation.',
  },
];

const rightColumnOutcomes = [
  {
    title: 'Enhanced Digital Communication:',
    desc: 'Digital collaboration and communication skills are developed.',
  },
  {
    title: 'Cybersecurity Awareness:',
    desc: 'Show comprehensive understanding of digital security best practices.',
  },
  {
    title: 'Digital Adaptability and Continuous Learning:',
    desc: 'Demonstrate adaptability to digital technologies and continuous learning.',
  },
];

export function DigitalWorkplaceContent() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-[35%_65%] gap-12 items-start">
        {/* Left: Heading */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Elevate Your Workforce with Digital Mastery Training
          </h2>
        </div>
        {/* Right: Description and Outcomes */}
        <div>
          <p className="text-gray-700 mb-8">
            Mastering the Digital Workplace is a comprehensive training program designed to empower employees at all levels with essential digital skills for today's workplace. Perfect for onboarding new hires and upskilling existing staff, this versatile curriculum covers everything from foundational tools to advanced digital strategies. Whether you're integrating recent graduates, transitioning traditional teams to remote work, or preparing leadership for digital transformation, Mastering the Digital Workplace training program provides tailored learning paths. With modules on productivity tools, communication platforms, data analysis, AI integration, and cybersecurity, participants gain practical skills applicable to diverse roles and industries. Elevate your workforce's digital competence, enhance collaboration, and drive innovation with "Mastering the Digital Workplace" program.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-6">Development Outcomes:</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            {/* Left Column */}
            <div className="space-y-6">
              {leftColumnOutcomes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <img 
                    src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg" 
                    alt="check" 
                    className="w-5 h-5 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span className="font-semibold text-gray-900">{item.title}</span>
                    <span className="block text-gray-600">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Right Column */}
            <div className="space-y-6">
              {rightColumnOutcomes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <img 
                    src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg" 
                    alt="check" 
                    className="w-5 h-5 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span className="font-semibold text-gray-900">{item.title}</span>
                    <span className="block text-gray-600">{item.desc}</span>
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

export default DigitalWorkplaceContent;