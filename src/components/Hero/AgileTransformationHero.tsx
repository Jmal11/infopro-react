import React from 'react';

export function AgileTransformationHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#222] pt-20">
      {/* Background Image with vertical light strips effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')",
          filter: 'blur(2px) brightness(0.4)'
        }}
      />
      
      {/* Vertical light strips overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-0 w-px h-full bg-white"></div>
        <div className="absolute left-1/2 top-0 w-px h-full bg-white"></div>
        <div className="absolute right-1/4 top-0 w-px h-full bg-white"></div>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Agile Transformation
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
                Strategic, nimble, and long-term metamorphosis for accelerated growth
              </p>
            </div>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 bg-transparent">
              CONNECT WITH US
            </button>
          </div>
          
          {/* Right Side - Image Content */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80"
                alt="Professional woman working with technology"
                className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover"
              />
              
              {/* Subtle overlay on image */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm opacity-70">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgileTransformationHero;
