export function SolutionsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Strategic Change Solutions for Your Needs
          </h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            At Infopro, we are dedicated to driving successful change precisely when and where it is most critical, ensuring seamless transitions and impactful results.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Transformational Change */}
          <div className="bg-white border-t-4 border-purple-600 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
                alt="Transformational Change"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Transformational Change</h3>
              <p className="text-gray-700 leading-relaxed">
                Drive successful business acquisitions, expansions, and product launches with strategic change management that ensures smooth transitions and positive outcomes.
              </p>
            </div>
          </div>

          {/* Cultural Change */}
          <div className="bg-white border-t-4 border-purple-600 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop"
                alt="Cultural Change"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Cultural Change</h3>
              <p className="text-gray-700 leading-relaxed">
                Facilitate the adoption of new working methods and mindsets to build a stronger, more connected organizational culture and improve team cohesion.
              </p>
            </div>
          </div>

          {/* Large-Scale IT Implementations */}
          <div className="bg-white border-t-4 border-purple-600 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
                alt="Large-Scale IT Implementations"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Large-Scale IT Implementations</h3>
              <p className="text-gray-700 leading-relaxed">
                Optimize user adoption, reduce implementation costs, and streamline project timelines to achieve impactful results from your IT initiatives.
              </p>
            </div>
          </div>

          {/* Organization Design and Restructuring */}
          <div className="bg-white border-t-4 border-purple-600 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=250&fit=crop"
                alt="Organization Design and Restructuring"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Organization Design and Restructuring</h3>
              <p className="text-gray-700 leading-relaxed">
                Accelerate and refine your organizational operations to ensure efficient, seamless integration of new processes and structures.
              </p>
            </div>
          </div>

          {/* Managing Disruptive Change */}
          <div className="bg-white border-t-4 border-purple-600 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop"
                alt="Managing Disruptive Change"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Managing Disruptive Change</h3>
              <p className="text-gray-700 leading-relaxed">
                Navigate the challenges of market competition or new technologies that disrupt your business model, with strategies designed to adapt and thrive.
              </p>
            </div>
          </div>

          {/* Establishing Change Agility */}
          <div className="bg-white border-t-4 border-purple-600 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop"
                alt="Establishing Change Agility"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Establishing Change Agility</h3>
              <p className="text-gray-700 leading-relaxed">
                Build a culture of flexibility and responsiveness, enabling your organization to handle change effectively and maintain a competitive edge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
