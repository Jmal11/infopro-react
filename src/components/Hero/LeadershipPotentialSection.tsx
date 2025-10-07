import React from 'react';

export function LeadershipPotentialSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Elevate Your Leadership Potential</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In today's rapidly changing environment, effective leadership demands a diverse skill set, blending expertise, empathy, critical thinking, collaboration, and strategic vision. At Infopro Learning, we specialize in distilling these vital qualities into actionable programs tailored to your organization's unique needs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As experts in leadership development consulting, we provide a wide range of solutions tailored to your organizational needs. Whether you're starting out or enhancing existing skills, our customizable services offer cost-effective facilitators available on-demand, spanning various subjects, locations, and languages.
          </p>
        </div>

        {/* Right Video Thumbnail */}
        <div className="relative cursor-pointer">
          <img
            src="https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg"
            alt="Great Leadership is Evolving"
            className="w-full rounded shadow-lg"
          />
          <button
            aria-label="Play Video"
            className="absolute inset-0 flex items-center justify-center text-white text-6xl"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
