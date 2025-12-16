import React from 'react';

const leftColumnPoints = [
  "Leaders aiming to integrate AI/ML into their strategic decision-making and business operations.",
  "Digital Transformation Leaders responsible for leading AI-driven innovations within their companies.",
  "Innovation and R&D Leaders focused on technological advancements and business process enhancements through AI/ML.",
];

const rightColumnPoints = [
  "Managers seeking to align AI/ML initiatives with organizational goals and drive innovation in their departments.",
  "Business owners wanting to harness AI/ML to gain a competitive edge and scale their ventures.",
  "IT and Data Science Managers looking to implement AI/ML strategies to transform business functions and customer experiences.",
];

export function AIMLProgramAudience() {
  return (
    <section className="bg-[#292929] text-white py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* Left side - Audience list */}
        <div className="lg:w-2/3 lg:pr-12">
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
            <p className="text-gray-300 leading-relaxed">
              <span className="text-4xl text-gray-500 font-serif leading-none">"</span>
              <span className="italic">I loved this program. The instructors broke down complex AI concepts into easy lessons. The real-world projects were engaging and gave me the skills I need for AI applications. I now feel confident in my understanding of AI and its capabilities. I highly recommend it.</span>
              <span className="text-4xl text-gray-500 font-serif leading-none">"</span>
            </p>
          </div>

          {/* White Line - Small and Thick */}
          <div className="w-12 h-0.5 bg-white my-6"></div>
          
          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img
                src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/sarah-m.png"
                alt="Sarah M."
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-white">Sarah M,</p>
              <p className="text-gray-400 text-sm">Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIMLProgramAudience;