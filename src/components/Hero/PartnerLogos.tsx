import React from 'react';

const logos = [
  {
    name: 'Bayer',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/our-client/Bayer.png',
    alt: 'Bayer Logo',
  },
  {
    name: 'Nordea',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/our-client/nordea-latest.png',
    alt: 'Nordea Logo',
  },
  {
    name: 'Meta',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/our-client/Meta.png',
    alt: 'Meta Logo',
  },
  {
    name: 'Deloitte',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/our-client/Deloitte.png',
    alt: 'Deloitte Logo',
  },
  {
    name: 'Dell Technologies',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/our-client/Dell.png',
    alt: 'Dell Technologies Logo',
  },
  {
    name: 'General Mills',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/our-client/General_Mills.png',
    alt: 'General Mills Logo',
  },
];

export function PartnerLogos() {
  return (
    <div className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center space-x-8">
        {logos.map((logo) => (
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.alt}
            className="h-12 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}