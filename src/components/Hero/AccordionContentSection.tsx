import React, { useState } from 'react';

const accordionItems = [
  {
    id: 'skills',
    title: 'Skills Inference',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-purple-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m-6 6h12a2 2 0 002-2v-5a2 2 0 00-2-2h-3l-3-3-3 3H5a2 2 0 00-2 2v5a2 2 0 002 2z" />
      </svg>
    ),
    description: 'AI-based inference to capture skills gaps for accurate training needs assessment.',
    content: (
      <div className="space-y-4">
        <img
          src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/skill-inference-banner.webp"
          alt="Skills Inference"
          className="w-full max-w-3xl mx-auto rounded shadow-md"
        />
        <p className="text-gray-700">
          AI processes and analyzes data from diverse sources like performance reviews and project outcomes, employing AI-based inference to pinpoint current and projected skill gaps with precision. This advanced analysis enables the development of targeted, impactful training programs aligned with evolving organizational needs.
        </p>
      </div>
    ),
  },
  {
    id: 'personalized',
    title: 'Personalized Learning',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-purple-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.84 4.422c0 3.866-3.582 7-8 7s-8-3.134-8-7a12.083 12.083 0 01.84-4.422L12 14z" />
      </svg>
    ),
    description: 'Harnessing AI to craft tailored learning journeys.',
    content: (
      <div className="space-y-4">
        <img
          src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/personalized-learning-banne.webp "
          alt="Personalized Learning"
          className="w-full max-w-3xl mx-auto rounded shadow-md"
        />
        <p className="text-gray-700">
          Personalized learning adapts to each learner's pace and style, providing customized content and recommendations based on their performance and preferences.
        </p>
      </div>
    ),
  },
  {
    id: 'ai-agent',
    title: 'AI-Powered Learning Agent',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-purple-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m-6 6h12a2 2 0 002-2v-5a2 2 0 00-2-2h-3l-3-3-3 3H5a2 2 0 00-2 2v5a2 2 0 002 2z" />
      </svg>
    ),
    description: 'An intelligent agent that assists learners with real-time guidance and support.',
    content: (
      <div className="space-y-4">
        <img
          src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/AI-Powered-Learning-Agent-banner.webp "
          alt="AI-Powered Learning Agent"
          className="w-full max-w-3xl mx-auto rounded shadow-md"
        />
        <p className="text-gray-700">
          The AI-powered learning agent provides instant feedback, answers questions, and offers personalized advice to enhance the learning experience.
        </p>
      </div>
    ),
  },
  {
    id: 'content-synthetic',
    title: 'Content and Synthetic Media Generation',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-purple-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m-6 6h12a2 2 0 002-2v-5a2 2 0 00-2-2h-3l-3-3-3 3H5a2 2 0 00-2 2v5a2 2 0 002 2z" />
      </svg>
    ),
    description: 'AI accelerates content creation and synthetic media production for immersive training.',
    content: (
      <div className="space-y-4">
        <img
          src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Content-and-Synthetic-banner.webp"
          alt="Content and Synthetic Media Generation"
          className="w-full max-w-3xl mx-auto rounded shadow-md"
        />
        <p className="text-gray-700">
          AI generates high-quality content and synthetic media, enabling rapid development of personalized, immersive training materials and simulations across diverse formats and cultural contexts.
        </p>
      </div>
    ),
  },
];

export function AccordionContentSection() {
  const [activeId, setActiveId] = useState(accordionItems[0].id); // First item is active by default

  return (
    <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
      {/* Sidebar Navigation */}
      <nav className="md:w-1/4 bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        {accordionItems.map(({ id, title, icon, description }) => (
          <button
            key={id}
            onClick={() => setActiveId(id)}
            className={`flex items-start gap-4 w-full px-4 py-4 text-left transition-colors border-b border-gray-200 last:border-b-0 ${
              activeId === id
                ? 'bg-purple-50 border-l-4 border-l-purple-500 font-semibold'
                : 'hover:bg-gray-50'
            }`}
          >
            <span className="flex-shrink-0 mt-1">{icon}</span>
            <div className="min-w-0 flex-1">
              <h3 className={`font-medium text-gray-900 ${activeId === id ? 'text-purple-700' : ''}`}>
                {title}
              </h3>
              {activeId === id && (
                <p className="mt-1 text-sm text-gray-600">{description}</p>
              )}
            </div>
            {/* Chevron indicator */}
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${
                activeId === id ? 'rotate-90' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
      </nav>

      {/* Content Area */}
      <div className="md:w-3/4 bg-white rounded-lg p-6">
        {accordionItems.find((item) => item.id === activeId)?.content}
        {/* Learn More Button */}
        {activeId && (
          <div className="flex justify-end mt-4">
            <button className="text-purple-600 hover:text-purple-800 transition-colors">
              LEARN MORE →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}