import React from 'react';
import { CheckCircle } from 'lucide-react';

export function DiversityEquityInclusionProgramAudience() {
  return (
    <section className="bg-[#222] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Program Audience */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Who Is This Program For</h2>
          <p className="mb-8 text-gray-200">Any leader (formal or informal peer leader) aiming to:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-purple-400" size={20} />
                <span>Enhance inclusive leadership skills</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-purple-400" size={20} />
                <span>Gain self-awareness re: unconscious biases</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-purple-400" size={20} />
                <span>Focus on diversity and inclusion initiatives</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-purple-400" size={20} />
                <span>Mentor and develop diverse talent</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-purple-400" size={20} />
                <span>Promote cultural competence</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Testimonial */}
        <div className="border-l border-gray-700 pl-8 flex flex-col items-start">
          <blockquote className="text-lg italic mb-6 text-gray-200">
            <span className="text-4xl leading-none text-purple-400 mr-2 align-top">“</span>
            This DEI training has profoundly enhanced my leadership approach, allowing me to cultivate a more inclusive and forward-thinking organization. As a Senior HR Director, I’ve witnessed significant improvements in team dynamics and overall workplace culture.
            <span className="text-4xl leading-none text-purple-400 ml-2 align-bottom">”</span>
          </blockquote>
          <div className="flex items-center gap-4 mt-2">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Reese Williams" className="w-12 h-12 rounded-full object-cover border-2 border-purple-400" />
            <div>
              <div className="font-bold text-white">Reese Williams,</div>
              <div className="text-gray-300 text-sm">Senior HR Director</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiversityEquityInclusionProgramAudience; 