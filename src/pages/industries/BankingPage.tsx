import ContactForm from '../../components/Hero/ContactForm';

export function BankingPage() {
  return (
    <main className="pt-24 section-responsive">
      <section className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Banking & Finance</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored learning solutions for the banking and finance industry to drive compliance, risk management, and professional excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Compliance Training & Certification</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Risk Management Education</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Leadership Development Programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Digital Banking Skills Training</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Customer Service Excellence</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-700 mb-4">
              With deep expertise in the banking and finance sector, we understand the unique challenges and regulatory requirements your organization faces.
            </p>
            <p className="text-gray-700">
              Our industry-specific learning solutions are designed to ensure compliance, enhance performance, and drive business results.
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

