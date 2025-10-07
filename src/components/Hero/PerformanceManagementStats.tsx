import React from 'react';

export function PerformanceManagementStats() {
  return (
    <section className="py-12 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          <div className="border-r border-gray-300 pr-4">
            <p className="text-4xl font-bold text-purple-600">98%</p>
            <p className="mt-2 text-sm">
              of organizations believe performance management is essential
            </p>
          </div>
          <div className="border-r border-gray-300 px-4">
            <p className="text-4xl font-bold text-purple-600">60%</p>
            <p className="mt-2 text-sm">
              of companies report that having an effective performance management system helps in outperforming competitors
            </p>
          </div>
          <div className="border-r border-gray-300 px-4">
            <p className="text-4xl font-bold text-purple-600">80%</p>
            <p className="mt-2 text-sm">
              of employees prefer immediate feedback over annual reviews
            </p>
          </div>
          <div className="border-r border-gray-300 px-4">
            <p className="text-4xl font-bold text-purple-600">81%</p>
            <p className="mt-2 text-sm">
              of HR managers are updating traditional performance management
            </p>
          </div>
          <div className="px-4">
            <p className="text-4xl font-bold text-purple-600">39%</p>
            <p className="mt-2 text-sm">
              of organizations with continuous performance processes are better at attracting top talent
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
