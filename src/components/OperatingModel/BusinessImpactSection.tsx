import { Check } from 'lucide-react';

export function BusinessImpactSection() {
  const Item = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="flex items-start gap-3">
      <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-600 text-white">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-start">
          {/* Left heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Driving Business
            <br />
            Impact Through
            <br />
            Strategic Learning
          </h2>

          {/* Right intro */}
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The rapid pace of technological advancements and evolving labor markets is quickly making technical and
              specialized skills obsolete, putting pressure on businesses and L&D teams to address skilling needs. The
              traditional L&D organizational structure and processes prevent the ability to quickly scale and respond to
              business demands while also making it challenging for L&D teams to demonstrate measurable business impact.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our proven six-capability model helps L&D organizations transform their operations and move up on the L&D
              maturity scale. Transformed L&D organizations have demonstrated 60% more business impact, at least 30%
              more efficiency and much more nimbleness in responding to business needs. Partnering with us ensures your
              business stays ahead of the curve, leveraging innovative strategies to achieve measurable results.
            </p>
          </div>
        </div>

        {/* Bullets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <Item title="Agile Skill Development:">
              Rapidly adapt learning programs to address evolving technical and specialized skill needs in a fast-changing
              business landscape.
            </Item>
            <Item title="Measurable Impact:">
              Implement systems to clearly demonstrate L&D's contribution to business outcomes, with up to 60% more
              visible impact.
            </Item>
            <Item title="Maturity Acceleration:">
              Advance your L&D function's maturity level, positioning it as a strategic business partner rather than a
              support function.
            </Item>
          </div>

          <div className="space-y-8">
            <Item title="Enhanced Business Alignment:">
              Restructure L&D processes to quickly respond and scale to meet urgent business requirements.
            </Item>
            <Item title="Operational Efficiency:">
              Achieve at least 30% improvement in L&D efficiency through our proven six-capability model.
            </Item>
            <Item title="Future-Ready Learning Ecosystem:">
              Develop a nimble L&D infrastructure capable of anticipating and addressing emerging skill gaps and business
              challenges.
            </Item>
          </div>
        </div>
      </div>
    </section>
  );
}
