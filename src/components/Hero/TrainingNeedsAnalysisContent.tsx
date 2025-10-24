import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const pointsLeft = [
  {
    title: 'Precision Skill Mapping:',
    description: 'Identify critical skill gaps across your organization, enabling targeted development initiatives.',
  },
  {
    title: 'Future-Ready Workforce:',
    description: 'Align skill development with emerging industry trends and anticipated business needs.',
  },
  {
    title: 'Performance Improvement Metrics:',
    description: 'Establish clear KPIs to measure the impact of training on business outcomes.',
  },
];

const pointsRight = [
  {
    title: 'ROI-Driven Training:',
    description: 'Optimize your learning and development budget by focusing on high-impact areas.',
  },
  {
    title: 'Personalized Learning Paths:',
    description: 'Create tailored development plans that resonate with individual and team aspirations.',
  },
  {
    title: 'Cultural Alignment:',
    description: 'Ensure training initiatives reinforce and enhance your organizational values and objectives.',
  },
];

export function TrainingNeedsAnalysisContent() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-start md:gap-12">
        {/* Left: Large Heading */}
        <div className="md:w-1/3 flex-shrink-0 mb-8 md:mb-0">
          <h2 className="text-4xl font-extrabold leading-tight text-black">
            Training Needs Analysis <br />
            for Targeted Skill <br />
            Development
          </h2>
        </div>
        {/* Right: Intro Paragraph */}
        <div className="md:w-2/3">
          <p className="text-gray-800 text-base mb-4">
            Partner with Infopro Learning for an insightful Training Needs Analysis to uncover your team's skill gaps and receive tailored recommendations. Ensure your training investments are strategic, effective, and aligned with your organizational goals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div>
              {pointsLeft.map((point) => (
                <div key={point.title} className="flex items-start mb-6">
                  <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">{point.title}</p>
                    <p className="text-gray-700">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {pointsRight.map((point) => (
                <div key={point.title} className="flex items-start mb-6">
                  <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">{point.title}</p>
                    <p className="text-gray-700">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
