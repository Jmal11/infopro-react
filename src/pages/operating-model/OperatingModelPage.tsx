import { OperatingModelHeroSection } from '../../components/OperatingModel/OperatingModelHeroSection';
import { OperatingCompanyLogos } from '../../components/OperatingModel/OperatingCompanyLogos';
import { BusinessImpactSection } from '../../components/OperatingModel/BusinessImpactSection';
import { OperatingKPIsSection } from '../../components/OperatingModel/OperatingKPIsSection';
import { OperatingModelBlocksSection } from '../../components/OperatingModel/OperatingModelBlocksSection';
import { OperatingCTASection } from '../../components/OperatingModel/OperatingCTASection';

export default function OperatingModelPage() {
  return (
    <main className="pt-16">
      <OperatingModelHeroSection />
      <OperatingCompanyLogos />
      <BusinessImpactSection />
      <OperatingKPIsSection />
      <OperatingModelBlocksSection />
      <OperatingCTASection />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Operating Model Capabilities</h2>
          <p className="text-gray-600">More sections coming next...</p>
        </div>
      </div>
    </main>
  );
}
