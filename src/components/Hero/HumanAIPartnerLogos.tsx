import React from 'react';

const logos = [
  {
    name: 'Henkel',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/Henkel.webp',
    alt: 'Henkel Logo',
  },
  {
    name: 'RELX',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/Relx.webp',
    alt: 'RELX Logo',
  },
  {
    name: 'MiSource',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/Nisource.webp',
    alt: 'MiSource Logo',
  },
  {
    name: 'Lenovo',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/Lenovo.webp',
    alt: 'Lenovo Logo',
  },
  {
    name: 'Thales',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/Thales.webp',
    alt: 'Thales Logo',
  },
  {
    name: 'Bechtel',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/bechtel.webp',
    alt: 'Bechtel Logo',
  },
];

export function HumanAIPartnerLogos() {
  return (
    <div className="bg-white  border-t border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center space-x-8">
        {logos.map((logo) => (
          <img
  key={logo.name}
  src={logo.src}
  alt={logo.alt}
  className="w-auto h-28 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
  loading="lazy"
/>
        ))}
      </div>
    </div>
  );
}
