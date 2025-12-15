import React from 'react';

const leftColumnPoints = [
  "Enhance strategic leadership skills",
  "Transition to leadership roles",
  "Refine their coaching abilities",
];

const rightColumnPoints = [
  "Improve performance management",
  "Develop a growth mindset within their teams",
  "Drive sales success and team performance",
];

export function CommercialLeadershipProgramAudience() {
  return (
    <section className="bg-[#292929] text-white py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* Left side - Audience list */}
        <div className="lg:w-2/3 lg:border-r lg:border-gray-600 lg:pr-12">
          <h2 className="text-3xl font-bold mb-2">Who Is This Program For</h2>
          <p className="text-gray-400 mb-8">Leaders who want to:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {/* Left Column */}
            <ul className="space-y-6">
              {leftColumnPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <img 
                    src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg" 
                    alt="Check" 
                    className="w-6 h-6 flex-shrink-0 mt-0.5"
                  />
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
            {/* Right Column */}
            <ul className="space-y-6">
              {rightColumnPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <img 
                    src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg" 
                    alt="Check" 
                    className="w-6 h-6 flex-shrink-0 mt-0.5"
                  />
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right side - Testimonial */}
        <div className="lg:w-1/3 flex flex-col justify-center">
          <div>
            <p className="text-gray-300 leading-relaxed italic">
              <img 
                src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Quote.svg" 
                alt="Quote" 
                className="w-8 h-8 inline-block mr-1 -mt-1"
              />
              The Commercial Leadership Development program was a game-changer for my career. It honed my strategic thinking, sharpened my performance management skills, and empowered me to lead my team with confidence and vision. Our sales success has never been stronger.
              <img 
                src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Quote.svg" 
                alt="Quote" 
                className="w-8 h-8 inline-block ml-1 rotate-180"
              />
            </p>
          </div>

          {/* White Line - Small and Thick */}
          <div className="w-12 h-0.5 bg-white my-6"></div>
          
          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full border-2 border-gray-500 overflow-hidden">
              <img
                src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Michael-D.webp"
                alt="Jordan Thompson"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-white">Jordan Thompson,</p>
              <p className="text-gray-400 text-sm">Director of Sales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommercialLeadershipProgramAudience;