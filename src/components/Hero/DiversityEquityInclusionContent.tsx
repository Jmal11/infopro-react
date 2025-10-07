import React from 'react';
import { CheckCircle } from 'lucide-react';

export function DiversityEquityInclusionContent() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Develop Your Leaders to<br />Foster a Culture of Belonging and Inclusion</h2>
        </div>
        {/* Right: Description and Outcomes */}
        <div>
          <p className="mb-4 text-gray-700">
            Leaders can unintentionally have a negative impact on the business through unconscious bias, micro-exclusions, cultural misunderstandings and missteps which impact employee engagement, talent retention, decision-making, innovation, and overall business success.
          </p>
          <p className="mb-8 text-gray-700">
            Our comprehensive suite of Diversity, Equity, and Inclusion (DEI) training programs can equip your leaders with the mindset and skills to create an inclusive workplace where everyone feels valued and respected. Through interactive sessions, real-world scenarios, and actionable strategies, we help you build a culture that promotes diversity, ensures equity, and fosters inclusion.
          </p>
          <h3 className="text-2xl font-bold mb-4">Development Outcomes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="text-purple-400 mt-1" size={20} />
                <div>
                  <span className="font-semibold">Bias Awareness:</span> <br />
                  <span className="text-gray-700">Identify and mitigate prejudices.</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-purple-400 mt-1" size={20} />
                <div>
                  <span className="font-semibold">Authentic Leadership:</span> <br />
                  <span className="text-gray-700">Model genuine and resilient behavior.</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-purple-400 mt-1" size={20} />
                <div>
                  <span className="font-semibold">Foster Inclusion:</span> <br />
                  <span className="text-gray-700">Create a respectful, valued workplace.</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="text-purple-400 mt-1" size={20} />
                <div>
                  <span className="font-semibold">Effective Communication:</span> <br />
                  <span className="text-gray-700">Improve cross-cultural interactions.</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-purple-400 mt-1" size={20} />
                <div>
                  <span className="font-semibold">Drive Innovation:</span> <br />
                  <span className="text-gray-700">Leverage diverse perspectives.</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-purple-400 mt-1" size={20} />
                <div>
                  <span className="font-semibold">Trust Building:</span> <br />
                  <span className="text-gray-700">Strengthen organizational relationships.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiversityEquityInclusionContent; 