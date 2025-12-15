import ContactForm from '../../components/Hero/ContactForm';

export function InsurancePage() {
  return (
    <main className="pt-24 section-responsive">
      <section className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Insurance</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive learning solutions designed specifically for the insurance industry to enhance agent performance and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Agent Training & Certification</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Product Knowledge Training</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Sales Enablement Programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Claims Processing Training</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Regulatory Compliance Training</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry Expertise</h2>
            <p className="text-gray-700 mb-4">
              We specialize in creating learning programs that help insurance companies improve agent performance, increase sales, and ensure regulatory compliance.
            </p>
            <p className="text-gray-700">
              Our solutions are tailored to meet the unique needs of property & casualty, life, health, and specialty insurance providers.
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

