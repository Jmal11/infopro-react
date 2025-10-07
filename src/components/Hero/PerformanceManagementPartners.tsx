import React from 'react';

const partners = [
  {
    name: 'Kaiser Permanente',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Kaiser_Permanente_logo.svg/2560px-Kaiser_Permanente_logo.svg.png',
  },
  {
    name: 'Reckitt Benckiser',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Reckitt_Benckiser_logo.svg/2560px-Reckitt_Benckiser_logo.svg.png',
  },
  {
    name: 'BASF',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/BASF_Logo.svg/2560px-BASF_Logo.svg.png',
  },
  {
    name: 'Delta',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Delta_Air_Lines_Logo.svg/2560px-Delta_Air_Lines_Logo.svg.png',
  },
  {
    name: 'Pepsico',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/PepsiCo_logo.svg/2560px-PepsiCo_logo.svg.png',
  },
  {
    name: 'Nike',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2560px-Logo_NIKE.svg.png',
  },
];

export function PerformanceManagementPartners() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 flex justify-center items-center space-x-12">
        {partners.map(({ name, logoUrl }) => (
          <img
            key={name}
            src={logoUrl}
            alt={name}
            className="h-12 object-contain grayscale opacity-70 hover:opacity-100 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
}
