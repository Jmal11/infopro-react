import React from 'react';
import { CheckCircle } from 'lucide-react';

export function AgileProjectManagementContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Empowering Project Managers to Execute Agile Projects in the Digital World
            </h2>
          </div>
          <div>
            <p className="mb-6 text-gray-700">
              This program equips participants with the skills and tools necessary to effectively manage agile projects in today’s digital landscape. The goal is to empower project managers to lead virtual teams, adapt to fast-paced technological changes, and deliver high-value outcomes through iterative and collaborative processes. The program uses a blend of learning activities – self-paced learning, virtual/on-site workshops, live coaching, and on-the-job projects – to build skills and apply them in modern, tech-driven projects.
            </p>
            <h3 className="text-lg font-semibold mb-4">Development Outcomes:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
              <div className="flex space-x-3">
                <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Agile Competency in Digital Contexts:</p>
                  <p>Understand and apply agile methodologies, principles, and frameworks specifically adapted to the demands of digital projects and virtual teams.</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Proficiency with Digital Agile Tools:</p>
                  <p>Use digital tools for agile project management, including backlog management, sprint tracking, and remote collaboration, ensuring efficient workflows and transparency in distributed teams.</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Effective Virtual Team Leadership:</p>
                  <p>Lead and coordinate agile teams across virtual and hybrid environments, fostering engagement, accountability, and a culture of continuous improvement.</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Adaptability to Rapid Change:</p>
                  <p>Use strategies to manage frequent changes, pivot quickly, and manage evolving project requirements.</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Scaling Agile for Large Digital Projects:</p>
                  <p>Apply scaling frameworks, such as SAFe and LeSS, to large, cross-functional digital projects to synchronize efforts across multiple teams effectively.</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Delivery of High-Value Outcomes:</p>
                  <p>Focus on value-driven project management to prioritize, iterate, and deliver outcomes that align with stakeholder needs and maximize project impact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
