export function OperatingCompanyLogos() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {/* Orica */}
          <div className="flex items-center gap-2 text-gray-800">
            <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center text-xs font-bold">O</div>
            <span className="font-semibold tracking-wide">ORICA</span>
          </div>

          {/* Cherwell */}
          <div className="text-gray-800 font-bold text-xl">
            cherwell
          </div>

          {/* Nordea */}
          <div className="text-gray-800 font-bold text-xl">
            Nordea
          </div>

          {/* Bayer */}
          <div className="w-14 h-14 rounded-full border-2 border-gray-400 flex items-center justify-center">
            <div className="text-center text-gray-800 text-xs leading-tight">
              <div>B</div>
              <div>A</div>
              <div>Y</div>
              <div>E</div>
              <div>R</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
