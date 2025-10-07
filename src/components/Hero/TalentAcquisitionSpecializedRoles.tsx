import React from 'react';

const roles = [
  {
    title: 'Executive Leadership',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Sales',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Marketing',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Operations',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Project Management',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'HR',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'IT',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Customer Success',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
  },
];

export function TalentAcquisitionSpecializedRoles() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-center text-2xl font-bold mb-8">Handpicked Talent for Your Needs: Our Specialized Roles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {roles.map(({ title, image }) => (
          <div key={title} className="relative rounded overflow-hidden shadow-lg group cursor-pointer">
            <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
              <h3 className="text-white text-lg font-semibold">{title}</h3>
            </div>
            <div className="absolute top-0 left-0 w-full border-t-4 border-purple-600"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
