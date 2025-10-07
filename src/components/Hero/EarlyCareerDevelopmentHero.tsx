import React from 'react';

export function EarlyCareerDevelopmentHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')" }}
    >
      <div className="container mx-auto px-4 flex items-center h-full">
        <div className="max-w-lg text-white">
          <h1 className="text-4xl font-bold mb-4">Early Career Development</h1>
          <p className="mb-6 text-lg">
            Equip your emerging leaders with essential skills and strategies to thrive in their roles
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
