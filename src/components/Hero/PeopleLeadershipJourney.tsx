import React, { useState } from 'react';

interface Course {
  id: string;
  title: string;
  audience: string[];
  formats: {
    inPerson: string;
    virtual: string;
  };
  quote: {
    text: string;
    author: string;
  };
  description: string[];
  businessImpact: string[];
}

const courses: Course[] = [
  {
    id: 'accountable-culture',
    title: 'Building an Accountable Culture',
    audience: ['Front Line Leaders', 'Leaders of Leaders'],
    formats: {
      inPerson: '3 hrs.',
      virtual: '1.5hrs. x 3 Sessions'
    },
    quote: {
      text: 'Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others.',
      author: 'Jack Welch'
    },
    description: [
      'This workshop provides leaders with the tools to evaluate and drive accountability within their teams. Through interactive exercises and real-world scenarios, participants learn techniques to create a culture of confident employees who take ownership of their responsibilities.',
      'The session addresses the "victim mindset" that can hinder team performance, using proven concepts like the "Ladder of Accountability," "SMART goals," and the "language of accountability." Leaders will leave with practical strategies to transform their team dynamics and foster a proactive, results-driven environment.'
    ],
    businessImpact: [
      'Develop greater sensitivity to the business cost of a reactive victim mindset including low productivity and missed opportunities',
      'Build a framework for creating and sustaining a culture of accountability and ownership',
      'Create alignment of activities, attitudes and priorities in a manner that employees find positive, not punitive',
      'Establish clear expectations and consequences that drive performance improvement',
      'Implement a strategy for deepening an ownership mentality and alignment from the front line to the executive level'
    ]
  },
  {
    id: 'engagement-code',
    title: 'Cracking the Engagement Code',
    audience: ['Front Line Leaders', 'Middle Managers'],
    formats: {
      inPerson: '4 hrs.',
      virtual: '2hrs. x 2 Sessions'
    },
    quote: {
      text: 'The way to get started is to quit talking and begin doing.',
      author: 'Walt Disney'
    },
    description: [
      'This comprehensive workshop explores the science behind employee engagement and provides leaders with actionable strategies to create highly engaged teams.',
      'Participants will learn to identify engagement drivers, measure team morale, and implement targeted interventions that boost motivation and productivity.'
    ],
    businessImpact: [
      'Increase employee retention rates and reduce turnover costs',
      'Improve team productivity and performance metrics',
      'Enhance workplace culture and employee satisfaction scores'
    ]
  },
  {
    id: 'intentional-delegation',
    title: 'Intentional Delegation',
    audience: ['All Leadership Levels'],
    formats: {
      inPerson: '3 hrs.',
      virtual: '1.5hrs. x 2 Sessions'
    },
    quote: {
      text: 'The best executive is the one who has sense enough to pick good men to do what he wants done, and self-restraint to keep from meddling with them while they do it.',
      author: 'Theodore Roosevelt'
    },
    description: [
      'Master the art of effective delegation to maximize team potential and leader effectiveness.',
      'Learn to match tasks to skills, provide clear expectations, and create accountability frameworks.'
    ],
    businessImpact: [
      'Increase team capacity and leader bandwidth',
      'Develop team member skills and confidence',
      'Improve overall organizational efficiency'
    ]
  },
  {
    id: 'project-teams',
    title: 'Leading and Influencing Project Teams',
    audience: ['Project Managers', 'Team Leaders'],
    formats: {
      inPerson: '4 hrs.',
      virtual: '2hrs. x 2 Sessions'
    },
    quote: {
      text: 'Leadership is the capacity to translate vision into reality.',
      author: 'Warren Bennis'
    },
    description: [
      'Develop the skills to lead cross-functional project teams without direct authority.',
      'Learn influence strategies, stakeholder management, and team motivation techniques.'
    ],
    businessImpact: [
      'Improve project success rates and delivery timelines',
      'Enhance cross-functional collaboration',
      'Increase stakeholder satisfaction and buy-in'
    ]
  },
  {
    id: 'difficult-conversations',
    title: 'Managing Difficult Conversations',
    audience: ['All Leadership Levels'],
    formats: {
      inPerson: '3 hrs.',
      virtual: '1.5hrs. x 2 Sessions'
    },
    quote: {
      text: 'Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.',
      author: 'Winston Churchill'
    },
    description: [
      'Build confidence in handling challenging workplace conversations with empathy and effectiveness.',
      'Learn frameworks for addressing performance issues, conflicts, and sensitive topics.'
    ],
    businessImpact: [
      'Resolve conflicts more effectively and maintain team harmony',
      'Improve performance management outcomes',
      'Build trust and strengthen working relationships'
    ]
  },
  {
    id: 'leader-coach',
    title: 'The Leader as a Coach',
    audience: ['Senior Leaders', 'HR Professionals'],
    formats: {
      inPerson: '4 hrs.',
      virtual: '2hrs. x 2 Sessions'
    },
    quote: {
      text: 'The goal of coaching is the goal of good management: to make the most of an organization\'s valuable resources.',
      author: 'Harvard Business Review'
    },
    description: [
      'Transform your leadership approach by incorporating coaching techniques that develop team capabilities.',
      'Learn to ask powerful questions, provide constructive feedback, and support team growth.'
    ],
    businessImpact: [
      'Develop high-potential employees and succession pipelines',
      'Improve team performance and skill development',
      'Create a culture of continuous learning and growth'
    ]
  }
];

export function PeopleLeadershipJourney() {
  const [selectedCourse, setSelectedCourse] = useState<string>('accountable-culture');
  const [email, setEmail] = useState('jai.malhotra@infoprolearning.com');

  const currentCourse = courses.find(course => course.id === selectedCourse);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Development Journey</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our people-leadership program is designed to empower exceptional leaders who excel in steering teams toward excellence. Through meticulously crafted strategies, we empower leaders to inspire, influence, and drive extraordinary outcomes across their organizations.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Course Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 h-full">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Course List</h3>
              <ul className="space-y-2">
                {courses.map((course) => (
                  <li key={course.id}>
                    <button
                      onClick={() => setSelectedCourse(course.id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCourse === course.id
                          ? 'bg-purple-100 text-purple-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      • {course.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Course Details */}
          <div className="lg:col-span-2">
            {currentCourse && (
              <div className="bg-white rounded-lg shadow-sm p-8 h-full flex flex-col">
                {/* Course Title */}
                <div className="bg-purple-100 px-6 py-4 rounded-lg mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">{currentCourse.title}</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Audience */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">AUDIENCE</h4>
                      <ul className="space-y-1">
                        {currentCourse.audience.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-4 h-4 border border-gray-300 rounded mr-2"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Formats */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">FORMATS</h4>
                      <p className="text-gray-700">In Person: {currentCourse.formats.inPerson}</p>
                      <p className="text-gray-700">Virtual: {currentCourse.formats.virtual}</p>
                    </div>

                    {/* Quote */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <blockquote className="italic font-medium text-gray-800 mb-2">
                        "{currentCourse.quote.text}"
                      </blockquote>
                      <cite className="text-gray-600">— {currentCourse.quote.author}</cite>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Abstract Graphic Placeholder */}
                    <div className="flex justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Course Description */}
                    <div>
                      {currentCourse.description.map((paragraph, index) => (
                        <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Business Impact */}
                <div className="mt-8">
                  <h4 className="font-bold text-gray-800 mb-4">BUSINESS IMPACT</h4>
                  <ol className="space-y-2">
                    {currentCourse.businessImpact.map((impact, index) => (
                      <li key={index} className="flex">
                        <span className="font-semibold text-purple-600 mr-3">{index + 1}.</span>
                        <span className="text-gray-700">{impact}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Access Course Details - Now part of the right section */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Access Course Details</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors"
                    >
                      SUBMIT
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PeopleLeadershipJourney; 