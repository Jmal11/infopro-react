import React, { useState } from 'react';

const slides = [
  [
    {
      number: '01',
      title: 'Digital Mastery',
      description:
        'Developing an understanding of AI, machine learning, data analytics, and their applications, as well as the ability to strategize and implement digital transformation initiatives aligned with business goals...',
    },
    {
      number: '02',
      title: 'Emotional and Social Intelligence',
      description:
        'Strategically place emerging leaders and top talents into middle and upper management roles across a range of industries.',
    },
    {
      number: '03',
      title: 'High-Impact Communication',
      description:
        'Enhancing communication skills, including written, verbal, and presentation abilities, to communicate effectively in the digital age.',
    },
    {
      number: '04',
      title: 'Remote Leadership and Collaboration',
      description:
        'Building proficiency in using digital collaboration tools like MS teams, Slack, whiteboards or Zoom and developing strategies to engage and motivate remote or hybrid teams.',
    },
  ],
  [
    {
      number: '05',
      title: 'Ethical and Inclusive Leadership',
      description:
        'Promoting ethical decision-making, cultural and generational fluency, and corporate social responsibility initiatives. Ensuring AI systems are inclusive and do not perpetuate discrimination based on gender, race, or other protected characteristics.',
    },
    {
      number: '06',
      title: 'Strategic Thinking and Execution',
      description:
        'Harnessing AI to enhance long-term planning and decision-making. This involves leveraging AI-driven insights to identify opportunities, optimize resource allocation, and implement strategies that adapt to evolving market conditions, ensuring sustained competitive advantage in a digitally transformed business environment.',
    },
    {
      number: '07',
      title: 'Continuous Learning and Development',
      description:
        'Fostering a culture of lifelong learning, coaching, and mentoring within the organization. Keep pace with rapid technological advancements in AI.',
    },
    {
      number: '08',
      title: 'Stakeholder Engagement and Community Involvement',
      description:
        'Managing stakeholder relations, advocating for positive change, and actively engaging with the broader community.',
    },
  ],
];

export function VanguardSkillsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    if (index < 0) index = 0;
    if (index >= slides.length) index = slides.length - 1;
    setCurrentSlide(index);
  };

  return (
    <section className="mt-12">
      {/* Container with two background colors */}
      <div className="bg-white py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
            Vanguard Skills Program
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            The "Vanguard Skills" program is a cutting-edge workforce development initiative that equips individuals and leaders with essential skills for today&apos;s rapidly evolving business landscape, focusing on AI and digital transformation. We design customized blended learning journeys for each client, covering essential competencies for effective Human+AI workflows.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Carousel slides */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {slides[currentSlide].map((item) => (
              <div key={item.number} className="border-r last:border-r-0 pr-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full border border-purple-600 text-purple-600 flex items-center justify-center font-semibold mr-2">
                    {item.number}
                  </div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full focus:outline-none ${
                  currentSlide === idx ? 'bg-purple-600' : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
