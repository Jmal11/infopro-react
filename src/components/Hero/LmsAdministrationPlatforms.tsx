import React from 'react';

const platforms = [
  {
    description: 'We enhance SumTotal with tailored learning paths, seamless integrations, and ongoing support to boost employee engagement and organizational growth.',
    logo: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Sumtotal.webp',
  },
  {
    description: 'We align SuccessFactors with your HR strategies, optimizing talent management, performance tracking, and succession planning.',
    logo: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/SAP.webp',
  },
  {
    description: 'We customize Cornerstone to meet your specific learning needs, ensuring a scalable and effective training strategy.',
    logo: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/cornerstone.webp',
  },
  {
    description: 'We leverage SharePoint to enhance collaboration, document management, and workflow automation, driving productivity across your organization.',
    logo: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/sharepoint.webp',
  },
  {
    description: 'We customize ServiceNow to streamline IT service management, workflows, and user experiences, making operations more efficient.',
    logo: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/servicenow.webp',
  },
  {
    description: 'We configure JIRA to enhance project management, agile development, and issue tracking, helping your teams deliver projects on time and within budget.',
    logo: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Jira.webp',
  },
];

const otherLmsTitleImage = 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/other-lms-support.svg'; // Composite Heading Image
const otherLmsGroupImage = 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/lms-all-client-logo.webp'; // Group Logo Image

export function LmsAdministrationPlatforms() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-3 text-center">Platforms We Support</h2>
      <p className="text-center mb-10 text-base text-gray-700 max-w-3xl mx-auto">
        Empower your ecosystem with our expertise. We seamlessly integrate with your existing platforms,
        ensuring optimal performance while you focus on driving impactful results.
      </p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-2">
        {platforms.map(({ description, logo }, i) => (
          <div
            key={i}
            className="flex flex-row items-start"
            style={{ minHeight: '12.25rem' }}
          >
            <div
              className="w-1.5 bg-gray-300 mr-6 rounded"
              style={{ height: '12.25rem', marginTop: '0.5rem', flexShrink: 0 }}
            />
            <div className="flex flex-col items-start">
              <img
                src={logo}
                alt=""
                width={265}
                height={73}
                className="mb-4 object-contain"
                style={{ width: '265px', height: '73px' }}
                loading="lazy"
              />
              <div className="w-12 h-1 bg-[#892fff] mb-4"></div>
              <p className="text-base text-gray-700">{description}</p>
            </div>
          </div>
        ))}
        <div
          className="flex flex-row items-start"
          style={{ minHeight: '12.25rem' }}
        >
          <div
            className="w-1.5 bg-gray-300 mr-6 rounded"
            style={{ height: '12.25rem', marginTop: '0.5rem', flexShrink: 0 }}
          />
          <div className="flex flex-col items-start">
            <img
              src={otherLmsTitleImage}
              alt="Other LMS We Support Title"
              className="mb-4 object-contain"
              loading="lazy"
              style={{ width: '265px', height: '73px' }}
            />
            <div className="w-12 h-1 bg-[#892fff] mb-4"></div>
            <img
              src={otherLmsGroupImage}
              alt="Other LMS logos group"
              className="object-contain"
              loading="lazy"
              style={{ maxWidth: '497px', height: '141px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
