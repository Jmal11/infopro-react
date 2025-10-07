import React from 'react';

export function CustomerExcellenceHero() {
  return (
    <section className="relative bg-gray-900 min-h-[420px] flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full py-16 gap-8">
        {/* Left: Title and CTA */}
        <div className="max-w-xl text-white flex-1">
          <h1 className="text-5xl font-bold mb-4">Customer Excellence</h1>
          <p className="mb-6 text-xl font-normal">
            Empower leaders to elevate the customer experience,<br />
            drive loyalty, and boost repeat sales
          </p>
          <a
            href="/contact"
            className="inline-block border border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-black transition-colors"
          >
            CONNECT WITH US
          </a>
        </div>
        {/* Right: Video Thumbnail */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-full max-w-md rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/customer-excellence-dan-rust.webp"
              alt="Dan Rust - Customer Excellence"
              className="w-full h-64 object-cover object-center"
            />
            <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-purple-700 rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-4 border-white focus:outline-none">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="#8B5CF6" />
                <polygon points="15,12 26,18 15,24" fill="white" />
              </svg>
            </button>
            <div className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="text-lg font-semibold text-white">Dan Rust</div>
              <div className="text-sm text-gray-200">Head of Global Leadership and Organizational Development, Infopro Learning</div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute left-1/2 bottom-6 -translate-x-1/2 flex flex-col items-center z-10">
        <svg width="24" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="22" height="34" rx="11" stroke="#fff" strokeWidth="2" />
          <circle cx="12" cy="10" r="3" fill="#fff">
            <animate attributeName="cy" values="10;26;10" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </section>
  );
}

export default CustomerExcellenceHero; 