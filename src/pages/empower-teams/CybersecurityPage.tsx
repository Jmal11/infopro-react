import React from 'react';
import { CybersecurityHero } from '../../components/Hero/CybersecurityHero';
import { CybersecurityContent } from '../../components/Hero/CybersecurityContent';
import { CybersecurityDevelopmentJourney } from '../../components/Hero/CybersecurityDevelopmentJourney';
import CybersecurityProgramAudience from '../../components/Hero/CybersecurityProgramAudience';

const CybersecurityPage: React.FC = () => {
  return (
    <main className="flex flex-col gap-y-16 pt-20">
      <CybersecurityHero />
      <CybersecurityContent />
      <CybersecurityDevelopmentJourney />
      <CybersecurityProgramAudience />
      {/* Additional sections can be added here later */}
    </main>
  );
};

export default CybersecurityPage;
