import React from 'react';

export function VanguardLeadershipHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1470&q=80')" }}
    >
      <div className="container mx-auto px-4 flex items-center h-full">
        <div className="max-w-lg text-white">
          <h1 className="text-4xl font-bold mb-4">Building Impactful Leaders</h1>
          <p className="mb-6 text-lg">
            Tailored leadership training programs for the modern business world
          </p>
          <button className="border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition">
            CONNECT WITH US
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
}
