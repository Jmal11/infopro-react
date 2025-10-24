import React from 'react';

export function TalentAcquisitionHero() {
  return (
    <section
      className="relative bg-black text-white w-full h-[51vw] min-h-[350px] flex items-stretch"
      style={{
        backgroundImage: 'url(https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Staff-Aug-Banner.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Talent Acquisition</h1>
            <p className="text-lg mb-8">Skills-first approach: Revolutionizing your talent pipeline</p>
            <button className="border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition">
              CONNECT WITH US
            </button>
          </div>
          {/* No separate image needed */}
        </div>
      </div>
    </section>
  );
}
