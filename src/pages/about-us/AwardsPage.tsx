import ContactForm from '../../components/Hero/ContactForm';

export function AwardsPage() {
  return (
    <main className="pt-24 section-responsive">
      <section className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Awards & Recognition</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're honored to be recognized by industry leaders for our innovation, excellence, and impact in learning and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { title: "Best Learning Platform", year: "2024", organization: "Learning & Development Awards" },
            { title: "Innovation in Training", year: "2024", organization: "Training Industry" },
            { title: "Excellence in E-Learning", year: "2023", organization: "eLearning Guild" },
            { title: "Top Learning Provider", year: "2023", organization: "HR Tech Awards" },
            { title: "Best Customer Experience", year: "2023", organization: "Customer Success Awards" },
            { title: "Outstanding Achievement", year: "2022", organization: "Brandon Hall Group" },
          ].map((award, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h3>
              <p className="text-gray-600 mb-1">{award.organization}</p>
              <p className="text-sm text-gray-500">{award.year}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Recognition That Matters</h2>
          <p className="text-xl mb-6">
            These awards reflect our commitment to excellence and our clients' success. We're proud to be recognized by the industry's most respected organizations.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-[1280px] mt-16">
        <ContactForm />
      </section>
    </main>
  );
}

