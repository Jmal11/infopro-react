import React from 'react';

export function CustomContentHero() {
  return (
    <section
      className="relative bg-black bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/CustomContentHeroBackground.webp')",
        backgroundSize: 'cover',
        minHeight: '500px',
        backgroundColor: '#222222', // debug background color fallback
      }}
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Text Content */}
          <div className="md:w-1/2 text-white space-y-6 border border-red-500 p-4">
            <h1 className="text-5xl font-bold">Custom Content Development</h1>
            <p className="text-lg max-w-md">
              Create performance-focused and high-impact learning experiences, helping learners reach their full potential
            </p>
            <button className="mt-6 px-6 py-3 border border-white text-white font-semibold uppercase tracking-wider">
              Connect with us
            </button>
          </div>

          {/* Right Image with Play Button */}
          <div className="md:w-1/2 relative border border-blue-500 p-4">
            <img
              src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/CustomContentHeroVideoThumbnail.webp"
              alt="Custom Content Video"
              className="rounded shadow-lg"
            />
            <button
              aria-label="Play Video"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 12l-6.518 3.75V8.25l6.518 3.75z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
