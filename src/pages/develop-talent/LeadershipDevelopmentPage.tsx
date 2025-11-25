import React from 'react';
import { LeadershipDevelopmentHero } from './LeadershipDevelopmentHero';
import { LeadershipInnovativeSolutions } from '../../components/Hero/LeadershipInnovativeSolutions';
import { LeadershipStatsBar } from '../../components/Hero/LeadershipStatsBar';
import { LeadershipDevelopmentServices } from '../../components/Hero/LeadershipDevelopmentServices';
import { LeadershipDevelopmentPrograms } from '../../components/Hero/LeadershipDevelopmentPrograms';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import { LeadershipDevelopmentPartners } from '../../components/Hero/LeadershipDevelopmentPartners';

export function LeadershipDevelopmentPage() {
  return (
    <main className="">
      <LeadershipDevelopmentHero />
      <LeadershipDevelopmentPartners />
      <LeadershipInnovativeSolutions />
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
