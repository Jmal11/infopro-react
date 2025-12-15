import React from 'react';

const outcomes = [
  {
    title: 'Bias Awareness',
    desc: 'Identify and mitigate prejudices.',
  },
  {
    title: 'Effective Communication',
    desc: 'Improve cross-cultural interactions.',
  },
  {
    title: 'Authentic Leadership',
    desc: 'Model genuine and resilient behavior.',
  },
  {
    title: 'Drive Innovation',
    desc: 'Leverage diverse perspectives.',
  },
  {
    title: 'Foster Inclusion',
    desc: 'Create a respectful, valued workplace.',
  },
  {
    title: 'Trust Building',
    desc: 'Strengthen organizational relationships.',
  },
];

export function DiversityEquityInclusionContent() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left: Heading */}
          <div className="md:col-span-4">
            <h2 className="text-4xl font-bold leading-tight text-gray-900">
              Develop Your Leaders to
              <br />
              Foster a Culture of
              <br />
              Belonging and Inclusion
            </h2>
          </div>
          {/* Right: Description and Outcomes */}
          <div className="md:col-span-8">
            <p className="mb-4 text-base text-gray-700 leading-relaxed">
              Leaders can unintentionally have a negative impact on the business through unconscious bias, micro-exclusions, cultural misunderstandings and missteps which impact employee engagement, talent retention, decision-making, innovation, and overall business success.
            </p>
            <p className="mb-8 text-base text-gray-700 leading-relaxed">
              Our comprehensive suite of Diversity, Equity, and Inclusion (DEI) training programs can equip your leaders with the mindset and skills to create an inclusive workplace where everyone feels valued and respected. Through interactive sessions, real-world scenarios, and actionable strategies, we help you build a culture that promotes diversity, ensures equity, and fosters inclusion.
            </p>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Development Outcomes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
              {outcomes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <img
                    src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg"
                    alt="check"
                    className="w-5 h-5 mt-1 flex-shrink-0"
                  />
                  <div>
                    <span className="font-semibold text-gray-900">{item.title}:</span>
                    <span className="block text-gray-600 text-sm">{item.desc}</span>
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