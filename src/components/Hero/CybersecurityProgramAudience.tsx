import React from 'react';

const leftColumnPoints = [
  "Cybersecurity professionals seeking to deepen their knowledge of AI in threat detection and risk management",
  "Compliance officers looking to understand the implications of AI on compliance and data security",
  "Organizational leaders interested in fostering a strong cybersecurity culture within organizations",
];

const rightColumnPoints = [
  "Risk management specialists who wish to incorporate AI tools to assess and respond to evolving cyber threats",
  "Data privacy officers keen to learn about AI's role in ensuring data privacy and compliance with regulations",
];

export function CybersecurityProgramAudience() {
  return (
    <section className="bg-[#292929] text-white py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* Left side - Audience list */}
        <div className="lg:w-2/3 lg:pr-12">
          <h2 className="text-3xl font-bold mb-8 italic">This program is designed for:</h2>
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
              <span className="italic">Fantastic course! The practical labs were especially helpful in understanding AI's impact on cybersecurity. The real-world applications discussed gave me new perspectives on threat detection and mitigation. A must-recommend for everyone.</span>
              <span className="text-4xl text-gray-500 font-serif leading-none">"</span>
            </p>
          </div>

          {/* White Line - Small and Thick */}
          <div className="w-12 h-0.5 bg-white my-6"></div>
          
          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img
                src="https://infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Lisa-t.webp"
                alt="Lisa T."
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-white">Lisa T.,</p>
              <p className="text-gray-400 text-sm">Network Security Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CybersecurityProgramAudience;