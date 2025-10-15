import { Play } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-gray-800 h-[90vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section - Text Content */}
          <div className="text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Organizational Change Management
            </h1>
            <p className="text-lg lg:text-xl mb-6 text-gray-300">
              Transform with purpose and agility
            </p>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300">
              CONNECT WITH US
            </button>
          </div>

          {/* Right Section - Video/Image */}
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-orange-600"></div>
              
              {/* Dan Rust Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-60 h-60 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Dan Rust"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Play Button */}
              <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-purple-600 ml-1" fill="currentColor" />
                </button>
              </div>

              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-1">Dan Rust</h3>
                <p className="text-sm opacity-90">
                  Head of Global Leadership and Organizational Development, Infopro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
