import React from 'react';

const heroBg = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80'; // Placeholder background
const heroImg = 'https://randomuser.me/api/portraits/women/65.jpg'; // Placeholder right-side image

export function ProductTrainingHero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center bg-gray-900 overflow-hidden">
      {/* Background */}
      <img src={heroBg} alt="Office background" className="absolute inset-0 w-full h-full object-cover object-center opacity-70 blur-sm" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 flex w-full h-full items-center justify-between px-12 pt-16">
        {/* Left: Text */}
        <div className="max-w-xl text-white flex flex-col gap-6">
          <h1 className="text-5xl font-bold leading-tight">Product Training</h1>
          <p className="text-lg">Prepare your teams, partners, and clients with deep product knowledge for success</p>
          <button className="mt-4 px-8 py-3 bg-black border border-white text-white font-semibold rounded transition hover:bg-gray-800">CONNECT WITH US</button>
        </div>
        {/* Right: Image */}
        <div className="hidden md:block">
          <img src={heroImg} alt="Professional woman" className="w-80 h-80 object-cover rounded-xl shadow-lg border-4 border-white" />
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
        <svg className="mt-1 w-4 h-4 text-white animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </div>
    </section>
  );
}

export default ProductTrainingHero; 