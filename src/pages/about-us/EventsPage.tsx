import ContactForm from '../../components/Hero/ContactForm';

export function EventsPage() {
  return (
    <main className="pt-24 section-responsive">
      <section className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Events & Webinars</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us at upcoming events and webinars to learn about the latest trends and innovations in learning and development.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {[
            { title: "Future of AI in Learning", date: "December 10, 2024", time: "2:00 PM EST", type: "Webinar", status: "Upcoming" },
            { title: "Learning & Development Summit", date: "January 15-17, 2025", time: "All Day", type: "Conference", status: "Upcoming" },
            { title: "Sales Training for Non-Sales People", date: "November 13, 2024", time: "1:00 PM EST", type: "Webinar", status: "Upcoming" },
            { title: "Digital Transformation in L&D", date: "October 25, 2024", time: "3:00 PM EST", type: "Webinar", status: "Past" },
            { title: "Annual Learning Conference", date: "September 20-22, 2024", time: "All Day", type: "Conference", status: "Past" },
            { title: "Leadership Development Workshop", date: "August 15, 2024", time: "10:00 AM EST", type: "Workshop", status: "Past" },
          ].map((event, index) => (
            <div key={index} className={`bg-white border-2 rounded-lg p-6 hover:shadow-md transition-shadow ${event.status === 'Upcoming' ? 'border-purple-200' : 'border-gray-200'}`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.status === 'Upcoming' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {event.status}
                    </span>
                    <span className="text-sm font-medium text-purple-600">{event.type}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <span>📅 {event.date}</span>
                    <span>🕐 {event.time}</span>
                  </div>
                </div>
                <div>
                  {event.status === 'Upcoming' ? (
                    <a href="#" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 inline-block">
                      Register Now
                    </a>
                  ) : (
                    <a href="#" className="text-purple-600 font-medium hover:text-purple-700">
                      Watch Recording →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to receive notifications about upcoming events and webinars.
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

