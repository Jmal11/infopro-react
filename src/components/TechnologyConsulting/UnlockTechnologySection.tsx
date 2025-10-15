export function UnlockTechnologySection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Heading */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Unlocking the Power
              <br />
              of Technology for
              <br />
              Learning Success
            </h2>
          </div>

          {/* Right: Copy */}
          <div>
            <p className="text-gray-700 leading-relaxed">
              Effective use of technology is crucial to transforming the learning experience. At Infopro, we provide
              Learning Technology Consulting services designed to enhance your current learning ecosystem. Our
              expertise spans from strategic development to seamless platform integration, ensuring you get the
              most out of your technology investments. Stay competitive and meet the changing needs of your
              workforce with our tailored, innovative solutions. Partner with us to elevate your learning platforms and
              achieve superior training outcomes.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-14">
          <div className="border-t pt-6">
            <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">1Billion</div>
            <p className="text-gray-700 text-sm">Jobs Transformed by AI</p>
          </div>
          <div className="border-t pt-6">
            <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">90%</div>
            <p className="text-gray-700 text-sm">Companies face skills gap</p>
          </div>
          <div className="border-t pt-6">
            <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">$6.5</div>
            <p className="text-gray-700 text-sm">Trillion cost of skills gap</p>
          </div>
          <div className="border-t pt-6">
            <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">4 in 5</div>
            <p className="text-gray-700 text-sm">Seek AI skills</p>
          </div>
          <div className="border-t pt-6">
            <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">85%</div>
            <p className="text-gray-700 text-sm">HR executives planning workflow changes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
