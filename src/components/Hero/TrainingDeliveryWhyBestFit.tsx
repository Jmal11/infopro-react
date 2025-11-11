export function TrainingDeliveryWhyBestFit() {
  const items = [
    {
      title: "Elite Instructor Network",
      description: "With over 15,000 rigorously vetted trainers, subject matter experts, and 300+ learning suppliers across the globe, we ensure consistent quality and wide-ranging expertise with top ratings."
    },
    {
      title: "Learner-Centric Approach",
      description: "Interactive methods tailored to diverse learning styles maximize engagement and knowledge retention, contributing to performance improvement for over 2.5 million employees."
    },
    {
      title: "Immersive Learning Experiences",
      description: "Dynamic, tech-enhanced environments and immersive labs with real-world applications guided by performance coaches contribute to a 30% increase in learner engagement and skill application."
    },
    {
      title: "Unwavering Quality Assurance",
      description: "Master trainers, subject experts, and a 24/7 learning administration help desk continuously monitor all programs to ensure excellence."
    },
    {
      title: "Flexible Delivery Options",
      description: "Seamlessly adaptable to both in-person and virtual formats, our solutions offer global relevance with support for over 50 languages and representation in more than 140 countries."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Why Our Training Delivery Solutions Are the Best Fit for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {items.map(({ title, description }) => (
          <div key={title} className="mb-8 border-l pl-4">
            <h3 className="font-semibold mb-2">{title}</h3>
            <div className="w-[50px] h-[4px] bg-purple-600 mb-3"></div>
            <p className="text-gray-700 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}