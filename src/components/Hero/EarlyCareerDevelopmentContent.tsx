import React from 'react';
import { CheckCircle } from 'lucide-react';

export function EarlyCareerDevelopmentContent() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <h2 className="text-3xl font-bold md:col-span-1 mb-6 md:mb-0">
          Empower Your Early Career Leaders for Success
        </h2>
        <div className="md:col-span-2 space-y-6 text-gray-700">
          <p>
            Stepping into leadership roles can be daunting for early career professionals. Many face this transition without sufficient guidance or training. To address this, organizations are investing in comprehensive programs that combine coaching, mentoring, and targeted learning experiences. Our evidence-based early career development solutions help new managers build vital leadership skills, enabling them to lead confidently and foster growth.
          </p>
          <h3 className="text-xl font-semibold mb-4">Development Outcomes:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <strong>Seamless Leadership Transition:</strong> Equip yourself to effectively manage and inspire your team.
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <strong>Constructive Feedback Skills:</strong> Cultivate a culture of growth through meaningful feedback.
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <strong>Personal Leadership Brand:</strong> Develop a leadership style that aligns with your core values.
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <strong>Engagement and Productivity:</strong> Learn to conduct effective reviews that enhance team motivation.
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <strong>Performance Management:</strong> Master objective and impactful performance evaluations.
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <strong>Confidence Building:</strong> Strengthen your self-esteem and credibility to drive positive change.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
