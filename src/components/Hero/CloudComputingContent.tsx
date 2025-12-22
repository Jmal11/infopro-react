import React from 'react';

const leftColumnOutcomes = [
  {
    title: 'Design and Implement Cloud Solutions:',
    desc: 'Design scalable, secure, cost-effective cloud infrastructures.',
  },
  {
    title: 'Ensure Cloud Security and Compliance:',
    desc: 'Implement security, ensure compliance, and protect cloud assets.',
  },
  {
    title: 'Leverage Advanced Cloud Technologies:',
    desc: 'Integrate serverless, edge computing, IoT for business innovation.',
  },
];

const rightColumnOutcomes = [
  {
    title: 'Integrate AI and Machine Learning with Cloud Services:',
    desc: 'Develop AI applications using cloud-based machine learning.',
  },
  {
    title: 'Optimize Cloud Performance and Costs:',
    desc: 'Optimize cloud resources, implement auto-scaling, manage costs efficiently.',
  },
  {
    title: 'Navigate the AI and Cloud Ecosystem:',
    desc: 'Grasp cloud, AI trends, ethics, and industry impacts.',
  },
];

export function CloudComputingContent() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-[35%_65%] gap-12 items-start">
        {/* Left: Heading */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Revolutionizing Operations Through Cloud and AI Integration
          </h2>
        </div>
        {/* Right: Description and Outcomes */}
        <div>
          <p className="text-gray-700 mb-4">
            Welcome to our cutting-edge Cloud Computing and AI Integration Training Program. This comprehensive curriculum is designed to equip you with the skills and knowledge needed to thrive in the rapidly evolving fields of cloud technology and artificial intelligence.
          </p>
          <p className="text-gray-700 mb-4">
            Our program covers a wide range of topics, from cloud fundamentals and major platforms to advanced AI integration and emerging technologies. Through hands-on courses and real-world projects, you'll gain practical experience in designing, implementing, and managing cloud-based AI solutions.
          </p>
          <p className="text-gray-700 mb-8">
            Whether you're a seasoned IT professional looking to upgrade your skills or a newcomer to the field, our program offers a structured path to mastering the convergence of cloud and AI technologies. Join us to unlock new career opportunities and drive innovation in the digital age.
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

export default CloudComputingContent;