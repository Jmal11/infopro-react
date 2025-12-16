import React from 'react';

export function DataAnalyticsHero() {
  return (
    <section className="relative bg-gray-900 text-white h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/hero-banner-data-analytics.webp"
          alt="Diverse business professionals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Data Analytics for
            <br />
            Business Leaders
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Empowering Business Leaders to Drive Growth with Data-Driven Insights
          </p>

          <button className="border-2 border-white text-white px-8 py-3 font-semibold text-sm hover:bg-white hover:text-gray-900 transition duration-300 uppercase tracking-wider">
            CONNECT WITH US
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

export default DataAnalyticsHero;