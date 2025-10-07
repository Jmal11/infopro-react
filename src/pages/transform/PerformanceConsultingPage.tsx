import React from 'react';
import { PerformanceConsultingHero } from '../../components/Hero/PerformanceConsultingHero';
import { PerformanceConsultingNextSection } from '../../components/Hero/PerformanceConsultingNextSection';
import { PerformanceConsultingWorkforceBlueprint } from '../../components/Hero/PerformanceConsultingWorkforceBlueprint';
import { PerformanceConsultingStats } from '../../components/Hero/PerformanceConsultingStats';
import { PerformanceConsultingApproach } from '../../components/Hero/PerformanceConsultingApproach';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../../components/Hero/ContactForm';

const PerformanceConsultingPage: React.FC = () => {
  return (
    <main className="flex flex-col gap-y-16">
      <PerformanceConsultingHero />
      <PerformanceConsultingNextSection />
      <PerformanceConsultingWorkforceBlueprint />
      <PerformanceConsultingStats />
      <PerformanceConsultingApproach />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
    </main>
  );
};

export default PerformanceConsultingPage;
