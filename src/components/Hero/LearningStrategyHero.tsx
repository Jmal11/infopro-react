import React from 'react';

export function LearningStrategyHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[85vh] flex items-center"
      style={{
        backgroundImage:
          "url('https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Learning-Strategy-Banner-Img.webp')",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Left content */}
        <div className="max-w-lg text-white">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Learning Strategy
          </h1>
          <p className="mb-8 text-lg leading-relaxed">
            Evaluate, align, and strategize to maximize the<br />
            potential of your workforce
          </p>
          <button className="border-2 border-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition">
            CONNECT WITH US
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}