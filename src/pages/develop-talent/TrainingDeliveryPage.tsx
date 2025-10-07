import { TrainingDeliveryHero } from '../../components/Hero/TrainingDeliveryHero';
import { TrainingDeliveryKeyFeatures } from '../../components/Hero/TrainingDeliveryKeyFeatures';
import { TrainingDeliveryMethods } from '../../components/Hero/TrainingDeliveryMethods';
import { TrainingDeliveryCTA } from '../../components/Hero/TrainingDeliveryCTA';
import { CustomContentPartnerLogos } from '../../components/Hero/CustomContentPartnerLogos';
import { TrainingDeliveryExpertSolutions } from '../../components/Hero/TrainingDeliveryExpertSolutions';
import { CustomContentStatsBar } from '../../components/Hero/CustomContentStatsBar';
import { TrainingDeliveryCapabilities } from '../../components/Hero/TrainingDeliveryCapabilities';
import { TrainingDeliveryMultiModal } from '../../components/Hero/TrainingDeliveryMultiModal';
import { TrainingDeliveryWhyBestFit } from '../../components/Hero/TrainingDeliveryWhyBestFit';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';

export function TrainingDeliveryPage() {
  return (
    <main className="pt-16">
      <TrainingDeliveryHero />
      <CustomContentPartnerLogos />
      <TrainingDeliveryExpertSolutions />
      <CustomContentStatsBar />
      <TrainingDeliveryCapabilities />
      <TrainingDeliveryMultiModal />
      <TrainingDeliveryWhyBestFit />
      <SuccessStoriesSection />
      <LatestInsights />
    </main>
  );
}
