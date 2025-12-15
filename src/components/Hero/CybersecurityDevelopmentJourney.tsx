import React from 'react';
import { CheckCircle } from 'lucide-react';

export function CybersecurityDevelopmentJourney() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-[1280px]">
      <h2 className="text-3xl font-bold mb-4">Development Journey</h2>
      <p className="mb-6 text-sm font-semibold">Cybersecurity and AI Integration Course Outline</p>
      <p className="mb-6">
        The Cybersecurity and AI Integration Course offers a comprehensive journey into blending cybersecurity practices with artificial intelligence. Participants will explore AI-driven threat detection, automation in security operations, and predictive analytics for proactive risk management. The course covers key topics such as AI algorithms for cybersecurity, ethical considerations, and real-world applications in threat prevention and response. By the end, learners will gain practical skills to integrate AI tools within cybersecurity frameworks, enhancing defense mechanisms and operational efficiency in a digital-first world.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ul className="list-disc list-inside space-y-2 text-sm text-blue-600">
          <li><a href="#" className="hover:underline">Cybersecurity Fundamentals and Strategy</a></li>
          <li>Cybersecurity Leadership and Culture</li>
          <li>Threat Intelligence and Incident Response</li>
          <li>Advanced Cybersecurity Topics</li>
          <li>AI in Cybersecurity</li>
          <li>Strategic Cybersecurity Management</li>
        </ul>
        <div className="bg-gray-100 p-6 rounded space-y-6 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Cybersecurity Strategy Development and Alignment</h3>
            <p className="mb-2">
              This course focuses on developing a comprehensive cybersecurity strategy that aligns with organizational goals and risk appetite. Participants will learn to create robust security frameworks that protect assets while supporting business objectives.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-1" />
                Develop a comprehensive cybersecurity strategy aligned with organizational goals.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-1" />
                Create measurable security objectives that support business growth.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-1" />
                Assess and define organizational risk appetite.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Cybersecurity Governance and Risk Management</h3>
            <p className="mb-2">
              Participants will learn to establish effective governance frameworks and risk management processes to ensure cybersecurity compliance and resilience. The course covers best practices in policy development, risk assessment, and compliance management.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-1" />
                Establish effective cybersecurity governance frameworks.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-1" />
                Ensure compliance with relevant industry standards and regulations.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-purple-500 mr-2 mt-1" />
                Implement risk management processes for ongoing security assurance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
