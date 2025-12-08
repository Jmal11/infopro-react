// Placeholder imports for now; replace with actual components as needed
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../../components/Hero/ContactForm';
import { SalesTrainingEnablementHero } from '../../components/Hero/SalesTrainingEnablementHero';
import { SalesTrainingEnablementPartnerLogos } from '../../components/Hero/SalesTrainingEnablementPartnerLogos';
import { SalesTrainingEnablementContent } from '../../components/Hero/SalesTrainingEnablementContent';
import { SalesTrainingEnablementStats } from '../../components/Hero/SalesTrainingEnablementStats';
import { SalesTrainingEnablementTestimonial } from '../../components/Hero/SalesTrainingEnablementTestimonial';
import { SalesTrainingEnablementRealApproach } from '../../components/Hero/SalesTrainingEnablementRealApproach';
import { SalesTrainingEnablementPortfolio } from '../../components/Hero/SalesTrainingEnablementPortfolio';

export function SalesTrainingEnablementPage() {
  return (
    <main className="">
      <SalesTrainingEnablementHero />
      <SalesTrainingEnablementPartnerLogos />
      <SalesTrainingEnablementContent />
      <SalesTrainingEnablementStats />
      <SalesTrainingEnablementTestimonial />
      <SalesTrainingEnablementRealApproach />
      <SalesTrainingEnablementPortfolio />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
    </main>
  );
}

export default SalesTrainingEnablementPage; 