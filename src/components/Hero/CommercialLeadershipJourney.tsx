import React, { useState } from 'react';

const topics = [
  'Influencing for Impact',
  'Strategic Sales Leadership',
  'Performance Management for Sales Leaders',
  'Growth Mindset for Sales Pros',
  'Essentials of Sales Management',
  'The Leader as Sales Coach',
];

const courseImage = 'https://via.placeholder.com/600x300?text=Influencing+for+Impact'; // Replace with actual image if available

export function CommercialLeadershipJourney() {
  const [selected, setSelected] = useState(0);
  const [email, setEmail] = useState('jai.malhotra@infoprolearning.com');

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Development Journey</h2>
        <p className="text-gray-700 mb-8 max-w-3xl">
          Our various Commercial Leader Development programs are designed to empower sales leaders with the tools they need to excel in commercial leadership positions. Through a blend of lectures and experiential learning with peer-to-peer sharing of best practices, participants will gain the insights and skills necessary to lead high-performing sales teams and drive organizational growth.
        </p>
        <div className="bg-white rounded-lg shadow p-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left: Topics List */}
          <div className="col-span-1">
            <ul className="space-y-2">
              {topics.map((topic, idx) => (
                <li key={topic}>
                  <button
                    className={`text-left w-full px-3 py-2 rounded font-medium transition border-l-4 ${selected === idx ? 'bg-purple-50 border-purple-500 text-purple-700' : 'bg-transparent border-transparent text-gray-800 hover:bg-gray-100'}`}
                    onClick={() => setSelected(idx)}
                  >
                    {topic}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Right: Course Details */}
          <div className="col-span-2 flex flex-col items-center">
            <img src={courseImage} alt="Course" className="rounded mb-6 w-full max-w-xl object-cover" />
            <div className="w-full flex flex-col items-center">
              <span className="font-semibold text-lg mb-2">Access Course Details</span>
              <form className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md">
                <input
                  type="email"
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
                <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded font-semibold hover:bg-purple-700 transition">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommercialLeadershipJourney; 