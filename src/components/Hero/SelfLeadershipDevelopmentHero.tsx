import React from 'react';

export function SelfLeadershipDevelopmentHero() {
  return (
    <section className="relative bg-gray-900 min-h-[420px] flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full py-16 gap-8">
        {/* Left: Title and CTA */}
        <div className="max-w-xl text-white flex-1">
          <h1 className="text-5xl font-bold mb-4">Self-Leadership</h1>
          <p className="mb-6 text-xl font-normal">
            Targeting the personal development opportunities of leaders at all levels of your business
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
              src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/self-leadership-dan-rust.webp"
              alt="Dan Rust - Self Leadership"
              className="w-full h-64 object-cover object-center"
            />
            <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-purple-700 rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-4 border-white focus:outline-none">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="white" />
                <polygon points="14,11 27,18 14,25" fill="#7C3AED" />
              </svg>
            </button>
            <div className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="text-lg font-semibold text-white">Dan Rust</div>
              <div className="text-sm text-gray-200">Head of Global Leadership and Organizational Development, Infopro Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 