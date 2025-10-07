import React, { useState } from 'react';

const journeyItems = [
  {
    title: 'Building a Culture of Trust',
    content: {
      image: '/images/dei-building-trust.png', // Placeholder image path
      overview: `It's time to rethink the importance of trust in organizational culture. We are living in a time of unprecedented disruption and many employees are feeling uncertain about the future, about leadership, about the viability of their careers and what is coming next. Trust is an invaluable currency for business.`,
      details: 'This course explores the value of trust in achieving organizational outcomes, how to foster it, and how to rebuild it when it is lost. Participants will learn practical strategies and real-world applications to champion DEI initiatives that lead to lasting change.',
      model: '/images/dei-trust-model.png', // Placeholder image path
      businessImpact: 'Increased engagement, retention, and innovation.'
    }
  },
  {
    title: 'Inclusive Leadership',
    content: {
      image: '/images/dei-inclusive-leadership.png',
      overview: 'Learn how to lead inclusively and foster a sense of belonging for all employees.',
      details: 'This course covers inclusive leadership mindsets, behaviors, and strategies.',
      model: '/images/dei-trust-model.png',
      businessImpact: 'Improved team collaboration and performance.'
    }
  },
  {
    title: 'Leading Across Culture & Generations',
    content: {
      image: '/images/dei-leading-across.png',
      overview: 'Bridge generational and cultural gaps to create a more inclusive workplace.',
      details: 'Practical tools for leading diverse teams.',
      model: '/images/dei-trust-model.png',
      businessImpact: 'Broader perspectives and better decision-making.'
    }
  },
  {
    title: 'Unconscious Bias In The Workplace',
    content: {
      image: '/images/dei-unconscious-bias.png',
      overview: 'Identify and address unconscious bias to foster equity.',
      details: 'Strategies for recognizing and mitigating bias.',
      model: '/images/dei-trust-model.png',
      businessImpact: 'More equitable and fair workplace.'
    }
  },
  {
    title: 'Mentoring High Potential Employees',
    content: {
      image: '/images/dei-mentoring.png',
      overview: 'Mentor and support high-potential employees from all backgrounds.',
      details: 'Best practices for inclusive mentoring.',
      model: '/images/dei-trust-model.png',
      businessImpact: 'Talent development and retention.'
    }
  },
  {
    title: 'Active Allyship',
    content: {
      image: '/images/dei-allyship.png',
      overview: 'Become an active ally and advocate for inclusion.',
      details: 'Allyship strategies and real-world examples.',
      model: '/images/dei-trust-model.png',
      businessImpact: 'Stronger organizational relationships.'
    }
  }
];

export function DiversityEquityInclusionJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [email, setEmail] = useState('');

  const activeContent = journeyItems[activeIndex].content;

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Development Journey</h2>
        <p className="mb-8 text-gray-700 max-w-4xl">
          Every organization’s DEI journey is unique, and our suite of DEI training programs is designed to be flexible and customizable to deliver a development journey that perfectly fits your culture and goals. Our DEI programs are designed to foster meaningful transformation, empowering leaders to create more inclusive workplaces. By practicing inclusive leadership and embracing a culture of belonging for all employees, your leaders can drive improved organizational outcomes, enhance team collaboration, and promote a workplace culture where every voice is valued. Through practical strategies and real-world applications, our programs prepare leaders to champion DEI initiatives that lead to lasting change.
        </p>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-8">
          {/* Accordion */}
          <div className="md:w-1/3 border-r border-gray-200 pr-4 mb-6 md:mb-0">
            <ul className="space-y-3">
              {journeyItems.map((item, idx) => (
                <li key={item.title}>
                  <button
                    className={`block text-left w-full font-medium py-2 px-3 rounded transition-colors ${activeIndex === idx ? 'bg-purple-50 text-purple-700' : 'hover:bg-gray-100 text-gray-800'}`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Content Panel */}
          <div className="md:w-2/3 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img src={activeContent.image} alt={journeyItems[activeIndex].title} className="w-full md:w-1/2 rounded shadow object-cover" />
              <div className="flex-1">
                <blockquote className="italic text-gray-700 mb-2">{activeContent.overview}</blockquote>
                <p className="mb-2 text-gray-700">{activeContent.details}</p>
                <img src={activeContent.model} alt="Trust Model" className="w-40 mt-2" />
                <div className="text-sm text-gray-500 mt-2">Business Impact: {activeContent.businessImpact}</div>
              </div>
            </div>
            {/* Email Form */}
            <form className="mt-6 flex flex-col md:flex-row items-center gap-2" onSubmit={e => { e.preventDefault(); alert('Course details sent to ' + email); }}>
              <label className="font-semibold mr-2">Access Course Details</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded font-semibold hover:bg-purple-700 transition">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiversityEquityInclusionJourney; 