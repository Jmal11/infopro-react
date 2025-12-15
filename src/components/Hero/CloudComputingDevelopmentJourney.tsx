import React, { useState } from 'react';

const sections = [
  {
    title: "Introduction to Cloud Computing",
    content: [
      "This course provides a comprehensive overview of cloud computing concepts, service models, and deployment models. Learners will gain a solid understanding of the cloud ecosystem and its impact on modern IT infrastructure.",
      "This course provides a comprehensive overview of cloud computing concepts, service models, and deployment models. Learners will gain a solid understanding of the cloud ecosystem and its impact on modern IT infrastructure.",
      "Define cloud computing and its key characteristics.",
      "Explain public, private, and hybrid cloud deployment models.",
      "Distinguish between IaaS, PaaS, and SaaS service models.",
      "Identify major cloud service providers and their offerings."
    ]
  },
  {
    title: "Cloud Architecture and Design",
    content: [
      "Participants will learn how to design and architect cloud-based solutions, focusing on scalability, reliability, and security. The course covers best practices for creating robust cloud infrastructures.",
      "Design scalable and fault-tolerant cloud architectures.",
      "Optimize cloud resources for cost-effectiveness and performance.",
      "Implement cloud design patterns for various use cases.",
      "Create high-availability and disaster recovery solutions."
    ]
  }
];

export function CloudComputingDevelopmentJourney() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="container mx-auto px-4 py-16 max-w-[1280px]">
      <h2 className="text-3xl font-bold mb-6">Development Journey</h2>
      <p className="mb-6">
        Cloud Computing and AI Integration Training Program Catalog
      </p>
      <p className="mb-6">
        The program provides practical knowledge on integrating cloud infrastructure with AI technologies. Participants will learn cloud architecture, machine learning applications, and secure data management. The program focuses on real-world scenarios, equipping professionals with the skills to build scalable, intelligent systems. Graduates will be prepared to implement AI-driven solutions in cloud environments across industries.
      </p>
      <div className="flex gap-8">
        <nav className="w-1/4 border border-gray-300 rounded p-4 overflow-y-auto max-h-[400px]">
          <ul className="space-y-2 text-sm">
            {sections.map((section, index) => (
              <li key={index}>
                <button
                  className={`w-full text-left ${
                    activeIndex === index ? 'text-purple-600 font-semibold' : 'text-gray-700'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <article className="w-3/4 border border-gray-300 rounded p-6 max-h-[400px] overflow-y-auto text-sm">
          <h3 className="font-semibold mb-4">{sections[activeIndex].title}</h3>
          {sections[activeIndex].content.map((paragraph, idx) => (
            <p key={idx} className="mb-3">{paragraph}</p>
          ))}
        </article>
      </div>
    </section>
  );
}

export default CloudComputingDevelopmentJourney;
