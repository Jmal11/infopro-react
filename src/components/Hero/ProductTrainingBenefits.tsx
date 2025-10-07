import React from 'react';

const benefits = [
  {
    title: 'Improved Sales Performance',
    description:
      'Enables sales teams to meet customer needs, highlight key features, and outshine competitors, driving higher sales.',
  },
  {
    title: 'Increased Employee Confidence',
    description:
      'Boosts employee confidence, enhances job performance, reduces stress, and increases satisfaction.',
  },
  {
    title: 'Efficient Problem Resolution',
    description:
      'Helps employees quickly resolve issues, reducing escalation and downtime.',
  },
  {
    title: 'Improved Productivity',
    description:
      'Helps employees have the right skills and knowledge, so that they can work more efficiently and be more productive.',
  },
  {
    title: 'Consistent Messaging',
    description:
      'Ensures team members deliver accurate, consistent product information, strengthening brand reputation.',
  },
  {
    title: 'Improved Customer Service',
    description:
      'Resolves inquiries efficiently, handles complex issues confidently and builds stronger customer relationships.',
  },
  {
    title: 'Enhanced Consulting Capabilities',
    description:
      'Empowers consultants to offer expert advice, demonstrate product value, and tailor solutions to client needs.',
  },
  {
    title: 'Improved Customer Loyalty',
    description:
      'Enables customers with proactive and informed product communication resulting in better appreciation and advocacy.',
  },
];

export function ProductTrainingBenefits() {
  return (
    <section className="py-12 px-6 bg-white max-w-7xl mx-auto">
      <h2 className="text-center text-2xl font-bold mb-10">Benefits of Product Training</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map(({ title, description }) => (
          <div key={title} className="border-r last:border-r-0 pr-4">
            <h3 className="font-semibold text-lg mb-1 border-b-4 border-purple-600 inline-block pb-1">{title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed mt-2">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductTrainingBenefits;
