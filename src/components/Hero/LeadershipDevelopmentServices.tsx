import React from 'react';

const services = [
  {
    title: 'Customized Leadership Development',
    description:
      'We have a team of researchers, developers and instructional designers who work with client organizations to co-create custom leadership development solutions. We do this quickly and cost effectively by leveraging core content from our library of +60 off-the-shelf leadership programs.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-4297d3c2e5c6?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Emerging Leader Development',
    description:
      "Help your new (and soon-to-be) leaders with a variety of training programs and resources designed specifically to accelerate the early leader's career trajectory. We target the skills/competencies proven to be most valuable to emerging leaders, in a manner that does not overwhelm them and has immediate practical on-the-job utility.",
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Mid-Career Leader Development',
    description:
      'We offer leadership training programs for mid-career leaders seeking to reignite their growth mindset, acquire new skills and propel their careers to new heights of success. Our programs offer proven, practical and modern strategies, personalized coaching, and hands-on experiential workshops.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Executive Coaching',
    description:
      'Are you a leader dealing with significant changes or challenges in your role or industry? Are you aiming to reach the next level and need personalized expert guidance on how to get there? Our unique approach to executive coaching includes a coach-client matching process that is proven to produce exceptional results.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Leadership Development Strategy Consulting',
    description:
      'If you are uncertain what direction your organization should take in terms of leadership development, if you are wondering how to maximize the impact of a limited leadership development budget, our consulting team will collaborate closely with you to develop a well-informed, strategic and high-impact plan of action.',
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Assessment Solutions',
    description:
      'We have a broad range of off-the-shelf assessments to help leaders enhance self-awareness and target development efforts toward the most needed competency enhancement. We also develop and deploy (through our SkillMap™ assessment platform) custom assessments to address client-specific needs.',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
  },
];

export function LeadershipDevelopmentServices() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-2 text-center">Leadership Development Services</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Our team of researchers, instructional designers, learning strategists, executive coaches and facilitators are here to support you every step of the way as your organization embarks on a journey to build the capabilities of your leaders.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map(({ title, description, imageUrl }) => (
          <div key={title} className="bg-white rounded shadow p-4 flex flex-col">
            <img src={imageUrl} alt={title} className="rounded mb-4 h-40 object-cover" />
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 text-sm flex-grow">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
