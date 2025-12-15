import React from 'react';

export function SalesTrainingEnablementTestimonial() {
  return (
    <section className="bg-[#f5f5f5] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Testimonial */}
        <div className="max-w-2xl">
          {/* Quote with decorative quote marks */}
          <div className="relative text-[#333333] text-lg md:text-xl leading-relaxed">
            {/* Opening Quote Mark - flipped horizontally */}
            <img 
              src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Quote1.svg" 
              alt=""
              className="inline w-4 h-4 md:w-5 md:h-5 mr-1 align-baseline relative -top-1 scale-x-[-1]"
              aria-hidden="true"
            />
            We believe a new approach is necessary post-COVID, which is what our REAL Selling Sales Training model addresses. A REAL seller prepares for the customer conversation with Research, knows how to Engage with the customer, sources their Advocates, and knows how to Lead to the Solution. Our goal is to enable the success of Salespeople unlocking their potential with the right sales training and enablement in the context of their business.
            {/* Closing Quote Mark - normal position */}
            <img 
              src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Quote1.svg" 
              alt=""
              className="inline w-4 h-4 md:w-5 md:h-5 ml-1 align-baseline relative -bottom-1"
              aria-hidden="true"
            />
          </div>
          
          {/* Author Info */}
          <div className="flex items-center mt-10">
            <img 
              src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Carol-Cohen.webp" 
              alt="Carol Cohen" 
              className="w-20 h-20 rounded-full object-cover mr-5 border-2 border-gray-200"
            />
            <div>
              <div className="font-bold text-[#333333] text-lg">Carol Cohen</div>
              <div className="text-[#555555] text-base leading-snug mt-1">
                Vice President,<br />
                Strategy &amp; Sales Enablement
              </div>
            </div>
          </div>
        </div>

        {/* Right: Video Thumbnail */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-xl rounded-xl overflow-hidden shadow-2xl">
            {/* Video Thumbnail Image */}
            <div className="relative aspect-video">
              <img 
                src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/sales-video-thumb.webp"
                alt="Unlock Your Sales Potential - REAL Selling by Infopro Learning"
                className="w-full h-full object-cover"
              />

              {/* Play Button Overlay */}
              <button 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer group"
                aria-label="Play video"
              >
                <svg 
                  width="20" 
                  height="24" 
                  viewBox="0 0 20 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 group-hover:scale-110 transition-transform"
                >
                  <path d="M20 12L0 24V0L20 12Z" fill="#8B5CF6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SalesTrainingEnablementTestimonial;