import { Check } from 'lucide-react';

export default function WhySkillBasedSection() {
  const Item = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="flex items-start gap-3">
      <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white">
        <Check className="w-3 h-3" />
      </span>
      <div>
        <p className="font-semibold text-gray-900 mb-1">{title}</p>
        <p className="text-gray-700 text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  );

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Heading */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Why Organizations Are
              <br />
              Going Skill-Based?
            </h2>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8">
            <p className="text-gray-700 leading-relaxed mb-8">
              In today's rapidly evolving business landscape, traditional role-based structures are giving way to
              dynamic, skill-based organizations. This transformation enables companies to adapt quickly, innovate
              consistently, and create an environment where both human talent and AI capabilities can thrive together.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Item title="Enhanced Talent Agility">
                  Organizations are <strong>107%</strong> more likely to place talent effectively when they can rapidly
                  form dynamic teams.
                </Item>
                <Item title="Improved Retention">
                  Skill-based organizations are <strong>98%</strong> more likely to retain high-performers through clear
                  growth pathways.
                </Item>
                <Item title="Better Employee Experience">
                  Create <strong>79%</strong> more positive workforce experiences through personalized skill-based
                  development opportunities.
                </Item>
              </div>

              <div className="space-y-6">
                <Item title="Future-Ready Performance">
                  With <strong>57%</strong> better change response, companies anticipate and adapt to market shifts more
                  effectively.
                </Item>
                <Item title="Increased Innovation">
                  Enable diverse skill combinations across traditional boundaries to accelerate creative problem-solving
                  and advancement.
                </Item>
                <Item title="Optimized Resources">
                  Deploy talent strategically by matching skills to needs, maximizing both efficiency and effectiveness.
                </Item>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
