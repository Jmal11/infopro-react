import React from 'react';

export function AgileTransformationStats() {
  const stats = [
    {
      value: "61%",
      description: "of companies leverage Agile for digital transformation and software development."
    },
    {
      value: "1.5x",
      description: "more successful than Waterfall and iterative models."
    },
    {
      value: "60%",
      description: "of companies report increased revenue and profits with Agile."
    },
    {
      value: "86%",
      description: "of marketers plan to transition to Agile methodologies."
    },
    {
      value: "90%",
      description: "of executives view Agile as critical to driving innovation"
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Agile Advantage: Driving Growth, Efficiency, and Innovation
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Key Insights and Impact Metrics Showcasing Agile's Transformational Power
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative">
              {/* Divider line (except for last item) */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-gray-200"></div>
              )}
              
              {/* Stat Content */}
              <div className="px-4">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  {stat.value}
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AgileTransformationStats;
