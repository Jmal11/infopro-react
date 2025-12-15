import ContactForm from '../../components/Hero/ContactForm';

export function ProfessionalServicesPage() {
  return (
    <main className="pt-24 section-responsive">
      <section className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Customized learning solutions for professional services firms to enhance expertise, client relationships, and business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Professional Development Programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Client Relationship Training</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Business Development Skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Leadership & Management Training</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Industry-Specific Certifications</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Services Focus</h2>
            <p className="text-gray-700 mb-4">
              We work with consulting firms, law firms, accounting practices, and other professional services organizations to develop their talent and drive business success.
            </p>
            <p className="text-gray-700">
              Our learning solutions are designed to enhance professional expertise, improve client service delivery, and support career advancement.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-[1280px] mt-16">
        <ContactForm />
      </section>
    </main>
  );
}

