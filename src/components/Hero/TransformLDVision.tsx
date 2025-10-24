import React, { useState } from "react";

const steps = [
  {
    label: "Assess the Current State",
    content: [
      {
        title: "Strategic Insights",
        desc: "We analyze your current state, uncovering key insights to shape your future learning strategy.",
      },
      {
        title: "High-Level Curriculum Design",
        desc: "Our Learning Experience Architects design a high-level curriculum, recommending topics, modalities, and timing.",
      },
      {
        title: "Role-Based Learning Paths",
        desc: "We create visual learning paths for each role, including recommendations for badges and certifications.",
      },
      {
        title: "Design and Development Recommendations",
        desc: "We provide specific design and development recommendations to guide your next steps.",
      },
    ],
  },
  {
    label: "Align Our Findings",
    content: [
      {
        title: "The Success Plan",
        desc: "We establish success metrics from the outset, focusing on business results and behavior change.",
      },
      {
        title: "Learner Personas",
        desc: "We develop learner personas to identify key similarities and differences among targeted roles.",
      },
      {
        title: "Asset Control and Maintenance",
        desc: "We evaluate your current content lifecycle and maintenance plans, suggesting enhancements for better communication and asset management.",
      },
      {
        title: "Demand Planning & Intake Process",
        desc: "We assess your existing processes affected by organizational changes and propose methods to streamline them, ensuring a more efficient and measurable approach.",
      },
    ],
  },
  {
    label: "Plan for the Future",
    content: [
      {
        title: "Strategic Insights",
        desc: "We present an overview of findings and future insights to guide your strategy.",
      },
      {
        title: "High-level Curriculum Design",
        desc: "Our architects refine the curriculum design based on strategic insights.",
      },
      {
        title: "Role-based Learning Paths",
        desc: "We finalize learning paths, ensuring alignment with business goals.",
      },
      {
        title: "Design and Development Recommendations",
        desc: 'We provide comprehensive recommendations for design and development, supporting a flexible "start anywhere and go everywhere" approach.',
      },
    ],
  },
];

export function TransformLDVision() {
  const [activeStep, setActiveStep] = useState(0);
  const numSteps = steps.length;

  // For progress line width and left position
  const segmentPercent = 100 / numSteps;

  return (
    <section className="bg-white w-full py-10">
      <div className="max-w-6xl mx-auto">
        {/* Headings Row */}
        <div className="flex w-full justify-between mb-0 relative z-20">
          {steps.map((step, idx) => (
            <button
              key={step.label}
              onClick={() => setActiveStep(idx)}
              className={`font-bold text-lg transition-colors min-w-[200px] text-center flex-1
                ${activeStep === idx ? 'text-[#6b19ff]' : 'text-gray-800'}
              `}
              style={{
                fontWeight: activeStep === idx ? 700 : 500,
                outline: "none",
              }}
            >
              {step.label}
            </button>
          ))}
        </div>
        {/* Stepper Bar */}
        <div className="relative w-full flex items-center" style={{ height: "56px", marginBottom: 0 }}>
          {/* The gray line under circles */}
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-300" style={{ transform: "translateY(-50%)" }} />
          {/* The purple progress segment, only beneath selected step */}
          <div
            className="absolute h-1 bg-[#6b19ff] z-10 transition-all duration-300"
            style={{
              top: "50%",
              left: `calc(${(activeStep) * segmentPercent}% + 50px)`,
              width: `calc(25% - 100px)`,
              transform: "translateY(-50%)",
            }}
          />
          {/* Step circles */}
          <div className="flex w-full justify-between items-center relative z-20">
            {steps.map((_, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full border-2 transition-colors duration-200 mb-0
                    ${activeStep === idx ? "border-[#6b19ff] bg-[#6b19ff]" : "border-[#6b19ff] bg-white"}
                  `}
                  style={{
                    borderRadius: "50%",
                    borderWidth: "2px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Cards directly connected to the line */}
        <div className="flex border border-gray-200 rounded-lg overflow-x-auto bg-white mt-0">
          {steps[activeStep].content.map((card, idx) => (
            <div
              key={card.title}
              className={`flex-1 min-w-[250px] max-w-[350px] px-8 py-8
                ${idx !== 0 ? 'border-l border-gray-200' : ''}
              `}
            >
              <div className="flex flex-col items-start">
                <span className="text-xl font-bold mb-2">{card.title}</span>
                <p className="text-gray-700 mt-2">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
