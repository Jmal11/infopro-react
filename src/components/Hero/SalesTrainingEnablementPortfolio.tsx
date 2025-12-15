import React from 'react';

const portfolio = [
  {
    img: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Embedding-Customer-Centric-Vision.webp',
    title: 'The Customer-centric Approach',
    desc: 'Develop a customer-centric approach to value selling by knowing the customer, their pains and gains, their market, and business goals. Tailor your message to focus on the business value and desired outcomes.'
  },
  {
    img: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Powerful-Customer-Conversations.webp',
    title: 'Powerful Customer Conversations',
    desc: 'Build rapport and trust with customers. Establish a PAO – purpose, agenda, and outcome – for every meeting. Share your powerful insights. Listen more than you speak.'
  },
  {
    img: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Insights-Selling-for-Value.webp',
    title: 'Insights Selling for Value',
    desc: 'Empower customers to buy by aligning value to their situation. Speak confidently about the product and its importance to the customer. Navigate any potential roadblocks and make it easy for the customer to understand the value of the solution.'
  },
  {
    img: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Competitive-Negotiation.webp',
    title: 'Competitive Negotiation',
    desc: 'Recognize your differentiation as a knowledgeable partner to your customer. Sell against the status quo and build on value.'
  },
  {
    img: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Account-Planning.webp',
    title: 'Account Planning',
    desc: 'Align the buying process with your selling process. Take control of the sales cycle with confidence using your digital tools.'
  },
  {
    img: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/The-Expansion-Sale.webp',
    title: 'The Expansion Sale',
    desc: 'Evaluate and maintain customer health. Foster expansion of your footprint in the account. Build a plan for the long-term relationship.'
  }
];

export function SalesTrainingEnablementPortfolio() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1a1a1a] mb-12">
          Customizable Sales Training Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {portfolio.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Purple top border + Image */}
              <div className="relative">
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#7C3AED]"></div>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-[200px] object-cover" 
                />
              </div>
              
              {/* Content */}
              <div className="pt-5">
                <h3 className="font-bold text-xl text-[#1a1a1a] mb-3">{item.title}</h3>
                <p className="text-[#555555] text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SalesTrainingEnablementPortfolio;