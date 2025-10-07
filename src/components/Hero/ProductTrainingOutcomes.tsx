import React from 'react';

const outcomes = [
  {
    title: 'Accelerated Sales Performance',
    desc: 'Equip employees and partners with deep product knowledge to drive more effective sales pitches and higher conversion rates.'
  },
  {
    title: 'Enhanced Customer Loyalty',
    desc: 'Foster stronger, longer-lasting customer relationships through expert product education, leading to increased renewals and reduced churn.'
  },
  {
    title: 'Empowered Partner/ Reseller Network',
    desc: 'Enable partners and resellers to confidently represent your brand, boosting their sales performance and expanding your market reach.'
  },
  {
    title: 'Cross-Selling and Upselling Opportunities',
    desc: 'Train employees and partners to identify and capitalize on additional sales opportunities within your product ecosystem.'
  },
  {
    title: 'Customer Advocacy Generation',
    desc: 'Transform satisfied, well-informed customers into vocal brand advocates, driving organic growth and referrals.'
  },
  {
    title: 'Measurable Revenue Impact',
    desc: 'Track and quantify how product training directly contributes to increased sales, customer retention rates, and overall revenue growth across all channels.'
  }
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function ProductTrainingOutcomes() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Heading and Intro */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Accelerate Performance with Deep Product Knowledge</h2>
          <p className="text-gray-700 mb-4">
            Knowing your products is an absolute must not just for your employees in various roles but also your partners and customers. For your staff, deep product knowledge helps drive excellent customer experience and empowers them to become brand champions. For internal workforce or external partners, knowing the product is essential for making an informed and better sales pitch contributing to improved sales and better customer.
          </p>
          <p className="text-gray-700 mb-6">
            Customers who are trained well on the product have shown increased loyalty, higher renewals, and strong participation in user communities. We deliver tailored Product Training solutions for all relevant audiences to achieve required business impact. Let us assist you in converting your customers into loyal brand supporters.
          </p>
        </div>
        {/* Right: Outcomes Grid */}
        <div>
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

export default ProductTrainingOutcomes; 