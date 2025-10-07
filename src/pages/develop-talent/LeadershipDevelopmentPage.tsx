import React from 'react';
import { VanguardLeadershipHero } from '../../components/Hero/VanguardLeadershipHero';
import { OnboardingInnovativeSolutions } from '../../components/Hero/OnboardingInnovativeSolutions';
import { OnboardingBenefits } from '../../components/Hero/OnboardingBenefits';
import { LeadershipPotentialSection } from '../../components/Hero/LeadershipPotentialSection';
import { LeadershipStatsBar } from '../../components/Hero/LeadershipStatsBar';
import { LeadershipDevelopmentServices } from '../../components/Hero/LeadershipDevelopmentServices';
import { LeadershipDevelopmentPrograms } from '../../components/Hero/LeadershipDevelopmentPrograms';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';

export function LeadershipDevelopmentPage() {
  return (
    <main className="pt-16">
      <VanguardLeadershipHero />
      <OnboardingInnovativeSolutions />
      <OnboardingBenefits />
      <LeadershipPotentialSection />
      <LeadershipStatsBar />
      <LeadershipDevelopmentServices />
      <LeadershipDevelopmentPrograms />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <div className="container mx-auto px-4 py-12">
        {/* Additional content sections for Leadership Development can be added here */}
      </div>
    </main>
  );
}
