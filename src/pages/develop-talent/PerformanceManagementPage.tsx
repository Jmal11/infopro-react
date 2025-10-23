import React from 'react';
import { PerformanceManagementHero } from '../../components/Hero/PerformanceManagementHero';
import { PerformanceManagementPartners } from '../../components/Hero/PerformanceManagementPartners';
import { PerformanceManagementDetails } from '../../components/Hero/PerformanceManagementDetails';
import { PerformanceManagementStats } from '../../components/Hero/PerformanceManagementStats';
import { PerformanceManagementFramework } from '../../components/Hero/PerformanceManagementFramework';
import { PerformanceManagementApproach } from '../../components/Hero/PerformanceManagementApproach';
import { PerformanceManagementTools } from '../../components/Hero/PerformanceManagementTools';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';

export function PerformanceManagementPage() {
  return (
    <main className="section-responsive">
      <PerformanceManagementHero />
      <PerformanceManagementPartners />
      <PerformanceManagementDetails />
      <PerformanceManagementStats />
      <PerformanceManagementFramework />
      <PerformanceManagementApproach />
      <PerformanceManagementTools />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
     
    </main>
  );
}
