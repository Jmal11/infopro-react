export default function SkillsBasedDesignHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1920&h=1080&fit=crop"
          alt="Team collaborating"
          className="w-full h-full object-cover"
        />
        {/* Left dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white py-24">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            The Future is Skill-Based
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Empower your organization with the framework to identify, develop, and leverage critical skills.
          </p>
          <a
            href="/contact"
            className="inline-block border-2 border-white text-white px-8 py-4 rounded hover:bg-white hover:text-gray-900 transition-colors font-semibold"
          >
            CONNECT WITH US
          </a>
        </div>
      </div>
    </section>
  );
}
