import React from 'react';

const logos = [
  { src: '/logos/aristocrat.svg', alt: 'Aristocrat' },
  { src: '/logos/jti.svg', alt: 'JTI' },
  { src: '/logos/komatsu.svg', alt: 'Komatsu' },
  { src: '/logos/lenovo.svg', alt: 'Lenovo' },
  { src: '/logos/liberty.svg', alt: 'Liberty Dental Plan' },
  { src: '/logos/paysafe.svg', alt: 'Paysafe' },
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
              className="max-h-10 w-auto grayscale opacity-80"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SalesTrainingEnablementPartnerLogos; 