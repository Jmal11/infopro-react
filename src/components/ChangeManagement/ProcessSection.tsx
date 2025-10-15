export function ProcessSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
          Our Change Management Process
        </h2>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Step 1: Assessment */}
          <div className="flex flex-col items-center text-center p-6 relative">
            <div className="w-12 h-12 rounded-full border-2 border-purple-600 flex items-center justify-center text-lg font-semibold text-purple-600 mb-4">
              01
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Assessment</h3>
            <p className="text-gray-700 leading-relaxed">
              We assess the current state, identifying gaps in performance, culture, and processes to build a tailored change strategy.
            </p>
            {/* Vertical Divider */}
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-3/4 bg-gray-300"></div>
          </div>

          {/* Step 2: Strategy */}
          <div className="flex flex-col items-center text-center p-6 relative">
            <div className="w-12 h-12 rounded-full border-2 border-purple-600 flex items-center justify-center text-lg font-semibold text-purple-600 mb-4">
              02
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Strategy</h3>
            <p className="text-gray-700 leading-relaxed">
              A strategic plan is developed with clear objectives, timelines, and actions for individuals and the organization.
            </p>
            {/* Vertical Divider */}
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-3/4 bg-gray-300"></div>
          </div>

          {/* Step 3: Design */}
          <div className="flex flex-col items-center text-center p-6 relative">
            <div className="w-12 h-12 rounded-full border-2 border-purple-600 flex items-center justify-center text-lg font-semibold text-purple-600 mb-4">
              03
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Design</h3>
            <p className="text-gray-700 leading-relaxed">
              We design targeted interventions, such as training, communication, and structural changes, aligned with organizational goals.
            </p>
            {/* Vertical Divider */}
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-3/4 bg-gray-300"></div>
          </div>

          {/* Step 4: Implementation */}
          <div className="flex flex-col items-center text-center p-6 relative">
            <div className="w-12 h-12 rounded-full border-2 border-purple-600 flex items-center justify-center text-lg font-semibold text-purple-600 mb-4">
              04
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Implementation</h3>
            <p className="text-gray-700 leading-relaxed">
              The plan is executed, managing transitions, addressing resistance, and supporting leaders and teams.
            </p>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          <div className="w-2 h-2 rounded-full bg-purple-600"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
}
