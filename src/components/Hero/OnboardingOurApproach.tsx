import React, { useState } from 'react';
import {
  BarChart2,
  Users,
  Mail,
  Settings,
  FileText,
  Search,
  Repeat,
  ClipboardList,
  UserCheck,
  Activity,
  LucideIcon,
} from 'lucide-react';

const approachSteps: { id: string; label: string; icon: LucideIcon }[] = [
  { id: 'preboard', label: 'Preboard', icon: Repeat },
  { id: 'orientation', label: 'Orientation', icon: ClipboardList },
  { id: 'onboarding', label: 'Onboarding', icon: UserCheck },
  { id: 'integration', label: 'Integration', icon: Settings },
  { id: 'performance', label: 'Performance', icon: Activity },
  { id: 'excel', label: 'Excel', icon: Search },
];

const approachDetails: Record<
  string,
  { points: string[]; icons: LucideIcon[] }
> = {
  preboard: {
    points: ['Formal Review'],
    icons: [BarChart2],
  },
  orientation: {
    points: ['Growth Path'],
    icons: [Users],
  },
  onboarding: {
    points: ['Additional Responsibilities'],
    icons: [Mail],
  },
  integration: {
    points: ['New Challenges'],
    icons: [Settings],
  },
  performance: {
    points: ['Continuous Improvement'],
    icons: [Activity],
  },
  excel: {
    points: ['Excellence Achieved'],
    icons: [FileText],
  },
};

export function OnboardingOurApproach() {
  const [selected, setSelected] = useState<string>('excel');

  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold mb-2">Our Approach</h2>
      <p className="mb-8 text-gray-700">
        Combining inside-out and outside-in approaches to Onboarding Experience.
      </p>

      {/* Arc of icons */}
      <div className="relative flex justify-center space-x-12 mb-12">
        {approachSteps.map(({ id, label, icon: Icon }) => {
          const isSelected = selected === id;
          return (
            <button
              key={id}
              onClick={() => setSelected(id)}
              className={`flex flex-col items-center focus:outline-none ${
                isSelected ? 'text-purple-600' : 'text-gray-500'
              }`}
              aria-pressed={isSelected}
            >
              <div
                className={`p-4 rounded-lg border-2 ${
                  isSelected ? 'border-purple-600 bg-purple-100' : 'border-gray-300 bg-white'
                }`}
              >
                <Icon size={32} />
              </div>
              <span className="mt-2 text-sm">{label}</span>
            </button>
          );
        })}
      </div>

      {/* Details below */}
      <div className="bg-white rounded-lg shadow p-6 max-w-4xl mx-auto">
        <div className="flex justify-center space-x-8 mb-6">
          {approachDetails[selected].points.map((point: string) => (
            <div key={point} className="flex items-center space-x-2 text-purple-600 font-semibold">
              <CheckCircle size={20} />
              <span>{point}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-6">
          {approachDetails[selected].icons.map((IconComp: LucideIcon, idx: number) => (
            <IconComp key={idx} size={24} className="text-purple-600" />
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
