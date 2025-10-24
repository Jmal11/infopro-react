export function LmsAdministrationHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[51vw] flex items-start justify-center"
      style={{
        backgroundImage:
          "url('https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/learning-administration-banner.webp')",
      }}
    >
      <div className="max-w-3xl bg-opacity-50 p-8 rounded-lg text-white text-left mt-16">
        <h1 className="text-4xl font-bold mb-4">Full Spectrum LMS Administration Services</h1>
        <p className="text-lg mb-6">
          Certified experts for seamless LMS administration. All platforms, global reach, on-demand support
        </p>
        <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
          Connect With Us
        </button>
      </div>
    </section>
  );
}
