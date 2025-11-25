import React from 'react';

const programs = [
  {
    title: 'Vanguard Leadership',
    description:
      'A comprehensive program focused on fostering a collaborative leadership style, empowering leaders to drive innovation, build strong networks, and cultivate high-performing teams.',
    imageUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Vanguard%20Leadership.webp',
    link: '#',
  },
  {
    title: 'Early Career Development',
    description:
      'A series of courses designed to build foundational skills and knowledge for professionals in the early stages of their careers, setting the stage for long-term success.',
    imageUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Early-Career-Development.webp',
    link: '#',
  },
  {
    title: 'Mid-Career Development',
    description:
      'A suite of advanced programs targeting mid-career professionals, focusing on leadership growth mindset, strategic thinking and the ability to navigate an increasingly diverse/complex workforce.',
    imageUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Mid-Career.webp',
    link: '#',
  },
  {
    title: 'Senior Leader Development',
    description:
      'Tailored courses for senior leaders to refine strategic leadership abilities, enhance executive presence, and effectively manage high-stakes environments.',
    imageUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Senior-Leader-Development.webp',
    link: '#',
  },
  {
    title: 'Self-Leadership',
    description:
      'Personal development programs designed to help leaders enhance personal accountability, resilience, energy and productivity, enabling leaders to navigate challenges and drive their own success.',
    imageUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Self%20Leadership.jpg',
    link: '#',
  },
];

export function LeadershipDevelopmentPrograms() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center">
        Leverage Our Leadership Development Programs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map(({ title, description, imageUrl, link }) => (
          <div key={title} className="relative group overflow-hidden cursor-pointer">
            {/* Image with overlay */}
            <div className="relative h-full min-h-[400px]">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-500"></div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-10">
                {/* Heading and Description - slides up to top of container */}
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white">
                    {description}
                  </p>
                </div>
                
                {/* Learn More Link - slides to right edge of container */}
                <div className="flex justify-start">
                  <a 
                    href={link}
                    className="inline-flex items-center text-white font-semibold text-sm transform translate-x-0 group-hover:translate-x-[calc(100%-100%)] group-hover:ml-auto transition-all duration-500"
                  >
                    <span className="mr-2">LEARN MORE</span>
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Purple bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#6b19ff]"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}