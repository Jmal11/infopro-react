import React from 'react';
import { CheckCircle } from 'lucide-react';

export function CloudComputingProgramAudience() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto max-w-[1280px] px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Who Is This Program For */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Who Is This Program For</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1" />
              Technology strategists looking to integrate cloud computing and AI to enhance business capabilities
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1" />
              Change management leaders seeking to understand how cloud and AI technologies can facilitate transformation
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1" />
              Compliance and security officers seeking to understand best practices for safeguarding data in cloud environments
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1" />
              Operations managers aiming to streamline operations by utilizing cloud-based AI solutions
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-purple-600 mr-3 mt-1" />
              Consultants and advisors seeking to broaden their knowledge on cloud and AI integration to better serve clients
            </li>
          </ul>
        </div>

        {/* Right: Testimonial */}
        <div className="border-l border-gray-700 pl-8 flex flex-col justify-center">
          <blockquote className="text-xl italic mb-6 relative before:content-['“'] before:absolute before:-left-6 before:text-6xl before:text-purple-600 after:content-['”'] after:absolute after:-right-6 after:text-6xl after:text-purple-600">
            I found the cloud computing & AI integration course extremely valuable. The hands-on approach and comprehensive curriculum boosted my confidence in integrating AI solutions with cloud platforms—a must-do for anyone serious about tech advancement.
          </blockquote>
          <div className="flex items-center space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Michael J"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">Michael J,</p>
              <p>Data Scientist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CloudComputingProgramAudience;
