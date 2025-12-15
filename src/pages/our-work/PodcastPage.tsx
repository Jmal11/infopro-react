import ContactForm from '../../components/Hero/ContactForm';

export function PodcastPage() {
  return (
    <main className="pt-24 section-responsive">
      <section className="container mx-auto px-4 max-w-[1280px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">L&D Podcast by Nolan Hout</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for insightful conversations about learning and development, featuring industry experts and thought leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[1, 2, 3, 4].map((episode) => (
            <div key={episode} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Episode {episode}: The Future of Learning</h3>
                  <p className="text-gray-600 mb-3">
                    In this episode, we explore the latest trends and innovations shaping the future of corporate learning.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>45 min</span>
                    <span>•</span>
                    <span>Nov 2024</span>
                  </div>
                  <a href="#" className="text-purple-600 font-medium hover:text-purple-700 mt-3 inline-block">
                    Listen Now →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Podcast</h2>
          <p className="mb-6">Stay updated with the latest episodes and insights from the world of L&D.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
              Apple Podcasts
            </a>
            <a href="#" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
              Spotify
            </a>
            <a href="#" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
              Google Podcasts
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-[1280px] mt-16">
        <ContactForm />
      </section>
    </main>
  );
}

