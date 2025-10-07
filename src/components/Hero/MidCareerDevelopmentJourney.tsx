import React, { useState } from 'react';

const journeyItems = [
  {
    id: 'growth-mindset',
    title: 'Fostering a Growth Mindset for Leaders',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/growth-mindset-course.webp',
    content: (
      <>
        <p className="mb-4 font-semibold">“You must have a level of discontent to feel the urge to want to grow.” – Idowu Koyenikan</p>
        <p className="mb-4">Course overview and business impact details go here. This is a placeholder for the right panel content. You can extend this for each course.</p>
      </>
    ),
  },
  {
    id: 'emotional-intelligence',
    title: 'Emotional Intelligence for Leaders',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/emotional-intelligence-course.webp',
    content: <p>Content for Emotional Intelligence for Leaders coming soon.</p>,
  },
  {
    id: 'financial-acumen',
    title: 'Financial Acumen for Non-Finance Leaders',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/financial-acumen-course.webp',
    content: <p>Content for Financial Acumen for Non-Finance Leaders coming soon.</p>,
  },
  {
    id: 'leading-remote-hybrid',
    title: 'Leading Remote & Hybrid Teams',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/remote-hybrid-course.webp',
    content: <p>Content for Leading Remote & Hybrid Teams coming soon.</p>,
  },
  {
    id: 'difficult-conversations',
    title: 'Elevating Difficult Performance Conversations',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/difficult-conversations-course.webp',
    content: <p>Content for Elevating Difficult Performance Conversations coming soon.</p>,
  },
  {
    id: 'leader-as-coach',
    title: 'The Leader as Coach',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/leader-as-coach-course.webp',
    content: <p>Content for The Leader as Coach coming soon.</p>,
  },
  {
    id: 'situational-coaching',
    title: 'Situational Coaching',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/situational-coaching-course.webp',
    content: <p>Content for Situational Coaching coming soon.</p>,
  },
  {
    id: 'influencing-teams',
    title: 'Leading and Influencing Project Teams',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/influencing-teams-course.webp',
    content: <p>Content for Leading and Influencing Project Teams coming soon.</p>,
  },
  {
    id: 'strategic-thinking',
    title: 'Strategic Thinking and Business Planning',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/strategic-thinking-course.webp',
    content: <p>Content for Strategic Thinking and Business Planning coming soon.</p>,
  },
  {
    id: 'accountability',
    title: 'Building a Culture of Accountability',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/accountability-course.webp',
    content: <p>Content for Building a Culture of Accountability coming soon.</p>,
  },
  {
    id: 'engagement-code',
    title: 'Cracking the Engagement Code',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/engagement-code-course.webp',
    content: <p>Content for Cracking the Engagement Code coming soon.</p>,
  },
  {
    id: 'design-thinking',
    title: 'Innovating through Design Thinking',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/design-thinking-course.webp',
    content: <p>Content for Innovating through Design Thinking coming soon.</p>,
  },
  {
    id: 'resilience',
    title: 'Resilience to Navigate Change',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/resilience-course.webp',
    content: <p>Content for Resilience to Navigate Change coming soon.</p>,
  },
  {
    id: 'advisor-skills',
    title: 'Trusted Advisor Skills',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/advisor-skills-course.webp',
    content: <p>Content for Trusted Advisor Skills coming soon.</p>,
  },
  {
    id: 'disc-communication',
    title: 'DISC-Based Communication Strategies for Leaders',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/disc-communication-course.webp',
    content: <p>Content for DISC-Based Communication Strategies for Leaders coming soon.</p>,
  },
  {
    id: 'negotiation',
    title: 'Negotiation Hacks & Power Moves',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/negotiation-course.webp',
    content: <p>Content for Negotiation Hacks & Power Moves coming soon.</p>,
  },
  {
    id: 'real-negotiation',
    title: 'R.E.A.L. Negotiation',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/real-negotiation-course.webp',
    content: <p>Content for R.E.A.L. Negotiation coming soon.</p>,
  },
];

export function MidCareerDevelopmentJourney() {
  const [activeId, setActiveId] = useState(journeyItems[0].id);

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-4">Development Journey</h2>
      <p className="mb-8 text-gray-700 max-w-4xl">
        Our mid-career development programs are each designed to help professionals advance toward senior leadership roles. Through a dynamic mix of expert coaching, strategic mentoring, and specialized courses, participants develop the expertise and competencies needed to lead complex projects and teams effectively. These programs help ensure mid-career professionals are ready to take on higher-level challenges and drive meaningful organizational change.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Accordion Left Side */}
        <nav className="md:w-1/4 bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
          {journeyItems.map(({ id, title }) => (
            <button
              key={id}
              onClick={() => setActiveId(id)}
              className={`block w-full text-left px-4 py-3 border-b border-gray-200 last:border-b-0 transition-colors ${
                activeId === id ? 'bg-purple-50 text-purple-700 font-semibold' : 'hover:bg-gray-50'
              }`}
            >
              {title}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <div className="md:w-3/4 border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
          <div className="mb-6">
            <img
              src={journeyItems.find((item) => item.id === activeId)?.image}
              alt={journeyItems.find((item) => item.id === activeId)?.title}
              className="w-full max-w-2xl mx-auto rounded shadow mb-4"
            />
            {journeyItems.find((item) => item.id === activeId)?.content}
          </div>
          <form className="flex flex-col sm:flex-row items-center gap-2 max-w-md mt-6" onSubmit={e => e.preventDefault()}>
            <label htmlFor="course-email" className="sr-only">Email</label>
            <input
              id="course-email"
              type="email"
              placeholder="jai.malhotra@infoprolearning.com"
              className="flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 