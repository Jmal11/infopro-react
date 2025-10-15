import React, { useEffect } from 'react';

export function HumanAIHero() {
  useEffect(() => {
    document.body.style.margin = '0';
    return () => {
      document.body.style.margin = '';
    };
  }, []);

  return (
    <section
      className="relative bg-cover bg-center human-ai-hero-section"
      style={{ minHeight: '500px', height: '100svh' }}
    >
      {/* Responsive overlay and background */}
      <div
        className="absolute inset-0 z-0 bg-center"
        style={{
          backgroundColor: '#292929',
          backgroundImage:
            "url('https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/humn+AI-Video-img.webp')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        id="human-ai-bg"
      ></div>

      {/* Responsive CSS rules */}
      <style>
        {`
          @media (max-width: 767px) {
            #human-ai-bg {
              background-image: none !important;
              background-color: #292929 !important;
              min-height: 400px !important;
            }
            .human-ai-hero-section {
              height: auto !important;
              min-height: 400px !important;
              background: #292929 !important;
            }
          }
          @media (min-width: 1024px) {
            .human-ai-hero-section {
              height: 47vw !important;
              min-height: unset !important;
            }
          }
        `}
      </style>

      {/* Main content */}
      <div className="container mx-auto px-4 py-20 relative z-10 human-ai-hero-section flex items-center h-full">
        <div className="flex flex-col md:flex-row items-center h-full w-full">
          {/* Left Text Content */}
          <div className="md:w-1/2 text-white space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-2">
              Human + AI
            </h1>
            <p className="text-lg sm:text-xl max-w-md mx-auto md:mx-0 mb-6">
              Upskilling for human and AI collaboration
            </p>
            <button className="mt-4 px-6 py-3 border border-white text-white font-semibold uppercase tracking-wider rounded-md hover:bg-white hover:text-black transition-colors w-full sm:w-auto max-w-xs mx-auto md:mx-0">
              Connect with us
            </button>
          </div>
          {/* Empty Column for spacing on desktop */}
          <div className="md:w-1/2 hidden md:block"></div>
        </div>
      </div>

     
    </section>
  );
}
