import React from 'react';

const programs = [
  {
    title: 'Vanguard Leadership',
    description:
      'A comprehensive program focused on leadership & collaborative leadership skills, empowering leaders to drive innovation, build strong networks, and cultivate high-performing teams.',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Early Career Development',
    description:
      'A series of courses designed to build foundational skills and knowledge for professionals in the early stages of their careers, setting the stage for long-term success.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Mid-Career Development',
    description:
      'A suite of advanced programs targeted at mid-career professionals, focusing on leadership growth mindset, strategic thinking and the ability to navigate an increasingly diverse complex workforce.',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Senior Leader Development',
    description:
      'Tailored courses for senior leaders to refine strategic leadership skills, enhance executive presence, and effectively manage high-stakes environments.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Self-Leadership',
    description:
      'Personal development programs designed to help leaders enhance personal accountability, resilience, energy and productivity, enabling leaders to navigate challenges and drive their own success.',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
  },
];

export function LeadershipDevelopmentPrograms() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Leverage Our Leadership Development Programs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {programs.map(({ title, description, imageUrl }) => (
          <div key={title} className="bg-black text-white p-4 flex flex-col rounded shadow-lg">
            <img src={imageUrl} alt={title} className="rounded mb-4 h-40 object-cover" />
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm flex-grow">{description}</p>
            <a href="#" className="mt-4 text-purple-600 font-semibold hover:underline">
              LEARN MORE &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
