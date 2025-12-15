import React from 'react';

const benefits = [
  {
    title: ['Improved Sales', 'Performance'],
    description:
      'Enables sales teams to meet customer needs, highlight key features, and outshine competitors, driving higher sales.',
  },
  {
    title: ['Increased Employee', 'Confidence'],
    description:
      'Boosts employee confidence, enhances job performance, reduces stress, and increases satisfaction.',
  },
  {
    title: ['Efficient Problem', 'Resolution'],
    description:
      'Helps employees quickly resolve issues, reducing escalation and downtime.',
  },
  {
    title: ['Improved', 'Productivity'],
    description:
      'Helps employees have the right skills and knowledge, so that they can work more efficiently and be more productive.',
  },
  {
    title: ['Consistent', 'Messaging'],
    description:
      'Ensures team members deliver accurate, consistent product information, strengthening brand reputation.',
  },
  {
    title: ['Improved', 'Customer Service'],
    description:
      'Resolves inquiries efficiently, handles complex issues confidently and builds stronger customer relationships.',
  },
  {
    title: ['Enhanced', 'Consulting Capabilities'],
    description:
      'Empowers consultants to offer expert advice, demonstrate product value, and tailor solutions to client needs.',
  },
  {
    title: ['Improved', 'Customer Loyalty'],
    description:
      'Enables customers with proactive and informed product communication resulting in better appreciation and advocacy.',
  },
];

export function ProductTrainingBenefits() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">Benefits of Product Training</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12">
          {benefits.map(({ title, description }, index) => (
            <div key={index} className="border-l border-gray-300 pl-6 pr-6">
              {/* Two-line title */}
              <h3 className="font-bold text-lg text-gray-900 leading-tight">
                {title[0]}<br />{title[1]}
              </h3>
              
              {/* Purple underline */}
              <div className="w-10 h-1 bg-purple-600 mt-3 mb-4"></div>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductTrainingBenefits;