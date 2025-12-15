import ContactForm from '../../components/Hero/ContactForm';

export function InsightsPage() {
  return (
    <main className="pt-24 section-responsive">
      <section className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Insights & Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest insights, research, and thought leadership in learning and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { title: "The Future of AI in Learning", category: "Technology", date: "Nov 15, 2024" },
            { title: "Building Effective Training Programs", category: "Best Practices", date: "Nov 10, 2024" },
            { title: "Leadership Development Trends", category: "Leadership", date: "Nov 5, 2024" },
            { title: "Measuring Learning ROI", category: "Analytics", date: "Oct 30, 2024" },
            { title: "Remote Learning Strategies", category: "Training", date: "Oct 25, 2024" },
            { title: "Employee Engagement Through Learning", category: "Engagement", date: "Oct 20, 2024" },
          ].map((insight, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600"></div>
              <div className="p-6">
                <span className="text-sm font-medium text-purple-600">{insight.category}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-2">{insight.title}</h3>
                <p className="text-gray-600 mb-4">
                  Discover key insights and actionable strategies to enhance your organization's learning initiatives.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{insight.date}</span>
                  <a href="#" className="text-purple-600 font-medium hover:text-purple-700">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Stay Updated</h2>
          <p className="text-gray-600 text-center mb-6">
            Subscribe to our newsletter to receive the latest insights and resources directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-[1280px] mt-16">
        <ContactForm />
      </section>
    </main>
  );
}

