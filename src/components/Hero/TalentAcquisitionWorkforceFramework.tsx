import React from 'react';

const cards = [
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Sourcing.svg',
    outcome: 'Stronger Talent Pipeline',
  },
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Screening.svg',
    outcome: 'Enhanced Insights and Candidate Experience',
  },
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Deployment.svg',
    outcome: 'The Right Talent at the Right Time',
  },
];

export function TalentAcquisitionWorkforceFramework() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">
          Workforce Planning & Engagement Framework
        </h2>
        
        <div className="flex items-stretch justify-center">
          {cards.map((card, index) => (
            <React.Fragment key={index}>
              {/* Card */}
              <div className="flex-1 border-2 border-purple-300 flex flex-col">
                {/* Image - fixed height container for perfect alignment */}
                <div className="h-[500px] flex items-start justify-center overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={`Framework ${index + 1}`}
                    className="w-full h-full object-contain object-top"
                  />
                </div>
                
                {/* Outcome Section - same height for all cards */}
                <div className="border-t-2 border-purple-300 px-8 py-6">
                  <div className="inline-block bg-purple-200 text-purple-700 font-semibold text-sm px-4 py-1 rounded-full mb-3">
                    Outcome
                  </div>
                  <div className="text-xl font-bold text-gray-900">{card.outcome}</div>
                </div>
              </div>
              
              {/* Arrow between cards */}
              {index < cards.length - 1 && (
                <div className="flex-shrink-0 flex items-center">
                  <img 
                    src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/center-arrow.webp"
                    alt="Arrow"
                    className=""
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}