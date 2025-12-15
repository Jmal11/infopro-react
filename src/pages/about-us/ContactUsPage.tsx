import ContactForm from '../../components/Hero/ContactForm';

export function ContactUsPage() {
  return (
    <main className="pt-24 section-responsive">
      <section className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team. We're here to help you transform your learning and development programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📧</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Send us an email anytime</p>
            <a href="mailto:info@infoprolearning.com" className="text-purple-600 font-medium hover:text-purple-700">
              info@infoprolearning.com
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak with our team</p>
            <a href="tel:+16096069984" className="text-purple-600 font-medium hover:text-purple-700">
              +1 (609) 606-9984
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-4">Our headquarters</p>
            <p className="text-gray-600 text-sm">
              4390 Route 1 North<br />
              Suite 302<br />
              Princeton, NJ 08540
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Office Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: "New Jersey", country: "USA" },
              { city: "New York", country: "USA" },
              { city: "London", country: "UK" },
              { city: "Singapore", country: "Singapore" },
              { city: "Toronto", country: "Canada" },
              { city: "Noida", country: "India" },
              { city: "Pune", country: "India" },
              { city: "Dubai", country: "UAE" },
            ].map((office, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center">
                <h4 className="font-semibold text-gray-900">{office.city}</h4>
                <p className="text-sm text-gray-600">{office.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-[1280px]">
        <ContactForm />
      </section>
    </main>
  );
}

