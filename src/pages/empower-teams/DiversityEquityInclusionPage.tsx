import { DiversityEquityInclusionHero } from '../../components/Hero/DiversityEquityInclusionHero';
import { DiversityEquityInclusionPartnerLogos } from '../../components/Hero/DiversityEquityInclusionPartnerLogos';
// TODO: Add other DEI-specific sections as needed
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../../components/Hero/ContactForm';
import { DiversityEquityInclusionContent } from '../../components/Hero/DiversityEquityInclusionContent';
import { DiversityEquityInclusionJourney } from '../../components/Hero/DiversityEquityInclusionJourney';
import { EarlyCareerDevelopmentLearningExperience } from '../../components/Hero/EarlyCareerDevelopmentLearningExperience';
import { DiversityEquityInclusionProgramAudience } from '../../components/Hero/DiversityEquityInclusionProgramAudience';
import { DiversityEquityInclusionStats } from '../../components/Hero/DiversityEquityInclusionStats';
import { DiversityEquityInclusionTestimonial } from '../../components/Hero/DiversityEquityInclusionTestimonial';
import { DiversityEquityInclusionCertificate } from '../../components/Hero/DiversityEquityInclusionCertificate';

export function DiversityEquityInclusionPage() {
  return (
    <main className="section-responsive">
      <DiversityEquityInclusionHero />
      <DiversityEquityInclusionPartnerLogos />
      <DiversityEquityInclusionContent />
      <DiversityEquityInclusionJourney />
      <EarlyCareerDevelopmentLearningExperience />
      <DiversityEquityInclusionProgramAudience />
      <DiversityEquityInclusionStats />
      <DiversityEquityInclusionTestimonial />
      <DiversityEquityInclusionCertificate />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
    </main>
  );
} 