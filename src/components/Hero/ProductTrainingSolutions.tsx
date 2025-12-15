import React from 'react';

const solutions = [
  {
    title: 'Hardware Product Training',
    description:
      'Scalable training solutions that can be rolled out across global teams and different roles around a new product or an enhanced version that is going to be launched into the market.',
    imageUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Organization-Design-and-Restructuring.webp',
  },
  {
    title: 'Software Product Training',
    description:
      "Training programs on software tools, systems, and platforms that are designed to provide the 'What', 'Why', and 'How' to help improve proficiency in quick time with mix of Show Me and Try Me tools alongside product information.",
    imageUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Software_Product_Training.webp',
  },
  {
    title: 'Onboarding',
    description:
      'Tailored content that aligns with your specific product offerings and business objectives to be covered as part of the employee onboarding (both generic and function specific).',
    imageUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Onboarding.webp',
  },
  {
    title: 'Product Sales Training',
    description:
      'Bite-sized training content targeting the salespeople across levels to help them with focused selling and product advocacy for specific customer segments.',
    imageUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Product_Sales_Training.webp',
  },
  {
    title: 'Product Service Training',
    description:
      'Training on product usage and after sales targeted for customer service people with problem solving, product information communication, and proactive issue management.',
    imageUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Product_Service_Training.webp',
  },
  {
    title: 'Customer Education Training',
    description:
      'Product marketing and education material targeted at customers to better understand, use, and appreciate the products for improved CSAT and a growing loyal customer base.',
    imageUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Customer_Education_Training.webp',
  },
];

export function ProductTrainingSolutions() {
  return (
    <section className="py-16 px-6 bg-[#f5f5f5]">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">Product Training Solutions We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {solutions.map(({ title, description, imageUrl }) => (
            <div key={title}>
              {/* Image with purple top border */}
              <div className="relative mb-6">
                <div className="absolute top-0 left-0 right-0 h-1 bg-purple-600 rounded-t-lg z-10"></div>
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="w-full h-52 object-cover" 
                />
              </div>
              {/* Title */}
              <h3 className="font-bold text-xl text-gray-900 mb-3">{title}</h3>
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductTrainingSolutions;