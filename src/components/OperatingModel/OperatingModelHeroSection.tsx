export function OperatingModelHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
      {/* Background image - replace with final asset when ready */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
          alt="Operating Model Background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Operating Model Transformation
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Redesign structures, processes, and capabilities to deliver scalable, efficient performance.
          </p>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
            CONNECT WITH US
          </button>
        </div>
      </div>
    </section>
  );
}
