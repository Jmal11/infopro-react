import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PromptEngineeringDevelopmentJourney() {
  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-2xl font-bold mb-1">Development Journey</h2>
      <p className="font-semibold mb-6">Master prompt engineering for creative innovation</p>
      <p className="mb-8 max-w-4xl">
        Embark on a transformative journey in prompt engineering, where you’ll master essential techniques for crafting effective prompts that enhance creativity and optimize AI interactions. This program guides you through practical applications, from basic principles to advanced strategies, empowering you to streamline workflows and tackle real-world challenges. Gain the confidence and expertise needed to innovate across various fields and industries.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <nav className="bg-white p-6 rounded shadow space-y-3 text-sm text-gray-700">
          <Link to="#" className="text-purple-600 hover:underline">Introduction to Prompt Engineering</Link>
          <Link to="#" className="hover:underline">Advanced Prompt Techniques</Link>
          <Link to="#" className="hover:underline">Prompt Engineering for Varied Departments of an Organization</Link>
          <Link to="#" className="hover:underline">Data-Driven Prompt Optimization</Link>
        </nav>
        <div className="md:col-span-2 bg-white p-6 rounded shadow space-y-6 text-sm text-gray-800">
          <div>
            <h3 className="font-semibold mb-2">Foundations of Prompt Engineering</h3>
            <p className="mb-3">
              This course provides a comprehensive overview of the fundamental concepts in prompt engineering. Participants will learn about different types of prompts, their applications, and the basic principles of effective prompt design.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                <span>Understand key terminology and concepts related to prompt engineering.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                <span>Identify various types of prompts and their suitable applications.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                <span>Develop foundational skills for creating simple prompts for AI models.</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Practical Applications of Prompt Engineering</h3>
            <p className="mb-3">
              Building on foundational knowledge, this course focuses on practical applications of prompt engineering in various contexts. Participants will engage in hands-on activities to create prompts for different scenarios, enhancing their understanding through real-world examples.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                <span>Apply prompt engineering techniques in diverse real-world scenarios.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                <span>Analyze the effectiveness of different prompts through practical exercises.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                <span>Gain confidence in crafting prompts that yield desired responses from AI models.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
