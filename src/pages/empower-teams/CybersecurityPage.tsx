import React from 'react';
import { CybersecurityHero } from '../../components/Hero/CybersecurityHero';
import { CybersecurityContent } from '../../components/Hero/CybersecurityContent';
import { CybersecurityDevelopmentJourney } from '../../components/Hero/CybersecurityDevelopmentJourney';
import CybersecurityProgramAudience from '../../components/Hero/CybersecurityProgramAudience';
import { EarlyCareerDevelopmentLearningExperience } from '../../components/Hero/EarlyCareerDevelopmentLearningExperience';
import { EarlyCareerDevelopmentCertificate } from '../../components/Hero/EarlyCareerDevelopmentCertificate';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../../components/Hero/ContactForm';

const CybersecurityPage: React.FC = () => {
  return (
    <main className="section-responsive">
      <CybersecurityHero />
      <CybersecurityContent />
      <CybersecurityDevelopmentJourney />
      <CybersecurityProgramAudience />
      <EarlyCareerDevelopmentLearningExperience />
      <EarlyCareerDevelopmentCertificate />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
    </main>
  );
};

export default CybersecurityPage;
