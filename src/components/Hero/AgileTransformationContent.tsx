import React from 'react';
import { CheckCircle } from 'lucide-react';

export function AgileTransformationContent() {
  const benefits = [
    {
      title: "Enhanced Adaptability",
      description: "Quickly respond to market changes and customer needs, staying ahead of competitors in a rapidly evolving business landscape."
    },
    {
      title: "Increased Customer Satisfaction",
      description: "Focus on delivering value early and often, leading to products and services that better meet customer expectations and drive loyalty."
    },
    {
      title: "Better Risk Management",
      description: "Identify and address potential issues early through iterative development and frequent feedback loops, reducing the impact of unforeseen challenges."
    },
    {
      title: "Improved Productivity",
      description: "Streamline workflows and eliminate inefficiencies, enabling teams to deliver high-quality results faster and more consistently."
    },
    {
      title: "Empowered Teams",
      description: "Foster a culture of autonomy and accountability, boosting employee engagement, creativity, and job satisfaction."
    },
    {
      title: "Data-Driven Decision Making",
      description: "Implement metrics and analytics to gain deeper insights into performance, allowing for more informed and strategic business decisions."
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-[1280px] mx-auto">
        {/* Main Heading and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Main Heading */}
          <div className="flex items-start">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Embrace Change, Empower Teams: Your Journey to Agile Transformation Starts Here
            </h2>
          </div>
          
          {/* Right Side - Description */}
          <div className="flex items-start">
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, agility is not just an option—it's a necessity. Agile transformation empowers organizations to adapt quickly to market shifts, enhance collaboration, and deliver value at unprecedented speeds. Our comprehensive approach guides you through every stage of this journey, from initial assessment to sustainable implementation. Together, we'll cultivate a culture of continuous improvement and innovation, equipping your teams with the tools they need to thrive in a dynamic environment. Let's embark on this transformative journey and unlock your organization's full potential.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AgileTransformationContent;
