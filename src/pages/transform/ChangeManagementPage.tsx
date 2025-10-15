import { HeroSection } from '../../components/ChangeManagement/HeroSection';
import { CompanyLogos } from '../../components/ChangeManagement/CompanyLogos';
import { ThrivingInDisruption } from '../../components/ChangeManagement/ThrivingInDisruption';
import { StatisticsSection } from '../../components/ChangeManagement/StatisticsSection';
import { FrameworkSection } from '../../components/ChangeManagement/FrameworkSection';
import { ProcessSection } from '../../components/ChangeManagement/ProcessSection';
import { SolutionsSection } from '../../components/ChangeManagement/SolutionsSection';
import { Workflow, Users, Target } from 'lucide-react';

export function ChangeManagementPage() {
  return (
    <main className="pt-16">
      <HeroSection />
      <CompanyLogos />
      <ThrivingInDisruption />
      <StatisticsSection />
      <FrameworkSection />
      <ProcessSection />
      <SolutionsSection />
      
      <div className="container mx-auto px-4 py-12">

        {/* Methodology Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Our Change Management Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Assess</h3>
              <p className="text-gray-600">
                Comprehensive analysis of your organization's readiness for change
                and potential impacts.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Plan</h3>
              <p className="text-gray-600">
                Develop detailed strategies and roadmaps tailored to your
                organization's needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Execute</h3>
              <p className="text-gray-600">
                Implement change initiatives with clear communication and
                stakeholder engagement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustain</h3>
              <p className="text-gray-600">
                Ensure long-term adoption and continuous improvement of
                new processes.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Workflow className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Process Excellence</h3>
            <p className="text-gray-600">
              Optimize workflows and processes to maximize efficiency and effectiveness
              during transformation.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Stakeholder Engagement</h3>
            <p className="text-gray-600">
              Build buy-in and support through effective communication and
              involvement strategies.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Target className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Impact Assessment</h3>
            <p className="text-gray-600">
              Measure and track the effectiveness of change initiatives through
              data-driven insights.
            </p>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                  alt="Success Story 1"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">Global Tech Company</h3>
                  <p className="text-gray-600">Digital Transformation</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The structured approach to change management helped us successfully
                implement new digital systems across 12 countries with minimal
                disruption to operations."
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
                  <h3 className="font-semibold">Healthcare Provider</h3>
                  <p className="text-gray-600">Process Optimization</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The change management program helped us achieve a 40% improvement
                in operational efficiency while maintaining high employee satisfaction."
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary rounded-2xl p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Organization?</h2>
            <p className="text-lg mb-8">
              Let's discuss how our change management solutions can help you achieve
              your transformation goals while maintaining business continuity.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}