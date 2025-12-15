import ContactForm from '../../components/Hero/ContactForm';

export function NonProfitPage() {
  return (
    <main className="pt-24 section-responsive">
      <section className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Non-Profit</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Affordable, impactful learning solutions designed specifically for non-profit organizations to maximize their mission impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Volunteer Training Programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Fundraising & Development Training</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Non-Profit Leadership Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Program Management Training</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span>Grant Writing & Compliance</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Supporting Non-Profits</h2>
            <p className="text-gray-700 mb-4">
              We understand the unique challenges and budget constraints facing non-profit organizations. Our solutions are designed to be cost-effective while delivering maximum impact.
            </p>
            <p className="text-gray-700">
              Our training programs help non-profits build capacity, improve operations, and enhance their ability to serve their communities effectively.
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

