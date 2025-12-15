
const cards = [
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Holistic%20Readiness%20Assessment.webp',
    title: 'Holistic Readiness Assessment',
    description:
      'Analyze organizational readiness to embrace Human+AI transformation, identifying potential barriers and enablers for smooth adoption.',
  },
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Leadership%20Alignment.webp',
    title: 'Leadership Alignment',
    description:
      'Ensure leadership buy-in and alignment to drive the vision, equipping leaders to champion change effectively across the organization.',
  },
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Tailored%20Communication%20Strategy.webp',
    title: 'Tailored Communication Strategy',
    description:
      'Develop a targeted communication plan that addresses diverse stakeholder needs, fostering transparency and building trust throughout the transformation journey.',
  },
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Employee%20Empowerment%20and%20Training.webp',
    title: 'Employee Empowerment and Training',
    description:
      'Provide comprehensive training and resources to upskill employees, enabling them to adapt to new AI-driven workflows confidently.',
  },
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Continuous%20Feedback%20Mechanism.webp',
    title: 'Continuous Feedback Mechanism',
    description:
      'Implement feedback loops to monitor adoption progress, allowing for agile adjustments and ongoing support to sustain change momentum.',
  },
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Success%20Metrics%20and%20Evaluation.webp',
    title: 'Success Metrics and Evaluation',
    description:
      'Establish clear success criteria and continuously evaluate progress to ensure the transformation delivers measurable business outcomes.',
  },
];

export function AdoptionChangeManagementSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-[1280px] px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
          Adoption and Change Management
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
          To fully realize the potential of Human+AI and achieve the strategic goals of the Human+AI transformation program, it is essential to implement a comprehensive change management and adoption approach.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="overflow-hidden bg-white border-t-4 flex flex-col"
              style={{
                borderTopColor: '#6b19ff',
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="object-cover w-full h-48"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-700 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdoptionChangeManagementSection;
