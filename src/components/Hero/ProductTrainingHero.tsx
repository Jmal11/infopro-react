import React from 'react';

export function ProductTrainingHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[85VH] flex items-center"
      style={{ backgroundImage: "url('https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Product_training_banner.webp')" }}
    >
      <div className="absolute inset-0"></div>
      <div className="container mx-auto px-4 flex items-center h-full relative z-10">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl font-bold mb-4">Product Training</h1>
          <p className="mb-6 text-xl font-normal">
          Prepare your teams, partners, and clients with
deep product knowledge for success
          </p>
          <a href="/contact" className="inline-block border border-white px-8 py-3 font-semibold rounded transition hover:bg-white hover:text-black text-lg">
            CONNECT WITH US
          </a>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute left-1/2 bottom-6 -translate-x-1/2 flex flex-col items-center z-10">
        <svg width="24" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="22" height="34" rx="11" stroke="#fff" strokeWidth="2" />
          <circle cx="12" cy="10" r="3" fill="#fff">
            <animate attributeName="cy" values="10;26;10" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </section>
  );
}

export default ProductTrainingHero; 