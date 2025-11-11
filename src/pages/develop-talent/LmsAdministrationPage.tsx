import { CustomContentPartnerLogos } from '../../components/Hero/CustomContentPartnerLogos';
import { LmsAdministrationDetails } from '../../components/Hero/LmsAdministrationDetails';
import { LmsAdministrationHero } from '../../components/Hero/LmsAdministrationHero';
import { LmsAdministrationStatsBar } from '../../components/Hero/LmsAdministrationStatsBar';
import { LmsAdministrationServices } from '../../components/Hero/LmsAdministrationServices';
import { LmsAdministrationEfficiency } from '../../components/Hero/LmsAdministrationEfficiency';
import { LmsAdministrationPlatforms } from '../../components/Hero/LmsAdministrationPlatforms';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../../components/Hero/ContactForm';

export function LmsAdministrationPage() {
  return (
    <main className="">
      <LmsAdministrationHero />
      <CustomContentPartnerLogos />
      <LmsAdministrationDetails />
      <LmsAdministrationStatsBar />
      <LmsAdministrationServices />
      <LmsAdministrationEfficiency />
      <LmsAdministrationPlatforms />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
    </main>
  );
}
