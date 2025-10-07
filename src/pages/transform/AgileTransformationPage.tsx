import { PageHeader } from '../../components/PageHeader';
import { ArrowRight, Zap, RefreshCw, TrendingUp } from 'lucide-react';

export function AgileTransformationPage() {
  return (
    <main className="pt-16">
      <PageHeader
        title="Agile Enterprise Transformation"
        description="Transform your organization with agile methodologies and mindset"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl mb-12">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
            alt="Agile Transformation"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
            <div className="text-white max-w-2xl p-12">
              <h2 className="text-4xl font-bold mb-4">
                Accelerate Your Digital Transformation
              </h2>
              <p className="text-xl mb-6">
                Embrace agile methodologies to drive innovation, improve responsiveness,
                and deliver value faster in today's dynamic business environment.
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                Start Your Agile Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Agile Transformation Approach */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Our Agile Transformation Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Assess & Plan</h3>
              <p className="text-gray-600">
                Evaluate current processes and develop a comprehensive agile transformation roadmap.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Train & Coach</h3>
              <p className="text-gray-600">
                Build agile capabilities across teams with expert coaching and certification programs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Implement & Scale</h3>
              <p className="text-gray-600">
                Roll out agile practices incrementally and scale successful patterns enterprise-wide.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimize & Sustain</h3>
              <p className="text-gray-600">
                Continuously improve agile practices and embed them in organizational culture.
              </p>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Zap className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Faster Time-to-Market</h3>
            <p className="text-gray-600">
              Deliver products and features more quickly with iterative development and continuous delivery.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <RefreshCw className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Increased Adaptability</h3>
            <p className="text-gray-600">
              Respond rapidly to market changes and customer feedback with flexible agile processes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <TrendingUp className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Higher Quality</h3>
            <p className="text-gray-600">
              Improve product quality through continuous testing, feedback, and incremental improvements.
            </p>
          </div>
        </div>

        {/* Agile Principles */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Agile Principles We Follow</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
              <p className="text-gray-700">Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.</p>
            </div>
            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
              <p className="text-gray-700">Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.</p>
            </div>
            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
              <p className="text-gray-700">Deliver working software frequently, from a couple of weeks to a couple of months, with a preference for shorter timescales.</p>
            </div>
            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
              <p className="text-gray-700">Business people and developers must work together daily throughout the project.</p>
            </div>
            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
              <p className="text-gray-700">Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.</p>
            </div>
            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">6</div>
              <p className="text-gray-700">The most efficient and effective method of conveying information is face-to-face conversation.</p>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Transformation Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                  alt="Success Story 1"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">Global Financial Services</h3>
                  <p className="text-gray-600">Digital Banking Transformation</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Agile transformation helped us reduce time-to-market by 60% and improve
                customer satisfaction scores by 40% through iterative development and
                cross-functional teams."
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg"
                  alt="Success Story 2"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">Manufacturing Company</h3>
                  <p className="text-gray-600">Product Development Overhaul</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Implementing agile methodologies transformed our product development process,
                resulting in 50% faster innovation cycles and significantly improved team morale."
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary rounded-2xl p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Embrace Agile Transformation?</h2>
            <p className="text-lg mb-8">
              Let's assess your organization's readiness and create a customized agile transformation
              plan that drives real results and sustainable change.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Your Assessment
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
