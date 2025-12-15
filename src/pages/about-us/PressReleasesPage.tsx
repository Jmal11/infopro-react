import ContactForm from '../../components/Hero/ContactForm';

export function PressReleasesPage() {
  return (
    <main className="pt-24 section-responsive">
      <section className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Press Releases</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, announcements, and updates from InfoPro Learning.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {[
            { title: "InfoPro Learning Launches New AI-Powered Learning Platform", date: "November 15, 2024", category: "Product Launch" },
            { title: "Company Wins Prestigious Learning & Development Award", date: "October 20, 2024", category: "Awards" },
            { title: "Partnership Announcement with Leading Technology Provider", date: "September 10, 2024", category: "Partnerships" },
            { title: "Expansion into European Markets", date: "August 5, 2024", category: "Company News" },
            { title: "New Research Study on Future of Workplace Learning", date: "July 18, 2024", category: "Research" },
            { title: "Major Client Success Story: 300% ROI Achieved", date: "June 12, 2024", category: "Success Stories" },
          ].map((release, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <span className="text-sm font-medium text-purple-600 mb-2 inline-block">{release.category}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{release.title}</h3>
                  <p className="text-gray-600">
                    Read the full press release to learn more about this exciting development and what it means for our clients and the industry.
                  </p>
                </div>
                <div className="flex flex-col md:items-end gap-2">
                  <span className="text-sm text-gray-500">{release.date}</span>
                  <a href="#" className="text-purple-600 font-medium hover:text-purple-700">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Media Inquiries</h2>
          <p className="text-gray-600 mb-4">
            For media inquiries, please contact our communications team.
          </p>
          <a href="mailto:media@infoprolearning.com" className="text-purple-600 font-medium hover:text-purple-700">
            media@infoprolearning.com
          </a>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-[1280px] mt-16">
        <ContactForm />
      </section>
    </main>
  );
}

