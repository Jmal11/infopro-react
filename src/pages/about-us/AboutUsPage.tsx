import ContactForm from '../../components/Hero/ContactForm';

export function AboutUsPage() {
  return (
    <main className="pt-24 section-responsive">
      <section className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About InfoPro Learning</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading provider of learning and development solutions, helping organizations transform their workforce through innovative training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              To empower organizations worldwide by delivering exceptional learning experiences that drive performance, engagement, and business results.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be the most trusted partner in learning and development, recognized for innovation, excellence, and measurable impact.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span><strong>Innovation:</strong> Continuously evolving our solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span><strong>Excellence:</strong> Delivering quality in everything we do</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span><strong>Integrity:</strong> Building trust through transparency</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span><strong>Impact:</strong> Measuring and delivering real results</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-12 text-white text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Global Reach, Local Expertise</h2>
          <p className="text-xl mb-6">
            With offices across North America, Europe, and Asia, we serve clients worldwide while maintaining deep local market knowledge.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div>
              <div className="text-4xl font-bold">500+</div>
              <div className="text-sm opacity-90">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold">50+</div>
              <div className="text-sm opacity-90">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold">1000+</div>
              <div className="text-sm opacity-90">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold">20+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-[1280px] mt-16">
        <ContactForm />
      </section>
    </main>
  );
}

