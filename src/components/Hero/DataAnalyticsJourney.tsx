import React, { useState } from 'react';

export function DataAnalyticsJourney() {
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
                Learning Journey
              </h2>

              <div className="space-y-6">
                <p className="text-gray-700">
                  Our data analytics program provides leaders with the essential skills to harness data for strategic decision-making, innovation, and competitive advantage in today's data-driven business landscape.
                </p>

                <nav className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-blue-600 font-medium">Data-Driven Leadership</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                    <span className="text-gray-500">Analytics Strategy & Implementation</span>
                  </div>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Data-Driven Leadership</h3>

                  <blockquote className="text-lg italic text-gray-700 mb-6">
                    "Without data, you're just another person with an opinion."
                  </blockquote>

                  <cite className="text-blue-600 font-semibold">W. Edwards Deming</cite>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700 mb-4">
                    Data-driven leadership is the cornerstone of modern business success. This comprehensive program equips leaders with the mindset, skills, and tools to transform raw data into actionable insights that drive strategic decisions and business growth.
                  </p>

                  <p className="text-gray-700 mb-4">
                    Leaders will learn to navigate the data landscape, understand analytics methodologies, and develop the strategic thinking required to leverage data for competitive advantage. The program covers everything from basic data interpretation to advanced analytics techniques and AI integration.
                  </p>

                  <p className="text-gray-700">
                    Through hands-on exercises, real-world case studies, and practical applications, participants will develop the confidence to lead data-driven initiatives, build analytics capabilities within their teams, and create a culture of data-driven decision making throughout their organizations.
                  </p>
                </div>

                {/* Business Impact */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">PROGRAM IMPACT</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm max-w-4xl mx-auto">
                    <div className="flex items-start justify-center text-center">
                      <div className="flex flex-col items-center">
                        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">1</span>
                        <p className="text-gray-700 max-w-xs">Leaders develop strategic data thinking and analytical decision-making capabilities.</p>
                      </div>
                    </div>
                    <div className="flex items-start justify-center text-center">
                      <div className="flex flex-col items-center">
                        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">3</span>
                        <p className="text-gray-700 max-w-xs">Organizations gain competitive advantage through data-driven innovation and insights.</p>
                      </div>
                    </div>
                    <div className="flex items-start justify-center text-center">
                      <div className="flex flex-col items-center">
                        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">5</span>
                        <p className="text-gray-700 max-w-xs">Teams build sustainable analytics capabilities and data governance frameworks.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Details Form */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Access Program Details</h4>
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@company.com"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
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
                <svg width="200" height="300" viewBox="0 0 200 300" className="text-blue-600">
                  {/* Data visualization tree */}
                  <rect x="90" y="200" width="20" height="100" fill="currentColor" />

                  {/* Data points/foliage */}
                  <circle cx="80" cy="120" r="15" fill="#3B82F6" />
                  <circle cx="120" cy="100" r="18" fill="#1D4ED8" />
                  <circle cx="110" cy="140" r="12" fill="#2563EB" />
                  <circle cx="70" cy="160" r="16" fill="#1E40AF" />
                  <circle cx="130" cy="170" r="14" fill="#3B82F6" />
                  <circle cx="100" cy="180" r="13" fill="#2563EB" />
                  <circle cx="85" cy="190" r="17" fill="#1D4ED8" />

                  {/* Data analyst figure */}
                  <circle cx="100" cy="220" r="8" fill="currentColor" />
                  <rect x="92" y="228" width="16" height="20" fill="currentColor" />
                  <rect x="88" y="235" width="8" height="15" fill="currentColor" />
                  <rect x="104" y="235" width="8" height="15" fill="currentColor" />
                  <rect x="92" y="248" width="6" height="12" fill="currentColor" />
                  <rect x="102" y="248" width="6" height="12" fill="currentColor" />

                  {/* Data charts floating around */}
                  <rect x="60" y="80" width="12" height="8" fill="#10B981" opacity="0.7" />
                  <rect x="140" y="90" width="8" height="12" fill="#F59E0B" opacity="0.7" />
                  <rect x="50" y="140" width="15" height="6" fill="#EF4444" opacity="0.7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataAnalyticsJourney;
