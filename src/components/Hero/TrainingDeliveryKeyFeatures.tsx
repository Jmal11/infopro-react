import { Users, Target, BarChart3 } from 'lucide-react';

export function TrainingDeliveryKeyFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <Users className="w-12 h-12 text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-3">Expert Facilitators</h3>
        <p className="text-gray-600">
          Access our global network of certified trainers with deep industry expertise
          and proven track records.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <Target className="w-12 h-12 text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-3">Targeted Approach</h3>
        <p className="text-gray-600">
          Customized delivery methods aligned with your learning objectives and
          organizational culture.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <BarChart3 className="w-12 h-12 text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-3">Measurable Results</h3>
        <p className="text-gray-600">
          Track progress and ROI with comprehensive analytics and reporting
          capabilities.
        </p>
      </div>
    </div>
  );
}
