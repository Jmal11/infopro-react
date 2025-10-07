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

export function SeniorLeaderDevelopmentPartnerLogos() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-16">
          {logos.map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              className="max-h-12 w-auto grayscale opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
} 