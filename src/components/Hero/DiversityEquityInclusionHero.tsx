import React from 'react';

export function DiversityEquityInclusionHero() {
  return (
    <section className="bg-[#222] text-white py-16 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Text */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Diversity, Equity, <br />and Inclusion</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">Enabling leaders to build a workplace that fosters inclusion, drives innovation, and enhances employee engagement and retention</p>
          <a href="/contact" className="inline-block border-2 border-white text-white px-8 py-3 font-semibold rounded hover:bg-white hover:text-black transition">CONNECT WITH US</a>
        </div>
        {/* Right: Video thumbnail */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-lg">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dan Rust" className="w-full h-full object-cover" />
            {/* Play button overlay */}
            <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-4 shadow-lg hover:scale-105 transition">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#fff" />
                <polygon points="16,13 28,20 16,27" fill="#7C3AED" />
              </svg>
            </button>
            {/* Speaker info */}
            <div className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="text-lg font-semibold">Dan Rust</div>
              <div className="text-sm text-gray-200">Head of Global Leadership and Organizational Development, Infopro Learning</div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="flex justify-center mt-10">
        <div className="animate-bounce">
          <svg width="24" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="22" height="34" rx="11" stroke="#fff" strokeWidth="2" />
            <circle cx="12" cy="10" r="3" fill="#fff" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default DiversityEquityInclusionHero; 