import React from 'react';

const benefits = [
  'Enhance strategic leadership skills',
  'Transition to leadership roles',
  'Refine their coaching abilities',
  'Improve performance management',
  'Develop a growth mindset within their teams',
  'Drive sales success and team performance',
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-purple-300 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function CommercialLeadershipProgramAudience() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto max-w-6xl px-8 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Left: Who Is This Program For */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">Who Is This Program For</h2>
          <p className="mb-6">Leaders who want to:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {benefits.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <CheckIcon />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Right: Testimonial */}
        <div className="md:col-span-1 border-l border-gray-700 pl-8 flex flex-col items-start">
          <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h.01M15 7h.01M7 11h10M7 15h6" />
          </svg>
          <p className="italic text-gray-200 mb-4">
            “The Commercial Leadership Development program was a game-changer for my career. It honed my strategic thinking, sharpened my performance management skills, and empowered me to lead my team with confidence and vision. Our sales success has never been stronger.”
          </p>
          <div className="flex items-center mt-4">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Jordan Thompson" className="w-12 h-12 rounded-full mr-3 border-2 border-white" />
            <div>
              <span className="font-bold text-white">Jordan Thompson,</span>
              <div className="text-gray-300 text-sm">Director of Sales</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommercialLeadershipProgramAudience; 