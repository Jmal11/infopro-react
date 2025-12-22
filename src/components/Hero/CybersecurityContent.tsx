import React from 'react';

const leftColumnOutcomes = [
  {
    title: 'Strategic Cybersecurity Planning:',
    desc: 'Develop cybersecurity strategies aligned with goals and risk.',
  },
  {
    title: 'Incident Response Leadership:',
    desc: 'Lead cybersecurity incident response to ensure rapid recovery.',
  },
  {
    title: 'Advanced Risk Mitigation:',
    desc: 'Mitigate advanced cybersecurity risks in complex environments.',
  },
];

const rightColumnOutcomes = [
  {
    title: 'Governance and Compliance:',
    desc: 'Establish governance frameworks and risk processes effectively.',
  },
  {
    title: 'Security Culture Cultivation:',
    desc: 'Foster cybersecurity culture, promoting awareness and employee accountability.',
  },
  {
    title: 'Innovation and Global Collaboration:',
    desc: 'Leverage technologies and cooperation to enhance cybersecurity.',
  },
];

export function CybersecurityContent() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-[35%_65%] gap-12 items-start">
        {/* Left: Heading */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            AI-Powered Solutions for Effective Cybersecurity Management
          </h2>
        </div>
        {/* Right: Description and Outcomes */}
        <div>
          <p className="text-gray-700 mb-8">
            Elevate your organization's cybersecurity posture with our comprehensive cybersecurity training program. Designed for professionals seeking to master the complexities of modern digital security, this program covers critical areas from strategy development to emerging technologies. Our curriculum blends theoretical knowledge with practical skills, addressing key topics such as risk management, incident response, and building a security-conscious culture. Led by industry experts, participants will explore advanced subjects including cloud security, AI in cybersecurity, and international cooperation. Whether you're aiming to enhance your leadership capabilities or deepen your technical expertise, this program equips you with the tools to navigate today's dynamic threat landscape and drive your organization's security initiatives forward.
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

export default CybersecurityContent;