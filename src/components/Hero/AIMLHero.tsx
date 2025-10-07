import React from 'react';

export function AIMLHero() {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex items-center rounded-3xl mb-12 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        alt="AI Mastery for Business Leaders"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-between">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            AI Mastery for <br /> Business Leaders
          </h1>
          <p className="text-lg mb-8">
            Navigating Strategy, Innovation, and Ethics in the AI/ML Era
          </p>
          <button className="border border-white text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-white hover:text-gray-900 transition duration-300">
            CONNECT WITH US
          </button>
        </div>
        <div className="hidden md:block max-w-md">
          <img
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Business Leaders"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

export default AIMLHero;
