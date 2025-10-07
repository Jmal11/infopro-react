import React from 'react';

const logos = [
  {
    name: 'Delta',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Delta_logo.svg/200px-Delta_logo.svg.png'
  },
  {
    name: 'Unilever',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Unilever_logo.svg/200px-Unilever_logo.svg.png'
  },
  {
    name: 'Novartis',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Novartis_Logo.svg/200px-Novartis_Logo.svg.png'
  },
  {
    name: 'Exelon',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Exelon_logo.svg/200px-Exelon_logo.svg.png'
  },
  {
    name: 'PwC',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/PwC_logo.svg/200px-PwC_logo.svg.png'
  }
];

export function BusinessLeadershipLogos() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-10 text-center text-gray-900">
          Trusted by Leading Organizations
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-6">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo.logoUrl}
                alt={logo.name}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessLeadershipLogos;
