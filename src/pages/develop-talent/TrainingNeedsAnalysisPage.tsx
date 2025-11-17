import React from 'react';
import { TrainingNeedsAnalysisHero } from '../../components/Hero/TrainingNeedsAnalysisHero';
import { CustomContentPartnerLogos } from '../../components/Hero/CustomContentPartnerLogos';
import { TrainingNeedsAnalysisContent } from '../../components/Hero/TrainingNeedsAnalysisContent';
import { TrainingNeedsAnalysisStatsBar } from '../../components/Hero/TrainingNeedsAnalysisStatsBar';
import { CompetencyGapAnalysis } from '../../components/Hero/CompetencyGapAnalysis';
import { OurApproach } from '../../components/Hero/OurApproach';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { TrainingExperts } from '../../components/Hero/TrainingExperts';

export function TrainingNeedsAnalysisPage() {
  return (
    <main className="">
      <TrainingNeedsAnalysisHero />
      <CustomContentPartnerLogos />
      <TrainingNeedsAnalysisContent />
      <TrainingNeedsAnalysisStatsBar />
      <CompetencyGapAnalysis />
      <OurApproach />
      <SuccessStoriesSection />
      <LatestInsights />
      <TrainingExperts />
      
      {/* Additional content for the Training Needs Analysis page can be added here */}
    </main>
  );
}
