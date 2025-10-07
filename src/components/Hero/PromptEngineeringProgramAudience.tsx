import React from 'react';
import { CheckCircle } from 'lucide-react';

export function PromptEngineeringProgramAudience() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Who Is This Program For:</h2>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
              <span>Training coordinators responsible for designing and implementing training programs that utilize AI tools</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
              <span>Compliance trainers in regulatory fields needing to create clear, effective prompts for training on compliance-related topics</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
              <span>Talent development specialists focused on identifying and nurturing employee skills through innovative training methods</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
              <span>Change management experts supporting organizational change who need tools to enhance employee engagement and learning</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
              <span>eLearning developers involved in creating online training courses incorporating AI for interactive content generation</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
              <span>Content developers looking to produce engaging and effective learning materials using prompt engineering techniques</span>
            </li>
          </ul>
        </div>
        <div className="border-l border-gray-700 pl-8 flex flex-col justify-center">
          <blockquote className="italic text-lg mb-6 relative before:content-['“'] before:absolute before:-left-4 before:text-4xl before:text-purple-500 after:content-['”'] after:absolute after:-right-4 after:text-4xl after:text-purple-500">
            Fantastic course! The practical labs were especially helpful in understanding AI's impact on cybersecurity. The real-world applications discussed gave me new perspectives on threat detection and mitigation. A must-recommend for everyone.
          </blockquote>
          <hr className="border-purple-500 mb-6 w-16" />
          <div className="flex items-center space-x-4">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Lisa T."
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">Lisa T.,</p>
              <p className="text-sm text-gray-300">Network Security Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
