import React from 'react';
import DigitalWorkplaceHero from '../../components/Hero/DigitalWorkplaceHero';
import { DigitalWorkplaceContent } from '../../components/Hero/DigitalWorkplaceContent';
import { DigitalWorkplaceDevelopmentJourney } from '../../components/Hero/DigitalWorkplaceDevelopmentJourney';
import { DigitalWorkplaceProgramAudience } from '../../components/Hero/DigitalWorkplaceProgramAudience';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../../components/Hero/ContactForm';
import { EarlyCareerDevelopmentLearningExperience } from '../../components/Hero/EarlyCareerDevelopmentLearningExperience';
import CustomerExcellenceCertificate from '../../components/Hero/CustomerExcellenceCertificate';

const DigitalWorkplacePage: React.FC = () => {
  return (
    <main className="">
      <DigitalWorkplaceHero />
      <DigitalWorkplaceContent />
      <DigitalWorkplaceDevelopmentJourney />
      <EarlyCareerDevelopmentLearningExperience />
      <DigitalWorkplaceProgramAudience />
      <CustomerExcellenceCertificate />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
    </main>
  );
};

export default DigitalWorkplacePage;
