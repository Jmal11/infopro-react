import ContactForm from '../../components/Hero/ContactForm';

export function PharmaPage() {
  return (
    <main className="pt-24 section-responsive">
      <section className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pharmaceutical</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive learning solutions for pharmaceutical companies to ensure regulatory compliance and drive sales excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Sales Force Training</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Product Knowledge Programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Regulatory Compliance Training</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Medical Affairs Education</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Clinical Research Training</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pharmaceutical Expertise</h2>
            <p className="text-gray-700 mb-4">
              We understand the complex regulatory environment and unique challenges facing pharmaceutical companies. Our training solutions ensure compliance while driving business results.
            </p>
            <p className="text-gray-700">
              From R&D to commercial operations, we provide learning programs that support your organization's mission to improve patient health outcomes.
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

