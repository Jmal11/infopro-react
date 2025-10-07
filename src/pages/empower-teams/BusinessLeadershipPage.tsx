import React from "react";
import { BusinessLeadershipHero } from "../../components/Hero/BusinessLeadershipHero";
import { BusinessLeadershipContent } from "../../components/Hero/BusinessLeadershipContent";
import { BusinessLeadershipJourney } from "../../components/Hero/BusinessLeadershipJourney";
import { EarlyCareerDevelopmentLearningExperience } from "../../components/Hero/EarlyCareerDevelopmentLearningExperience";
import { BusinessLeadershipProgramAudience } from "../../components/Hero/BusinessLeadershipProgramAudience";
import { EarlyCareerDevelopmentCertificate } from "../../components/Hero/EarlyCareerDevelopmentCertificate";
import { BusinessLeadershipLogos } from "../../components/Hero/BusinessLeadershipLogos";
import { SuccessStoriesSection } from "../../components/Hero/SuccessStoriesSection";
import { LatestInsights } from "../../components/Hero/LatestInsights";
import { LearningExperienceArchitectsSection } from "../../components/Hero/LearningExperienceArchitectsSection";
import ContactForm from "../../components/Hero/ContactForm";

const BusinessLeadershipPage = () => {
  return (
    <main className="pt-16 overflow-x-hidden">
      <BusinessLeadershipHero />
      <BusinessLeadershipContent />
      <BusinessLeadershipJourney />
      <BusinessLeadershipLogos />
      <EarlyCareerDevelopmentLearningExperience />
      <BusinessLeadershipProgramAudience />
      <EarlyCareerDevelopmentCertificate />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
    </main>
  );
};

export default BusinessLeadershipPage;
