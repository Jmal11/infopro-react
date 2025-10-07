import React from 'react';

export function LmsAdministrationDetails() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            LMS Administration: Empowering Learners, Simplifying Management
          </h2>
          <p className="text-gray-700">
            Elevate your digital learning ecosystem with our comprehensive LMS administration and learner support services. We handle the technical complexities, allowing you to focus on delivering impactful learning experiences while ensuring your learners receive the support they need to succeed. Our team of experts ensures your LMS runs smoothly, scales effortlessly, and adapts to your evolving needs, all while providing responsive assistance to your learners.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Column 1 */}
          <ul className="space-y-6">
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900">Seamless Integration:</h3>
                <p className="text-gray-700">Effortlessly incorporate existing content and systems for a unified learning experience.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900">Content Deployment:</h3>
                <p className="text-gray-700">Easily upload, organize, and distribute learning materials to the right audience at the right time.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900">24/7 Learner Support:</h3>
                <p className="text-gray-700">Provide round-the-clock assistance to ensure uninterrupted learning and swift issue resolution.</p>
              </div>
            </li>
          </ul>

          {/* Column 2 */}
          <ul className="space-y-6">
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900">User Management:</h3>
                <p className="text-gray-700">Efficiently handle user roles, permissions, and access controls across your organization.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900">Reporting &amp; Analytics:</h3>
                <p className="text-gray-700">Generate insightful reports to track learner progress, measure ROI, and inform strategic decisions.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900">Customization:</h3>
                <p className="text-gray-700">Tailor the LMS to reflect your brand, meet specific needs, and enhance user engagement.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
