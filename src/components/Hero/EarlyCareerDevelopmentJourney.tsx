import React, { useState } from 'react';

const accordionItems = [
  {
    title: 'Emerging Leader Series',
    content: (
      <>
        <p className="mb-4 font-semibold">Audience</p>
        <ul className="list-disc list-inside mb-4">
          <li>Individual Contributors</li>
          <li>First-time Supervisors</li>
          <li>Front-Line Leaders</li>
        </ul>
        <p className="mb-4 font-semibold">Formats</p>
        <ul className="list-disc list-inside">
          <li>In Person</li>
          <li>Virtual</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Giving and Receiving Feedback',
    content: (
      <p>
        Learn effective techniques for providing and receiving feedback to foster growth and development.
      </p>
    ),
  },
  {
    title: 'Your Personal Leadership Brand',
    content: (
      <p>
        Develop and align your leadership style with your core values to create a strong personal brand.
      </p>
    ),
  },
];

export function EarlyCareerDevelopmentJourney() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <h2 className="text-2xl font-bold mb-4">Development Journey</h2>
      <p className="mb-8 text-gray-700">
        Our Early Career Development programs are designed to empower new leaders with essential skills to navigate their transition into management. Through coaching, mentoring, and specialized courses, participants gain the confidence and expertise needed to lead effectively. It also ensures emerging leaders are well-prepared to drive organizational success and foster a positive team culture.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Accordion Left Side */}
        <div className="md:w-1/4 border border-gray-300 rounded p-4">
          {accordionItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left font-semibold text-blue-600 hover:underline focus:outline-none"
              >
                {item.title}
              </button>
              {activeIndex === index && (
                <div className="mt-2 text-gray-700">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side Content */}
        <div className="md:w-3/4 border border-gray-300 rounded p-6 bg-white shadow-sm">
          <img
            src="https://infoprolearning.com/wp-content/uploads/2023/03/Emerging-Leader-Series-1.png"
            alt="Emerging Leader Series"
            className="mb-6 w-full h-auto object-contain"
          />
          <p className="mb-6 text-gray-800">
            <em>
              “Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others.”
            </em> <br />
            <span className="font-semibold">Jack Welch</span>
          </p>
          <p className="mb-6 text-gray-700">
            Rapid development of new and effective leaders is a priority for many organizations across numerous industries facing complex challenges including a wave of senior level retirements and unplanned turnover of mid career leaders. In addition, many emerging leaders are impatient to accelerate their career trajectories, and they seek opportunities elsewhere if they feel that their current organization doesn’t support those ambitions.
          </p>
          <p className="mb-6 text-gray-700">
            More than ever before, organizations are helping their emerging leaders quickly learn and deploy core management skills, develop a broad strategic perspective, take their leadership skills to the next level, and expand their professional and personal networks.
          </p>
          <p className="mb-6 text-gray-700">
            Presented over ten weeks, this intensive virtual learning program is designed to help new managers master core business concepts and build key skills including leadership, strategy, communication, coaching, and negotiation. Participants will gain 2-3 live instructor-led training sessions led by instructors specializing in each subject area and through project-based learning.
          </p>
          <p className="mb-6 text-gray-700">
            Courses in the series include:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>Your Personal Leadership Brand</li>
            <li>Time and Priority Management</li>
            <li>The Leader as a Coach</li>
            <li>Communication Skills for Leaders</li>
            <li>DISC-Based Communication Strategies</li>
            <li>Managing Difficult Conversations</li>
            <li>Employee Motivation and Performance Reviews</li>
            <li>Intentional Leadership and Delegation</li>
            <li>HR for the Non-HR Leader</li>
            <li>Emotional Intelligence for Leaders</li>
          </ul>
          <p className="mb-6 text-gray-700 font-semibold">Business Impact</p>
          <p className="mb-6 text-gray-700">
            Provide opportunities for your “emerging leaders” to develop and grow, accelerating their path to leadership success.
          </p>
          <p className="mb-6 text-gray-700">
            Avoid the challenges created when high-performing individual contributors struggle with the transition into a leadership role.
          </p>
          <p className="mb-6 text-gray-700">
            Provide guidance and support to non-traditional candidates for leadership roles to help ensure successful transition.
          </p>
          <form className="flex space-x-4 mt-8" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="jai.malhotra@infoprolearning.com"
              className="border border-gray-400 rounded px-4 py-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            <button
              type="submit"
              className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
