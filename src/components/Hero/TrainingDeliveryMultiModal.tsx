export function TrainingDeliveryMultiModal() {
  const cards = [
    {
      title: "Executive Coaching",
      description: "A personalized, one-on-one process that helps leaders improve performance, refine skills, and navigate business challenges through tailored feedback and strategies.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    },
    {
      title: "Instructor-Led Training (ILT)",
      description: "Traditional, in-person training where instructors engage with learners, offering real-time feedback and hands-on practice for complex topics.",
      image: "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg"
    },
    {
      title: "Virtual Instructor-Led Training (vILT)",
      description: "Online training that mirrors the interactive experience of ILT, allowing participants to join sessions from anywhere while maintaining instructor-led quality.",
      image: "https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg"
    },
    {
      title: "On-the-Job Training",
      description: "Learning by doing, where employees gain skills directly in their work environment, applying theory to practice for immediate job performance enhancement.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    },
    {
      title: "Conferences and Events",
      description: "Large events for professionals to network, learn, and stay updated on industry trends through speeches, workshops, and discussions.",
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
    },
    {
      title: "Group Coaching",
      description: "A small group working with a coach to achieve goals, fostering shared learning, peer support, and collective growth.",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Multi-Modal Training Delivery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map(({ title, description, image }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <img src={image} alt={title} className="mb-4 rounded-lg w-full h-48 object-cover" loading="lazy" />
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
