import React from 'react';

export function HumanAIHero() {
  return (
    <section
      className="relative bg-black bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/humn+AI-Video-img.webp')", 
        backgroundSize: 'cover', // Ensures the image covers the entire section
        minHeight: '500px', // Adjust this value as needed for the hero section height
      }}
    >
      {/* Optional dark overlay for better text contrast */}
    

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Text Content */}
          <div className="md:w-1/2 text-white space-y-6">
            <h1 className="text-5xl font-bold">Human + AI</h1>
            <p className="text-lg max-w-md">
              Upskilling for human and AI collaboration
            </p>
            <button className="mt-6 px-6 py-3 border border-white text-white font-semibold uppercase tracking-wider">
              Connect with us
            </button>
          </div>

          {/* Empty placeholder to keep layout consistent */}
          <div className="md:w-1/2"></div>
        </div>
      </div>
    </section>
  );
}