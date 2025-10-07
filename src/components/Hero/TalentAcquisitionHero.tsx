import React from 'react';

export function TalentAcquisitionHero() {
  return (
    <section
      className="relative bg-black text-white"
      style={{
        backgroundImage: 'url(https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Staff-Aug-Banner.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black bg-opacity-60">
        <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Talent Acquisition</h1>
            <p className="text-lg mb-8">Skills-first approach: Revolutionizing your talent pipeline</p>
            <button className="border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition">
              CONNECT WITH US
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            {/* The image of the woman with laptop is part of the background, so no separate img tag needed */}
          </div>
        </div>
      </div>
    </section>
  );
}
