import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export function CompetencyGapAnalysis() {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
          Perform a Competency Gap Analysis to:
        </h2>
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {/* Process diagram */}
          <div className="flex-1 flex flex-col items-center">
            <div className="flex items-center justify-center space-x-0 md:space-x-0">
              {/* Current Skills (hexagon) */}
              <div className="flex flex-col items-center">
                <div className="w-36 h-36 bg-white border-2 border-gray-200 clip-hexagon flex items-center justify-center font-bold text-center shadow-md text-lg">
                  Current<br />Skills
                </div>
                <span className="text-base md:text-lg font-medium mt-6 text-center invisible md:visible"> </span>
              </div>
              {/* Arrow + Steps */}
              <div className="flex">
                {/* Beginner */}
                <div className="flex flex-col items-center mx-1">
                  {/* Arrow */}
                  <svg width="68" height="36" viewBox="0 0 68 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block mx-1">
                    <path d="M0 18H56M56 18L47 10M56 18L47 26" stroke="#9F7AEA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="w-32 h-24 bg-white flex flex-col items-center justify-center rounded-lg shadow-md border border-gray-200">
                    {/* Icon */}
                    <svg className="w-8 h-8 text-purple-600 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="8" />
                      <path d="M12 8v4l3 3" />
                    </svg>
                  </div>
                  <span className="mt-3 text-sm md:text-base font-semibold text-gray-900">Beginner</span>
                </div>
                {/* Intermediate */}
                <div className="flex flex-col items-center mx-1">
                  {/* Arrow */}
                  <svg width="68" height="36" viewBox="0 0 68 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block mx-1">
                    <path d="M0 18H56M56 18L47 10M56 18L47 26" stroke="#9F7AEA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="w-32 h-24 bg-white flex flex-col items-center justify-center rounded-lg shadow-md border border-gray-200">
                    {/* Icon */}
                    <svg className="w-8 h-8 text-purple-600 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="6" y="6" width="12" height="12" rx="3"/>
                      <path d="M12 8v5l3 3" />
                    </svg>
                  </div>
                  <span className="mt-3 text-sm md:text-base font-semibold text-gray-900">Intermediate</span>
                </div>
                {/* Expert */}
                <div className="flex flex-col items-center mx-1">
                  {/* Arrow */}
                  <svg width="68" height="36" viewBox="0 0 68 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block mx-1">
                    <path d="M0 18H56M56 18L47 10M56 18L47 26" stroke="#9F7AEA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="w-32 h-24 bg-white flex flex-col items-center justify-center rounded-lg shadow-md border border-gray-200">
                    {/* Icon */}
                    <svg className="w-8 h-8 text-purple-600 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <polygon points="12,4 20,20 4,20" />
                      <path d="M12 8v6l3 3" />
                    </svg>
                  </div>
                  <span className="mt-3 text-sm md:text-base font-semibold text-gray-900">Expert</span>
                </div>
              </div>
              {/* Required Skills (hexagon) */}
              <div className="flex flex-col items-center ml-2">
                <div className="w-36 h-36 bg-purple-600 text-white clip-hexagon flex items-center justify-center font-bold text-center shadow-md text-lg border-2 border-purple-400">
                  Required<br />Skills
                </div>
                <span className="text-base md:text-lg font-medium mt-6 text-center invisible md:visible"> </span>
              </div>
            </div>
          </div>
          {/* Bullets with divider */}
          <div className="md:w-2/5 flex items-start md:pl-12 relative mt-12 md:mt-0">
            {/* Divider Line */}
            <div className="hidden md:block absolute left-0 top-0 h-full w-px bg-gray-300" style={{ marginLeft: '-24px' }} />
            <ul className="space-y-8 pl-0 md:pl-12">
              {[
                "Develop personalized reskilling strategies for each employee.",
                "Prioritize essential skills for both current and future needs.",
                "Maximize the return on your training investments.",
              ].map((point) => (
                <li key={point} className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1 mr-3" />
                  <span className="text-lg text-gray-800">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Hexagon clip-path styling */}
      <style>{`
        .clip-hexagon {
          clip-path: polygon(
            25% 5.77%, 75% 5.77%,
            100% 50%, 75% 94.23%,
            25% 94.23%, 0% 50%
          );
        }
      `}</style>
    </section>
  );
}
