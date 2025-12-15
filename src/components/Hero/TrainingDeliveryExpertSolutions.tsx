const featuresLeft = [
  {
    title: "Global Expertise:",
    description: "Access to 15,000+ vetted trainers and 300+ learning suppliers worldwide, ensuring culturally nuanced delivery."
  },
  {
    title: "Cost Efficiency:",
    description: "Reduce fixed costs and optimize facilitator utilization compared to maintaining large in-house teams."
  },
  {
    title: "Measurable Impact:",
    description: "Focused on driving real, tangible results that align with your organization's goals and objectives."
  }
];

const featuresRight = [
  {
    title: "Flexible Delivery:",
    description: "Seamless adaptation to your needs through virtual, in-person, or blended learning approaches globally."
  },
  {
    title: "Enhanced Engagement:",
    description: "Dynamic, interactive sessions that capture learners' attention and drive active participation."
  },
  {
    title: "Trusted Partnership:",
    description: "Leverage our experience as a partner to world-class companies for high-quality, impactful learning experiences."
  }
];

export function TrainingDeliveryExpertSolutions() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12">
          {/* LEFT COLUMN: HEADING */}
          <div className="mb-8 lg:mb-0 flex items-start">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight max-w-xs">
              Expert Global<br />
              Learning Delivery<br />
              Solutions
            </h2>
          </div>
          {/* RIGHT SIDE: PARAGRAPH & FEATURES */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <p className="text-lg text-gray-800">
                Maintaining large teams of in-house facilitators can lead to high fixed costs and low utilization rates. As a trusted partner to the world's most esteemed companies, we deliver both in-person and virtual training globally. With a vast pool of over 15,000 rigorously vetted trainers, subject matter experts, and more than 300 learning suppliers worldwide, we optimize your training delivery model to maximize facilitator utilization while ensuring impactful learning experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="space-y-7">
                {featuresLeft.map((feature) => (
                  <div key={feature.title} className="flex items-start space-x-3">
                    <img 
                      src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg"
                      alt="Check"
                      className="w-6 h-6 mt-1 flex-shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{feature.title}</p>
                      <p className="text-gray-700 text-base">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-7">
                {featuresRight.map((feature) => (
                  <div key={feature.title} className="flex items-start space-x-3">
                    <img 
                      src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg"
                      alt="Check"
                      className="w-6 h-6 mt-1 flex-shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{feature.title}</p>
                      <p className="text-gray-700 text-base">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}