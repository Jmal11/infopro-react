export function LmsAdministrationHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage:
          "url('https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/learning-administration-banner.webp')",
        height: '85vh',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl text-white text-left">
          <h1 className="text-5xl font-bold mb-4">
            Full Spectrum LMS<br />
            Administration Services
          </h1>
          <p className="text-lg mb-2">
            Certified experts for seamless LMS administration.
          </p>
          <p className="text-lg mb-6">
            All platforms, global reach, on-demand support
          </p>
          <button className="border border-white px-8 py-3 text-sm font-semibold tracking-wider uppercase rounded hover:bg-white hover:text-black transition">
            CONNECT WITH US
          </button>
        </div>
      </div>
    </section>
  );
}