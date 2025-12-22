import React from 'react';
import CloudComputingHero from '../../components/Hero/CloudComputingHero';
import { CloudComputingContent } from '../../components/Hero/CloudComputingContent';
import { CloudComputingDevelopmentJourney } from '../../components/Hero/CloudComputingDevelopmentJourney';
import { CloudComputingProgramAudience } from '../../components/Hero/CloudComputingProgramAudience';
import { EarlyCareerDevelopmentLearningExperience } from '../../components/Hero/EarlyCareerDevelopmentLearningExperience';
import { EarlyCareerDevelopmentCertificate } from '../../components/Hero/EarlyCareerDevelopmentCertificate';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../../components/Hero/ContactForm';

const CloudComputingPage: React.FC = () => {
  return (
    <main className="">
      <CloudComputingHero />
      <CloudComputingContent />
      <CloudComputingDevelopmentJourney />
      <CloudComputingProgramAudience />
      <EarlyCareerDevelopmentLearningExperience />
      <EarlyCareerDevelopmentCertificate />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
    </main>
  );
};

export default CloudComputingPage;
