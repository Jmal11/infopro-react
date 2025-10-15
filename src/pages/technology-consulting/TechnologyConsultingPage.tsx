import { TechnologyHeroSection } from '../../components/TechnologyConsulting/TechnologyHeroSection';
import { TechnologyCompanyLogos } from '../../components/TechnologyConsulting/TechnologyCompanyLogos';
import { UnlockTechnologySection } from '../../components/TechnologyConsulting/UnlockTechnologySection';
import { TechnologySolutionsSection } from '../../components/TechnologyConsulting/TechnologySolutionsSection';

export function TechnologyConsultingPage() {
  return (
    <main className="pt-16">
      <TechnologyHeroSection />
      <TechnologyCompanyLogos />
      <UnlockTechnologySection />
      <TechnologySolutionsSection />
      
      {/* Additional sections can be added here */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Technology Consulting Services
          </h2>
          <p className="text-gray-600 text-lg">
            More content sections will be added here...
          </p>
        </div>
      </div>
    </main>
  );
}
