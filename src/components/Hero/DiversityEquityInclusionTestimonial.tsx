import React from 'react';

export function DiversityEquityInclusionTestimonial() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <svg className="w-12 h-12 text-primary mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
            "The DEI training program transformed our organizational culture. Our leaders now understand how to create truly inclusive environments where every employee feels valued and heard. The impact on employee engagement, retention, and innovation has been remarkable."
          </blockquote>
          <div className="flex items-center justify-center">
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="Maria Rodriguez" 
              className="w-16 h-16 rounded-full mr-4 border-4 border-purple-100"
            />
            <div className="text-left">
              <div className="font-bold text-gray-900 text-lg">Maria Rodriguez</div>
              <div className="text-primary">Chief Human Resources Officer</div>
              <div className="text-gray-600 text-sm">Global Technology Company</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiversityEquityInclusionTestimonial;
