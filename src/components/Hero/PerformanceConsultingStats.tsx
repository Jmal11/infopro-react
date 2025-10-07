import React from 'react';

export function PerformanceConsultingStats() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-gray-700">
          <div className="border-r border-gray-300 pr-4">
            <p className="text-4xl font-bold text-purple-700 mb-2">30%</p>
            <p>increase in workforce productivity observed after deploying targeted upskilling initiatives.</p>
          </div>
          <div className="border-r border-gray-300 px-4">
            <p className="text-4xl font-bold text-purple-700 mb-2">90%</p>
            <p>of implemented solutions lead to measurable performance enhancements within the first six months</p>
          </div>
          <div className="border-r border-gray-300 px-4">
            <p className="text-4xl font-bold text-purple-700 mb-2">50%</p>
            <p>reduction in skill gaps has been achieved by organizations through our tailored solutions</p>
          </div>
          <div className="pl-4">
            <p className="text-4xl font-bold text-purple-700 mb-2">20%</p>
            <p>cost savings realized by aligning business goals with learning performance metrics</p>
          </div>
        </div>
      </div>
    </section>
  );
}
