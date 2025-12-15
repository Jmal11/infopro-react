import ContactForm from '../../components/Hero/ContactForm';

export function CaseStudiesPage() {
  return (
    <main className="pt-24 section-responsive">
      <section className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our success stories and see how we've helped organizations transform their learning and development programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Case Study {item}</h3>
                <p className="text-gray-600 mb-4">
                  Learn how we helped a leading organization achieve remarkable results through innovative learning solutions.
                </p>
                <a href="#" className="text-purple-600 font-medium hover:text-purple-700">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Success Story?</h2>
          <p className="text-gray-600 mb-6">
            Contact us today to learn how we can help transform your organization's learning and development.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-[1280px] mt-16">
        <ContactForm />
      </section>
    </main>
  );
}

