import { useState, useRef } from 'react';

const slides = [
  [
    {
      number: '01',
      title: 'Digital Mastery',
      description:
        'Developing an understanding of AI, machine learning, data analytics, and their applications, as well as the ability to strategize and implement digital transformation initiatives aligned with business goals.',
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
        'Building proficiency in using digital collaboration tools like MS Teams, Slack, whiteboards or Zoom and developing strategies to engage and motivate remote or hybrid teams.',
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
        'Harnessing AI to enhance long-term planning and decision-making. Leverage AI-driven insights to identify opportunities, optimize resources, and implement adaptive strategies for sustained competitive advantage.',
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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setTranslateX(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.pageX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // If dragged more than 100px, change slide
    if (translateX < -100 && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (translateX > 100 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
    
    setTranslateX(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].pageX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  return (
    <section className="mt-12 overflow-hidden">
      {/* White Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
            Vanguard Skills Program
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            The "Vanguard Skills" program is a cutting-edge workforce development initiative that equips individuals and leaders with essential skills for today's rapidly evolving business landscape, focusing on AI and digital transformation. We design customized blended learning journeys for each client, covering essential competencies for effective Human+AI workflows.
          </p>
        </div>
      </div>

      {/* Gray Section with Cards - Full Width */}
      <div className="bg-gray-50 py-12 pt-32">
        <div className="container mx-auto max-w-7xl px-4 -mt-32">
          <div
            ref={carouselRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-200 rounded-md overflow-hidden select-none"
              style={{
                transform: `translateX(${Math.max(Math.min(translateX, 0), 0)}px)`,
                transition: isDragging ? 'none' : 'transform 0.7s ease'
              }}
            >
              {slides[currentSlide].map((item) => (
                <div
                  key={item.number}
                  className="flex flex-col bg-white px-6 sm:px-8 py-6 sm:py-8 border-b lg:border-b-0 lg:border-r border-gray-200 last:border-none items-start h-[400px]"
                >
                  <div className="flex flex-col h-full">
                    <div className="w-10 aspect-square rounded-full border-2 border-purple-600 text-purple-700 flex items-center justify-center font-bold text-lg mb-5 flex-shrink-0">
                      {item.number}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-3 sm:mb-4 flex-shrink-0">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base break-words flex-grow">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center space-x-3 mt-10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                  currentSlide === idx ? 'bg-purple-600' : 'bg-gray-300'
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

export default VanguardSkillsCarousel;