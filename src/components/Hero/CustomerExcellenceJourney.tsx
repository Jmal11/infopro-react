import React, { useState } from 'react';

const journeySteps = [
  {
    title: 'Commitment to Extraordinary Service',
    content: {
      image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/customer-excellence-journey-1.webp',
      description: (
        <>
          <blockquote className="italic text-gray-700 mb-2">“Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others.”<br /><span className="block text-right mt-1">Jack Welch</span></blockquote>
          <div className="mb-2">
            <span className="font-bold">AUDIENCE:</span> Individual Contributors, Front-Line Leaders<br />
            <span className="font-bold">FORMATS:</span> In Person: 3-5 hrs. | Virtual: 2 hrs. x 1-3 sessions
          </div>
          <p className="text-gray-700 mb-2">
            This workshop focuses on both the mindset and the capabilities necessary for an organization to develop a culture and commitment to extraordinary customer service. Using the LEAP model as its basis, this workshop equips participants with tips and techniques that allow them to deliver exceptional service to customers.
          </p>
          <p className="text-gray-700 mb-2">
            Experiential exercises in this workshop bring the content to life and help participants put developed practical skills that can be applied immediately on the job. This workshop helps to put its key elements in the “seat of the customer” in order to develop greater empathy and awareness of customer experiences and expectations.
          </p>
        </>
      ),
      email: 'jai.malhotra@infoprolearning.com',
    },
  },
  {
    title: 'Critical Thinking and problem Solving',
    content: {
      image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/customer-excellence-journey-2.webp',
      description: (
        <>
          <blockquote className="italic text-gray-700 mb-2">“The important thing is not to stop questioning. Curiosity has its own reason for existing.”<br /><span className="block text-right mt-1">Albert Einstein</span></blockquote>
          <div className="mb-2">
            <span className="font-bold">AUDIENCE:</span> Individual Contributors, Front-Line Leaders<br />
            <span className="font-bold">FORMATS:</span> In Person: 3-5 hrs. | Virtual: 2 hrs. x 1-3 sessions
          </div>
          <p className="text-gray-700 mb-2">
            This workshop is designed to develop critical thinking and problem-solving skills essential for customer excellence. Participants will learn structured approaches to analyze situations, identify root causes, and implement effective solutions that enhance customer satisfaction.
          </p>
        </>
      ),
      email: 'jai.malhotra@infoprolearning.com',
    },
  },
];

export function CustomerExcellenceJourney() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = journeySteps[activeIdx];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Development Journey</h2>
        <p className="text-gray-700 mb-8 max-w-3xl">
          Customer excellence training prepares leaders to drive impactful customer interactions, setting the stage for enduring team achievements and growth. Leaders can enhance customer loyalty and achieve measurable growth by implementing strategies that focus on understanding and meeting customer expectations.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Accordion */}
          <div className="md:w-1/4 w-full bg-white rounded-lg border p-4">
            <ul className="space-y-2">
              {journeySteps.map((step, idx) => (
                <li key={step.title}>
                  <button
                    className={`text-left w-full px-2 py-2 rounded font-medium transition-colors ${activeIdx === idx ? 'text-purple-700 bg-purple-50' : 'text-gray-800 hover:bg-gray-100'}`}
                    onClick={() => setActiveIdx(idx)}
                  >
                    {step.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Right: Content Panel */}
          <div className="md:w-3/4 w-full bg-white rounded-lg border p-6 flex flex-col items-center">
            <img
              src={active.content.image}
              alt={active.title}
              className="w-full max-w-2xl rounded mb-4 object-contain"
              style={{ minHeight: 220 }}
            />
            <div className="w-full max-w-2xl">
              {active.content.description}
            </div>
            <form className="mt-8 w-full max-w-md mx-auto flex flex-col md:flex-row items-center gap-2">
              <label className="font-semibold text-gray-900 mr-2 whitespace-nowrap">Access Course Details</label>
              <input
                type="email"
                defaultValue={active.content.email}
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:border-purple-600"
                readOnly
              />
              <button
                type="submit"
                className="bg-purple-700 text-white px-6 py-2 rounded font-semibold hover:bg-purple-800 transition-colors"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerExcellenceJourney; 