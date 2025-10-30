import React, { useState } from 'react';

const accordionItems = [
  {
    id: 'skills',
    title: 'Skills Inference',
    icon: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/skill-inference-icon.svg',
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
    icon: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/personalized-learning-icon.svg',
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
    icon: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/AI-powered-icon.svg',
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
    icon: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/content-and-syntetic-icon.svg',
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
  const [activeId, setActiveId] = useState(accordionItems[0].id); // First item active by default

  const handleClick = (id) => {
    // Only change if clicking a different item (no toggle functionality)
    if (activeId !== id) {
      setActiveId(id);
    }
  };

  return (
    <div className="bg-[#f6f6f6] py-16">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          AI-Powered Future of Learning & Development
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          We're integrating AI across your entire learning lifecycle.
        </p>
      </div>

      {/* Accordion Section */}
      <section className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <nav className="md:w-1/4 bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
          {accordionItems.map(({ id, title, icon, description }, index) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`flex items-start gap-4 w-full px-4 py-4 text-left transition-colors ${
                index !== accordionItems.length - 1 ? 'border-b' : ''
              } border-gray-200 ${
                activeId === id
                  ? 'bg-purple-50 border-l-4 border-l-[#6b19ff] font-semibold'
                  : 'hover:bg-gray-50'
              }`}
            >
              <img 
                src={icon} 
                alt={`${title} icon`}
                className="flex-shrink-0 w-6 h-6 mt-1"
              />
              <div className="min-w-0 flex-1">
                <h3 className={`font-medium text-gray-900 ${activeId === id ? 'text-purple-700' : ''}`}>
                  {title}
                </h3>
                {/* Show description only when active */}
                {activeId === id && (
                  <p className="mt-1 text-sm text-gray-600">
                    {description}
                  </p>
                )}
              </div>
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <div className="md:w-3/4 rounded-lg p-6">
          {activeId && (
            <>
              {accordionItems.find((item) => item.id === activeId)?.content}
              {/* Learn More Button */}
              <div className="flex justify-end mt-4">
                <button className="text-gray-900 hover:text-gray-700 font-semibold transition-colors">
                  LEARN MORE →
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}