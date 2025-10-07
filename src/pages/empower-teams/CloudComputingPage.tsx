import React from 'react';
import CloudComputingHero from '../../components/Hero/CloudComputingHero';
import { CloudComputingContent } from '../../components/Hero/CloudComputingContent';
import { CloudComputingDevelopmentJourney } from '../../components/Hero/CloudComputingDevelopmentJourney';

const CloudComputingPage: React.FC = () => {
  return (
    <main className="flex flex-col gap-y-16 pt-20">
      <CloudComputingHero />
      <CloudComputingContent />
      <CloudComputingDevelopmentJourney />
    </main>
  );
};

export default CloudComputingPage;
