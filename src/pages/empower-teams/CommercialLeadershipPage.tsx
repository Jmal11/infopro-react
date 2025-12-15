import React from 'react';
import { CommercialLeadershipHero } from '../../components/Hero/CommercialLeadershipHero';
import { CommercialLeadershipOutcomes } from '../../components/Hero/CommercialLeadershipOutcomes';
import { CommercialLeadershipJourney } from '../../components/Hero/CommercialLeadershipJourney';
import { EarlyCareerDevelopmentLearningExperience } from '../../components/Hero/EarlyCareerDevelopmentLearningExperience';
import { CommercialLeadershipProgramAudience } from '../../components/Hero/CommercialLeadershipProgramAudience';
import { EarlyCareerDevelopmentCertificate } from '../../components/Hero/EarlyCareerDevelopmentCertificate';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { StatsBar } from '../../components/Hero/StatsBar';
import ContactForm from '../../components/Hero/ContactForm';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';

export function CommercialLeadershipPage() {
  return (
    <main className="">
      <CommercialLeadershipHero />
      <CommercialLeadershipOutcomes />
      <CommercialLeadershipJourney />
      <EarlyCareerDevelopmentLearningExperience />
      <CommercialLeadershipProgramAudience />
      <EarlyCareerDevelopmentCertificate />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
      {/* Add additional sections here as needed */}
    </main>
  );
}

export default CommercialLeadershipPage; 