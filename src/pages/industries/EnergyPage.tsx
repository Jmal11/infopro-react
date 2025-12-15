import ContactForm from '../../components/Hero/ContactForm';

export function EnergyPage() {
  return (
    <main className="pt-24 section-responsive">
      <section className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Energy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized training solutions for the energy sector to ensure safety, compliance, and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Safety & Compliance Training</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Technical Skills Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Renewable Energy Training</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Operations & Maintenance Training</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Leadership Development Programs</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Energy Sector Focus</h2>
            <p className="text-gray-700 mb-4">
              We serve oil & gas, renewable energy, utilities, and power generation companies with training solutions that prioritize safety and operational excellence.
            </p>
            <p className="text-gray-700">
              Our programs are designed to meet industry standards and regulatory requirements while building the skills needed for a sustainable energy future.
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

