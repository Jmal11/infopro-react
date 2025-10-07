import React from 'react';

const sourcingInternal = [
  'Existing Candidate Network',
  'Talent Referral Platform',
  'Crowdsourcing Recruiting Platform',
  'Internal Job Site/New Applicants',
  'Global Talent Network',
];

const sourcingExternal = [
  'Professional Job Boards',
  'Niche Job Boards',
  'Online Ads/Social Media Campaigns',
  'Online Talent Communities',
  'Local Online/Print Classified Ads',
  'Local Meet-ups/Networking Events',
  'Online Job Fairs/Webinars',
  'Local Talent Partnership',
];

const screeningPoints = [
  {
    title: 'Job Analysis',
    bullets: [
      'Analysis as per Requirement',
      'JD Optimization',
      'Job Posting',
    ],
  },
  {
    title: '3 Layer Candidate Screening',
    bullets: [
      'By Recruiters',
      'Online Skills Test',
      'Subject Matter Experts',
    ],
  },
  {
    title: 'AI-Powered Screening',
    bullets: [
      'Bias-free Screening through AI Tools',
    ],
  },
];

const deploymentPoints = [
  {
    title: 'Talent Onboarding',
    bullets: [
      'Employee Onboarding & Orientation',
      'BG Check, Policy Guidelines, Benefits Enrolment',
    ],
  },
  {
    title: 'Talent Deployment',
    bullets: [
      'Resource Deployed at Client Site',
      'Performance Monitoring, 30/60/90 Days Follow-up, Satisfaction Surveys',
    ],
  },
];

export function TalentAcquisitionWorkforceFramework() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Workforce Planning & Engagement Framework</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-800">
        {/* Sourcing */}
        <div className="border border-purple-300 rounded p-6 flex flex-col">
          <h3 className="font-semibold mb-4">Sourcing</h3>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1 bg-gray-50 p-3 rounded shadow-sm">
              <h4 className="font-semibold mb-2">Internal Sourcing Channels</h4>
              <ul className="list-disc list-inside text-xs text-gray-600">
                {sourcingInternal.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-gray-50 p-3 rounded shadow-sm">
              <h4 className="font-semibold mb-2">External Sourcing Channels</h4>
              <ul className="list-disc list-inside text-xs text-gray-600">
                {sourcingExternal.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-auto pt-4 border-t border-purple-300 text-purple-700 font-semibold text-sm">Outcome</div>
          <div className="text-sm font-bold mt-1">Stronger Talent Pipeline</div>
        </div>

        {/* Screening */}
        <div className="border border-purple-300 rounded p-6 flex flex-col">
          <h3 className="font-semibold mb-4">Screening</h3>
          <div className="space-y-6 flex-1">
            {screeningPoints.map(({ title, bullets }) => (
              <div key={title} className="bg-gray-50 p-3 rounded shadow-sm">
                <h4 className="font-semibold mb-2">{title}</h4>
                <ul className="list-disc list-inside text-xs text-gray-600">
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-4 border-t border-purple-300 text-purple-700 font-semibold text-sm">Outcome</div>
          <div className="text-sm font-bold mt-1">Enhanced Insights and Candidate Experience</div>
        </div>

        {/* Deployment */}
        <div className="border border-purple-300 rounded p-6 flex flex-col">
          <h3 className="font-semibold mb-4">Deployment</h3>
          <div className="space-y-6 flex-1">
            {deploymentPoints.map(({ title, bullets }) => (
              <div key={title} className="bg-gray-50 p-3 rounded shadow-sm">
                <h4 className="font-semibold mb-2">{title}</h4>
                <ul className="list-disc list-inside text-xs text-gray-600">
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-4 border-t border-purple-300 text-purple-700 font-semibold text-sm">Outcome</div>
          <div className="text-sm font-bold mt-1">The Right Talent at the Right Time</div>
        </div>
      </div>
    </section>
  );
}
