import React from 'react';

const logos = [
  {
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/delta.webp',
    alt: 'Delta',
  },
  {
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/unilever.webp',
    alt: 'Unilever',
  },
  {
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/novartis.webp',
    alt: 'Novartis',
  },
  {
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/exelon.webp',
    alt: 'Exelon',
  },
  {
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/pwc.webp',
    alt: 'PwC',
  },
];

export function CustomerExcellencePartnerLogos() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 min-w-0 overflow-x-auto flex flex-nowrap justify-center items-center gap-x-12 gap-y-6">
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="grayscale max-h-12 w-auto object-contain"
          />
        ))}
      </div>
    </section>
  );
}

export default CustomerExcellencePartnerLogos; 