import React from 'react';

export function BusinessLeadershipHero() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-6">Business Leadership Development</h1>
          <p className="mb-8 max-w-md">
            Driving organizational strategy, making key decisions, and aligning resources to achieve long-term goals amid market changes
          </p>
          <button className="border border-white px-6 py-3 font-semibold hover:bg-white hover:text-gray-900 transition">
            CONNECT WITH US
          </button>
        </div>
        <div className="lg:w-1/2 relative max-w-md">
          <img
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Dan Rust"
            className="rounded-lg shadow-lg w-full"
          />
          <button
            aria-label="Play video"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full p-4 shadow-lg hover:bg-purple-700 transition"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          <div className="mt-4 text-gray-300">
            <p className="font-semibold">Dan Rust</p>
            <p className="text-sm">Head of Global Leadership and Organizational Development, Infopro Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessLeadershipHero;
