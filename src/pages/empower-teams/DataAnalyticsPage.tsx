import React from "react";
import { DataAnalyticsHero } from "../../components/Hero/DataAnalyticsHero";
import { DataAnalyticsContent } from "../../components/Hero/DataAnalyticsContent";
import { DataAnalyticsJourney } from "../../components/Hero/DataAnalyticsJourney";
import { BusinessLeadershipLearningExperience } from "../../components/Hero/BusinessLeadershipLearningExperience";
import { DataAnalyticsProgramAudience } from "../../components/Hero/DataAnalyticsProgramAudience";
import { EarlyCareerDevelopmentCertificate } from "../../components/Hero/EarlyCareerDevelopmentCertificate";
import { SuccessStoriesSection } from "../../components/Hero/SuccessStoriesSection";
import { LatestInsights } from "../../components/Hero/LatestInsights";
import { LearningExperienceArchitectsSection } from "../../components/Hero/LearningExperienceArchitectsSection";
import ContactForm from "../../components/Hero/ContactForm";

const DataAnalyticsPage = () => {
  return (
    <div className="flex flex-col gap-y-16">
      <DataAnalyticsHero />
      <DataAnalyticsContent />
      <DataAnalyticsJourney />
      <BusinessLeadershipLearningExperience />
      <DataAnalyticsProgramAudience />
      <EarlyCareerDevelopmentCertificate />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
    </div>
  );
};

export default DataAnalyticsPage;
