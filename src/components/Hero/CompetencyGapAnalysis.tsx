import React from 'react';

export function CompetencyGapAnalysis() {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
          Perform a Competency Gap Analysis to:
        </h2>
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          {/* Process diagram - MORE SPACE ON LEFT */}
          <div className="md:w-3/5 flex flex-col items-center">
            <div className="flex items-center justify-center">
              {/* Current Skills (hexagon) */}
              <div className="flex flex-col items-center mr-4">
                <div className="relative w-36 h-36">
                  <svg width="144" height="144" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <polygon 
                      points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" 
                      fill="white" 
                      stroke="#D1D5DB" 
                      strokeWidth="2"
                    />
                    <text x="50" y="45" textAnchor="middle" fontSize="14" fontWeight="bold" fill="black">Current</text>
                    <text x="50" y="62" textAnchor="middle" fontSize="14" fontWeight="bold" fill="black">Skills</text>
                  </svg>
                </div>
              </div>

              {/* Chevrons */}
              <div className="flex items-center -space-x-4">
                {/* Beginner Chevron */}
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-20">
                    <svg width="128" height="80" viewBox="0 0 128 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                      <path d="M0 0 H108 L128 40 L108 80 H0 L20 40 Z" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1.5"/>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      {/* Icon */}
                      <svg className="w-7 h-7 text-purple-600 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <line x1="17" y1="11" x2="17" y2="17" />
                        <line x1="20" y1="14" x2="14" y2="14" />
                      </svg>
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                  </div>
                  <span className="mt-3 text-sm font-semibold text-gray-900">Beginner</span>
                </div>

                {/* Intermediate Chevron */}
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-20">
                    <svg width="128" height="80" viewBox="0 0 128 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                      <path d="M0 0 H108 L128 40 L108 80 H0 L20 40 Z" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1.5"/>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      {/* Icon */}
                      <svg className="w-7 h-7 text-purple-600 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <polygon points="12,2 2,7 12,12 22,7 12,2" />
                        <polyline points="2,17 12,22 22,17" />
                        <polyline points="2,12 12,17 22,12" />
                      </svg>
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                  </div>
                  <span className="mt-3 text-sm font-semibold text-gray-900">Intermediate</span>
                </div>

                {/* Expert Chevron */}
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-20">
                    <svg width="128" height="80" viewBox="0 0 128 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                      <path d="M0 0 H108 L128 40 L108 80 H0 L20 40 Z" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1.5"/>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      {/* Icon */}
                      <svg className="w-7 h-7 text-purple-600 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                        <polyline points="16,14 16,20 20,22" />
                      </svg>
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                  </div>
                  <span className="mt-3 text-sm font-semibold text-gray-900">Expert</span>
                </div>
              </div>

              {/* Required Skills (hexagon) */}
              <div className="flex flex-col items-center ml-4">
                <div className="relative w-36 h-36">
                  <svg width="144" height="144" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <polygon 
                      points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" 
                      fill="#7C3AED" 
                      stroke="#7C3AED" 
                      strokeWidth="2"
                    />
                    <text x="50" y="45" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">Required</text>
                    <text x="50" y="62" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">Skills</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bullets with divider - LESS SPACE ON RIGHT */}
          <div className="md:w-2/5 flex items-start md:pl-12 relative mt-12 md:mt-0">
            {/* Divider Line */}
            <div className="hidden md:block absolute left-0 top-0 h-full w-px bg-gray-300" />
            <ul className="space-y-6 pl-0 md:pl-12 w-full">
              {[
                "Develop personalized reskilling strategies for each employee.",
                "Prioritize essential skills for both current and future needs.",
                "Maximize the return on your training investments.",
              ].map((point) => (
                <li key={point} className="flex items-start">
                  <img 
                    src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/tick.svg" 
                    alt="Check icon"
                    className="w-6 h-6 flex-shrink-0 mt-1 mr-3" 
                  />
                  <span className="text-base text-gray-800">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}