import React from 'react';
import { CheckCircle } from 'lucide-react';

export function AgileProjectManagementProgramAudience() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-[1280px] text-white">
      <h2 className="text-3xl font-bold mb-8">Who Is This Program For</h2>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex space-x-3">
            <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <p>Project managers wanting to use agile principles to improve efficiency and adaptability in digital projects</p>
          </div>
          <div className="flex space-x-3">
            <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <p>Product managers who need to prioritize features, manage stakeholder expectations, and drive iterative product development in a tech-driven environment</p>
          </div>
          <div className="flex space-x-3">
            <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <p>Scrum masters focused on team performance, looking to deepen their understanding of digital tools and virtual team management techniques to enhance Agile practices in digital settings</p>
          </div>
          <div className="flex space-x-3">
            <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <p>Digital transformation specialists who require agile skills to manage cross-functional teams and manage rapid changes within digital transformation projects</p>
          </div>
          <div className="flex space-x-3">
            <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <p>IT and software development leads need to adopt agile methodologies to drive efficient, collaborative, and adaptable project outcomes</p>
          </div>
          <div className="flex space-x-3">
            <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <p>Team leaders and supervisors in digital roles who want to improve collaboration, productivity, and agility within their teams</p>
          </div>
        </div>
        <div className="md:w-1/3 bg-gray-900 p-6 rounded text-gray-300 flex flex-col items-start">
          <blockquote className="mb-4 italic">
            “An excellent course that enhances my understanding of Agile practices. The examples and exercises are practical and relatable. Perfect for anyone looking to improve their project management skills.”
          </blockquote>
          <div className="flex items-center space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Michael J."
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold text-white">Michael J.,</p>
              <p className="text-sm text-gray-400">Scrum Master</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
