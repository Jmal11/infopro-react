import React from 'react';

export function PerformanceConsultingWorkforceBlueprint() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">
            Architect your Performance-Ready Workforce Blueprint
          </h2>
          <p className="mb-8 text-gray-700">
            At Infopro Learning, we transform businesses through our Performance-Ready Workforce Blueprint.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-gray-700">
            <ul className="list-disc list-inside space-y-4">
              <li>Orchestrates transformation across key dimensions including process, technology, and operating model for comprehensive organizational change.</li>
              <li>Aligns business strategy with talent strategy.</li>
              <li>Crafted by consultants who are practitioners first, rooted in real-world execution.</li>
            </ul>
            <ul className="list-disc list-inside space-y-4 border-l border-gray-300 pl-6">
              <li>Ready-to-deploy accelerators including skills taxonomies, customizable training content, and immersive labs, ensuring rapid implementation and shorter time to impact.</li>
              <li>Integrates skills-based design to map current and future states.</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg"
            alt="Workforce Blueprint"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
