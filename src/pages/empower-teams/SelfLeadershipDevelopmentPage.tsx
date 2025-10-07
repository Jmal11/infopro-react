import React from 'react';
import { SelfLeadershipDevelopmentHero } from '../../components/Hero/SelfLeadershipDevelopmentHero';
import { SelfLeadershipDevelopmentPartnerLogos } from '../../components/Hero/SelfLeadershipDevelopmentPartnerLogos';
import { SelfLeadershipDevelopmentContent } from '../../components/Hero/SelfLeadershipDevelopmentContent';
import { SelfLeadershipDevelopmentJourney } from '../../components/Hero/SelfLeadershipDevelopmentJourney';
import { EarlyCareerDevelopmentLearningExperience } from '../../components/Hero/EarlyCareerDevelopmentLearningExperience';
import { SelfLeadershipDevelopmentProgramAudience } from '../../components/Hero/SelfLeadershipDevelopmentProgramAudience';
import { EarlyCareerDevelopmentCertificate } from '../../components/Hero/EarlyCareerDevelopmentCertificate';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../../components/Hero/ContactForm';

export function SelfLeadershipDevelopmentPage() {
  return (
    <main className="pt-16">
      <SelfLeadershipDevelopmentHero />
      <SelfLeadershipDevelopmentPartnerLogos />
      <SelfLeadershipDevelopmentContent />
      <SelfLeadershipDevelopmentJourney />
      <EarlyCareerDevelopmentLearningExperience />
      {/* Program Audience/Testimonial Section for Self-Leadership Development */}
      <SelfLeadershipDevelopmentProgramAudience />
      <EarlyCareerDevelopmentCertificate />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
      {/* Additional sections will be added here */}
    </main>
  );
} 