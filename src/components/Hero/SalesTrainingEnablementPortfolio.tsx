import React from 'react';

const portfolio = [
  {
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    title: 'The Customer-centric Approach',
    desc: 'Develop a customer-centric approach to value selling by knowing the customer, their pains and gains, their market, and business goals. Tailor your message to focus on the business value and desired outcomes.'
  },
  {
    img: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80',
    title: 'Powerful Customer Conversations',
    desc: 'Build rapport and trust with customers. Establish a PAO – purpose, agenda, and outcome – for every meeting. Share your powerful insights. Listen more than you speak.'
  },
  {
    img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=400&q=80',
    title: 'Insights Selling for Value',
    desc: 'Empower customers to buy by aligning value to their situation. Speak confidently about the product and its importance to the customer. Navigate any potential roadblocks and make it easy for the customer to understand the value of the solution.'
  },
  {
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    title: 'Competitive Negotiation',
    desc: 'Recognize your differentiation as a knowledgeable partner to your customer. Sell against the status quo and build on value.'
  },
  {
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    title: 'Account Planning',
    desc: 'Align the buying process with your selling process. Take control of the sales cycle with confidence using your digital tools.'
  },
  {
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'The Expansion Sale',
    desc: 'Evaluate and maintain customer health. Foster expansion for your footprint in the account. Build a plan for the long-term relationship.'
  }
];

export function SalesTrainingEnablementPortfolio() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Customizable Sales Training Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolio.map((item, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full">
              <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm flex-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SalesTrainingEnablementPortfolio; 