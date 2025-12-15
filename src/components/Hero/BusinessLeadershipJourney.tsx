import React, { useState } from 'react';

export function BusinessLeadershipJourney() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email submitted:', email);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Development Journey
              </h2>

              <div className="space-y-6">
                <p className="text-gray-700">
                  Our business leadership development programs equip leaders with strategic, adaptive, and communication skills to navigate challenges, drive success, and cultivate high-performance cultures in dynamic business environments.
                </p>

                <nav className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-purple-600 font-medium">Strategic Leadership</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                    <span className="text-gray-500">Strategy Thinking and Business Planning</span>
                  </div>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-purple-50 p-8 rounded-lg">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Leadership</h3>

                  <blockquote className="text-lg italic text-gray-700 mb-6">
                    "Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others."
                  </blockquote>

                  <cite className="text-purple-600 font-semibold">Jack Welch</cite>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700 mb-4">
                    Strategic leadership is the ability to think on a big and small scale, long and short term, into the past, present, and future - with the judgment and insight needed to develop and execute a winning strategy.
                  </p>

                  <p className="text-gray-700 mb-4">
                    While strategic leadership is a valuable skill for every leader in an organization, it becomes increasingly important for those in senior positions. Strategic thinking is often "the secret sauce" that accelerates a leader's systems thinking and strategic thinking. It is often "the secret sauce" that accelerates a leadership career and acts of strategic agility will often impede one's professional progress.
                  </p>

                  <p className="text-gray-700">
                    This course is designed to help a leader understand how corporate values and culture link to business strategy and execution. Leaders learn how to drive employee engagement, how to conduct a situational analysis, how to develop winning strategies, how to align and mobilize teams, and how to communicate a compelling vision and mobilize employees to embrace the change.
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700">
                    This workshop is also designed to help participants improve their critical thinking and problem-solving processes while applying these new skills to adaptive leadership. This workshop includes pre-work assignments, facilitated discussions, case studies, individual and small group work, and other tools to assist participants in applying learning to their business roles.
                  </p>
                </div>

                {/* Business Impact */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">BUSINESS IMPACT</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm max-w-4xl mx-auto">
                    <div className="flex items-start justify-center text-center">
                      <div className="flex flex-col items-center">
                        <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">1</span>
                        <p className="text-gray-700 max-w-xs">Leadership teams are able to develop an alignment of core values, culture and strategy.</p>
                      </div>
                    </div>
                    <div className="flex items-start justify-center text-center">
                      <div className="flex flex-col items-center">
                        <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">3</span>
                        <p className="text-gray-700 max-w-xs">Leaders are better equipped to "think about their thinking" which enables better judgment and strategic decisions.</p>
                      </div>
                    </div>
                    <div className="flex items-start justify-center text-center">
                      <div className="flex flex-col items-center">
                        <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">5</span>
                        <p className="text-gray-700 max-w-xs">Leaders learn to use strategic planning to guide the direction of their business and enhance the success of their organization.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Details Form */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Access Course Details</h4>
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jai.malhotra@infoprolearning.com"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-purple-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-purple-700 transition-colors"
                    >
                      SUBMIT
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="lg:col-span-1 flex justify-center items-center">
              <div className="relative">
                <svg width="200" height="300" viewBox="0 0 200 300" className="text-purple-600">
                  {/* Tree trunk */}
                  <rect x="90" y="200" width="20" height="100" fill="currentColor" />

                  {/* Tree foliage - colorful leaves */}
                  <circle cx="80" cy="120" r="15" fill="#10B981" />
                  <circle cx="120" cy="100" r="18" fill="#3B82F6" />
                  <circle cx="110" cy="140" r="12" fill="#8B5CF6" />
                  <circle cx="70" cy="160" r="16" fill="#F59E0B" />
                  <circle cx="130" cy="170" r="14" fill="#EF4444" />
                  <circle cx="100" cy="180" r="13" fill="#06B6D4" />
                  <circle cx="85" cy="190" r="17" fill="#84CC16" />

                  {/* Person figure */}
                  <circle cx="100" cy="220" r="8" fill="currentColor" />
                  <rect x="92" y="228" width="16" height="20" fill="currentColor" />
                  <rect x="88" y="235" width="8" height="15" fill="currentColor" />
                  <rect x="104" y="235" width="8" height="15" fill="currentColor" />
                  <rect x="92" y="248" width="6" height="12" fill="currentColor" />
                  <rect x="102" y="248" width="6" height="12" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessLeadershipJourney;
