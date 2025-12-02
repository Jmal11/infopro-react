import React from 'react';

const leftColumnPoints = [
  "New managers transitioning to leadership roles",
  "Frontline leaders",
  "Individual contributors",
  "Emerging leaders aiming to develop core leadership skills",
];

const rightColumnPoints = [
  "Professionals seeking to enhance team management abilities",
  "Managers looking to improve performance review techniques",
  "Leaders wanting to master feedback and communication",
  "Individuals focused on building a unique leadership brand",
];

export function EarlyCareerDevelopmentProgramAudience() {
  return (
    <section className="bg-[#292929] text-white py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* Left side - Audience list */}
        <div className="lg:w-2/3 lg:border-r lg:border-gray-600 lg:pr-12">
          <h2 className="text-3xl font-bold mb-8">Who Is This Program For</h2>
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
              The Emerging Leader Series has been transformative in my journey from individual contributor to a confident leader. It provided me with the essential tools to manage teams effectively and build a distinctive leadership brand. This program is invaluable for anyone aspiring to accelerate their leadership career trajectory.
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
                src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Michael-D.webp"
                alt="Michael D."
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-white">Michael D.,</p>
              <p className="text-gray-400 text-sm">Frontline Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}