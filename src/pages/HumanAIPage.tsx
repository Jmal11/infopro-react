import { HumanAIHero } from '../components/Hero/HumanAIHero';
import { HumanAIPartnerLogos } from '../components/Hero/HumanAIPartnerLogos';
import { HumanAISkillsSection } from '../components/Hero/HumanAISkillsSection';
import { HumanAIStatsSection } from '../components/Hero/HumanAIStatsSection';
import { HumanAIApproachSection } from '../components/Hero/HumanAIApproachSection';
import { HumanAIStrategySection } from '../components/Hero/HumanAIStrategySection';
import { AIDigitalSkillsAcademySection } from '../components/Hero/AIDigitalSkillsAcademySection';
import { VanguardSkillsCarousel } from '../components/Hero/VanguardSkillsCarousel';
import { AdoptionChangeManagementSection } from '../components/Hero/AdoptionChangeManagementSection';
import { SuccessStoriesSection } from '../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../components/Hero/ContactForm';

export function HumanAIPage() {
  return (
    <main className="pt-16 section-responsive">
      <HumanAIHero />
      <HumanAIPartnerLogos />
      <section className="container mx-auto px-4">
        <HumanAISkillsSection />
      </section>
      <HumanAIStatsSection />
      <HumanAIApproachSection />
      <HumanAIStrategySection />
      <section className="container mx-auto px-4">
        <AIDigitalSkillsAcademySection />
      </section>
      <section className="container mx-auto px-4">
        <VanguardSkillsCarousel />
      </section>
      <section className="container mx-auto px-4">
        <AdoptionChangeManagementSection />
      </section>
      <section className="container mx-auto px-4">
        <SuccessStoriesSection />
      </section>
      <section className="container mx-auto px-4 grid gap-8">
        <LearningExperienceArchitectsSection />
        <LatestInsights />
      </section>
      <section className="container mx-auto px-4">
        <ContactForm />
      </section>
      
      
    </main>
  );
}
