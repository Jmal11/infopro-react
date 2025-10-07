import React from 'react';
import { Link } from 'react-router-dom';

export function AgileProjectManagementHero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-black"
      style={{
        background: 'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75))',
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-20">
        {/* Left Text Block */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Agile Transformation
          </h1>
          <p className="text-lg text-white mb-8">
            Strategic, nimble, and long-term metamorphosis for accelerated growth
          </p>
          <Link
            to="/contact"
            className="inline-block border border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
          >
            CONNECT WITH US
          </Link>
        </div>

        {/* Right Image Block */}
        <div className="relative w-full md:w-1/2 flex justify-end z-0">
          <img
            src="/image.jpg" // Use your imported or hosted asset path for best fidelity
            alt="Agile Transformation"
            className="rounded-lg shadow-lg max-w-md w-full md:max-w-full md:w-auto h-auto object-cover"
            style={{ minHeight: 380 }}
          />
        </div>
      </div>
      {/* Add an optional overlay, if you want even stronger visual effect */}
      <div className="absolute inset-0 bg-black bg-opacity-60 pointer-events-none"></div>
    </section>
  );
}
