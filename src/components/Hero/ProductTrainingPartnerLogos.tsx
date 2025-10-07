import React from 'react';

const logos = [
  { name: 'Colgate-Palmolive', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Colgate-Palmolive_logo.svg' },
  { name: 'Fresenius', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fresenius_logo.svg' },
  { name: 'JTI', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Japan_Tobacco_International_logo.svg' },
  { name: 'Chevron', src: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Chevron_Logo.svg' },
  { name: 'Wolters Kluwer', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Wolters_Kluwer_logo.svg' },
  { name: 'Unilever', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Unilever_Logo.svg' },
];

export function ProductTrainingPartnerLogos() {
  return (
    <div className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-x-16 gap-y-6">
        {logos.map((logo) => (
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            className="h-10 grayscale opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default ProductTrainingPartnerLogos; 