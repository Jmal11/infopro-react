import React from 'react';

export function EarlyCareerDevelopmentHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[85vh] flex items-center"
      style={{ backgroundImage: "url('https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Early-Career-Development_baner.webp')" }}
    >
      <div className="absolute inset-0"></div>
      <div className="container mx-auto px-4 flex items-center h-full relative z-10">
        <div className="max-w-lg text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Early Career Development</h1>
          <p className="mb-6 text-lg">
            Equip your emerging leaders with essential skills and strategies to thrive in their roles
          </p>
          <button className="border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition">
            CONNECT WITH US
          </button>
        </div>
      </div>
    </section>
  );
}