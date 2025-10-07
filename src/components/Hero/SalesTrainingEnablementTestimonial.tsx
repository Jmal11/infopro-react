import React from 'react';
import { Quote } from 'lucide-react';

export function SalesTrainingEnablementTestimonial() {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Testimonial */}
        <div>
          <div className="flex items-start mb-6">
            <Quote className="w-8 h-8 text-gray-400 mr-2 mt-1" />
            <p className="text-lg text-gray-800">
              We believe a new approach is necessary post-COVID, which is what our REAL Selling Sales Training model addresses. A REAL seller prepares for the customer conversation with Research, knows how to Engage with the customer, sources their Advocates, and knows how to Lead to the Solution. Our goal is to enable the success of Salespeople unlocking their potential with the right sales training and enablement in the context of their business.
            </p>
          </div>
          <div className="flex items-center mt-6">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Carol Cohen" className="w-16 h-16 rounded-full border-2 border-gray-300 mr-4" />
            <div>
              <div className="font-bold text-gray-900">Carol Cohen</div>
              <div className="text-gray-600 text-sm">Vice President,<br />Strategy & Sales Enablement</div>
            </div>
          </div>
        </div>
        {/* Right: Video Thumbnail */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-xl aspect-video rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/sales-video-thumb.webp"
              alt="Unlock Your Sales Potential"
              className="w-full h-full object-cover"
            />
            <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-6 shadow-lg hover:scale-105 transition">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#8B5CF6" />
                <polygon points="13,10 24,16 13,22" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SalesTrainingEnablementTestimonial; 