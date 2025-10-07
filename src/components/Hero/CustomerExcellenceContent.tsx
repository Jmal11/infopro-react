import React from 'react';

const outcomes = [
  {
    title: 'Trusted Advisor:',
    desc: 'Build customer confidence and trust.',
  },
  {
    title: 'Sales Uplift:',
    desc: 'Increase opportunities for upselling.',
  },
  {
    title: 'Proactive Engagement:',
    desc: 'Anticipate and address customer requirements in advance.',
  },
  {
    title: 'Loyalty Growth:',
    desc: 'Foster customer retention and referrals.',
  },
  {
    title: 'Customer-Centric Culture:',
    desc: 'Develop a mindset that prioritizes customer needs at all levels.',
  },
  {
    title: 'Enhanced Listening:',
    desc: 'Develop empathetic skills to understand customer demands.',
  },
];

export function CustomerExcellenceContent() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-start">
        {/* Left: Heading */}
        <div className="md:w-1/3 w-full mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preparing Leaders to Lead with a Customer-Centric Focus
          </h2>
        </div>
        {/* Right: Description and Outcomes */}
        <div className="md:w-2/3 w-full">
          <p className="text-gray-700 mb-4 text-base md:text-lg">
            Effective leadership in customer excellence requires more than just managing operations; it demands a profound understanding of customer needs and a commitment to exceeding their expectations. Our customer excellence training program is designed to equip leaders with the skills to embed customer-centricity into every aspect of their strategy and execution.
          </p>
          <p className="text-gray-700 mb-6 text-base md:text-lg">
            This training empowers leaders to enhance customer loyalty and drive long-term profitability by fostering a culture prioritizing customer need. The result is a performance-ready workforce capable of sustaining a competitive edge through a relentless focus on customer excellence.
          </p>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Development Outcomes:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {outcomes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="mt-1">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="11" cy="11" r="11" fill="#8B5CF6" />
                      <path d="M7 11.5l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold text-gray-900">{item.title}</span>
                    <span className="block text-gray-700 text-base">{item.desc}</span>
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

export default CustomerExcellenceContent; 