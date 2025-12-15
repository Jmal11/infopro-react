import React, { useState } from 'react';

const journeyItems = [
  {
    id: 'Influencing for Impact',
    title: 'Influencing for Impact',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/pdf-images/Influencing-for-Impact.webp',
  },
  {
    id: 'Strategic Sales Leadership',
    title: 'Strategic Sales Leadership',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/pdf-images/Strategic-Sales-Leadership.webp',
  },
  {
    id: 'Performance Management for Sales Leaders',
    title: 'Performance Management for Sales Leaders',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/pdf-images/Performance-Management-for-Sales-Leaders.webp',
  },
  {
    id: 'Growth Mindset for Sales Pros',
    title: 'Growth Mindset for Sales Pros',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/pdf-images/Growth_Mindset_for_Sales_Pros.webp',
  },
  {
    id: 'Essentials of Sales Management',
    title: 'Essentials of Sales Management',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/pdf-images/Essentials_of_Sales_Management.webp',
  },
  {
    id: 'The Leader as Sales Coach',
    title: 'The Leader as Sales Coach',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/pdf-images/leader-as-sales-coach.webp',
  },
];

export function CommercialLeadershipJourney() {
  const [activeId, setActiveId] = useState('strategic-leadership');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    alert(`Form submitted with email: ${email}`);
  };

  const activeItem = journeyItems.find((item) => item.id === activeId);

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Journey</h2>
          <p className="text-gray-700 leading-relaxed">
            Leadership today isn't about sticking to the old playbook—it's about being agile, forward-thinking, and sparking transformative change. This program is tailored for organizations leading the charge in digital innovation or those navigating the waves of disruption brought by AI and tech, 7/24 information (and misinformation) overwhelm, globalization and increasing social/cultural/behavioral/generational diversity.
          </p>
        </div>

        {/* Content Area with Separate Containers */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Menu Container */}
          <div className="w-full lg:w-1/4 bg-white border border-gray-300 rounded-lg p-6">
            <ul className="space-y-4">
              {journeyItems.map(({ id, title }) => (
                <li key={id} className="flex items-start gap-3">
                  <span className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 ${
                    activeId === id ? 'bg-[#6b19ff]' : 'bg-gray-400'
                  }`}></span>
                  <button
                    className={`text-left text-base ${
                      activeId === id 
                        ? 'text-[#6b19ff] font-semibold' 
                        : 'text-gray-700 hover:text-[#6b19ff]'
                    }`}
                    onClick={() => setActiveId(id)}
                  >
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Image & Form Container */}
          <div className="w-full lg:w-3/4 bg-white border border-gray-300 rounded-lg p-6 flex flex-col">
            {/* Image */}
            <div className="flex-grow mb-6">
              <img
                src={activeItem?.image}
                alt={activeItem?.title}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Form */}
            <div className="text-center pt-4">
              <h3 className="text-xl font-bold mb-4">Access Course Details</h3>
              <form 
                className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  placeholder="Email Address*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:flex-grow border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6b19ff] focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#6b19ff] text-white px-8 py-3 rounded font-semibold hover:bg-purple-700 transition uppercase tracking-wide"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}