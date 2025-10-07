import { CustomContentHero } from '../../components/Hero/CustomContentHero';
import { CustomContentPartnerLogos } from '../../components/Hero/CustomContentPartnerLogos';
import { CustomContentTailoredSolutions } from '../../components/Hero/CustomContentTailoredSolutions';
import { CustomContentStatsBar } from '../../components/Hero/CustomContentStatsBar';
import { CustomContentSolutionsGrid } from '../../components/Hero/CustomContentSolutionsGrid';
import { CustomContentAIAreasOfImpact } from '../../components/Hero/CustomContentAIAreasOfImpact';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';

export function CustomContentPage() {
  console.log('CustomContentPage rendered');
  return (
    <main className="pt-16">
      <CustomContentHero />
      <CustomContentPartnerLogos />
      <CustomContentTailoredSolutions />
      <CustomContentStatsBar />
      <CustomContentSolutionsGrid />
      <CustomContentAIAreasOfImpact />
      <SuccessStoriesSection />
      <LearningExperienceArchitectsSection />
      <LatestInsights />
    </main>
  );
}
