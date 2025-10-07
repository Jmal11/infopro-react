import React from 'react';

const solutions = [
  {
    title: 'Hardware Product Training',
    description:
      'Scalable training solutions that can be rolled out across global teams and different roles around a new product or an enhanced version that is going to be launched into the market.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Software Product Training',
    description:
      "Training programs on software tools, systems, and platforms that are designed to provide the 'What', 'Why', and 'How' to help improve proficiency in quick time with mix of Show Me and Try Me tools alongside product information.",
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Onboarding',
    description:
      'Tailored content that aligns with your specific product offerings and business objectives to be covered as part of the employee onboarding (both generic and function specific).',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Product Sales Training',
    description:
      'Bite-sized training content targeting the salespeople across levels to help them with focused selling and product advocacy for specific customer segments.',
    imageUrl: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Product Service Training',
    description:
      'Training on product usage and after sales targeted for customer service people with problem solving, product information communication, and proactive issue management.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Customer Education Training',
    description:
      'Product marketing and education material targeted at customers to better understand, use, and appreciate the products for improved CSAT and a growing loyal customer base.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
];

export function ProductTrainingSolutions() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-bold mb-10">Product Training Solutions We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map(({ title, description, imageUrl }) => (
            <div key={title} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductTrainingSolutions;
