import React, { useState } from 'react';

const journeyItems = [
  {
    id: 'getting-stuff-done',
    title: 'Getting Stuff Done',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Getting_Stuff_Done.webp',
    content: (
      <img
        src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Getting_Stuff_Done.webp"
        alt="Getting Stuff Done"
        className="w-full rounded shadow-lg border mb-4"
      />
    ),
  },
  { id: 'business-writing', title: 'Business Writing Skills', image: '', content: (<p>Course details coming soon.</p>) },
  { id: 'brand-story', title: 'Telling Your Brand Story', image: '', content: (<p>Course details coming soon.</p>) },
  { id: 'remote-hybrid', title: 'Optimal Remote & Hybrid work practices', image: '', content: (<p>Course details coming soon.</p>) },
  { id: 'extraordinary-service', title: 'Commitment to extraordinary service', image: '', content: (<p>Course details coming soon.</p>) },
  { id: 'critical-thinking', title: 'Critical Thinking and problem Solving', image: '', content: (<p>Course details coming soon.</p>) },
  { id: 'clarity', title: 'Communicating with Clarity', image: '', content: (<p>Course details coming soon.</p>) },
  { id: 'high-impact-learning', title: 'Facilitating High-Impact Learning', image: '', content: (<p>Course details coming soon.</p>) },
];

export function SelfLeadershipDevelopmentJourney() {
  const [selected, setSelected] = useState(journeyItems[0].id);
  const selectedItem = journeyItems.find((item) => item.id === selected);

  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <h2 className="text-3xl font-bold mb-6">Development Journey</h2>
      <p className="mb-8 text-gray-800 max-w-3xl">
        Our dynamic self-leadership development training programs are designed to unlock individual potential, enabling leaders to lead themselves and others confidently, foster exceptional team performance, and drive impactful change.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left: Accordion/List */}
        <div className="bg-gray-50 rounded-lg p-6 border md:col-span-1">
          <ul className="space-y-4">
            {journeyItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`block text-left w-full font-medium text-base transition-colors rounded px-2 py-2 ${selected === item.id ? 'text-purple-700 bg-purple-100' : 'text-gray-800 hover:bg-gray-100'}`}
                  onClick={() => setSelected(item.id)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Right: Content */}
        <div className="md:col-span-2 bg-white rounded-lg p-6 border flex flex-col items-center">
          {selectedItem && selectedItem.image && (
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full max-w-2xl rounded shadow-lg border mb-6"
            />
          )}
          {selectedItem && selectedItem.content}
          {/* Course Details Form */}
          <form className="mt-8 w-full max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-2 text-center">Access Course Details</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your.email@company.com"
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded font-semibold hover:bg-purple-700 transition-colors"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 