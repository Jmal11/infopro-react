import React from 'react';
import { Link } from 'react-router-dom';

export function PerformanceConsultingHero() {
  return (
    <section
      className="relative bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')" }}
    >
      <div className="bg-black bg-opacity-70 min-h-[500px] flex items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Performance Consulting
            </h1>
            <p className="text-lg mb-8">
              Elevate performance. Accelerate results.
            </p>
            <Link
              to="/contact"
              className="inline-block border border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
            >
              CONNECT WITH US
            </Link>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
              alt="Performance Consulting"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
