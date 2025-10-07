import React from 'react';

export function CompetencyGapAnalysis() {
  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left side: Hexagon skill levels with SVG icons */}
        <div className="flex items-center space-x-2">
          {/* Current Skills Hexagon */}
          <div className="w-24 h-24 bg-white border border-gray-300 clip-hexagon flex items-center justify-center font-bold text-center">
            Current<br />Skills
          </div>
          {/* Arrow */}
          <div className="w-12 h-24 flex items-center justify-center">
            <svg width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 24H18M18 24L12 18M18 24L12 30" stroke="#9F7AEA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {/* Beginner Hexagon with icon */}
          <div className="w-24 h-24 bg-gray-200 clip-hexagon flex flex-col items-center justify-center text-center">
            <svg className="w-8 h-8 text-purple-600 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2L15 8H9L12 2Z" />
              <path d="M12 22V12" />
              <circle cx="12" cy="16" r="2" />
            </svg>
            <span className="text-sm font-semibold">Beginner</span>
          </div>
          {/* Arrow */}
          <div className="w-12 h-24 flex items-center justify-center">
            <svg width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 24H18M18 24L12 18M18 24L12 30" stroke="#9F7AEA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {/* Intermediate Hexagon with icon */}
          <div className="w-24 h-24 bg-gray-200 clip-hexagon flex flex-col items-center justify-center text-center">
            <svg className="w-8 h-8 text-purple-600 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 20L12 4L20 20H4Z" />
              <path d="M12 14V20" />
            </svg>
            <span className="text-sm font-semibold">Intermediate</span>
          </div>
          {/* Arrow */}
          <div className="w-12 h-24 flex items-center justify-center">
            <svg width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 24H18M18 24L12 18M18 24L12 30" stroke="#9F7AEA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {/* Expert Hexagon with icon */}
          <div className="w-24 h-24 bg-gray-200 clip-hexagon flex flex-col items-center justify-center text-center">
            <svg className="w-8 h-8 text-purple-600 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6V12L16 14" />
            </svg>
            <span className="text-sm font-semibold">Expert</span>
          </div>
          {/* Arrow */}
          <div className="w-12 h-24 flex items-center justify-center">
            <svg width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 24H18M18 24L12 18M18 24L12 30" stroke="#9F7AEA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {/* Required Skills Hexagon */}
          <div className="w-24 h-24 bg-purple-600 text-white clip-hexagon flex items-center justify-center font-bold text-center">
            Required<br />Skills
          </div>
        </div>
        {/* Right side: bullet points */}
        <div className="ml-8 max-w-md space-y-4">
          <h2 className="text-xl font-bold mb-4">Perform a Competency Gap Analysis to:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Develop personalized reskilling strategies for each employee.</li>
            <li>Prioritize essential skills for both current and future needs.</li>
            <li>Maximize the return on your training investments.</li>
          </ul>
        </div>
      </div>
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
