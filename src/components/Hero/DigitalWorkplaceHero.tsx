import React from 'react';

export function DigitalWorkplaceHero() {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551836022-429f8dd8f0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Digital Workplace Team"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Mastering the Digital Workplace
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Transforming workplaces through innovation, collaboration, and technology
          </p>
          <button className="border-2 border-white text-white px-8 py-4 font-semibold text-lg hover:bg-white hover:text-gray-900 transition duration-300 uppercase tracking-wide">
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

export default DigitalWorkplaceHero;
