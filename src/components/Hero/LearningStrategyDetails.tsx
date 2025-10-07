import React from 'react';
import { CheckCircle } from 'lucide-react';

const pointsLeft = [
  {
    title: 'Performance-Ready Workforce:',
    description: 'Develop a team equipped to meet current and future business challenges.',
  },
  {
    title: 'Rapid Strategy Development:',
    description: 'Obtain a comprehensive learning strategy within weeks, allowing for quick implementation.',
  },
  {
    title: 'Measurable Success Metrics:',
    description: 'Define clear indicators for success, focusing on behavior change and business results.',
  },
];

const pointsRight = [
  {
    title: 'Tailored Learning Solutions:',
    description: 'Receive a personalized strategy aligned with your unique organizational needs and goals.',
  },
  {
    title: 'Role-Specific Learning Journeys:',
    description: 'Create targeted development paths that enhance individual and team performance.',
  },
  {
    title: 'Future-Proofed Learning:',
    description: 'Gain strategic insights and curriculum paths that support long-term organizational growth.',
  },
];

export function LearningStrategyDetails() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Heading and paragraphs */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold mb-6">
            Transforming Your Workforce with Strategic Learning Solutions
          </h2>
          <p className="mb-4 text-gray-700">
            At Infopro Learning, our mission is to help you build a performance-ready workforce, ensuring you maximize your investment in them. Our learning strategy practice assesses your current state, envisions your ideal state, and benchmarks best-in-class solutions tailored to your unique needs.
          </p>
          <p className="mb-4 text-gray-700">
            Through discussions with your team and a comprehensive review of your existing training, we deliver a personalized learning strategy within a few weeks. This strategy includes role-specific learning journeys, high-level curriculum paths, and strategic insights for future growth. We start with the end in mind, creating a success plan that defines metrics for success, particularly in behavior change and business results.
          </p>
        </div>

        {/* Right two columns of points */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {pointsLeft.map(({ title, description }) => (
              <div key={title} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-gray-700">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {pointsRight.map(({ title, description }) => (
              <div key={title} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-gray-700">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
