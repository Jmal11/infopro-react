import React from 'react';
import { AgileTransformationHero } from '../../components/Hero/AgileTransformationHero';
import { AgileTransformationContent } from '../../components/Hero/AgileTransformationContent';
import { AgileTransformationStats } from '../../components/Hero/AgileTransformationStats';
import { AgileTransformationFramework } from '../../components/Hero/AgileTransformationFramework';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../../components/Hero/ContactForm';

export function AgileTransformationPage() {
  return (
    <main>
      <AgileTransformationHero />
      <AgileTransformationContent />
      <AgileTransformationStats />
      <AgileTransformationFramework />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
    </main>
  );
}

export default AgileTransformationPage;
