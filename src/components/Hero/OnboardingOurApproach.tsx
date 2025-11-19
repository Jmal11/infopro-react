import React from 'react';
import { Check } from 'lucide-react';

const approachSteps = [
  {
    id: 'preboard',
    label: 'Preboard',
    icon: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/preboard-icon.svg',
    position: 'top-[15%] left-[18%]',
  },
  {
    id: 'excel',
    label: 'Excel',
    icon: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/excel-icon.svg',
    position: 'top-[15%] right-[18%]',
    highlighted: true,
  },
  {
    id: 'orientation',
    label: 'Orientation',
    icon: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/orientation-icon.svg',
    position: 'top-[40%] left-[25%]',
  },
  {
    id: 'performance',
    label: 'Performance',
    icon: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/performance-icon.svg',
    position: 'top-[40%] right-[25%]',
  },
  {
    id: 'onboarding',
    label: 'Onboarding',
    icon: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/onboarding-icon.svg',
    position: 'top-[65%] left-[35%]',
  },
  {
    id: 'integration',
    label: 'Integration',
    icon: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/integration-icon.svg',
    position: 'top-[65%] right-[35%]',
  },
];

const trainingItems = [
  'Process Training',
  'Tools Training',
  'SOP Training',
  'SOS information',
  'Direct Informal Feedback',
];

const bottomIcons = [
  'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/globe-icon.svg',
  'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/presentation-icon.svg',
  'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/chat-icon.svg',
  'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/email-icon.svg',
];

export function OnboardingOurApproach() {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* SVG Image with Positioned Icons in Semi-Circle */}
        <div className="relative mb-8 max-w-5xl mx-auto">
          {/* Background SVG */}
          <img
            src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/onboarding-model-shape-updated.svg"
            alt="Our Approach - Onboarding Experience Flow"
            className="w-full"
          />

          {/* Positioned Icons on top of SVG in Semi-Circle */}
          {approachSteps.map((step) => (
            <div
              key={step.id}
              className={`absolute ${step.position} transform -translate-x-1/2 flex flex-col items-center`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-2 shadow-md ${
                  step.highlighted
                    ? 'bg-purple-600'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <img
                  src={step.icon}
                  alt={step.label}
                  className={`w-8 h-8 ${step.highlighted ? 'brightness-0 invert' : ''}`}
                />
              </div>
              <span
                className={`text-sm font-medium whitespace-nowrap ${
                  step.highlighted ? 'text-purple-600' : 'text-gray-800'
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom White Box with Training Items */}
        <div className="bg-white rounded-lg shadow-md px-12 py-8 max-w-5xl mx-auto">
          {/* Training Items with Checkmarks */}
          <div className="flex items-center justify-center gap-12 mb-6 flex-wrap">
            {trainingItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="text-purple-600">
                  <Check size={20} />
                </div>
                <span className="text-gray-800 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* Bottom Icons - Centered and evenly spaced */}
          <div className="flex items-center justify-center gap-12 pt-4">
            {bottomIcons.map((icon, index) => (
              <div key={index} className="w-12 h-12 flex items-center justify-center">
                <img
                  src={icon}
                  alt={`Icon ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}