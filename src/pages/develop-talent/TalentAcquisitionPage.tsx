import React from 'react';
import { TalentAcquisitionHero } from '../../components/Hero/TalentAcquisitionHero';
import { CustomContentPartnerLogos } from '../../components/Hero/CustomContentPartnerLogos';
import { TalentAcquisitionDetails } from '../../components/Hero/TalentAcquisitionDetails';
import { TalentAcquisitionStats } from '../../components/Hero/TalentAcquisitionStats';
import { TalentAcquisitionFocusAreas } from '../../components/Hero/TalentAcquisitionFocusAreas';
import { TalentAcquisitionWorkforceFramework } from '../../components/Hero/TalentAcquisitionWorkforceFramework';
import { TalentAcquisitionTailoredServices } from '../../components/Hero/TalentAcquisitionTailoredServices';
import { TalentAcquisitionSpecializedRoles } from '../../components/Hero/TalentAcquisitionSpecializedRoles';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';

export function TalentAcquisitionPage() {
  return (
    <main className="section-responsive">
      <TalentAcquisitionHero />
      <CustomContentPartnerLogos />
      <TalentAcquisitionDetails />
      <TalentAcquisitionStats />
      <TalentAcquisitionFocusAreas />
      <TalentAcquisitionWorkforceFramework />
      <TalentAcquisitionTailoredServices />
      <TalentAcquisitionSpecializedRoles />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      {/* Additional content for Talent Acquisition page can be added here */}
    </main>
  );
}
