import React from 'react';
import { CustomerExcellenceHero } from '../../components/Hero/CustomerExcellenceHero';
import { CustomerExcellencePartnerLogos } from '../../components/Hero/CustomerExcellencePartnerLogos';
import { CustomerExcellenceContent } from '../../components/Hero/CustomerExcellenceContent';
import { CustomerExcellenceJourney } from '../../components/Hero/CustomerExcellenceJourney';
import { EarlyCareerDevelopmentLearningExperience } from '../../components/Hero/EarlyCareerDevelopmentLearningExperience';
import { CustomerExcellenceProgramAudience } from '../../components/Hero/CustomerExcellenceProgramAudience';
import { CustomerExcellenceCertificate } from '../../components/Hero/CustomerExcellenceCertificate';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../../components/Hero/ContactForm';

export function CustomerExcellencePage() {
  return (
    <main className="">
      <CustomerExcellenceHero />
      <CustomerExcellencePartnerLogos />
      <CustomerExcellenceContent />
      <CustomerExcellenceJourney />
      <EarlyCareerDevelopmentLearningExperience />
      <CustomerExcellenceProgramAudience />
      <CustomerExcellenceCertificate />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
      {/* Add additional sections here as needed */}
    </main>
  );
}

export default CustomerExcellencePage; 