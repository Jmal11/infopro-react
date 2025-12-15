import ContactForm from '../../components/Hero/ContactForm';

export function TechnologyPage() {
  return (
    <main className="pt-24 section-responsive">
      <section className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technology & IT</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge learning solutions for technology companies to keep teams ahead of the curve in an ever-evolving industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Technical Skills Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Cloud Computing Training</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Cybersecurity Education</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Agile & DevOps Training</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>AI & Machine Learning Programs</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Technology Companies Choose Us</h2>
            <p className="text-gray-700 mb-4">
              We understand the rapid pace of change in technology. Our learning solutions are designed to help tech companies stay competitive and innovative.
            </p>
            <p className="text-gray-700">
              From startups to enterprise organizations, we provide scalable learning solutions that align with your technology stack and business objectives.
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

