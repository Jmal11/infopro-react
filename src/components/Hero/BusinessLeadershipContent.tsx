import React from 'react';

export function BusinessLeadershipContent() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Main Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Master Business Leadership
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  Today's business landscape is a complex maze full of uncertainty and disruption. Leaders have a tough job: Making critical business decisions and leading different teams across multiple functions while maintaining a long-term strategic vision – this can be overwhelming, often leading to burnout and missed opportunities.
                </p>

                <p>
                  Our business leadership development training programs are designed to address these challenges head-on. By focusing on strategic thinking, emotional intelligence, and adaptive leadership, these programs empower leaders to lead in a complex ever-evolving world.
                </p>

                <p>
                  The result? Leaders who are not only prepared to meet today's demands but are also poised to drive future success, ensuring their organizations remain competitive and resilient.
                </p>
              </div>
            </div>

            {/* Right Column - Development Outcomes */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Development Outcomes:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Strategic Alignment:</h4>
                      <p className="text-sm text-gray-600">Align values, culture, and strategy.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Judgment Improvement:</h4>
                      <p className="text-sm text-gray-600">Strengthen decision-making processes.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Scenario Planning:</h4>
                      <p className="text-sm text-gray-600">Prepare for sub-optimal outcomes.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Contingency Thinking:</h4>
                      <p className="text-sm text-gray-600">Prepare for diverse outcomes.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Objective Planning:</h4>
                      <p className="text-sm text-gray-600">Base decisions on thorough discovery.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Customer-Centric Decisions:</h4>
                      <p className="text-sm text-gray-600">Factor in employee and customer perspectives.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessLeadershipContent;
