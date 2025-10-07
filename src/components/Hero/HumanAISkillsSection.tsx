import React from 'react';

export function HumanAISkillsSection() {
  return (
    <section className="bg-white py-12 border-x border-t border-b border-gray-300 rounded-lg max-w-6xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-4">
          Redefining Skills and Workflows: <br /> The Human+AI Evolution
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-2">
          We empower clients to navigate the transformative landscape of AI and automation by identifying and cultivating the essential technological, social, and emotional skills needed for new workflows. By redefining workflows and skills, we help organizations adapt and thrive in the evolving future of work.
        </p>
        <hr className="border-gray-300 mb-10" />
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-2/3 space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Performance-Ready Workforce Blueprint</h3>
              <p className="text-gray-700 text-sm">
                An AI and performance-ready workforce blueprint that captures AI’s impact on workflows, identifies skills gaps, and plans for a future-ready workforce leveraging AI technologies.
              </p>
              <hr className="border-gray-300 my-4" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">AI Readiness Check</h3>
              <p className="text-gray-700 text-sm">
                AI readiness check assesses an organization’s workforce skills, focusing on digital and AI capabilities. This service identifies gaps between current competencies and those required for successful AI integration, helping companies prepare for technological transformation.
              </p>
              <hr className="border-gray-300 my-4" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">AI Accelerators</h3>
              <p className="text-gray-700 text-sm">
                Ready-to-deploy accelerators including tools, skills taxonomies, customizable training content, and immersive labs, ensuring rapid implementation and shorter time to impact.
              </p>
              <hr className="border-gray-300 my-4" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Change Management</h3>
              <p className="text-gray-700 text-sm">
                Orchestrates transformation across key dimensions including people, process, technology, culture and operating model for comprehensive organizational change.
              </p>
              <hr className="border-gray-300 my-4" />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/3 bg-gray-900 text-white p-6 rounded max-h-[400px] overflow-y-auto">
            <h3 className="font-semibold text-lg mb-4">AI Transformations in Key Functions</h3>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold">Sales</h4>
                <p>
                  <span className="text-purple-500">• </span>
                  AI automates lead scoring and personalization, transforming sales interactions for greater efficiency.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Marketing</h4>
                <p>
                  <span className="text-purple-500">• </span>
                  AI enables hyper-targeted campaigns through predictive analytics, redefining customer engagement.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Human Resources</h4>
                <p>
                  <span className="text-purple-500">• </span>
                  AI streamlines recruitment with automated screening and enhances employee development.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Operations</h4>
                <p>
                  <span className="text-purple-500">• </span>
                  AI optimizes supply chains with predictive maintenance and real-time data analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
