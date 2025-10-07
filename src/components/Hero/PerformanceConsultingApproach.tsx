import React, { useState, useEffect } from 'react';
import { Search, LayoutList, CalendarCheck, Settings, Handshake, Repeat, TrendingUp, PieChart } from 'lucide-react';

const icons = [
  { icon: <Search size={32} className="text-purple-700" />, label: 'Assess' },
  { icon: <LayoutList size={32} className="text-purple-700" />, label: 'Align' },
  { icon: <CalendarCheck size={32} className="text-purple-700" />, label: 'Plan' },
  { icon: <Settings size={32} className="text-white bg-purple-700 rounded p-1" />, label: 'Create Blueprint' },
  { icon: <Handshake size={32} className="text-purple-700" />, label: 'Develop Solutions' },
  { icon: <Repeat size={32} className="text-purple-700" />, label: 'Change Management' },
  { icon: <TrendingUp size={32} className="text-purple-700" />, label: 'Measure Outcomes' },
  { icon: <PieChart size={32} className="text-purple-700" />, label: 'Optimize' },
];

const content = [
  {
    title: 'Create Blueprint',
    description: 'Detail out the blueprint design with clear action plans, initiatives, program outlines, and interventions for workforce development.',
  },
  {
    title: 'Benefit',
    description: 'A detailed blueprint ensures clarity of roles to stakeholders, promoting coordinated efforts and efficient execution.',
  },
];

export function PerformanceConsultingApproach() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex flex-col items-center relative">
          <div className="flex space-x-6">
            {icons.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center w-16 h-16 rounded-lg border ${
                  index === currentIndex ? 'bg-purple-700 text-white' : 'bg-white text-purple-700'
                } transition-colors duration-500`}
              >
                {item.icon}
                <span className="text-xs mt-1">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="absolute top-20 left-0 w-full h-48 bg-gradient-to-r from-purple-200 to-transparent rounded-lg opacity-50 pointer-events-none"></div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Building a Performance-Ready Workforce</h2>
          <p className="mb-6 text-gray-700">
            Our performance consulting approach directly impacts your bottom line by delivering measurable results. We identify the root causes of performance gaps through data-driven insights to develop solutions tailored to your business objectives.
          </p>
          {content.map((item, idx) => (
            <div key={idx} className="mb-6 p-4 border rounded-lg shadow-sm">
              <p>
                <strong className="text-purple-700">{item.title}:</strong> {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
