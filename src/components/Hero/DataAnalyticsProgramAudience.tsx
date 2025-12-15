import React from 'react';

export function DataAnalyticsProgramAudience() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Program Audience */}
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Who Is This Program For
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Professionals who want to:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Business Leaders and Executives looking to integrate data analytics into their strategic decision-making processes</span>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Innovation and Transformation Officers driving innovation and transformation initiatives using data analytics</span>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Project Managers managing projects that require data-driven insights to enhance outcomes and efficiency</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Department Managers seeking to optimize their teams through data-driven approaches</span>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Data and Analytics Professionals looking to enhance their skills in data analysis, visualization, and modeling techniques</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Testimonial */}
            <div className="flex flex-col items-center lg:items-start">
              <blockquote className="text-lg italic text-gray-300 mb-8 text-center lg:text-left">
                "This program was exactly what I needed to transition into a data-driven role. The blend of theory and hands-on projects gave me a solid understanding of data analytics and how to present insights visually. I feel confident applying AI techniques in my job now. It is perfect for beginners and intermediate learners alike."
              </blockquote>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-600 rounded-full mr-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">Alex P.</div>
                  <div className="text-gray-400">Data Analyst</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataAnalyticsProgramAudience;
