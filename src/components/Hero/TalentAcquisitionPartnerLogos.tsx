import React from 'react';

const logos = [
  {
    name: 'Broadcom',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/broadcom.webp',
    alt: 'Broadcom Logo',
  },
  {
    name: 'Palo Alto Networks',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/paloalto.webp',
    alt: 'Palo Alto Networks Logo',
  },
  {
    name: 'Accenture',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/accenture.webp',
    alt: 'Accenture Logo',
  },
  {
    name: 'Deloitte',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/deloitte.webp',
    alt: 'Deloitte Logo',
  },
  {
    name: 'Novartis',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/novartis.webp',
    alt: 'Novartis Logo',
  },
  {
    name: 'Verizon',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/verizon.webp',
    alt: 'Verizon Logo',
  },
];

export function TalentAcquisitionPartnerLogos() {
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