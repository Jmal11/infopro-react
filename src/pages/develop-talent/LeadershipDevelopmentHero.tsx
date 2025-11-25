import React from 'react';

export function LeadershipDevelopmentHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[85vh] flex items-center"
      style={{ backgroundImage: "url('https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/leadership-banner.webp')" }}
    >
      <div className="container mx-auto px-4 flex items-center h-full">
        <div className="max-w-lg text-white">
          <h1 className="text-4xl font-bold mb-4">Building Impactful Leaders</h1>
          <p className="mb-6 text-lg">
            Tailored leadership training programs for the modern business world
          </p>
          <button className="border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition">
            CONNECT WITH US
          </button>
        </div>
      </div>
      <div className="absolute inset-0 opacity-50"></div>
    </section>
  );
}
