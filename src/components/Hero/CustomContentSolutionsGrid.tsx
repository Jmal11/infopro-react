import React, { useState } from "react";

const solutions = [
  {
    title: "Digital Learning Modules",
    image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/dogital-learning-modules.webp",
    gif: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/digital-learning-modules.gif",
    description:
      "Transform your training with our digital learning modules, designed to meet your specific objectives. These engaging, interactive modules enhance understanding and retention, ensuring measurable success in compliance, skill development, or process training.",
  },
  {
    title: "Instructor-Led Training (ILT) Materials",
    image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/instructor-led-training.webp",
    gif: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/instructor-led-training.gif",
    description:
      "Enhance in-person training with our expert-led resources. Tailored materials boost engagement and learning, offering detailed guides and interactive activities for impactful, memorable sessions.",
  },
  {
    title: "Video Content Development",
    image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/video-content-development.jpg",
    gif: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/video-content-development.gif",
    description:
      "Engage your audience with our video content development service. We create custom, visually compelling videos that simplify complex concepts, enhance retention, and make learning enjoyable and effective.",
  },
  {
    title: "Assessment",
    image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Assessment-custom.jpg",
    gif: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Assessment.gif",
    description:
      "Validate your team’s skills with our tailored assessment and certification programs. We create custom certification paths that measure achievement, using adaptive assessments to challenge and build confidence.",
  },
  {
    title: "Custom Microlearning Solutions",
    image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Custom%20Micro%20learning.webp",
    gif: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Custom%20Micro%20learning.gif",
    description:
      "Accelerate skill development with our custom microlearning solutions. We create focused, bite-sized modules that target specific learning needs, ensuring quick grasp, retention, and real-world application.",
  },
  {
    title: "Virtual Simulation Development",
    image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Virtual-Simulation.webp",
    gif: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Virtual-Simulation.gif",
    description:
      "Enhance learning with our virtual simulation development service, offering custom, immersive simulations that replicate real-world scenarios, helping learners build confidence and competence in a safe environment.",
  },
  {
    title: "Custom eLearning Content",
    image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Simulation.webp",
    gif: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/simulations-gif.gif",
    description:
      "Develop bespoke eLearning content tailored to your organization’s unique needs, ensuring alignment with business goals and learner preferences.",
  },
  {
    title: "Mobile Learning Solutions",
    image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Game-based-learning.webp",
    gif: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Game-based-learning.gif",
    description:
      "Deliver learning anytime, anywhere with mobile-optimized content that supports on-the-go learners and enhances accessibility.",
  },
  {
    title: "Blended Learning Programs",
    image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/ar-vr.jpg",
    gif: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/ar-vr.gif",
    description:
      "Combine the best of online and face-to-face learning with our blended programs designed to maximize engagement and effectiveness.",
  },
];

export function CustomContentSolutionsGrid() {
  // Single state to track hovered index
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Our Learner-Centric Custom eLearning Solutions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {solutions.map(({ title, image, gif, description }, idx) => (
          <div key={title} className="flex flex-col items-center">
            <div
              className="border border-gray-300 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
              style={{ width: "400px", height: "295px" }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <img
                src={hoveredIdx === idx && gif ? gif : image}
                alt={title}
                className="object-cover w-full h-full rounded-md transition duration-300"
                loading="lazy"
                draggable={false}
              />
            </div>
            <h3 className="font-semibold mb-2 mt-4 text-center">{title}</h3>
            <p className="text-sm text-gray-700 text-center">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
