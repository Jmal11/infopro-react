export function TrainingDeliveryMultiModal() {
  const cards = [
    {
      title: "Executive Coaching",
      description: "A personalized, one-on-one process that helps leaders improve performance, refine skills, and navigate business challenges through tailored feedback and strategies.",
      image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Executive-Coaching.webp"
    },
    {
      title: "Instructor-Led Training (ILT)",
      description: "Traditional, in-person training where instructors engage with learners, offering real-time feedback and hands-on practice for complex topics.",
      image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Instructor-Led.webp"
    },
    {
      title: "Virtual Instructor-Led Training (vILT)",
      description: "Online training that mirrors the interactive experience of ILT, allowing participants to join sessions from anywhere while maintaining instructor-led quality.",
      image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Virtual-Ins.webp"
    },
    {
      title: "On-the-Job Training",
      description: "Learning by doing, where employees gain skills directly in their work environment, applying theory to practice for immediate job performance enhancement.",
      image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/On-the-Job%20Training.webp"
    },
    {
      title: "Conferences and Events",
      description: "Large events for professionals to network, learn, and stay updated on industry trends through speeches, workshops, and discussions.",
      image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Conferences-and-Events.webp"
    },
    {
      title: "Group Coaching",
      description: "A small group working with a coach to achieve goals, fostering shared learning, peer support, and collective growth.",
      image: "https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/team-meeting.webp"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Multi-Modal Training Delivery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map(({ title, description, image }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <div
              className="mb-4 w-[394px] h-[213px]  overflow-hidden"
              style={{ borderTop: "4px solid #6b19ff" }}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
