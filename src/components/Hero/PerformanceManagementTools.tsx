import React from 'react';

export function PerformanceManagementTools() {
  const approaches = [
    {
      image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Goal-Setting.webp",
      title: "Goal Setting",
      description: "Aligning individual OKRs with organizational goals, ensuring employees know their priorities and how their contributions impact overall success."
    },
    {
      image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Behavior-Indicators-&-Competency-Assessments.webp",
      title: "Behavior Indicators & Competency Assessments",
      description: "Identifying and developing key competencies through continuous evaluation, using clear behavioral indicators to guide employees toward success."
    },
    {
      image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Periodic-Assessments.webp",
      title: "Periodic Assessments",
      description: "Conducting regular reviews and check-ins to track progress, address gaps, and provide real-time feedback for continuous improvement."
    },
    {
      image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Employee%20Empowerment%20and%20Training.webp",
      title: "Integration with Learning & Career Processes",
      description: "Linking our PMS with career development plans, ensuring performance evaluations drive personal and professional growth strategies."
    },
    {
      image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Digitization.webp",
      title: "Digitization",
      description: "Enhancing efficiency and transparency through our OKR platform, which streamlines goal setting, progress tracking, and feedback for effective performance management."
    },
    {
      image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/KPIs-and-Balanced-Scorecard.webp",
      title: "KPIs and Balanced Scorecard",
      description: "Incorporating KPIs and the balanced scorecard to set measurable targets and provide a comprehensive performance view."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Driving Performance Aligned with Business Impact
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            We follow a structured approach to ensure effective performance management, tailored to meet the unique needs of your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
          {approaches.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-4 overflow-hidden border-t-4 border-[#6b19ff]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}