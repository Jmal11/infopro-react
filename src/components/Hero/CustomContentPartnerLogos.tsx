import React from 'react';

const logos = [
  {
    name: 'McKinsey & Company',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/McKinsey.webp',
    alt: 'McKinsey & Company Logo',
  },
  {
    name: 'Heineken',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/Heineken.webp',
    alt: 'Heineken Logo',
  },
  {
    name: 'Nike',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/Nike1.webp',
    alt: 'Nike Logo',
  },
  {
    name: 'Lenovo',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/Lenovo.webp',
    alt: 'Lenovo Logo',
  },
  {
    name: 'Adobe',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/Adobe.webp',
    alt: 'Adobe Logo',
  },
  {
    name: 'Ford',
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/Ford.webp',
    alt: 'Ford Logo',
  },
];

export function CustomContentPartnerLogos() {
  return (
    <div className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center space-x-8 py-6">
        {logos.map((logo) => (
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.alt}
            className="w-auto h-16 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
