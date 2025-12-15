import React from 'react';

const outcomes = [
  {
    title: 'Strategic Sales Leadership',
    desc: 'Create value, drive innovation, optimize thinking and decisions.'
  },
  {
    title: 'Sales Accountability and Execution',
    desc: 'Align activities and metrics with targets for predictable success.'
  },
  {
    title: 'Enhanced Sales Coaching',
    desc: 'Adjust coaching style to align with individual development needs.'
  },
  {
    title: 'Improved Sales Performance Management',
    desc: 'Managers enabled to optimize productivity of every salesperson.'
  },
  {
    title: 'Continuous Learning Mindset',
    desc: 'Salespeople and sales manager embrace continuous improvement.'
  },
  {
    title: 'Winning Sales Strategy',
    desc: 'Ensure that you are going to market with a sales strategy proven to win new business.'
  }
];

function CheckIcon() {
  return (
    <img 
      src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg" 
      alt="check" 
      className="w-5 h-5 mr-2 flex-shrink-0 mt-1"
    />
  );
}

export function CommercialLeadershipOutcomes() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-[35%_65%] gap-12 items-start">
        {/* Left: Heading */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Transforming Sales Leadership</h2>
        </div>
        {/* Right: Description and Outcomes */}
        <div>
          <p className="text-gray-700 mb-6">
            In today's competitive market, commercial leaders need advanced skills to drive sales and foster team growth. Our Commercial Leader Development suite of programs offers specialized training designed to boost strategic sales capabilities, improve performance management, and cultivate a growth-oriented mindset within sales teams. Through a combination of expert-led courses and practical applications, your sales leaders will be well-equipped to lead with confidence and drive business success.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Development Outcomes:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {outcomes.map((item, idx) => (
              <div key={idx} className="flex items-start mb-2">
                <CheckIcon />
                <div>
                  <span className="font-semibold text-gray-900">{item.title}:</span>
                  <span className="text-gray-700 ml-1">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommercialLeadershipOutcomes;