import React from 'react';
import { CheckCircle } from 'lucide-react';

const outcomes = [
  {
    title: 'Strategic Alignment',
    desc: 'Unite values, culture, and engagement.',
  },
  {
    title: 'Executive Presence',
    desc: 'Develop a leadership persona that instills trust, confidence, and moves others to action.',
  },
  {
    title: 'Data-Driven Decisions',
    desc: 'Utilize objective, insightful information.',
  },
  {
    title: 'Effective Communication',
    desc: 'Minimize misunderstandings and conflicts.',
  },
  {
    title: 'Stress Mastery',
    desc: 'Transform stress into innovation.',
  },
  {
    title: 'Confident Leadership',
    desc: 'Navigate uncertainty with assurance.',
  },
];

export function SeniorLeaderDevelopmentContent() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Heading */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">
            Evolving Senior Leaders<br />
            for a Complex and<br />
            Hyper-Competitive<br />
            Business Environment
          </h2>
        </div>
        {/* Right: Description and Outcomes */}
        <div>
          <p className="mb-8 text-lg text-gray-800">
            As senior leaders navigate complex, high-stakes business environments, it’s crucial to refine their strategic leadership abilities, boost their high-impact communication skills, and enable them to demonstrate a strong executive presence. Our Senior Leader Development Programs are each tailored to meet these needs, providing courses that enhance strategic thinking, stress management, and effective leadership in volatile, uncertain, complex, and ambiguous settings. Our expertly designed courses empower senior leaders to drive organizational success with confidence and clarity.
          </p>
          <h3 className="text-2xl font-bold mb-4">Development Outcomes:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {outcomes.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">{item.title}:</span>
                  <span className="block text-gray-700">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 