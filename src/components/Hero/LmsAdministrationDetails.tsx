import React from 'react';

const features = [
  {
    title: "Seamless Integration:",
    description: "Effortlessly incorporate existing content and systems for a unified learning experience."
  },
  {
    title: "User Management:",
    description: "Efficiently handle user roles, permissions, and access controls across your organization."
  },
  {
    title: "Content Deployment:",
    description: "Easily upload, organize, and distribute learning materials to the right audience at the right time."
  },
  {
    title: "Reporting & Analytics:",
    description: "Generate insightful reports to track learner progress, measure ROI, and inform strategic decisions."
  },
  {
    title: "24/7 Learner Support:",
    description: "Provide round-the-clock assistance to ensure uninterrupted learning and swift issue resolution."
  },
  {
    title: "Customization:",
    description: "Tailor the LMS to reflect your brand, meet specific needs, and enhance user engagement."
  }
];

export function LmsAdministrationDetails() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left side: big heading */}
        <div className="lg:col-span-1">
          <h2 className="text-4xl leading-tight font-extrabold text-gray-900 mb-2">
            LMS Administration:<br />
            Empowering Learners,<br />
            Simplifying<br />
            Management
          </h2>
        </div>
        {/* Right side: intro + features grid */}
        <div className="lg:col-span-2 flex flex-col">
          <p className="text-gray-800 text-base mb-6 mt-1">
            Elevate your digital learning ecosystem with our comprehensive LMS administration and learner support services. We handle the technical complexities, allowing you to focus on delivering impactful learning experiences while ensuring your learners receive the support they need to succeed. Our team of experts ensures your LMS runs smoothly, scales effortlessly, and adapts to your evolving needs, all while providing responsive assistance to your learners.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-4">
            {features.map(({ title, description }) => (
              <div key={title} className="flex items-start space-x-3">
                {/* Icon */}
                <svg className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {/* Text */}
                <div>
                  <p className="font-semibold text-gray-900">{title}</p>
                  <p className="text-gray-800">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
