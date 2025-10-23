import React from 'react';
import { EarlyCareerDevelopmentHero } from '../../components/Hero/EarlyCareerDevelopmentHero';
import { EarlyCareerDevelopmentContent } from '../../components/Hero/EarlyCareerDevelopmentContent';
import { EarlyCareerDevelopmentJourney } from '../../components/Hero/EarlyCareerDevelopmentJourney';
import { EarlyCareerDevelopmentLearningExperience } from '../../components/Hero/EarlyCareerDevelopmentLearningExperience';
import { EarlyCareerDevelopmentProgramAudience } from '../../components/Hero/EarlyCareerDevelopmentProgramAudience';
import { EarlyCareerDevelopmentCertificate } from '../../components/Hero/EarlyCareerDevelopmentCertificate';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../../components/Hero/ContactForm';

export function EarlyCareerDevelopmentPage() {
  return (
    <main className="section-responsive">
      <EarlyCareerDevelopmentHero />
      <EarlyCareerDevelopmentContent />
      <EarlyCareerDevelopmentJourney />
      <EarlyCareerDevelopmentLearningExperience />
      <EarlyCareerDevelopmentProgramAudience />
      <EarlyCareerDevelopmentCertificate />
      <SuccessStoriesSection />
      <LearningExperienceArchitectsSection />
      <ContactForm />
    </main>
  );
}
