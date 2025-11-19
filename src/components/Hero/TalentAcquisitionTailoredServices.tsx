import React from 'react';

const services = [
  {
    number: '01',
    title: 'Top Executive Placement',
    description: 'Find leaders who are aligned with your company values to drive sustainable business growth.',
  },
  {
    number: '02',
    title: 'Professional Talent Search',
    description: 'Strategically place emerging leaders and top talent into middle and upper management roles across a range of industries.',
  },
  {
    number: '03',
    title: 'Skilled Contractors',
    description: 'Find top-tier professionals for any role, whether short-or long-term projects, aligned with your schedule.',
  },
  {
    number: '04',
    title: 'Recruitment Process Outsourcing (RPO)',
    description: 'Streamline your hiring strategy with personalized technology and talent insights, achieving cost savings along the way.',
  },
];

export function TalentAcquisitionTailoredServices() {
  return (
    <section className="w-full">
      {/* Gray Section */}
      <div className="bg-gray-100 pt-16 pb-32">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Tailored Talent Services:<br />
            Perfectly Aligned with Your Needs
          </h2>
        </div>
      </div>
      
      {/* White Section */}
      <div className="bg-white pt-32 pb-16">
        {/* Services Container - Overlays both sections */}
        <div className="max-w-[1400px] mx-auto px-6 -mt-64">
          <div className="bg-white border border-gray-300 flex shadow-lg">
            {services.map((service, index) => (
              <React.Fragment key={service.number}>
                {/* Service Card */}
                <div className="flex-1 px-8 py-10">
                  {/* Number Badge */}
                  <div className="w-12 h-12 rounded-full border-2 border-purple-600 flex items-center justify-center mb-4">
                    <span className="font-semibold text-lg">{service.number}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-700 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Vertical Divider with spacing from top and bottom */}
                {index < services.length - 1 && (
                  <div className="flex items-center py-8">
                    <div className="w-px bg-gray-300 h-full"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}