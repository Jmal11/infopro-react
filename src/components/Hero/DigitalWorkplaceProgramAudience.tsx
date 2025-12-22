import React from 'react';

const leftColumnPoints = [
  "New graduates, new hires and entry-level professionals entering the workforce who need to quickly adapt to professional digital environments and tools",
  "Senior executives and leaders who need to understand digital trends and lead digital transformation initiatives",
  "Employees adjusting to new ways of working and collaborating in virtual environments",
];

const rightColumnPoints = [
  "Mid-career professionals looking to update their digital skills to stay competitive and advance in their careers",
  "Professionals transitioning to more digitally focused roles or industries.",
  "Professionals seeking to broaden their understanding of digital tools beyond their specific technical domains",
];

export function DigitalWorkplaceProgramAudience() {
  return (
    <section className="bg-[#292929] text-white py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
        {/* Left side - Audience list */}
        <div className="lg:w-2/3 lg:pr-12">
          <h2 className="text-3xl font-bold mb-8 italic">Who Is This Program For:</h2>
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
              <span className="italic">An excellent course. Mastering the digital workplace equipped me with the practical skills to optimize my digital work environment. The strategies and hands-on techniques shared were incredibly valuable. I now feel more efficient and confident in managing tasks remotely—a must-take for anyone looking to boost their digital skills.</span>
              <span className="text-4xl text-gray-500 font-serif leading-none">"</span>
            </p>
          </div>

          {/* White Line - Small and Thick */}
          <div className="w-12 h-0.5 bg-white my-6"></div>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img
                src="https://infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/John.webp"
                alt="John R."
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-white">John R.,</p>
              <p className="text-gray-400 text-sm">Project Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigitalWorkplaceProgramAudience;