import React from 'react';

export function WorkforcePage() {
  return (
    <div className="bg-[#f6f6f6] min-h-screen section-responsive py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 px-2 sm:px-0">
          <h1 className="text-5xl sm:text-6xl md:text-[75px] font-bold text-gray-900 mb-6 leading-tight">
            Workforce Transformation
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            For over 30 years, we've been transforming the way organizations develop their most valuable
            asset - their people. As a comprehensive learning and talent consulting agency, we drive
            integrated development across individuals, teams, and organizations to
            build a performance-ready workforce.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Develop Talent Card */}
          <div className="bg-white rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-200/50 group cursor-pointer border-t-4 border-l-4 border-r-4 border-t-[#e1d1ff] border-l-[#e1d1ff] border-r-[#e1d1ff] border-b-4 border-b-[#6b19ff]">
            <h2 className="text-xl sm:text-2xl font-semibold text-center mb-8 text-gray-800 group-hover:text-purple-600 transition-colors">
              Develop Talent
            </h2>

            {/* Image */}
            <div className="relative mb-8 flex justify-center">
              <img
                src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Develop-Talent.webp"
                alt="Develop Talent Diagram"
                className="w-full max-w-xs h-auto transition-transform group-hover:scale-105"
              />
            </div>

            <div className="text-center border-t-4 border-[#e1d1ff] pt-4 -mx-6 px-6">
              <p className="text-gray-800 font-semibold text-base sm:text-lg">
                Speed to Proficiency
              </p>
            </div>
          </div>

          {/* Empower Teams Card */}
          <div className="bg-white rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-200/50 group cursor-pointer border-t-4 border-l-4 border-r-4 border-t-[#e1d1ff] border-l-[#e1d1ff] border-r-[#e1d1ff] border-b-4 border-b-[#6b19ff]">
            <h2 className="text-xl sm:text-2xl font-semibold text-center mb-8 text-gray-800 group-hover:text-yellow-600 transition-colors">
              Empower Teams
            </h2>

            {/* Image */}
            <div className="relative mb-8 flex justify-center">
              <img
                src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Empower-Teams.webp"
                alt="Empower Teams Diagram"
                className="w-full max-w-xs h-auto transition-transform group-hover:scale-105"
              />
            </div>

            <div className="text-center border-t-4 border-[#e1d1ff] pt-4 -mx-6 px-6">
              <p className="text-gray-800 font-semibold text-base sm:text-lg">
                Accelerate Growth
              </p>
            </div>
          </div>

          {/* Transform Organization Card */}
          <div className="bg-white rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-200/50 group cursor-pointer border-t-4 border-l-4 border-r-4 border-t-[#e1d1ff] border-l-[#e1d1ff] border-r-[#e1d1ff] border-b-4 border-b-[#6b19ff]">
            <h2 className="text-xl sm:text-2xl font-semibold text-center mb-8 text-gray-800 group-hover:text-teal-600 transition-colors">
              Transform Organization
            </h2>

            {/* Image */}
            <div className="relative mb-8 flex justify-center">
              <img
                src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Transform-Organization.webp"
                alt="Transform Organization Diagram"
                className="w-full max-w-xs h-auto transition-transform group-hover:scale-105"
              />
            </div>

            <div className="text-center border-t-4 border-[#e1d1ff] pt-4 -mx-6 px-6">
              <p className="text-gray-800 font-semibold text-base sm:text-lg">
                Amplify Business Agility
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}