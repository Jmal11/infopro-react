import React, { useState } from 'react';

export function LeadershipInnovativeSolutions() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <section className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Elevate Your Leadership Potential
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In today's rapidly changing environment, effective leadership demands a diverse 
            skill set, blending expertise, empathy, critical thinking, collaboration, and strategic 
            vision. At Infopro Learning, we specialize in distilling these vital qualities into 
            actionable programs tailored to your organization's unique needs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As experts in leadership development consulting, we provide a wide range of 
            solutions tailored to your organizational needs. Whether you're starting out or 
            enhancing existing skills, our customizable services offer cost-effective 
            facilitators available on-demand, spanning various subjects, locations, and 
            languages.
          </p>
        </div>

        {/* Right Image - Clickable */}
        <div className="relative cursor-pointer group" onClick={openVideo}>
          <img
            src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Great-Leadership-video.webp"
            alt="Leadership Development"
            className="w-full rounded shadow-lg hover:shadow-xl transition-shadow"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full p-6 group-hover:scale-110 transition-transform shadow-lg">
              <svg 
                className="w-16 h-16 text-purple-600" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div 
            className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
              aria-label="Close video"
            >
              <svg 
                className="w-8 h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>

            {/* Video Player */}
            <video
              className="w-full"
              controls
              autoPlay
              src="https://2854653.fs1.hubspotusercontent-na1.net/hubfs/2854653/ipl-website-video-2024/New-video/Future_of_Work.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}