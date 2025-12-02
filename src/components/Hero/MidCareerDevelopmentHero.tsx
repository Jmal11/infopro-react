import React from 'react';

export function MidCareerDevelopmentHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[85VH] flex items-center"
      style={{ backgroundImage: "url('https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Mid_Career_Development_Banner.webp')" }}
    >
      <div className="absolute inset-0"></div>
      <div className="container mx-auto px-4 flex items-center h-full relative z-10">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl font-bold mb-4">Mid-Career Development</h1>
          <p className="mb-6 text-xl font-normal">
            Unlock the full potential of your mid-career professionals<br />
            with advanced leadership training programs
          </p>
          <a href="/contact" className="inline-block border border-white px-8 py-3 font-semibold rounded transition hover:bg-white hover:text-black text-lg">
            CONNECT WITH US
          </a>
        </div>
      </div>
    </section>
  );
}
