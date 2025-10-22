export function FrameworkSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Infopro's Learning Organizational Change Management Framework
          </h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            At Infopro, we believe that successful change requires a holistic approach. That's why we employ the <strong>Integral Future Model</strong>, based on the comprehensive framework developed by Ken Wilber.
          </p>
        </div>

        {/* Central Diagram */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Top Left - Individual (Internal) */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100 relative">
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-primary rounded-full"></div>
              <h3 className="text-lg font-bold text-primary mb-3 border-b-2 border-primary pb-1 w-fit">
                Individual (Internal)
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Focusing on personal mindsets, beliefs, and emotions. We help individuals cultivate the right attitude and awareness to embrace change.
              </p>
            </div>

            {/* Top Right - Individual (External) */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100 relative">
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary rounded-full"></div>
              <h3 className="text-lg font-bold text-primary mb-3 border-b-2 border-primary pb-1 w-fit">
                Individual (External)
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ensuring that employees develop the necessary skills, behaviors, and capabilities to succeed in a new environment.
              </p>
            </div>

            {/* Bottom Left - Collective (Internal) */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100 relative">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"></div>
              <h3 className="text-lg font-bold text-primary mb-3 border-b-2 border-primary pb-1 w-fit">
                Collective (Internal)
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Shaping organizational culture and aligning shared values and group dynamics to support transformation.
              </p>
            </div>

            {/* Bottom Right - Collective (External) */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full"></div>
              <h3 className="text-lg font-bold text-primary mb-3 border-b-2 border-primary pb-1 w-fit">
                Collective (External)
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Addressing the external systems, structures, and processes that define the operational framework of the organization.
              </p>
            </div>
          </div>

          {/* Central Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-48 h-48 bg-purple-100 border-2 border-primary rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-6 h-6 bg-primary rounded-full mx-auto mb-2"></div>
                <h3 className="text-gray-800 font-bold text-lg leading-tight">
                  Integral<br />Future Model
                </h3>
              </div>
            </div>
          </div>

          {/* Connecting Lines */}
          {/* Top Left Line */}
          <div className="absolute top-1/4 left-1/4 w-24 h-24 border-l-2 border-t-2 border-purple-400 border-dotted"></div>
          
          {/* Top Right Line */}
          <div className="absolute top-1/4 right-1/4 w-24 h-24 border-r-2 border-t-2 border-purple-400 border-dotted"></div>
          
          {/* Bottom Left Line */}
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-l-2 border-b-2 border-purple-400 border-dotted"></div>
          
          {/* Bottom Right Line */}
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-r-2 border-b-2 border-purple-400 border-dotted"></div>
        </div>
      </div>
    </section>
  );
}
