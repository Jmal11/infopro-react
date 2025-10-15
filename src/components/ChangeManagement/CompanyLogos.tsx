export function CompanyLogos() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* Colgate-Palmolive */}
          <div className="flex flex-col items-center">
            <div className="text-gray-800 font-bold text-2xl mb-1">CP</div>
            <div className="text-gray-600 text-xs font-medium">COLGATE-PALMOLIVE</div>
          </div>
          
          {/* REGENERON */}
          <div className="text-gray-800 font-bold text-xl">
            REGENERON
          </div>
          
          {/* Fresenius */}
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-1">
              <div className="w-6 h-1 bg-gray-800"></div>
              <div className="w-4 h-1 bg-gray-800"></div>
              <div className="w-5 h-1 bg-gray-800"></div>
            </div>
            <span className="text-gray-800 font-medium ml-2">Fresenius</span>
          </div>
          
          {/* Kenvue */}
          <div className="flex items-center">
            <div className="text-gray-800 font-bold text-2xl mr-2">K</div>
            <span className="text-gray-800 font-medium">kenvue</span>
          </div>
          
          {/* Nordea */}
          <div className="text-gray-800 font-bold text-xl">
            Nordea
          </div>
        </div>
      </div>
    </section>
  );
}
