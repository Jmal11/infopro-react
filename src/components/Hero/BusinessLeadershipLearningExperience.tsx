import React from 'react';

export function BusinessLeadershipLearningExperience() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Learning Experience
            </h2>
          </div>

          {/* Hexagonal Diagram */}
          <div className="flex justify-center items-center">
            <div className="relative max-w-4xl w-full">
              {/* Main Center Hexagon */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  <div className="w-32 h-32 bg-purple-600 transform rotate-45 flex items-center justify-center">
                    <div className="transform -rotate-45 text-white">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Hexagon - Blended Learning */}
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-5">
                <div className="relative -mb-8">
                  <div className="w-24 h-24 bg-gray-800 transform rotate-45 flex items-center justify-center">
                    <div className="transform -rotate-45 text-white">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center">
                    <h3 className="font-semibold text-gray-900 text-sm">Blended Learning</h3>
                    <p className="text-xs text-gray-600 max-w-32">Seamlessly integrating self-paced, online and in-person training for a flexible and impactful learning experience.</p>
                  </div>
                </div>
              </div>

              {/* Top Right Hexagon - Onsite and/or Virtual */}
              <div className="absolute right-0 top-1/4 transform translate-x-1/2 z-5">
                <div className="relative -mb-8">
                  <div className="w-24 h-24 bg-gray-800 transform rotate-45 flex items-center justify-center">
                    <div className="transform -rotate-45 text-white">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h2.5l6 8h2L9 12.5 12 6V4H9.5L5.5 10H3V4H1v14h3z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center">
                    <h3 className="font-semibold text-gray-900 text-sm whitespace-nowrap">Onsite and/or Virtual (Facilitated)</h3>
                    <p className="text-xs text-gray-600 max-w-32">Flexible training formats to suit your needs, whether in-person or online, providing seamless, facilitator-led learning experiences.</p>
                  </div>
                </div>
              </div>

              {/* Bottom Right Hexagon - Flexible and Customizable */}
              <div className="absolute right-0 bottom-1/4 transform translate-x-1/2 z-5">
                <div className="relative -mb-8">
                  <div className="w-24 h-24 bg-gray-800 transform rotate-45 flex items-center justify-center">
                    <div className="transform -rotate-45 text-white">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center">
                    <h3 className="font-semibold text-gray-900 text-sm whitespace-nowrap">Flexible and Customizable Suite</h3>
                    <p className="text-xs text-gray-600 max-w-32">Customizing learning journeys to align with your organization's unique goals and challenges.</p>
                  </div>
                </div>
              </div>

              {/* Bottom Hexagon - Global Pool */}
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 z-5">
                <div className="relative -mb-8">
                  <div className="w-24 h-24 bg-gray-800 transform rotate-45 flex items-center justify-center">
                    <div className="transform -rotate-45 text-white">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center">
                    <h3 className="font-semibold text-gray-900 text-sm">Global Pool of Certified Master Facilitators</h3>
                    <p className="text-xs text-gray-600 max-w-32">Ensuring expert-led training with certified professionals in your preferred language (27+ languages) ensuring global reach and understanding.</p>
                  </div>
                </div>
              </div>

              {/* Bottom Left Hexagon - Continuous Learning Support */}
              <div className="absolute left-0 bottom-1/4 transform -translate-x-1/2 z-5">
                <div className="relative -mb-8">
                  <div className="w-24 h-24 bg-gray-800 transform rotate-45 flex items-center justify-center">
                    <div className="transform -rotate-45 text-white">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center">
                    <h3 className="font-semibold text-gray-900 text-sm">Continuous Learning Support</h3>
                    <p className="text-xs text-gray-600 max-w-32">Continuous access to resources that support learning retention and skill reinforcement for lasting impact.</p>
                  </div>
                </div>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 1}}>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7"
                   refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1" />
                  </marker>
                </defs>

                {/* Lines from center to each hexagon */}
                <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <line x1="50%" y1="50%" x2="85%" y2="25%" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <line x1="50%" y1="50%" x2="85%" y2="75%" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <line x1="50%" y1="50%" x2="15%" y2="75%" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessLeadershipLearningExperience;
