
import React, { useState } from 'react';

const regions = ['Americas', 'EMEA', 'APAC'];

interface Profile {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const profiles: Record<string, Profile[]> = {
  Americas: [
    {
      name: 'Arun Prakash',
      role: 'Executive Vice President & Chief Learning Architect',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      linkedin: '#',
    },
    {
      name: 'Andrea Turner',
      role: 'Executive Vice President Global Operations',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      linkedin: '#',
    },
    {
      name: 'Scott Margason',
      role: 'Executive Vice President Client Success',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      linkedin: '#',
    },
  ],
  EMEA: [
    {
      name: 'Emma Johnson',
      role: 'Regional Director EMEA',
      image: 'https://randomuser.me/api/portraits/women/46.jpg',
      linkedin: '#',
    },
    {
      name: 'Liam Smith',
      role: 'Senior Learning Consultant',
      image: 'https://randomuser.me/api/portraits/men/47.jpg',
      linkedin: '#',
    },
    {
      name: 'Olivia Brown',
      role: 'Client Success Manager',
      image: 'https://randomuser.me/api/portraits/women/47.jpg',
      linkedin: '#',
    },
  ],
  APAC: [
    {
      name: 'Satoshi Tanaka',
      role: 'Regional Director APAC',
      image: 'https://randomuser.me/api/portraits/men/48.jpg',
      linkedin: '#',
    },
    {
      name: 'Mei Wong',
      role: 'Learning Experience Designer',
      image: 'https://randomuser.me/api/portraits/women/48.jpg',
      linkedin: '#',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Client Success Lead',
      image: 'https://randomuser.me/api/portraits/men/49.jpg',
      linkedin: '#',
    },
  ],
};

export function LearningExperienceArchitectsSection() {
  const [selectedRegion, setSelectedRegion] = useState('Americas');

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row gap-8">
        {/* Left Tabs */}
        <div className="md:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Meet Our Learning Experience Architects</h2>
          <p className="mb-4 font-semibold">Filter by region</p>
          <ul className="border-b border-gray-300">
            {regions.map((region) => (
              <li
                key={region}
                className={`cursor-pointer py-2 ${
                  selectedRegion === region
                    ? 'text-purple-600 border-b-2 border-purple-600 font-semibold'
                    : 'text-gray-700'
                }`}
                onClick={() => setSelectedRegion(region)}
              >
                {region.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Profiles */}
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {profiles[selectedRegion].map((profile: Profile, idx: number) => (
            <div key={idx} className="space-y-2">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-48 object-cover rounded"
              />
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.061-1.865-3.061-1.865 0-2.151 1.454-2.151 2.959v5.706h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.838-1.562 3.036 0 3.6 2 3.6 4.59v5.605z" />
                </svg>
              </a>
              <p className="text-gray-700 text-sm">{profile.role}</p>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-purple-600 font-semibold hover:underline">
                {profile.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
