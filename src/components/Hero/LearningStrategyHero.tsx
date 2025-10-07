import React from 'react';

export function LearningStrategyHero() {
  return (
    <section className="relative bg-gray-900 h-[600px] flex items-center">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left content */}
        <div className="max-w-lg text-white">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            The Future of Learning <br /> and Development
          </h1>
          <p className="mb-6 text-lg">
            Your strategic path to transform enterprise learning
          </p>
          <button className="border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition">
            CONNECT WITH US
          </button>
        </div>

        {/* Right content - video thumbnail with play button */}
        <div className="relative w-[480px] h-[270px] rounded overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-purple-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
