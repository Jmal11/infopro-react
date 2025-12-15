import React, { useState } from 'react';

export function AgileTransformationFramework() {
  const [activeSection, setActiveSection] = useState('system');

  const frameworkData = {
    people: {
      title: "People and Culture",
      sections: [
        {
          number: "01",
          title: "Leadership Buy-in",
          description: "Engage senior leadership in championing Agile transformation through executive coaching, vision alignment, and change leadership development. We help leaders understand the value of Agile, develop the necessary mindset, and create a supportive environment for teams to thrive."
        },
        {
          number: "02", 
          title: "Training & Support",
          description: "Comprehensive training programs for all levels of the organization, from basic Agile principles to advanced practices. We provide ongoing support, coaching, and mentoring to ensure successful adoption and continuous improvement."
        },
        {
          number: "03",
          title: "Change Management",
          description: "Structured approach to managing organizational change during Agile transformation. We help organizations navigate resistance, communicate effectively, and create a culture of continuous learning and adaptation."
        }
      ]
    },
    system: {
      title: "Systems and Processes",
      sections: [
        {
          number: "01",
          title: "Operating Model",
          description: "Define and establish a tailored Agile framework that suits the organization's structure and strategic goals. We identify existing processes, map them to Agile methodologies, and redefine them to ensure alignment and smooth transition. Further, we help form self-organizing, cross-functional teams that can deliver end-to-end solutions."
        },
        {
          number: "02",
          title: "Portfolio Management",
          description: "Define a framework to prioritize initiatives, allocate resources, and manage a portfolio of projects using Agile methodologies, leading to greater alignment with business goals."
        }
      ]
    },
    technology: {
      title: "Technology and Tools",
      sections: [
        {
          number: "01",
          title: "Agile Tools",
          description: "Implementation and configuration of modern Agile project management and collaboration tools. We help select, customize, and integrate tools that support your Agile processes and enhance team productivity."
        },
        {
          number: "02",
          title: "Integration",
          description: "Seamless integration of Agile tools with existing enterprise systems and workflows. We ensure data consistency, automate reporting, and create a unified platform for project management and collaboration."
        }
      ]
    },
    scaling: {
      title: "Scaling and Sustenance",
      sections: [
        {
          number: "01",
          title: "Continuous Improvement",
          description: "Establish feedback loops, retrospectives, and continuous learning mechanisms to drive ongoing improvement. We help teams and organizations develop a culture of experimentation, learning, and adaptation."
        },
        {
          number: "02",
          title: "Metrics & Reporting",
          description: "Implement comprehensive metrics and reporting systems to track progress, measure success, and identify areas for improvement. We provide dashboards, analytics, and insights that support data-driven decision making."
        }
      ]
    }
  };

  const currentData = frameworkData[activeSection as keyof typeof frameworkData];

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Circular Diagram */}
          <div className="flex justify-center">
            <div className="relative w-[500px] h-[500px]">
              <svg className="w-full h-full" viewBox="0 0 500 500">
                {/* Center Circle */}
                <circle
                  cx="250"
                  cy="250"
                  r="80"
                  fill="#7c3aed"
                />
                <text
                  x="250"
                  y="250"
                  textAnchor="middle"
                  className="fill-white text-sm font-medium"
                >
                  <tspan x="250" dy="-15">Agile</tspan>
                  <tspan x="250" dy="15">Transformation</tspan>
                  <tspan x="250" dy="15">Framework</tspan>
                </text>

                {/* Quadrants - Using proper arc calculations */}
                {/* People & Culture - Top Left */}
                <path
                  d="M 170 170 A 150 150 0 0 1 250 100 L 250 250 L 170 250 Z"
                  fill={activeSection === 'people' ? "#7c3aed" : "#000000"}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setActiveSection('people')}
                />
                <text
                  x="210"
                  y="175"
                  textAnchor="middle"
                  className="fill-white text-sm font-medium"
                >
                  <tspan x="210" dy="0">People &</tspan>
                  <tspan x="210" dy="18">Culture</tspan>
                </text>

                {/* System & Processes - Top Right */}
                <path
                  d="M 330 170 A 150 150 0 0 1 250 100 L 250 250 L 330 250 Z"
                  fill="#7c3aed"
                  className="cursor-pointer"
                />
                <text
                  x="290"
                  y="175"
                  textAnchor="middle"
                  className="fill-white text-sm font-medium"
                >
                  <tspan x="290" dy="0">System &</tspan>
                  <tspan x="290" dy="18">Processes</tspan>
                </text>

                {/* Technology & Tools - Bottom Right */}
                <path
                  d="M 330 330 A 150 150 0 0 1 250 400 L 250 250 L 330 250 Z"
                  fill={activeSection === 'technology' ? "#7c3aed" : "#000000"}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setActiveSection('technology')}
                />
                <text
                  x="290"
                  y="325"
                  textAnchor="middle"
                  className="fill-white text-sm font-medium"
                >
                  <tspan x="290" dy="0">Technology</tspan>
                  <tspan x="290" dy="18">& Tools</tspan>
                </text>

                {/* Scaling & Sustenance - Bottom Left */}
                <path
                  d="M 170 330 A 150 150 0 0 1 250 400 L 250 250 L 170 250 Z"
                  fill={activeSection === 'scaling' ? "#7c3aed" : "#000000"}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setActiveSection('scaling')}
                />
                <text
                  x="210"
                  y="325"
                  textAnchor="middle"
                  className="fill-white text-sm font-medium"
                >
                  <tspan x="210" dy="0">Scaling &</tspan>
                  <tspan x="210" dy="18">Sustenance</tspan>
                </text>

                {/* Outer Segments - Positioned exactly like in the image */}
                {/* Leadership Buy-in - Top */}
                <circle cx="250" cy="60" r="30" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                <text x="250" y="68" textAnchor="middle" className="fill-black text-xs font-medium text-center">
                  <tspan x="250" dy="-4">Leadership</tspan>
                  <tspan x="250" dy="14">Buy-in</tspan>
                </text>

                {/* Training & Support - Left */}
                <circle cx="60" cy="180" r="30" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                <text x="60" y="188" textAnchor="middle" className="fill-black text-xs font-medium text-center">
                  <tspan x="60" dy="-4">Training &</tspan>
                  <tspan x="60" dy="14">Support</tspan>
                </text>

                {/* Change Management - Left */}
                <circle cx="60" cy="320" r="30" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                <text x="60" y="328" textAnchor="middle" className="fill-black text-xs font-medium text-center">
                  <tspan x="60" dy="-4">Change</tspan>
                  <tspan x="60" dy="14">Management</tspan>
                </text>

                {/* Portfolio Management - Top Right */}
                <circle cx="350" cy="120" r="30" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                <text x="350" y="128" textAnchor="middle" className="fill-black text-xs font-medium text-center">
                  <tspan x="350" dy="-4">Portfolio</tspan>
                  <tspan x="350" dy="14">Management</tspan>
                </text>

                {/* Operating Model - Right */}
                <circle cx="380" cy="200" r="30" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                <text x="380" y="208" textAnchor="middle" className="fill-black text-xs font-medium text-center">
                  <tspan x="380" dy="-4">Operating</tspan>
                  <tspan x="380" dy="14">Model</tspan>
                </text>

                {/* Agile Tools - Right */}
                <circle cx="380" cy="300" r="30" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                <text x="380" y="308" textAnchor="middle" className="fill-black text-xs font-medium text-center">
                  <tspan x="380" dy="-4">Agile</tspan>
                  <tspan x="380" dy="14">Tools</tspan>
                </text>

                {/* Integration - Bottom Right */}
                <circle cx="350" cy="380" r="30" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                <text x="350" y="388" textAnchor="middle" className="fill-black text-xs font-medium text-center">
                  <tspan x="350" dy="-4">Integration</tspan>
                </text>

                {/* Continuous Improvement - Bottom */}
                <circle cx="250" cy="440" r="30" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                <text x="250" y="448" textAnchor="middle" className="fill-black text-xs font-medium text-center">
                  <tspan x="250" dy="-4">Continuous</tspan>
                  <tspan x="250" dy="14">Improvement</tspan>
                </text>

                {/* Metrics & Reporting - Bottom Left */}
                <circle cx="150" cy="380" r="30" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                <text x="150" y="388" textAnchor="middle" className="fill-black text-xs font-medium text-center">
                  <tspan x="150" dy="-4">Metrics &</tspan>
                  <tspan x="150" dy="14">Reporting</tspan>
                </text>
              </svg>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              {currentData.title}
            </h2>
            
            <div className="space-y-6">
              {currentData.sections.map((section, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl font-bold text-primary mt-1">
                      {section.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {section.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {section.description}
                      </p>
                    </div>
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

export default AgileTransformationFramework;
