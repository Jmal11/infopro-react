import ContactForm from '../../components/Hero/ContactForm';

export function HealthcarePage() {
  return (
    <main className="pt-24 section-responsive">
      <section className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Healthcare</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized learning solutions for healthcare organizations to ensure compliance, improve patient care, and enhance clinical outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Clinical Training Programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>HIPAA Compliance Training</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Patient Safety Education</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Medical Device Training</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Healthcare Leadership Development</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Healthcare Expertise</h2>
            <p className="text-gray-700 mb-4">
              We work with hospitals, clinics, pharmaceutical companies, and medical device manufacturers to deliver training that meets strict regulatory requirements.
            </p>
            <p className="text-gray-700">
              Our healthcare learning solutions are designed to improve patient outcomes, ensure compliance, and support continuous professional development.
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

