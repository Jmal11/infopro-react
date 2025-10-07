import React from 'react';
import { OnboardingHero } from '../../components/Hero/OnboardingHero';
import { OnboardingOptimizedRetention } from '../../components/Hero/OnboardingOptimizedRetention';
import { OnboardingStatsBar } from '../../components/Hero/OnboardingStatsBar';
import { OnboardingOurApproach } from '../../components/Hero/OnboardingOurApproach';
import { OnboardingInnovativeSolutions } from '../../components/Hero/OnboardingInnovativeSolutions';
import { OnboardingBenefits } from '../../components/Hero/OnboardingBenefits';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';

export function OnboardingPage() {
  return (
    <main>
     
      <OnboardingHero />
      <OnboardingOptimizedRetention />
      <OnboardingStatsBar />
      <OnboardingOurApproach />
       <OnboardingInnovativeSolutions />
      <OnboardingBenefits />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      {/* Additional content for Onboarding page can be added here */}
    </main>
  );
}
