import React from 'react';
import { CheckCircle } from 'lucide-react';

export function PromptEngineeringNextSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex items-start">
          <h2 className="text-2xl font-bold leading-tight">
            Unlock the Power of Prompt Engineering
          </h2>
        </div>
        <div>
          <p className="mb-6 text-base leading-relaxed">
            Elevate your creativity with our advanced prompt engineering tools! Tailored for writers, developers, and educators, our platform enhances your workflow and ignites inspiration. Discover how AI can transform your projects, enabling you to generate compelling narratives and streamline your processes with ease. With expert insights, practical tutorials, and customizable templates, you’ll quickly master prompt creation. Don’t just imagine what’s possible—bring it to life!
          </p>
          <h3 className="text-lg font-semibold mb-4">Development Outcomes:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
              <div>
                <p className="font-semibold">Deep Understanding of AI Models:</p>
                <p>Understand model architectures, tasks, and limitations.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
              <div>
                <p className="font-semibold">Ability to Craft Effective Prompts:</p>
                <p>Construct clear prompts, use techniques, refine iteratively.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
              <div>
                <p className="font-semibold">Critical Thinking and Problem-Solving:</p>
                <p>Think critically, solve problems, refine prompts.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
              <div>
                <p className="font-semibold">Adaptability to New Models and Technologies:</p>
                <p>Adapt to new models, integrate technologies.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
              <div>
                <p className="font-semibold">Seamless Collaboration Across Disciplines:</p>
                <p>Foster teamwork through cross-functional, integrated prompts.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
              <div>
                <p className="font-semibold">Real-Time Iterative Feedback and Refinement:</p>
                <p>Receive continuous AI feedback for improved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
