import React from 'react';

export function CustomContentHero() {
  return (
    <section
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/CustomContentHeroBackground.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#292929',
        height: '85vh',
      }}
    >
      <div className="container mx-auto px-4 h-full relative flex items-center" style={{ height: '100%' }}>
        <div className="flex flex-col md:flex-row items-center w-full h-full">
          {/* Left Text Content */}
          <div className="md:w-1/2 text-white space-y-6 flex flex-col justify-center h-full">
            <h1 className="text-5xl font-bold">Custom Content Development</h1>
            <p className="text-lg max-w-md">
              Create performance-focused and high-impact learning experiences, helping learners reach their full potential
            </p>
            <button className="mt-6 px-6 py-3 border border-white text-white font-semibold uppercase tracking-wider rounded">
              Connect with us
            </button>
          </div>
          {/* Right Image with Play Button */}
          <div className="md:w-1/2 relative flex justify-center items-center h-full mt-10 md:mt-0">
            <img
              src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/CustomContentHeroVideoThumbnail.webp"
              alt="Custom Content Video"
              className="rounded shadow-lg w-full max-w-md"
              style={{ display: 'block' }}
            />
            <button
              aria-label="Play Video"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-5 shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
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
      {/* Overlay to ensure contrast under transparent navbar */}
      <div className="absolute inset-0 bg-black bg-opacity-35 z-0"></div>
    </section>
  );
}