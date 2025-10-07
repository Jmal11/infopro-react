import React from 'react';
import { SeniorLeaderDevelopmentHero } from '../../components/Hero/SeniorLeaderDevelopmentHero';
import { SeniorLeaderDevelopmentPartnerLogos } from '../../components/Hero/SeniorLeaderDevelopmentPartnerLogos';
import { SeniorLeaderDevelopmentContent } from '../../components/Hero/SeniorLeaderDevelopmentContent';
import { SeniorLeaderDevelopmentJourney } from '../../components/Hero/SeniorLeaderDevelopmentJourney';
import { EarlyCareerDevelopmentLearningExperience } from '../../components/Hero/EarlyCareerDevelopmentLearningExperience';
import { SeniorLeaderDevelopmentProgramAudience } from '../../components/Hero/SeniorLeaderDevelopmentProgramAudience';
import { SeniorLeaderDevelopmentCertificate } from '../../components/Hero/SeniorLeaderDevelopmentCertificate';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../../components/Hero/ContactForm';

export function SeniorLeaderDevelopmentPage() {
  return (
    <main className="pt-16">
      <SeniorLeaderDevelopmentHero />
      <SeniorLeaderDevelopmentPartnerLogos />
      <SeniorLeaderDevelopmentContent />
      <SeniorLeaderDevelopmentJourney />
      <EarlyCareerDevelopmentLearningExperience />
      <SeniorLeaderDevelopmentProgramAudience />
      <SeniorLeaderDevelopmentCertificate />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />

      {/* Additional sections will be added here */}
    </main>
  );
} 