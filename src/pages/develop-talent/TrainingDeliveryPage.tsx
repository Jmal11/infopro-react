import { TrainingDeliveryHero } from '../../components/Hero/TrainingDeliveryHero';
import { CustomContentPartnerLogos } from '../../components/Hero/CustomContentPartnerLogos';
import { TrainingDeliveryExpertSolutions } from '../../components/Hero/TrainingDeliveryExpertSolutions';
import { CustomContentStatsBar } from '../../components/Hero/CustomContentStatsBar';
import { TrainingDeliveryCapabilities } from '../../components/Hero/TrainingDeliveryCapabilities';
import { TrainingDeliveryMultiModal } from '../../components/Hero/TrainingDeliveryMultiModal';
import { TrainingDeliveryWhyBestFit } from '../../components/Hero/TrainingDeliveryWhyBestFit';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../../components/Hero/ContactForm';

export function TrainingDeliveryPage() {
  return (
    <main className="">
      <TrainingDeliveryHero />
      <CustomContentPartnerLogos />
      <TrainingDeliveryExpertSolutions />
      <CustomContentStatsBar />
      <TrainingDeliveryCapabilities />
      <TrainingDeliveryMultiModal />
      <TrainingDeliveryWhyBestFit />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
    </main>
  );
}
