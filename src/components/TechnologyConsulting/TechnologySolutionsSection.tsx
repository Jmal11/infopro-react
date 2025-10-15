export function TechnologySolutionsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Learning Technology Consulting Solutions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Every organization’s learning technology needs are unique. We help you overcome challenges like new tech
            adoption, platform selection, LMS integration, data security, and maintaining a seamless user experience.
            Our experts help create multi-year technology plans aligned with your business goals. Here’s how:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div>
            <div className="rounded shadow-sm overflow-hidden border-t-4 border-purple-600 mb-4">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&h=600&fit=crop"
                alt="Integrated Learning Platforms"
                className="w-full h-64 object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Integrated Learning Platforms</h3>
            <p className="text-gray-700">
              Build a unified learning platform by integrating top technologies. Focus on creating a cohesive and
              efficient learning ecosystem.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <div className="rounded shadow-sm overflow-hidden border-t-4 border-purple-600 mb-4">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&h=600&fit=crop"
                alt="Optimized LMS Solutions"
                className="w-full h-64 object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Optimized LMS Solutions</h3>
            <p className="text-gray-700">
              Transform your LMS into a high-performing learning hub. With extensive learning tech expertise, we tailor
              your LMS for maximum impact and measurable outcomes.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <div className="rounded shadow-sm overflow-hidden border-t-4 border-purple-600 mb-4">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=900&h=600&fit=crop"
                alt="Advanced Mobile Learning"
                className="w-full h-64 object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Advanced Mobile Learning</h3>
            <p className="text-gray-700">
              Equip your team with on‑demand knowledge. Provide concise content, accessible through any device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
