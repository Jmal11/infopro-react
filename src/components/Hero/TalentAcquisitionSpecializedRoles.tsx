import React from 'react';

const roles = [
  {
    title: 'Executive Leadership',
    description: 'Chief Executive Officer (CEO), Chief Operating Officer (COO), Organizational Development Specialist, Chief Strategy Officer (CSO)... and more.',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Executive_Leadership.webp',
  },
  {
    title: 'Sales',
    description: 'Sales Manager, Business Development Manager, Account Executive, Sales Director, Regional Sales Manager... and more.',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Sales.webp',
  },
  {
    title: 'Marketing',
    description: 'Marketing Manager, Digital Marketing Specialist, Brand Manager, Content Strategist, Marketing Director... and more.',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Marketing.webp',
  },
  {
    title: 'Operations',
    description: 'Operations Manager, Supply Chain Manager, Process Improvement Specialist, Operations Director... and more.',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Operations.webp',
  },
  {
    title: 'Project Management',
    description: 'Project Manager, Program Manager, Scrum Master, PMO Director, Agile Coach... and more.',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Project_Management.webp',
  },
  {
    title: 'HR',
    description: 'HR Manager, Talent Acquisition Specialist, HR Business Partner, Learning & Development Manager... and more.',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/HR.webp',
  },
  {
    title: 'IT',
    description: 'IT Manager, Software Engineer, DevOps Engineer, Systems Administrator, IT Director... and more.',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/IT.webp',
  },
  {
    title: 'Customer Success',
    description: 'Customer Success Manager, Account Manager, Client Relations Specialist, Customer Experience Manager... and more.',
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Customer-Success.webp',
  },
];

export function TalentAcquisitionSpecializedRoles() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-center text-2xl font-bold mb-8">
        Handpicked Talent for Your Needs: Our Specialized Roles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {roles.map(({ title, description, image }) => (
          <div 
            key={title} 
            className="relative rounded overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* Image */}
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            
            {/* Purple top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-purple-600"></div>
            
            {/* Dark overlay - always visible */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            
            {/* Content container - slides up on hover */}
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-60 text-center transition-all duration-300 group-hover:-translate-y-0">
              {/* Title - always visible with light black bg */}
              <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
              
              {/* Description - Fades in on hover */}
              <p className="text-white text-sm leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-40">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}