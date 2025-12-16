import React from 'react';

const leftColumnPoints = [
  "Business Leaders and Executives looking to integrate data analytics into their strategic decision-making processes.",
  "Innovation and Transformation Officers driving innovation and transformation initiatives using data analytics.",
  "Project Managers managing projects that require data-driven insights to enhance outcomes and efficiency.",
];

const rightColumnPoints = [
  "Department Managers seeking to optimize their teams through data-driven approaches.",
  "Data and Analytics Professionals looking to enhance their skills in data analysis, visualization, and modeling techniques.",
];

export function DataAnalyticsProgramAudience() {
  return (
    <section className="bg-[#292929] text-white py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* Left side - Audience list */}
        <div className="lg:w-2/3 lg:border-r lg:border-gray-600 lg:pr-12">
          <h2 className="text-3xl font-bold mb-8 italic">Who Is This Program For</h2>
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
                  <span className="text-white">{point}</span>
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
                  <span className="text-white">{point}</span>
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
              This program was exactly what I needed to transition into a data-driven role. The blend of theory and hands-on projects gave me a solid understanding of data analytics and how to present insights visually. I feel confident applying AI techniques in my job now. It is perfect for beginners and intermediate learners alike.
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
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img
                src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/alex-p.png"
                alt="Alex P."
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-white">Alex P,</p>
              <p className="text-gray-400 text-sm">Data Analyst</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataAnalyticsProgramAudience;