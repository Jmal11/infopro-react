import React from 'react';

export function LearningStrategyHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[51vw] flex items-center"
      style={{
        backgroundImage:
          "url('https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Learning-Strategy-Banner-Img.webp')",
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left content */}
        <div className="max-w-lg text-white">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            The Future of Learning <br /> and Development
          </h1>
          <p className="mb-6 text-lg">
            Your strategic path to transform enterprise learning
          </p>
          <button className="border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition">
            CONNECT WITH US
          </button>
        </div>

        {/* Right content - video thumbnail with play button */}
       
      </div>
    </section>
  );
}
