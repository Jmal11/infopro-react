import React from 'react';

const leftColumnPoints = [
  "Cultivate a culture of accountability",
  "Enhance delegation and prioritization skills",
  "Navigate complex conversations with confidence",
];

const rightColumnPoints = [
  "Boost team engagement and morale",
  "Lead cross-functional project teams",
  "Develop coaching and mentoring abilities",
];

export function NewComponent() {
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
                  <span className="text-gray-300 font-medium">{point}</span>
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
                  <span className="text-gray-300 font-medium">{point}</span>
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
              The People Leadership Development Program transformed the way I lead my team. It equipped me with the tools to foster accountability, drive engagement, and mentor with purpose. As a result, our team's performance has reached new heights.
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
            <div className="w-14 h-14 rounded-full border-2  overflow-hidden">
              <img
                src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Sarah-Williams.png"
                alt="Alex M."
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-white">Alex M.,</p>
              <p className="text-gray-400 text-sm">Senior Operations Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewComponent;