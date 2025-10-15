import { useState } from 'react';
import { Check } from 'lucide-react';

type Block = {
  key: string;
  title: string;
  icon?: React.ReactNode;
  intro: string;
  principles: string[];
  impacts: string[];
  metrics: string[];
};

const blocks: Block[] = [
  {
    key: 'ai-tech',
    title: 'AI and Technology Integration',
    intro:
      'Functions as the digital enabler of learning operations, powering automated delivery, personalization, and data-driven decisions while reducing manual intervention and operational costs.',
    principles: [
      'Begin with focused pilots that demonstrate clear business value before scaling.',
      'Prioritize integration with existing systems while building for future expansion.',
      'Technology decisions should align with specific business challenges rather than following trends.'
    ],
    impacts: [
      'Reduced operational costs through automation',
      'Increased learning delivery capacity',
      'Improved scalability of programs'
    ],
    metrics: ['Cost per learner', 'Technology adoption rates', 'Program automation rate']
  },
  {
    key: 'skills',
    title: 'Skills & Capability Evolution',
    intro:
      'Establish continuous upskilling and reskilling operating rhythms aligned to business priorities and role taxonomies.',
    principles: ['Skills taxonomy and proficiency model', 'Quarterly skill forecast & priorities'],
    impacts: ['Time-to-skill reduction', 'Increased role mobility'],
    metrics: ['Time-to-skill', 'Internal mobility rate']
  },
  {
    key: 'personalized',
    title: 'Personalized Learning',
    intro:
      'Deliver adaptive, learner-centered experiences using data to tailor content and pathways across roles and geographies.',
    principles: ['AI-driven recommendations', 'Role-based journeys'],
    impacts: ['Higher learner engagement', 'Improved completion rates'],
    metrics: ['Engagement score', 'Completion rate']
  },
  {
    key: 'measurement',
    title: 'Measurement & Impact',
    intro:
      'Implement a performance-focused measurement system that connects learning to business outcomes.',
    principles: ['North-star KPIs', 'Outcome dashboards', 'ROE/ROI templates'],
    impacts: ['Increased data-driven decisions', 'Clear line-of-sight to impact'],
    metrics: ['Outcome attainment', 'ROI/ROE']
  },
  {
    key: 'partnership',
    title: 'Strategic Business Partnership',
    intro:
      'Embed L&D with business planning to co-own goals and deliver capability at speed and scale.',
    principles: ['Quarterly business reviews', 'Intake and prioritization model'],
    impacts: ['Faster response to priorities', 'Higher stakeholder NPS'],
    metrics: ['Cycle time', 'Stakeholder NPS']
  },
  {
    key: 'process',
    title: 'Process and Governance',
    intro:
      'Standardize ways-of-working, governance and operating cadences to improve throughput and quality.',
    principles: ['Operating cadences', 'RACI and workflow standards'],
    impacts: ['Reduced rework', 'Predictable throughput'],
    metrics: ['Throughput', 'Quality index']
  }
];

export function OperatingModelBlocksSection() {
  const [activeKey, setActiveKey] = useState<Block['key']>('ai-tech');
  const active = blocks.find((b) => b.key === activeKey)!;

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">L&D Operating Model Building Blocks</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Tabs */}
          <div className="lg:col-span-4">
            <div className="rounded border border-gray-200 overflow-hidden">
              {blocks.map((b) => (
                <button
                  key={b.key}
                  onClick={() => setActiveKey(b.key)}
                  className={`w-full flex items-center gap-3 text-left px-5 py-5 border-b border-gray-200 transition-colors ${
                    activeKey === b.key ? 'bg-purple-600 text-white' : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  {/* simple placeholder icon */}
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                      activeKey === b.key ? 'bg-white/20' : 'bg-purple-100 text-purple-700'
                    }`}
                  >
                    •
                  </span>
                  <span className="font-medium">{b.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
              <div className="xl:col-span-7">
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">{active.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{active.intro}</p>

                <h4 className="font-semibold text-gray-900 mb-2">Design Principles</h4>
                <ul className="space-y-2 mb-6">
                  {active.principles.map((p, i) => (
                    <li key={i} className="flex gap-2 text-gray-700">
                      <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-600 text-white">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold text-gray-900 mb-2">Operational Impact</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {active.impacts.map((p, i) => (
                    <li key={i} className="flex gap-2 text-gray-700">
                      <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-600 text-white">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="xl:col-span-5">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Success Metrics</h4>
                  <ul className="space-y-3">
                    {active.metrics.map((m, i) => (
                      <li key={i} className="flex gap-2 text-gray-800">
                        <span className="mt-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-purple-600 text-white">
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
