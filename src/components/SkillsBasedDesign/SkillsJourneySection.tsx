export default function SkillsJourneySection() {
  const Item = ({ title, desc }: { title: string; desc: string }) => (
    <div className="space-y-3">
      <p className="text-sm text-gray-300 max-w-md">{desc}</p>
      <button className="text-xs uppercase tracking-widest text-gray-200 inline-flex items-center gap-2 group">
        {title}
        <span className="w-4 h-px bg-gray-400 group-hover:bg-white transition-colors" />
        <span className="text-primary group-hover:translate-x-0.5 transition-transform">→</span>
      </button>
    </div>
  );

  return (
    <section className="bg-[#1f1f1f] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Transform Your Talent Journey Through Skills</h2>
          <p className="text-gray-300 max-w-3xl">
            Strategic solutions that develop capabilities and advance careers at every stage of your employee journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <Item
            title="Recruiting"
            desc="Attracting, assessing, and hiring qualified candidates to fill vacancies – an end‑to‑end process from job posting to onboarding."
          />
          <Item
            title="Learning and Development"
            desc="Enhancing employees' skills and competencies through targeted training and career development initiatives."
          />
          <Item
            title="Performance Management"
            desc="Setting goals, measuring progress, and rewarding or correcting performance to drive growth."
          />
          <Item
            title="Career Pathing"
            desc="Planning and developing an employee's journey within the organization: potential roles, skills, and experiences."
          />
        </div>

        {/* simple stylized journey bar */}
        <div className="relative">
          <div className="h-6 rounded-full bg-gray-700/70" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" />
          <div className="absolute -top-3 left-1/3 w-6 h-6 rounded-full bg-primary shadow-lg" />
        </div>
      </div>
    </section>
  );
}
