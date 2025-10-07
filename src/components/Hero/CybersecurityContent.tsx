import React from 'react';
import { CheckCircle } from 'lucide-react';

export function CybersecurityContent() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            AI-Powered Solutions for Effective Cybersecurity Management
          </h2>
        </div>
        <div>
          <p className="mb-6">
            Elevate your organization's cybersecurity posture with our comprehensive cybersecurity training program. Designed for professionals seeking to master the complexities of modern digital security, this program covers critical areas from strategy development to emerging technologies. Our curriculum blends theoretical knowledge with practical skills, addressing key topics such as risk management, incident response, and building a security-conscious culture. Led by industry experts, participants will explore advanced subjects including cloud security, AI in cybersecurity, and international cooperation. Whether you're aiming to enhance your leadership capabilities or deepen your technical expertise, this program equips you with the tools to navigate today's dynamic threat landscape and drive your organization's security initiatives forward.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="font-semibold mb-4">Development Outcomes:</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-purple-500 mr-3 mt-1" />
              <div>
                <strong>Strategic Cybersecurity Planning:</strong> Develop cybersecurity strategies aligned with goals and risk.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-purple-500 mr-3 mt-1" />
              <div>
                <strong>Incident Response Leadership:</strong> Lead cybersecurity incident response to ensure rapid recovery.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-purple-500 mr-3 mt-1" />
              <div>
                <strong>Advanced Risk Mitigation:</strong> Mitigate advanced cybersecurity risks in complex environments.
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 invisible">Development Outcomes</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-purple-500 mr-3 mt-1" />
              <div>
                <strong>Governance and Compliance:</strong> Establish governance frameworks and risk processes effectively.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-purple-500 mr-3 mt-1" />
              <div>
                <strong>Security Culture Cultivation:</strong> Foster cybersecurity culture, promoting awareness and employee accountability.
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-purple-500 mr-3 mt-1" />
              <div>
                <strong>Innovation and Global Collaboration:</strong> Leverage technologies and cooperation to enhance cybersecurity.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
