import React from 'react';
import { CheckCircle } from 'lucide-react';

export function MidCareerDevelopmentContent() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Heading */}
        <div>
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">
            Boosting Mid-Career Development Through Advanced Leadership Programs
          </h2>
        </div>
        {/* Right: Description and Outcomes */}
        <div>
          <p className="mb-8 text-gray-700 text-base">
            Mid-career professionals often face unique challenges as they navigate complex responsibilities and prepare for senior leadership roles. Recognizing this, organizations invest in structured programs that blend advanced coaching, mentoring, and specialized courses. Our evidence-based mid-career development solutions enhance leadership capabilities, ensuring these leaders are equipped to drive strategic initiatives and foster organizational growth.
          </p>
          <h3 className="text-2xl font-bold mb-4">Development Outcomes:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-purple-600 w-6 h-6 mt-1" />
              <div>
                <strong>Managing Difficult Conversations:</strong> <br />
                <span className="text-gray-700">Engage productively when emotions are high and opinions differ.</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-purple-600 w-6 h-6 mt-1" />
              <div>
                <strong>Integrated Thinking:</strong> <br />
                <span className="text-gray-700">Learning to apply strategic thinking, systems thinking and critical thinking simultaneously.</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-purple-600 w-6 h-6 mt-1" />
              <div>
                <strong>Effective Team Management:</strong> <br />
                <span className="text-gray-700">Optimize team engagement and performance.</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-purple-600 w-6 h-6 mt-1" />
              <div>
                <strong>Conflict Resolution:</strong> <br />
                <span className="text-gray-700">Manage workplace conflicts.</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-purple-600 w-6 h-6 mt-1" />
              <div>
                <strong>Executive Communication:</strong> <br />
                <span className="text-gray-700">Master communication with stakeholders.</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-purple-600 w-6 h-6 mt-1" />
              <div>
                <strong>Change Management:</strong> <br />
                <span className="text-gray-700">Navigate organizational change.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MidCareerDevelopmentContent; 