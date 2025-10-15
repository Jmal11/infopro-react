export function OperatingKPIsSection() {
  const Stat = ({ value, label }: { value: string; label: string }) => (
    <div className="text-center relative px-8">
      <div className="text-5xl font-bold text-purple-600 mb-3">{value}</div>
      <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-line">{label}</p>
    </div>
  );

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start gap-8">
          <div className="flex-1">
            <div className="border-l border-gray-300 pl-8">
              <Stat value="35%" label={"Reduction in\nL&D costs"} />
            </div>
          </div>
          <div className="flex-1">
            <div className="border-l border-gray-300 pl-8">
              <Stat value="25%" label={"Boost in\ntraining quality"} />
            </div>
          </div>
          <div className="flex-1">
            <div className="border-l border-gray-300 pl-8">
              <Stat value="98%" label={"SLA\ncompliance"} />
            </div>
          </div>
          <div className="flex-1">
            <div className="border-l border-gray-300 pl-8">
              <Stat value="20%" label={"Cut in operational\noverhead"} />
            </div>
          </div>
          <div className="flex-1">
            <div className="border-l border-gray-300 pl-8">
              <Stat value="30%" label={"per-learner\ncosts"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
