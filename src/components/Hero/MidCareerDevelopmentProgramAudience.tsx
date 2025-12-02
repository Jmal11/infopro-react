import React from 'react';

const leftColumnPoints = [
  "Prepare for senior roles",
  "Develop strategic thinking abilities",
  "Improve senior stakeholder communication",
];

const rightColumnPoints = [
  "Refine advanced leadership skills",
  "Enhance team and conflict management",
  "Master change management",
];

export function MidCareerDevelopmentProgramAudience() {
  return (
    <section className="bg-[#292929] text-white py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* Left side - Audience list */}
        <div className="lg:w-2/3 lg:border-r lg:border-gray-600 lg:pr-12">
          <h2 className="text-3xl font-bold mb-2">Who Is This Program For</h2>
          <p className="text-gray-400 mb-8">Professionals willing to:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {/* Left Column */}
            <ul className="space-y-6">
              {leftColumnPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <img 
                    src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg" 
                    alt="Check" 
                    className="w-6 h-6 flex-shrink-0 mt-1"
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
                    className="w-6 h-6 flex-shrink-0 mt-1"
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
            <p className="text-gray-300 leading-relaxed">
              <img 
                src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Quote.svg" 
                alt="Quote" 
                className="w-8 h-8 inline-block mr-1 -mt-1"
              />
              The Mid-Career Development Program has been pivotal in my transition to senior leadership. It sharpened my strategic thinking, refined my leadership skills, and enabled me to confidently manage complex challenges. This program is a game-changer for anyone aiming to elevate their career to the next level.
              <img 
                src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Quote.svg" 
                alt="Quote" 
                className="w-8 h-8 inline-block ml-1 rotate-180"
              />
            </p>
          </div>

          {/* White Line - Small and Thick */}
          <div className="w-16 h-1 bg-white my-6"></div>
          
          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full border-2 overflow-hidden">
              <img
                src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/laura-m.webp"
                alt="Laura M."
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-white">Laura M.,</p>
              <p className="text-gray-400 text-sm">Senior Operations Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}