import React, { useState } from 'react';

const expertsData = [
  {
    region: 'Americas',
    name: 'Arun Prakash',
    title: 'Executive Vice President & Chief Learning Architect',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    linkedin: '#',
  },
  {
    region: 'Americas',
    name: 'Ojesvi Garg',
    title: 'Associate Vice President Delivery',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    linkedin: '#',
  },
  {
    region: 'Americas',
    name: 'Scott Margason',
    title: 'Executive Vice President Client Success',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    linkedin: '#',
  },
  // Add more experts for other regions if needed
];

const regions = ['Americas', 'EMEA', 'APAC'];

export function TrainingExperts() {
  const [selectedRegion, setSelectedRegion] = useState('Americas');

  const filteredExperts = expertsData.filter(
    (expert) => expert.region === selectedRegion
  );

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Meet our Training Experts</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter by region */}
        <div className="md:w-1/4">
          <h3 className="font-semibold mb-2">Filter by region</h3>
          <ul className="space-y-2">
            {regions.map((region) => (
              <li
                key={region}
                className={`cursor-pointer border-b pb-1 ${
                  selectedRegion === region
                    ? 'text-purple-600 border-purple-600'
                    : 'text-gray-700 border-gray-300'
                }`}
                onClick={() => setSelectedRegion(region)}
              >
                {region}
              </li>
            ))}
          </ul>
        </div>
        {/* Experts list */}
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {filteredExperts.map((expert) => (
            <div key={expert.name} className="space-y-2">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <a
                href={expert.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                aria-label={`LinkedIn profile of ${expert.name}`}
              >
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.061-1.865-3.061-1.865 0-2.151 1.454-2.151 2.957v5.708h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.838-1.562 3.036 0 3.6 2 3.6 4.59v5.605z" />
                </svg>
              </a>
              <p className="text-sm text-gray-600">{expert.title}</p>
              <p className="text-purple-600 font-semibold">{expert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
