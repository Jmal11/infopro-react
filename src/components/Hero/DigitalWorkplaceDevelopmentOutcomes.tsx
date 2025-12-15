import React from 'react';

export const DigitalWorkplaceDevelopmentOutcomes: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Elevate Your Workforce with Digital Mastery Training
            </h2>
          </div>
          <div>
            <p className="mb-6 text-gray-700">
              Mastering the Digital Workplace is a comprehensive training program designed to empower employees at all levels with essential digital skills for today's workplace. Perfect for onboarding new hires and upskilling existing staff, this versatile curriculum covers everything from foundational tools to advanced digital strategies. Whether you're integrating recent graduates, transitioning traditional teams to remote work, or preparing leadership for digital transformation, Mastering the Digital Workplace training program provides tailored learning paths. With modules on productivity tools, communication platforms, data analysis, AI integration, and cybersecurity, participants gain practical skills applicable to diverse roles and industries. Elevate your workforce's digital competence, enhance collaboration, and drive innovation with “Mastering the Digital Workplace” program.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="inline-block bg-purple-200 text-purple-600 rounded-full p-2 mr-4">
                ✓
              </span>
              <div>
                <strong>Digital Tool Mastery:</strong> Participants will master digital tools for seamless workplace integration.
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-purple-200 text-purple-600 rounded-full p-2 mr-4">
                ✓
              </span>
              <div>
                <strong>Data-Driven Decision Making:</strong> Analyze data using Excel and Power BI.
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-purple-200 text-purple-600 rounded-full p-2 mr-4">
                ✓
              </span>
              <div>
                <strong>AI and Automation Proficiency:</strong> Gain practical knowledge to leverage AI for productivity, innovation.
              </div>
            </li>
          </ul>
          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="inline-block bg-purple-200 text-purple-600 rounded-full p-2 mr-4">
                ✓
              </span>
              <div>
                <strong>Enhanced Digital Communication:</strong> Digital collaboration and communication skills are developed.
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-purple-200 text-purple-600 rounded-full p-2 mr-4">
                ✓
              </span>
              <div>
                <strong>Cybersecurity Awareness:</strong> Show comprehensive understanding of digital security best practices.
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-purple-200 text-purple-600 rounded-full p-2 mr-4">
                ✓
              </span>
              <div>
                <strong>Digital Adaptability and Continuous Learning:</strong> Demonstrate adaptability to digital technologies and continuous learning.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
