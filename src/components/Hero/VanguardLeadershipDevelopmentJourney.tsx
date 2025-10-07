import React, { useState } from 'react';

const journeyItems = [
  {
    id: 'strategic-leadership',
    title: 'Strategic Leadership',
    content: (
      <>
        <div className="bg-purple-100 p-4 rounded mb-4 max-w-xs">
          <h3 className="font-bold text-lg mb-2">STRATEGIC LEADERSHIP</h3>
          <p className="text-sm mb-2">
            <strong>Audience</strong><br />
            EL: Executive Leaders<br />
            LL: Leaders of Leaders
          </p>
          <p className="text-sm mb-2">
            <strong>Formats</strong><br />
            In Person: 2 Days<br />
            Virtual: 7 hr. x 1 sessions
          </p>
        </div>
        <p className="italic mb-4 text-gray-700">
          “Strategic leadership is essentially strategic thinking to drive insight and action, which rarely occurs spontaneously.”<br />
          <span className="font-semibold">-Michael Porter</span>
        </p>
        <p className="mb-4 text-gray-700">
          <strong>Course Overview</strong><br />
          Strategic leadership is the ability to think on a big and small scale, long and short term, into the past, present, and future – with the judgment and insight needed to develop and execute a winning business strategy.
          While strategic leadership is a valuable skill for every leader in an organization, it becomes increasingly essential as one ascends the leadership ladder. Strategic leadership includes an integration of critical thinking, systems thinking and strategic thinking. It is often the “secret sauce” that accelerates a leadership career. And lack of strategic ability will often impede one’s professional progress.
          This course is designed to help a leader understand how corporate values and culture fit to business strategy and execution. Leaders learn how to drive employee engagement, how to conduct a situational analysis and how to develop a winning business strategy. They also learn how to plan for the execution of a new strategy, how to communicate a compelling vision and motivate.
          This workshop is also designed to help participants improve their critical-thinking and problem-solving processes while applying these new skills to workplace challenges and ultimately make better decisions.
          This workshop includes pre-work exercises, a facilitated delivery, pre- and post-study, individual and small group work, and other tools to assist participants in applying learning to their business roles.
        </p>
        <p className="mb-4 text-gray-700 font-semibold">Business Impact</p>
        <ol className="list-decimal list-inside text-gray-600 mb-6 space-y-2">
          <li>Leadership teams are able to develop an alignment of core values, culture and employee engagement strategy.</li>
          <li>Leaders learn to use strategic planning to guide the direction of their business and enhance the working culture of their teams.</li>
          <li>Business planning and decisions are based upon more objective data and information because of a thorough discovery process.</li>
        </ol>
        <form className="flex items-center space-x-2 max-w-xs" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="jai.malhotra@infoprolearning.com"
            className="flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            SUBMIT
          </button>
        </form>
      </>
    ),
  },
  {
    id: 'leading-remote-hybrid',
    title: 'Leading Remote & Hybrid Teams',
    content: <p className="text-gray-700">Content for Leading Remote & Hybrid Teams coming soon.</p>,
  },
  {
    id: 'strategic-thinking',
    title: 'Strategic Thinking and Business Planning',
    content: <p className="text-gray-700">Content for Strategic Thinking and Business Planning coming soon.</p>,
  },
  {
    id: 'emotional-intelligence',
    title: 'Emotional Intelligence for Leaders',
    content: <p className="text-gray-700">Content for Emotional Intelligence for Leaders coming soon.</p>,
  },
];

export function VanguardLeadershipDevelopmentJourney() {
  const [activeId, setActiveId] = useState('strategic-leadership');

  return (
    <section className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
      {/* Accordion */}
      <div className="w-full lg:w-1/4 border border-gray-300 rounded p-4">
        <h2 className="text-xl font-bold mb-4">Development Journey</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          {journeyItems.map(({ id, title }) => (
            <li key={id}>
              <button
                className={`w-full text-left px-3 py-2 rounded ${
                  activeId === id ? 'bg-purple-100 text-purple-700 font-semibold' : 'hover:bg-gray-100'
                }`}
                onClick={() => setActiveId(id)}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="w-full lg:w-3/4 border border-gray-300 rounded p-6 bg-white shadow-sm">
        {journeyItems.find((item) => item.id === activeId)?.content}
      </div>
    </section>
  );
}
