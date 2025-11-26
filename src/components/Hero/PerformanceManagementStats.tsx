import React from 'react';

export function PerformanceManagementStats() {
  const stats = [
    {
      percentage: "98%",
      description: "of organizations believe performance management is essential"
    },
    {
      percentage: "60%",
      description: "of companies report that having an effective performance management system helps in outperforming competitors"
    },
    {
      percentage: "80%",
      description: "of employees prefer immediate feedback over annual reviews"
    },
    {
      percentage: "81%",
      description: "of HR managers are updating traditional performance management"
    },
    {
      percentage: "39%",
      description: "of organizations with continuous performance processes are better at attracting top talent"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="border-l border-gray-300 pl-6">
              <p className="text-4xl md:text-5xl font-normal text-[#6b19ff]">{stat.percentage}</p>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}