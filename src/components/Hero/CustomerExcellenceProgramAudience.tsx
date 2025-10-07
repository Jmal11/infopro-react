import React from 'react';

const checklist = [
  'Elevate customer service excellence',
  'Strengthen brand communication skills',
  'Lead customer-focused teams',
  'Innovate customer-centric solutions',
  'Build strong customer relationships',
  'Drive customer loyalty and retention',
];

export function CustomerExcellenceProgramAudience() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
        {/* Left: Checklist */}
        <div className="md:w-1/2 w-full text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Who Is This Program For</h2>
          <p className="mb-6 text-gray-200">Leaders who want to:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {checklist.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="mt-1">
                  <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="#8B5CF6" />
                    <path d="M7 11.5l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-base text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Testimonial */}
        <div className="md:w-1/2 w-full flex flex-col items-start md:items-center">
          <div className="border-l-2 border-gray-700 pl-8">
            <svg className="mb-2" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C12 8.68629 14.6863 6 18 6C21.3137 6 24 8.68629 24 12C24 15.3137 21.3137 18 18 18C14.6863 18 12 15.3137 12 12Z" fill="#8B5CF6" fillOpacity="0.2"/>
              <path d="M10 20C10 16.6863 12.6863 14 16 14C19.3137 14 22 16.6863 22 20C22 23.3137 19.3137 26 16 26C12.6863 26 10 23.3137 10 20Z" fill="#8B5CF6" fillOpacity="0.2"/>
            </svg>
            <p className="text-gray-100 text-lg italic mb-4">
              “The Customer Centricity and Focus program revolutionized our approach to client interactions, enabling us to deliver unparalleled service and foster deep, lasting relationships. Our team is now adept at driving customer loyalty and innovation, setting a new standard for excellence in our industry.”
            </p>
            <div className="flex items-center mt-4">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex M." className="w-12 h-12 rounded-full mr-3 border-2 border-white" />
              <div>
                <span className="font-bold text-white block">Alex M.,</span>
                <span className="text-gray-300 text-sm block">Head of Customer Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerExcellenceProgramAudience; 