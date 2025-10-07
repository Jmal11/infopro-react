import React from 'react';

export function PerformanceManagementHero() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Performance Management System</h1>
          <p className="mb-6 text-lg max-w-md">
            Streamline evaluations, enhance productivity, and drive results with our comprehensive PMS framework
          </p>
          <button className="border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition">
            CONNECT WITH US
          </button>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative w-full h-64 md:h-80 rounded overflow-hidden shadow-lg">
            <img
              src="https://www.infoprolearning.com/wp-content/uploads/2023/08/Dan-Rust-Headshot-1-1.jpg"
              alt="Dan Rust"
              className="w-full h-full object-cover"
            />
            <button
              aria-label="Play Video"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition"
            >
              <svg
                className="w-16 h-16 text-purple-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
          <div className="mt-4 text-gray-300">
            <p className="font-semibold">Dan Rust</p>
            <p className="text-sm">Head of Global Leadership and Organizational Development, Infopro Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}
