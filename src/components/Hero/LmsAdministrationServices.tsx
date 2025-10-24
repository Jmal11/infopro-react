import React from 'react';

const services = [
  {
    title: 'LMS Implementation Support',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/lms-implementation-support.webp',
    description: 'We provide comprehensive support for implementing your LMS, ensuring a smooth setup and integration process tailored to your organization’s needs.',
  },
  {
    title: 'Course Management and Creation',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/course-management-and-creation.webp',
    description: 'Our team assists in designing, developing, and managing courses, delivering engaging and effective learning experiences.',
  },
  {
    title: 'User Management',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/user-management.webp',
    description: 'We handle all aspects of user management, from onboarding and permissions to ongoing support and maintenance.',
  },
  {
    title: 'Content/Catalog Management',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/content-catalog-management.webp',
    description: 'We manage and organize your LMS content and catalog, ensuring it is up-to-date, easily accessible, and aligned with your learning objectives.',
  },
  {
    title: '24/7 Help Desk',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/24-7-help-desk.webp',
    description: 'Our dedicated help desk offers round-the-clock support to resolve any LMS-related issues quickly and efficiently.',
  },
  {
    title: 'Reporting',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/reporting.webp',
    description: 'We provide detailed reporting and analytics to track learner progress, measure training effectiveness, and support data-driven decision-making.',
  },
];

export function LmsAdministrationServices() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-2 text-center">Comprehensive LMS Administration Services</h2>
      <p className="text-center mb-8 text-sm text-gray-700">
        Providing diverse administrative services to optimize your digital learning environment.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map(({ title, image, description }) => (
          <div key={title} className="flex flex-col items-start p-0">
            <div
              className="mb-4 w-[394px] h-[213px] rounded overflow-hidden"
              style={{ borderTop: '4px solid #6b19ff' }}
            >
              <img
                src={image}
                alt={title}
                width={394}
                height={213}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <h3 className="font-semibold mb-2 text-left w-[394px]">{title}</h3>
            <p className="text-sm text-gray-700 text-left w-[394px]">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
