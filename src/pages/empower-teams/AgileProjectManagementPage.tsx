import React from 'react';
import { AgileProjectManagementHero } from '../../components/Hero/AgileProjectManagementHero';
import { AgileProjectManagementContent } from '../../components/Hero/AgileProjectManagementContent';
import { AgileProjectManagementDevelopmentJourney } from '../../components/Hero/AgileProjectManagementDevelopmentJourney';
import { AgileProjectManagementProgramAudience } from '../../components/Hero/AgileProjectManagementProgramAudience';
import { EarlyCareerDevelopmentLearningExperience } from '../../components/Hero/EarlyCareerDevelopmentLearningExperience';
import CustomerExcellenceCertificate from '../../components/Hero/CustomerExcellenceCertificate';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../../components/Hero/ContactForm';

const AgileProjectManagementPage: React.FC = () => {
  return (
    <main className="section-responsive">
      <AgileProjectManagementHero />
      <AgileProjectManagementContent />
      <AgileProjectManagementDevelopmentJourney />
      <EarlyCareerDevelopmentLearningExperience />
      <AgileProjectManagementProgramAudience />
      <CustomerExcellenceCertificate />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
    </main>
  );
};

export default AgileProjectManagementPage;
