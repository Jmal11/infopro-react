import React from 'react';
import { MidCareerDevelopmentHero } from '../../components/Hero/MidCareerDevelopmentHero';
import { MidCareerDevelopmentContent } from '../../components/Hero/MidCareerDevelopmentContent';
import { MidCareerDevelopmentJourney } from '../../components/Hero/MidCareerDevelopmentJourney';
import { EarlyCareerDevelopmentLearningExperience } from '../../components/Hero/EarlyCareerDevelopmentLearningExperience';
import { MidCareerDevelopmentProgramAudience } from '../../components/Hero/MidCareerDevelopmentProgramAudience';
import { MidCareerDevelopmentCertificate } from '../../components/Hero/MidCareerDevelopmentCertificate';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../../components/Hero/ContactForm';

export function MidCareerDevelopmentPage() {
  return (
    <main className="pt-16">
      <MidCareerDevelopmentHero />
      <MidCareerDevelopmentContent />
      <MidCareerDevelopmentJourney />
      <EarlyCareerDevelopmentLearningExperience />
      <MidCareerDevelopmentProgramAudience />
      <MidCareerDevelopmentCertificate />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
      {/* Additional sections can be added here similar to EarlyCareerDevelopmentPage */}
    </main>
  );
}
