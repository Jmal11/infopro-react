import React from 'react';

const logos = [
  {
    name: 'colgate-palmolive',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/Colgate.webp',
    alt: 'colgate-palmolive',
  },
  {
    name: 'Fresenius',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/Fresenius.webp',
    alt: 'Fresenius Logo',
  },
  {
    name: 'JTI',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/JTi.webp',
    alt: 'JTI Logo',
  },
  {
    name: 'Chevron',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/chevron.webp',
    alt: 'Chevron Logo',
  },
  {
    name: 'Wolters Kluwer',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/wolters.webp',
    alt: 'Wolters Kluwer Logo',
  },
  {
    name: 'Unilever',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/unilever.webp',
    alt: 'Unilever Logo',
  },
];

export function ProductTrainingPartnerLogos() {
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