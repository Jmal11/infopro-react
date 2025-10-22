export function StatisticsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Stat 1 */}
          <div className="text-center relative">
            <div className="text-5xl lg:text-6xl font-bold text-primary mb-3">29%</div>
            <p className="text-gray-700 text-sm leading-relaxed">
              increase in employee engagement.
            </p>
            {/* Right divider */}
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gray-300"></div>
          </div>

          {/* Stat 2 */}
          <div className="text-center relative">
            <div className="text-5xl lg:text-6xl font-bold text-primary mb-3">50%</div>
            <p className="text-gray-700 text-sm leading-relaxed">
              higher employee retention rates.
            </p>
            {/* Right divider */}
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gray-300"></div>
          </div>

          {/* Stat 3 */}
          <div className="text-center relative">
            <div className="text-5xl lg:text-6xl font-bold text-primary mb-3">84%</div>
            <p className="text-gray-700 text-sm leading-relaxed">
              of employees in organizations that prioritize L&D during change report a significant improvement in their skills and competencies.
            </p>
            {/* Right divider */}
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gray-300"></div>
          </div>

          {/* Stat 4 */}
          <div className="text-center relative">
            <div className="text-5xl lg:text-6xl font-bold text-primary mb-3">37%</div>
            <p className="text-gray-700 text-sm leading-relaxed">
              increase in innovation.
            </p>
            {/* Right divider */}
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gray-300"></div>
          </div>

          {/* Stat 5 */}
          <div className="text-center">
            <div className="text-5xl lg:text-6xl font-bold text-primary mb-3">22%</div>
            <p className="text-gray-700 text-sm leading-relaxed">
              of organizations have a formalized succession planning process for critical roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
