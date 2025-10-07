import React from 'react';
import { PromptEngineeringHero } from '../../components/Hero/PromptEngineeringHero';
import { PromptEngineeringNextSection } from '../../components/Hero/PromptEngineeringNextSection';
import { PromptEngineeringDevelopmentJourney } from '../../components/Hero/PromptEngineeringDevelopmentJourney';
import { PromptEngineeringProgramAudience } from '../../components/Hero/PromptEngineeringProgramAudience';

const PromptEngineeringPage: React.FC = () => {
  return (
    <main className="flex flex-col gap-y-16 pt-20">
      <PromptEngineeringHero />
      <PromptEngineeringNextSection />
      <PromptEngineeringDevelopmentJourney />
      <PromptEngineeringProgramAudience />
    </main>
  );
};

export default PromptEngineeringPage;
