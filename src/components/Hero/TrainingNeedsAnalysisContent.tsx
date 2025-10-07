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
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">
            Training Needs Analysis for Targeted Skill Development
          </h2>
          <p className="mb-6">
            Partner with Infopro Learning for an insightful training needs analysis to uncover your team's skill gaps and receive tailored recommendations. Ensure your training investments are strategic, effective, and aligned with your organizational goals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            {pointsLeft.map((point) => (
              <div key={point.title} className="flex items-start mb-4">
                <CheckCircleIcon className="h-6 w-6 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{point.title}</p>
                  <p>{point.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            {pointsRight.map((point) => (
              <div key={point.title} className="flex items-start mb-4">
                <CheckCircleIcon className="h-6 w-6 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{point.title}</p>
                  <p>{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
