import React from 'react';

export function TrainingNeedsAnalysisHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[500px]"
      style={{ backgroundImage: "url('https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/training-need-analysis-banner.webp')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
        <div className="container mx-auto px-4 text-white max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Training Needs Analysis</h1>
          <p className="mb-6 text-lg">
            Bridge skills gaps efficiently with insightful training needs analysis
          </p>
          <button className="border border-white px-6 py-2 uppercase font-semibold hover:bg-white hover:text-black transition">
            CONNECT WITH US
          </button>
        </div>
      </div>
    </section>
  );
}
