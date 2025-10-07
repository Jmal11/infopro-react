import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function CybersecurityProgramAudience() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl bg-gray-900 text-white rounded-lg flex flex-col md:flex-row gap-12">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold">This program is designed for:</h2>
        <ul className="space-y-4 text-sm">
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-purple-500 mr-3 mt-1" />
            Cybersecurity professionals seeking to deepen their knowledge of AI in threat detection and risk management
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-purple-500 mr-3 mt-1" />
            Compliance officers looking to understand the implications of AI on compliance and data security
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-purple-500 mr-3 mt-1" />
            Organizational leaders interested in fostering a strong cybersecurity culture within organizations
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-purple-500 mr-3 mt-1" />
            Risk management specialists who wish to incorporate AI tools to assess and respond to evolving cyber threats
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 text-purple-500 mr-3 mt-1" />
            Data privacy officers keen to learn about AI's role in ensuring data privacy and compliance with regulations
          </li>
        </ul>
      </div>
      <div className="md:w-1/2 border-l border-gray-700 pl-8 flex flex-col justify-center">
        <blockquote className="italic text-gray-300 mb-4">
          “Fantastic course! The practical labs were especially helpful in understanding AI’s impact on cybersecurity. The real-world applications discussed gave me new perspectives on threat detection and mitigation. A must-recommend for everyone.”
        </blockquote>
        <div className="flex items-center space-x-4">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Lisa T."
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">Lisa T.,</p>
            <p className="text-sm text-gray-400">Network Security Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
