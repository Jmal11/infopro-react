import React from 'react';

const logos = [
  {
    name: 'McKinsey & Company',
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/McKinsey_%26_Company_logo.svg',
    alt: 'McKinsey & Company Logo',
  },
  {
    name: 'Heineken',
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Heineken_logo.svg',
    alt: 'Heineken Logo',
  },
  {
    name: 'Nike',
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
    alt: 'Nike Logo',
  },
  {
    name: 'Lenovo',
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Lenovo_logo.svg',
    alt: 'Lenovo Logo',
  },
  {
    name: 'Adobe',
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Adobe_Corporate_Logo.png',
    alt: 'Adobe Logo',
  },
  {
    name: 'Ford',
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg',
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
