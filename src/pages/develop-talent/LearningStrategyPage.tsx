import React from 'react';
import { LearningStrategyHero } from '../../components/Hero/LearningStrategyHero';
import { CustomContentPartnerLogos } from '../../components/Hero/CustomContentPartnerLogos';
import { IntelligentLearningAdvantage } from '../../components/Hero/IntelligentLearningAdvantage';
import { AIAndTechnologyIntegration } from '../../components/Hero/AIAndTechnologyIntegration';
import { LDTransformationNow } from '../../components/Hero/LDTransformationNow';
import { TransformLDVision } from '../../components/Hero/TransformLDVision';
import { IntelligentDesignFramework } from '../../components/Hero/IntelligentDesignFramework';
import { OurSolutionsSection } from '../../components/Hero/OurSolutionsSection';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';

export function LearningStrategyPage() {
  return (
    <main className="section-responsive">
      <LearningStrategyHero />
      <CustomContentPartnerLogos />
      <IntelligentLearningAdvantage />
      <AIAndTechnologyIntegration />
      <LDTransformationNow />
      <TransformLDVision />
      <IntelligentDesignFramework />
      <OurSolutionsSection />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
    </main>
  );
}
