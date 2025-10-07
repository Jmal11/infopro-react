import React from 'react';
import DigitalWorkplaceHero from '../../components/Hero/DigitalWorkplaceHero';
import { DigitalWorkplaceContent } from '../../components/Hero/DigitalWorkplaceContent';
import { DigitalWorkplaceDevelopmentOutcomes } from '../../components/Hero/DigitalWorkplaceDevelopmentOutcomes';
import { DigitalWorkplaceDevelopmentJourney } from '../../components/Hero/DigitalWorkplaceDevelopmentJourney';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../../components/Hero/ContactForm';

const DigitalWorkplacePage: React.FC = () => {
  return (
    <main className="flex flex-col gap-y-16">
      <DigitalWorkplaceHero />
      <DigitalWorkplaceContent />
      <DigitalWorkplaceDevelopmentOutcomes />
      <DigitalWorkplaceDevelopmentJourney />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
    </main>
  );
};

export default DigitalWorkplacePage;
