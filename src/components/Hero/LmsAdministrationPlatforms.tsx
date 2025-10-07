import React from 'react';

const platforms = [
  {
    title: 'sumtotal',
    description: 'We enhance SumTotal with tailored learning paths, seamless integrations, and ongoing support to boost employee engagement and organizational growth.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/SumTotal_logo.svg/2560px-SumTotal_logo.svg.png',
  },
  {
    title: 'SAP SuccessFactors',
    description: 'We align SuccessFactors with your HR strategies, optimizing talent management, performance tracking, and succession planning.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/SAP_SuccessFactors_Logo.svg/2560px-SAP_SuccessFactors_Logo.svg.png',
  },
  {
    title: 'cornerstone',
    description: 'We customize Cornerstone to meet your specific learning needs, ensuring a scalable and effective training strategy.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cornerstone_OnDemand_logo.svg/2560px-Cornerstone_OnDemand_logo.svg.png',
  },
  {
    title: 'SharePoint',
    description: 'We leverage SharePoint to enhance collaboration, document management, and workflow automation, driving productivity across your organization.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg/2560px-Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg.png',
  },
  {
    title: 'servicenow',
    description: 'We customize ServiceNow to streamline IT service management, workflows, and user experiences, making operations more efficient.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/ServiceNow_logo.svg/2560px-ServiceNow_logo.svg.png',
  },
  {
    title: 'Jira',
    description: 'We configure JIRA to enhance project management, agile development, and issue tracking, helping your teams deliver projects on time and within budget.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Atlassian_Jira_Logo.svg/2560px-Atlassian_Jira_Logo.svg.png',
  },
  {
    title: 'Other LMS We Support',
    description: '',
    logos: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Absorb_LMS_logo.svg/2560px-Absorb_LMS_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Litmos_logo.svg/2560px-Litmos_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Docebo_logo.svg/2560px-Docebo_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Learning_Management_System_logo.svg/2560px-Learning_Management_System_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Moodle_logo.svg/2560px-Moodle_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/iSpring_logo.svg/2560px-iSpring_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Skillsoft_Percipio_logo.svg/2560px-Skillsoft_Percipio_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Learning_Management_System_logo.svg/2560px-Learning_Management_System_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Learning_Management_System_logo.svg/2560px-Learning_Management_System_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Learning_Management_System_logo.svg/2560px-Learning_Management_System_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Learning_Management_System_logo.svg/2560px-Learning_Management_System_logo.svg.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Learning_Management_System_logo.svg/2560px-Learning_Management_System_logo.svg.png',
    ],
  },
];

export function LmsAdministrationPlatforms() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-2 text-center">Platforms We Support</h2>
      <p className="text-center mb-8 text-sm text-gray-700">
        Empower your ecosystem with our expertise. We seamlessly integrate with your existing platforms, ensuring optimal performance while you focus on driving impactful results.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {platforms.slice(0, 6).map(({ title, description, logo }) => (
          <div key={title} className="border border-gray-300 rounded-md p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <img src={logo} alt={title} className="h-10 mb-4 object-contain" loading="lazy" />
            <h3 className="font-semibold mb-2">{title}</h3>
            <div className="w-12 h-1 bg-purple-700 mb-4"></div>
            <p className="text-sm text-gray-700">{description}</p>
          </div>
        ))}
        <div className="border border-gray-300 rounded-md p-4 shadow-sm hover:shadow-md transition-shadow duration-300 col-span-2">
          <h3 className="font-semibold mb-2">Other LMS We Support</h3>
          <div className="w-12 h-1 bg-purple-700 mb-4"></div>
          <div className="grid grid-cols-6 gap-4">
            {platforms[6].logos.map((logo, index) => (
              <img key={index} src={logo} alt={`Other LMS ${index + 1}`} className="h-10 object-contain" loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

