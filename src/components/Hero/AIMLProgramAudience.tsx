import React from 'react';

const AIMLProgramAudience = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-extrabold mb-6">Who Is This Program For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>Leaders aiming to integrate AI/ML into their strategic decision-making and business operations.</span>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>Managers seeking to align AI/ML initiatives with organizational goals and drive innovation in their departments.</span>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>Digital Transformation Leaders responsible for leading AI-driven innovations within their companies.</span>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>Business owners wanting to harness AI/ML to gain a competitive edge and scale their ventures.</span>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>Innovation and R&D Leaders focused on technological advancements and business process enhancements through AI/ML.</span>
              </li>
              <li className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>IT and Data Science Managers looking to implement AI/ML strategies to transform business functions and customer experiences.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-l border-gray-700 pl-8">
          <blockquote className="text-lg italic leading-relaxed mb-6">
            “I loved this program. The instructors broke down complex AI concepts into easy lessons. The real-world projects were engaging and gave me the skills I need for AI applications. I now feel confident in my understanding of AI and its capabilities. I highly recommend it.”
          </blockquote>
          <div className="flex items-center space-x-4">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sarah M"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">Sarah M,</p>
              <p className="text-sm">Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMLProgramAudience;
