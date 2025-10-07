import { VanguardLeadershipHero } from '../../components/Hero/VanguardLeadershipHero';
import { VanguardLeadershipDetails } from '../../components/Hero/VanguardLeadershipDetails';
import { VanguardLeadershipStats } from '../../components/Hero/VanguardLeadershipStats';
import { VanguardLeadershipCompetencyModel } from '../../components/Hero/VanguardLeadershipCompetencyModel';
import { VanguardLeadershipDevelopmentJourney } from '../../components/Hero/VanguardLeadershipDevelopmentJourney';
import { VanguardLeadershipLearningExperience } from '../../components/Hero/VanguardLeadershipLearningExperience';
import { VanguardLeadershipProgramAudience } from '../../components/Hero/VanguardLeadershipProgramAudience';
import { VanguardLeadershipCertificate } from '../../components/Hero/VanguardLeadershipCertificate';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../../components/Hero/ContactForm';

export function VanguardLeadershipPage() {
  return (
    <main className="pt-16">
      <VanguardLeadershipHero />
      <VanguardLeadershipDetails />
      <VanguardLeadershipStats />
      <VanguardLeadershipCompetencyModel />
      <VanguardLeadershipDevelopmentJourney />
      <VanguardLeadershipLearningExperience />
      <VanguardLeadershipProgramAudience />
      <VanguardLeadershipCertificate />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
    </main>
  );
}
