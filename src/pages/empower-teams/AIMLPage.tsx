import React from 'react';
import AIMLHero from '../../components/Hero/AIMLHero';
import AIMLContentSection from '../../components/Hero/AIMLContentSection';
import AIMLDevelopmentJourney from '../../components/Hero/AIMLDevelopmentJourney';
import { AIMLLearningExperience } from '../../components/Hero/AIMLLearningExperience';
import AIMLProgramAudience from '../../components/Hero/AIMLProgramAudience';
import { EarlyCareerDevelopmentCertificate } from '../../components/Hero/EarlyCareerDevelopmentCertificate';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import ContactForm from '../../components/Hero/ContactForm';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';

export function AIMLPage() {
  return (
    <main className="">
      <AIMLHero />
      <AIMLContentSection />
      <AIMLDevelopmentJourney />
      <AIMLLearningExperience />
      <AIMLProgramAudience />
      <EarlyCareerDevelopmentCertificate />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
    </main>
  );
}
