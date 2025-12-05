import React from 'react';

const logos = [
  {
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/Aristocrat.webp',
    alt: 'Aristocrat',
  },
  {
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/JTi.webp',
    alt: 'JTI',
  },
  {
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/Komu.webp',
    alt: 'Komatsu',
  },
  {
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/Lenovo1.webp',
    alt: 'Lenovo',
  },
  {
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/Liberty.webp',
    alt: 'Liberty',
  },
   {
    src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Clients/Paysafe.webp',
    alt: 'Paysafe',
  },
];

export function SalesTrainingEnablementPartnerLogos() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-16">
          {logos.map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              className="grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}