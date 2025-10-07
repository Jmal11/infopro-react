import React from 'react';

const bulletPoints = [
  'Aligning talent strategies with evolving skill requirements across the employee lifecycle.',
  'Seamlessly integrating talent acquisition, development, and deployment to ensure sustainable competitive advantage.',
  'Unlocking unprecedented organizational agility and performance.',
];

export function FutureSkillsSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            The Future is Skills-Based
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            End-to-End Workforce Transformation
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl">
            We enable organizations to thrive in the skills economy by reimagining workforce ecosystems, integrating skills, strategy, and systems to foster agile, high-impact organizations.
          </p>
          <ul className="space-y-4 max-w-xl">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-800">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 relative">
          {/* Background light purple shape */}
          <div className="absolute inset-0 bg-purple-50 rounded-lg"></div>

          {/* Flowchart container */}
          <div className="relative p-8">
            {/* Horizontal connecting line (complex path) */}
            <svg
              className="absolute top-1/2 left-0 w-full h-32 pointer-events-none"
              viewBox="0 0 600 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M3951.435,1150.811H3961.5v-66.266a44.156,44.156,0,0,0-44.151-44.153h-41.517a34.086,34.086,0,1,1,0-68.172h402.182a44.2,44.2,0,0,0,44.152-44.153v-1.612a44.2,44.2,0,0,0-44.152-44.153H4162.963a34.1,34.1,0,0,1,0-68.194h227.363c24.345,0,73.152-19.809,73.152-44.154V745.269a34.084,34.084,0,0,1,34.088-34.085h195.085V701.118H4497.566a44.151,44.151,0,0,0-44.154,44.151v24.687c0,18.8-44.291,34.086-63.084,34.087H4162.963a44.163,44.163,0,0,0,0,88.327h115.052a34.125,34.125,0,0,1,34.085,34.087v1.612a34.125,34.125,0,0,1-34.085,34.086H3875.834a44.153,44.153,0,1,0,0,88.305h41.517a34.084,34.084,0,0,1,34.084,34.084Z"
                transform="translate(-4071.679 -701.118)"
                fill="#A78BFA"
              />
            </svg>

            {/* Flowchart nodes */}
            <div className="flex justify-between items-center space-x-4 relative z-10">
              {/* Node 1: Talent Acquisition */}
              <div className="flex flex-col items-center text-purple-700 w-28">
                <div className="hexagon bg-purple-100 border border-purple-300 flex items-center justify-center w-16 h-16 rounded-lg relative">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="mt-2 text-center font-semibold text-sm">
                  Talent Acquisition
                </span>
              </div>

              {/* Node 2: Employee Engagement and Retention */}
              <div className="flex flex-col items-center text-purple-700 w-28">
                <div className="hexagon bg-purple-100 border border-purple-300 flex items-center justify-center w-16 h-16 rounded-lg relative">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M12 7v10M7 12h10" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <span className="mt-2 text-center font-semibold text-sm">
                  Employee Engagement and Retention
                </span>
              </div>

              {/* Node 3: Onboarding and Upskilling */}
              <div className="flex flex-col items-center text-purple-700 w-28">
                <div className="hexagon bg-purple-100 border border-purple-300 flex items-center justify-center w-16 h-16 rounded-lg relative">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M8 12h8M12 8v8" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <span className="mt-2 text-center font-semibold text-sm">
                  Onboarding and Upskilling
                </span>
              </div>

              {/* Node 4: Performance Management */}
              <div className="flex flex-col items-center text-purple-700 w-28">
                <div className="hexagon bg-purple-100 border border-purple-300 flex items-center justify-center w-16 h-16 rounded-lg relative">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M12 2l4 7-4 7-4-7 4-7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="mt-2 text-center font-semibold text-sm">
                  Performance Management
                </span>
              </div>

              {/* Node 5: Succession Planning */}
              <div className="flex flex-col items-center text-purple-700 w-28">
                <div className="hexagon bg-purple-100 border border-purple-300 flex items-center justify-center w-16 h-16 rounded-lg relative">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M12 2l4 7-4 7-4-7 4-7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="mt-2 text-center font-semibold text-sm">
                  Succession Planning
                </span>
              </div>
            </div>

            {/* Additional smaller icons and labels below the line */}
            <div className="absolute top-20 left-10 flex flex-col space-y-6 text-xs text-purple-700 font-semibold max-w-xs">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Talent Acquisition</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12 7v10M7 12h10" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span>Employee Engagement and Retention</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M8 12h8M12 8v8" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span>Onboarding and Upskilling</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12 2l4 7-4 7-4-7 4-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Performance Management</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12 2l4 7-4 7-4-7 4-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Succession Planning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}