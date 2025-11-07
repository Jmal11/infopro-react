
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
      image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Speakers/arun-prakash-new.webp',
      linkedin: '#',
    },
    {
      name: 'Andrea Turner',
      role: 'Executive Vice President Global Operations',
      image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Speakers/Andrea-Turner.webp',
      linkedin: '#',
    },
    {
      name: 'Scott Margason',
      role: 'Executive Vice President Client Success',
      image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Speakers/Scott.webp',
      linkedin: '#',
    },
  ],
  EMEA: [
    {
      name: 'Emma Johnson',
      role: 'Regional Director EMEA',
      image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Speakers/Leon.webp',
      linkedin: '#',
    },
    {
      name: 'Liam Smith',
      role: 'Senior Learning Consultant',
      image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Speakers/Adam.webp',
      linkedin: '#',
    },
    {
      name: 'Olivia Brown',
      role: 'Client Success Manager',
      image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Speakers/Andrea-Turner.webp',
      linkedin: '#',
    },
  ],
  APAC: [
    {
      name: 'Satoshi Tanaka',
      role: 'Regional Director APAC',
      image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Speakers/Andrea-Turner.webp',
      linkedin: '#',
    },
    {
      name: 'Mei Wong',
      role: 'Learning Experience Designer',
      image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Speakers/Arijit-Dasgupta.webp',
      linkedin: '#',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Client Success Lead',
      image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Speakers/Devendra-Sachdeva.webp',
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
        <img
          src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/linkedin-icon-profile.svg"
          alt="LinkedIn"
          className="w-6 h-6"
        />
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
