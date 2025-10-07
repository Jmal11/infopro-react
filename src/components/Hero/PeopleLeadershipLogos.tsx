import React from 'react';

const PeopleLeadershipLogos = () => {
  return (
    <div className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-x-16 gap-y-6">
        <img
          src="/logos/delta.svg"
          alt="Delta"
          className="h-10 grayscale opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
          loading="lazy"
        />
        <img
          src="/logos/unilever.svg"
          alt="Unilever"
          className="h-10 grayscale opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
          loading="lazy"
        />
        <img
          src="/logos/novartis.svg"
          alt="Novartis"
          className="h-10 grayscale opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
          loading="lazy"
        />
        <img
          src="/logos/exelon.svg"
          alt="Exelon"
          className="h-10 grayscale opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
          loading="lazy"
        />
        <img
          src="/logos/pwc.svg"
          alt="PwC"
          className="h-10 grayscale opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default PeopleLeadershipLogos;
