import { Check } from 'lucide-react';

export function ThrivingInDisruption() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Thriving in<br />Disruption
            </h2>
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Introductory Text */}
            <div className="mb-8">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Change is a constant force that organizations must navigate with purpose and agility. 
                Our people-centric change management solutions help you transform your organization 
                while maintaining productivity and employee engagement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Embrace continual transformation and build resilience for the future. Connect with 
                our experts to explore how we can support your change journey.
              </p>
            </div>

            {/* Key Aspects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column Bullet Points */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Seamless Transition</h3>
                    <p className="text-gray-600 text-sm">
                      Navigate complex organizational changes with minimal disruption to daily 
                      operations and productivity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Risk Mitigation</h3>
                    <p className="text-gray-600 text-sm">
                      Identify and address potential obstacles early, ensuring smoother 
                      implementation of change initiatives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Sustainable Transformation</h3>
                    <p className="text-gray-600 text-sm">
                      Develop internal capabilities to manage ongoing change, creating a more 
                      adaptable and resilient organization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column Bullet Points */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Employee Engagement</h3>
                    <p className="text-gray-600 text-sm">
                      Boost buy-in and reduce resistance through targeted communication and 
                      involvement strategies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Accelerated Adoption</h3>
                    <p className="text-gray-600 text-sm">
                      Speed up the acceptance and integration of new processes, technologies, 
                      or structures across your organization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Measurable Change Impact</h3>
                    <p className="text-gray-600 text-sm">
                      Implement KPIs and analytics to quantify the success of change initiatives 
                      and their impact on business outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
