import React from 'react';

export function SeniorLeaderDevelopmentHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[85vh] flex items-center"
      style={{ backgroundImage: "url('https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Senior_leader_development_banner.webp')" }}
    >
      <div className="absolute inset-0"></div>
      <div className="container mx-auto px-4 flex items-center h-full relative z-10">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl font-bold mb-4">Senior Leader Development</h1>
          <p className="mb-6 text-xl font-normal">
            Building visionary leadership for organizational success and growth
          </p>
          <a
            href="/contact"
            className="inline-block border border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-black transition-colors"
          >
            CONNECT WITH US
          </a>
        </div>
      </div>
    </section>
  );
} 