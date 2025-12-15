import ContactForm from '../../components/Hero/ContactForm';

export function CareersPage() {
  return (
    <main className="pt-24 section-responsive">
      <section className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Careers at InfoPro Learning</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team and help shape the future of learning and development. We're looking for passionate individuals who want to make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            { title: "Senior Learning Designer", location: "Remote", department: "Design" },
            { title: "Learning Solutions Consultant", location: "New York, NY", department: "Sales" },
            { title: "Full Stack Developer", location: "Remote", department: "Technology" },
            { title: "Project Manager", location: "Princeton, NJ", department: "Operations" },
            { title: "Content Developer", location: "Remote", department: "Content" },
            { title: "Business Development Manager", location: "London, UK", department: "Sales" },
          ].map((job, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
              <div className="flex items-center gap-4 text-gray-600 mb-4">
                <span>📍 {job.location}</span>
                <span>•</span>
                <span>{job.department}</span>
              </div>
              <p className="text-gray-600 mb-4">
                We're looking for a talented professional to join our team and help deliver exceptional learning solutions to our clients.
              </p>
              <a href="#" className="text-purple-600 font-medium hover:text-purple-700">
                Learn More & Apply →
              </a>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
              <p>Advance your career with continuous learning and development opportunities.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
              <p>Make a difference by helping organizations worldwide transform their workforce.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2">Flexible Work</h3>
              <p>Enjoy remote work options and flexible schedules that fit your lifestyle.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't See the Right Role?</h2>
          <p className="text-gray-600 mb-6">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a href="mailto:careers@infoprolearning.com" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 inline-block">
            Send Your Resume
          </a>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-[1280px] mt-16">
        <ContactForm />
      </section>
    </main>
  );
}

