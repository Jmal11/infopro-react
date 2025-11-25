import React from 'react';

const services = [
  {
    title: 'Customized Leadership Development',
    description:
      'We have a team of researchers, developers and instructional designers who work with client organizations to co-create custom leadership development solutions. We do this quickly and cost effectively by leveraging core content from our library of +60 off-the-shelf leadership programs.',
    imageUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/customized-leadership.webp',
  },
  {
    title: 'Emerging Leader Development',
    description:
      "Help your new (and soon-to-be) leaders with a variety of training programs and resources designed specifically to accelerate the early leader's career trajectory. We target the skills/competencies proven to be most valuable to emerging leaders, in a manner that does not overwhelm them and has immediate practical on-the-job utility.",
    imageUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/customized-leadership.webp',
  },
  {
    title: 'Mid-Career Leader Development',
    description:
      'We offer leadership training programs for mid-career leaders seeking to reignite their growth mindset, acquire new skills and propel their careers to new heights of success. Our programs offer proven, practical and modern strategies, personalized coaching, and hands-on experiential workshops.',
    imageUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/emerging-leader-development.webp',
  },
  {
    title: 'Executive Coaching',
    description:
      'Are you a leader dealing with significant changes or challenges in your role or industry? Are you aiming to reach the next level and need personalized expert guidance on how to get there? Our unique approach to executive coaching includes a coach-client matching process that is proven to produce exceptional results.',
    imageUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/executive-coaching.webp',
  },
  {
    title: 'Leadership Development Strategy Consulting',
    description:
      'If you are uncertain what direction your organization should take in terms of leadership development, if you are wondering how to maximize the impact of a limited leadership development budget, our consulting team will collaborate closely with you to develop a well-informed, strategic and high-impact plan of action.',
    imageUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/leadership-development-strategy.webp',
  },
  {
    title: 'Assessment Solutions',
    description:
      'We have a broad range of off-the-shelf assessments to help leaders enhance self-awareness and target development efforts toward the most needed competency enhancement. We also develop and deploy (through our SkillMap™ assessment platform) custom assessments to address client-specific needs.',
    imageUrl: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/assessment-solutions.webp',
  },
];

export function LeadershipDevelopmentServices() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Leadership Development Services
      </h2>
      <p className="text-center text-gray-700 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed">
        Our team of researchers, instructional designers, learning strategists, executive coaches and facilitators are here to support you every step of the way as your organization embarks on a journey to build the capabilities of your leaders.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {services.map(({ title, description, imageUrl }) => (
          <div key={title}>
            <div className="border-t-4 border-[#6b19ff] mb-4">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-auto" 
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900">
              {title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}