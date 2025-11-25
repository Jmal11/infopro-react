import React from 'react';

const partners = [
  {
    name: 'Kaiser Permanente',
    logoUrl: '	https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/delta.webp',
  },
  {
    name: 'Reckitt Benckiser',
    logoUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/unilever.webp',
  },
  {
    name: 'BASF',
    logoUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/novartis.webp',
  },
  {
    name: 'Delta',
    logoUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/exelon.webp',
  },
  {
    name: 'Pepsico',
    logoUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/exelon.webp',
  },
];

export function LeadershipDevelopmentPartners() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 flex justify-center items-center space-x-12">
        {partners.map(({ name, logoUrl }) => (
          <img
            key={name}
            src={logoUrl}
            alt={name}
            className="object-contain grayscale opacity-70 hover:opacity-100 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
}
