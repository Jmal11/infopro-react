import { ChevronDown } from 'lucide-react';

export function TechnologyHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
          alt="Modern Office Background"
          className="w-full h-full object-cover filter blur-sm brightness-50"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Learning Technology<br />Consulting
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-300">
              Elevate your learning landscape with innovative tech solutions.
            </p>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              CONNECT WITH US
            </button>
          </div>

          {/* Right Section - Woman Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=800&fit=crop&crop=face"
                alt="Technology Consulting Professional"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              {/* Subtle overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white opacity-80">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mb-2">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
