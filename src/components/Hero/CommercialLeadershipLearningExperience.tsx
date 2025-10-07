import React from 'react';

const features = [
  'Expert-led interactive workshops',
  'Peer-to-peer learning and networking',
  'Real-world case studies and simulations',
  'Personalized feedback and coaching',
  'Actionable tools and frameworks',
  'Flexible learning formats (virtual & in-person)',
];

const experienceImg = 'https://via.placeholder.com/400x300?text=Learning+Experience'; // Replace with actual image if available

export function CommercialLeadershipLearningExperience() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Heading and Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Experience</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-800">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center">
          <img src={experienceImg} alt="Learning Experience" className="rounded shadow-lg w-full max-w-md object-cover" />
        </div>
      </div>
    </section>
  );
}

export default CommercialLeadershipLearningExperience; 