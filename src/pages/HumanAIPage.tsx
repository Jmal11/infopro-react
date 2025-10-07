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

export function HumanAIPage() {
  return (
    <main className="pt-16">
      <HumanAIHero />
      <HumanAIPartnerLogos />
      <HumanAISkillsSection />
      <HumanAIStatsSection />
      <HumanAIApproachSection />
      <HumanAIStrategySection />
      <AIDigitalSkillsAcademySection />
      <VanguardSkillsCarousel />
      <AdoptionChangeManagementSection />
      <SuccessStoriesSection />
      <LearningExperienceArchitectsSection />
      <LatestInsights />
      
      
    </main>
  );
}
