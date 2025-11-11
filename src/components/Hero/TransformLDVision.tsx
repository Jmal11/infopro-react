import React, { useState } from "react";

const steps = [
  {
    label: "Assess the Current State",
    content: [
      {
        number: "01",
        title: "Strategic Insights",
        desc: "We analyze your current state, uncovering key insights to shape your future learning strategy.",
      },
      {
        number: "02",
        title: "High-Level Curriculum Design",
        desc: "Our Learning Experience Architects design a high-level curriculum, recommending topics, modalities, and timing.",
      },
      {
        number: "03",
        title: "Role-Based Learning Paths",
        desc: "We create visual learning paths for each role, including recommendations for badges and certifications.",
      },
      {
        number: "04",
        title: "Design and Development Recommendations",
        desc: "We provide specific design and development recommendations to guide your next steps.",
      },
    ],
  },
  {
    label: "Align Our Findings",
    content: [
      {
        number: "01",
        title: "The Success Plan",
        desc: "We establish success metrics from the outset, focusing on business results and behavior change.",
      },
      {
        number: "02",
        title: "Learner Personas",
        desc: "We develop learner personas to identify key similarities and differences among targeted roles.",
      },
      {
        number: "03",
        title: "Asset Control and Maintenance",
        desc: "We evaluate your current content lifecycle and maintenance plans, suggesting enhancements for better communication and asset management.",
      },
      {
        number: "04",
        title: "Demand Planning & Intake Process",
        desc: "We assess your existing processes affected by organizational changes and propose methods to streamline them, ensuring a more efficient and measurable approach.",
      },
    ],
  },
  {
    label: "Plan for the Future",
    content: [
      {
        number: "01",
        title: "Strategic Insights",
        desc: "We present an overview of findings and future insights to guide your strategy.",
      },
      {
        number: "02",
        title: "High-level Curriculum Design",
        desc: "Our architects refine the curriculum design based on strategic insights.",
      },
      {
        number: "03",
        title: "Role-based Learning Paths",
        desc: "We finalize learning paths, ensuring alignment with business goals.",
      },
      {
        number: "04",
        title: "Design and Development Recommendations",
        desc: 'We provide comprehensive recommendations for design and development, supporting a flexible "start anywhere and go everywhere" approach.',
      },
    ],
  },
];

export function TransformLDVision() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="bg-white w-full py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Headings Row */}
        <div className="flex w-full justify-between mb-8 relative z-20">
          {steps.map((step, idx) => (
            <button
              key={step.label}
              onClick={() => setActiveStep(idx)}
              className={`font-semibold text-lg transition-colors text-center flex-1
                ${activeStep === idx ? 'text-[#6b19ff]' : 'text-gray-800'}
              `}
              style={{
                outline: "none",
              }}
            >
              {step.label}
            </button>
          ))}
        </div>

        {/* Container for stepper + cards */}
        <div className="relative">
          {/* Stepper Bar - positioned absolutely above cards */}
          <div className="relative w-full mb-0" style={{ height: "20px", marginBottom: "-1px" }}>
            {/* Background line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2  bg-gray-300" />
            
            {/* Purple progress line - left segment */}
            {activeStep >= 1 && (
              <div 
                className="absolute h-0.5 bg-[#6b19ff] top-1/2 -translate-y-1/2"
                style={{
                  left: '16.66%',
                  right: '50%',
                }}
              />
            )}
            
            {/* Purple progress line - right segment */}
            {activeStep >= 2 && (
              <div 
                className="absolute h-0.5 bg-[#6b19ff] top-1/2 -translate-y-1/2"
                style={{
                  left: '50%',
                  right: '16.66%',
                }}
              />
            )}

            {/* Step circles */}
            <div className="absolute inset-0 flex justify-between items-center">
              {steps.map((_, idx) => (
                <div 
                  key={idx} 
                  className="flex-1 flex justify-center"
                  style={{
                    position: 'absolute',
                    left: `${16.66 + (idx * 33.33)}%`,
                    transform: 'translateX(-50%)'
                  }}
                >
                  <img
                    src={
                      activeStep === idx
                        ? "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Radio-btn_hover.svg"
                        : "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Radio-btn_normal.svg"
                    }
                    alt={`Step ${idx + 1}`}
                    className="w-8 h-8 cursor-pointer"
                    onClick={() => setActiveStep(idx)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {steps[activeStep].content.map((card, idx) => (
                <div
                  key={card.title}
                  className={`px-6 py-8 ${idx !== 0 ? 'border-l border-gray-200' : ''}`}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#6b19ff] mb-4">
                    <span className="text-[#6b19ff] font-semibold">{card.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}