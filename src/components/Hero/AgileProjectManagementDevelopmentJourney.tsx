import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const courses = [
  {
    title: 'Agile Fundamentals in a Digital World',
    description: 'Explore the foundational principles of agile and their evolution to meet the demands of today’s digital-first projects. This course introduces agile frameworks like Scrum, Kanban, and Lean, tailored for fast-paced, tech-driven environments.',
    points: [
      'Understand how agile principles translate to digital projects.',
      'Identify core agile frameworks and know when each is best suited for tech-based projects.'
    ]
  },
  {
    title: 'Agile Tools & Techniques',
    description: 'Learn to use digital tools and techniques that support agile project management, including backlog management, sprint planning, and collaboration platforms.',
    points: [
      'Master popular agile tools like Jira, Trello, and Azure DevOps.',
      'Apply techniques for effective sprint planning and retrospectives.'
    ]
  },
  {
    title: 'Agile Roles and Team Dynamics in Virtual Teams',
    description: 'Understand the roles within agile teams and how to foster collaboration and communication in virtual and hybrid environments.',
    points: [
      'Define roles such as Scrum Master, Product Owner, and Development Team.',
      'Implement strategies for effective virtual team collaboration.'
    ]
  },
  {
    title: 'Agile in Practice: Digital Iteration and Rapid Prototyping',
    description: 'Apply agile principles in real-world scenarios focusing on iteration, prototyping, and continuous feedback.',
    points: [
      'Develop rapid prototypes to validate ideas quickly.',
      'Use iterative cycles to improve product quality and stakeholder engagement.'
    ]
  },
  {
    title: 'Scaling Agile in Large Digital Organizations',
    description: 'Explore frameworks and strategies for scaling agile practices across large, complex organizations.',
    points: [
      'Learn about SAFe, LeSS, and other scaling frameworks.',
      'Coordinate multiple agile teams to deliver integrated solutions.'
    ]
  },
  {
    title: 'Capstone Project: Digital Agile Project Application',
    description: 'Apply all learned concepts in a comprehensive project simulating real-world agile project management in a digital context.',
    points: [
      'Plan and execute a digital agile project from start to finish.',
      'Demonstrate leadership and agile practices in a team setting.'
    ]
  }
];

export function AgileProjectManagementDevelopmentJourney() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCourse = courses[selectedIndex];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-2">Development Journey</h2>
      <p className="font-semibold mb-4 text-gray-700">
        Agile Project Management for the Digital Age: Comprehensive Course Catalog
      </p>
      <p className="mb-8 text-gray-600 max-w-4xl">
        Welcome to our comprehensive Agile Project Management for the digital age learning program. This program combines agile principles with digital transformation concepts, offering a comprehensive learning journey to help participants navigate agile project management in modern, tech-driven, and virtual work environments.
      </p>
      <div className="flex flex-col md:flex-row gap-8 max-w-[1280px]">
        <nav className="md:w-1/3 bg-white border rounded p-4 space-y-3 text-gray-700">
          {courses.map((course, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`text-left w-full focus:outline-none ${
                index === selectedIndex ? 'text-purple-600 font-semibold' : ''
              }`}
            >
              {course.title}
            </button>
          ))}
        </nav>
        <div className="md:w-2/3 bg-white border rounded p-6 text-gray-800">
          <h3 className="font-semibold mb-2">{selectedCourse.title}</h3>
          <p className="mb-4">{selectedCourse.description}</p>
          <ul className="space-y-2">
            {selectedCourse.points.map((point, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
