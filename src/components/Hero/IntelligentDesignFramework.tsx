import React, { useState } from 'react';

const segments = [
  {
    id: 'definePerformancePlan',
    label: 'Define Performance Plan',
  },
  {
    id: 'productVisionBlueprint',
    label: 'Product Vision and Blueprint (PVB)',
  },
  {
    id: 'enhancedContentOutline',
    label: 'Enhanced Content Outline',
  },
  {
    id: 'prototyping',
    label: 'Prototyping',
  },
  {
    id: 'contentAssetDevelopment',
    label: 'Content & Asset Development',
  },
  {
    id: 'syntheticMediaDesign',
    label: 'Synthetic Media Design and Development',
  },
  {
    id: 'courseAssessmentCreation',
    label: 'Course and Assessment Creation',
  },
  {
    id: 'translation',
    label: 'Translation',
  },
  {
    id: 'deployment',
    label: 'Deployment',
  },
];

const contentData = {
  definePerformancePlan: {
    title: 'Define Performance Plan',
    description: `Description for Define Performance Plan.`,
    keyActivities: ['Activity 1', 'Activity 2', 'Activity 3'],
    additionalText: '',
    topOutcomes: ['Outcome 1', 'Outcome 2', 'Outcome 3'],
  },
  productVisionBlueprint: {
    title: 'Product Vision and Blueprint (PVB)',
    description: `Description for Product Vision and Blueprint.`,
    keyActivities: ['Activity 1', 'Activity 2', 'Activity 3'],
    additionalText: '',
    topOutcomes: ['Outcome 1', 'Outcome 2', 'Outcome 3'],
  },
  enhancedContentOutline: {
    title: 'Enhanced Content Outline',
    description: `Description for Enhanced Content Outline.`,
    keyActivities: ['Activity 1', 'Activity 2', 'Activity 3'],
    additionalText: '',
    topOutcomes: ['Outcome 1', 'Outcome 2', 'Outcome 3'],
  },
  prototyping: {
    title: 'Prototyping',
    description: `Description for Prototyping.`,
    keyActivities: ['Activity 1', 'Activity 2', 'Activity 3'],
    additionalText: '',
    topOutcomes: ['Outcome 1', 'Outcome 2', 'Outcome 3'],
  },
  contentAssetDevelopment: {
    title: 'Content & Asset Development',
    description: `Description for Content & Asset Development.`,
    keyActivities: ['Activity 1', 'Activity 2', 'Activity 3'],
    additionalText: '',
    topOutcomes: ['Outcome 1', 'Outcome 2', 'Outcome 3'],
  },
  syntheticMediaDesign: {
    title: 'Synthetic Media Design: AI-Powered Learning Design and Development',
    description: `We create custom media assets that enhance the learning experience. This includes generating images, videos, animations, and interactive elements. Each asset is designed to support learning objectives while maintaining brand consistency and technical quality.`,
    keyActivities: ['Media planning', 'Asset generation', 'Format optimization'],
    additionalText: `We use over a dozen AI tools and platforms that have been screened for privacy and security to generate and optimize various media formats, reducing production time while maintaining quality.`,
    topOutcomes: ['Diverse media portfolio', 'Brand alignment', 'Optimized formats'],
  },
  courseAssessmentCreation: {
    title: 'Course and Assessment Creation',
    description: `Description for Course and Assessment Creation.`,
    keyActivities: ['Activity 1', 'Activity 2', 'Activity 3'],
    additionalText: '',
    topOutcomes: ['Outcome 1', 'Outcome 2', 'Outcome 3'],
  },
  translation: {
    title: 'Translation',
    description: `Description for Translation.`,
    keyActivities: ['Activity 1', 'Activity 2', 'Activity 3'],
    additionalText: '',
    topOutcomes: ['Outcome 1', 'Outcome 2', 'Outcome 3'],
  },
  deployment: {
    title: 'Deployment',
    description: `Description for Deployment.`,
    keyActivities: ['Activity 1', 'Activity 2', 'Activity 3'],
    additionalText: '',
    topOutcomes: ['Outcome 1', 'Outcome 2', 'Outcome 3'],
  },
};

export function IntelligentDesignFramework() {
  const [activeSegment, setActiveSegment] = useState('syntheticMediaDesign');

  return (
    <section className="container mx-auto px-4 py-16 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-2 text-center md:text-left max-w-4xl mx-auto">
        The Intelligent Design Framework: AI-Powered Learning Design and Development
      </h2>
      <p className="text-center md:text-left mb-8 text-gray-700 max-w-4xl mx-auto">
        Experience seamless learning content development with our comprehensive AI toolkit that guides you through every phase—from initial concept to final deployment—revolutionizing how we create, deliver, and measure learning experiences.
      </p>
      <div className="flex flex-col md:flex-row gap-8 max-w-[1280px] mx-auto">
        {/* Left circular segmented navigation */}
        <div className="md:w-1/3 flex justify-center">
          <svg
            viewBox="0 0 300 300"
            className="w-72 h-72"
            aria-label="Intelligent Design Framework Navigation"
          >
            {/* Segments */}
            {segments.map((segment, index) => {
              const angle = (index / segments.length) * 2 * Math.PI - Math.PI / 2;
              const largeArcFlag = 0;
              const radiusOuter = 140;
              const radiusInner = 100;
              const x1 = 150 + radiusOuter * Math.cos(angle);
              const y1 = 150 + radiusOuter * Math.sin(angle);
              const x2 = 150 + radiusOuter * Math.cos(angle + (2 * Math.PI) / segments.length);
              const y2 = 150 + radiusOuter * Math.sin(angle + (2 * Math.PI) / segments.length);
              const x3 = 150 + radiusInner * Math.cos(angle + (2 * Math.PI) / segments.length);
              const y3 = 150 + radiusInner * Math.sin(angle + (2 * Math.PI) / segments.length);
              const x4 = 150 + radiusInner * Math.cos(angle);
              const y4 = 150 + radiusInner * Math.sin(angle);

              const pathData = `
                M ${x1} ${y1}
                A ${radiusOuter} ${radiusOuter} 0 ${largeArcFlag} 1 ${x2} ${y2}
                L ${x3} ${y3}
                A ${radiusInner} ${radiusInner} 0 ${largeArcFlag} 0 ${x4} ${y4}
                Z
              `;

              const isActive = activeSegment === segment.id;

              return (
                <path
                  key={segment.id}
                  d={pathData}
                  fill={isActive ? '#7c3aed' : '#1f2937'}
                  stroke="#ddd"
                  strokeWidth={1}
                  onClick={() => setActiveSegment(segment.id)}
                  style={{ cursor: 'pointer' }}
                />
              );
            })}
            {/* Arrows */}
            {segments.map((segment, index) => {
              const angle = ((index + 0.5) / segments.length) * 2 * Math.PI - Math.PI / 2;
              const arrowRadius = 120;
              const x = 150 + arrowRadius * Math.cos(angle);
              const y = 150 + arrowRadius * Math.sin(angle);
              const arrowSize = 8;
              const rotation = (angle * 180) / Math.PI + 90;

              return (
                <polygon
                  key={`arrow-${segment.id}`}
                  points={`0,0 ${arrowSize},${arrowSize / 2} 0,${arrowSize}`}
                  fill="#fff"
                  transform={`translate(${x},${y}) rotate(${rotation})`}
                />
              );
            })}
            {/* Labels */}
            {segments.map((segment, index) => {
              const angle = ((index + 0.5) / segments.length) * 2 * Math.PI - Math.PI / 2;
              const labelRadius = 170;
              const x = 150 + labelRadius * Math.cos(angle);
              const y = 150 + labelRadius * Math.sin(angle);
              const isActive = activeSegment === segment.id;

              return (
                <text
                  key={`label-${segment.id}`}
                  x={x}
                  y={y}
                  fill={isActive ? '#7c3aed' : '#fff'}
                  fontSize="10"
                  fontWeight={isActive ? 'bold' : 'normal'}
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  style={{ userSelect: 'none', cursor: 'pointer' }}
                  onClick={() => setActiveSegment(segment.id)}
                >
                  {segment.label}
                </text>
              );
            })}
          </svg>
        </div>

        {/* Right content area */}
        <div className="md:w-2/3 space-y-6">
          <h3 className="text-lg font-semibold">{contentData[activeSegment].title}</h3>
          <p className="text-gray-700">{contentData[activeSegment].description}</p>
          <div>
            <h4 className="font-semibold mb-2">Key Activities</h4>
            <div className="flex gap-6 text-purple-700 font-semibold">
              {contentData[activeSegment].keyActivities.map((activity, idx) => (
                <span key={idx} className="border-l-2 border-purple-700 pl-4 first:border-l-0 first:pl-0 cursor-pointer">
                  {activity}
                </span>
              ))}
            </div>
          </div>
          <p className="text-gray-700">{contentData[activeSegment].additionalText}</p>
          <div className="bg-gray-50 p-4 rounded shadow max-w-md">
            <h4 className="font-semibold mb-2">Top 3 Outcomes</h4>
            <ul className="space-y-2">
              {contentData[activeSegment].topOutcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
