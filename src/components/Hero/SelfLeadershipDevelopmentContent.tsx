import React from 'react';
import { CheckCircle } from 'lucide-react';

const outcomes = [
  {
    title: 'Accelerated Career Trajectory',
    desc: 'Fast-track leaders development to boost engagement and job satisfaction.',
  },
  {
    title: 'Retain High-Potentials',
    desc: 'Keep top talent engaged and invested.',
  },
  {
    title: 'Boost Supervisor Effectiveness',
    desc: "Enhance new supervisors' team productivity.",
  },
  {
    title: 'Smooth Transitions',
    desc: 'Ease individual contributors into leadership.',
  },
  {
    title: 'Strengthen Leadership Pipeline',
    desc: 'Build mid-level and senior leaders.',
  },
  {
    title: 'Foster Self-Awareness',
    desc: 'Encourage leaders to recognize and manage stress.',
  },
];

export function SelfLeadershipDevelopmentContent() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Heading */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">
            Redefine Success<br />
            by Mastering<br />
            Self-Leadership
          </h2>
        </div>
        {/* Right: Description and Outcomes */}
        <div>
          <p className="mb-8 text-lg text-gray-800">
            Mastering self-leadership is the catalyst for meaningful personal and professional growth. Our self-leadership programs equip leaders with the confidence to tackle challenges head-on, adopt a proactive growth mindset, and make strategic decisions with clarity.<br /><br />
            We help leaders transform challenges into growth opportunities by addressing foundational issues like self-doubt and lack of direction. Through this journey, we help leaders build self-awareness and resilience, aligning their personal aspirations with organizational goals to amplify their impact and effectiveness.
          </p>
          <h3 className="text-2xl font-bold mb-4">Learning Outcomes:</h3>
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