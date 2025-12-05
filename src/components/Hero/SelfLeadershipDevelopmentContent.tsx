import React from 'react';

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
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left: Heading */}
          <div className="md:col-span-4">
            <h2 className="text-4xl font-bold leading-tight text-gray-900">
              Redefine Success
              <br />
              by Mastering
              <br />
              Self-Leadership
            </h2>
          </div>
          {/* Right: Description and Outcomes */}
          <div className="md:col-span-8">
            <p className="mb-4 text-base text-gray-700 leading-relaxed">
              Mastering self-leadership is the catalyst for meaningful personal and professional growth. Our self-leadership programs equip leaders with the confidence to tackle challenges head-on, adopt a proactive growth mindset, and make strategic decisions with clarity.
            </p>
            <p className="mb-8 text-base text-gray-700 leading-relaxed">
              We help leaders transform challenges into growth opportunities by addressing foundational issues like self-doubt and lack of direction. Through this journey, we help leaders build self-awareness and resilience, aligning their personal aspirations with organizational goals to amplify their impact and effectiveness.
            </p>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Learning Outcomes:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
              {outcomes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <img
                    src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg"
                    alt="check"
                    className="w-5 h-5 mt-1 flex-shrink-0"
                  />
                  <div>
                    <span className="font-semibold text-gray-900">{item.title}:</span>
                    <span className="block text-gray-600 text-sm">{item.desc}</span>
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