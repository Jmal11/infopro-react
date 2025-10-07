import React from 'react';
import PeopleLeadershipHero from '../../components/Hero/PeopleLeadershipHero';
import PeopleLeadershipLogos from '../../components/Hero/PeopleLeadershipLogos';
import PeopleLeadershipContent from '../../components/Hero/PeopleLeadershipContent';
import PeopleLeadershipLearningExperience from '../../components/Hero/PeopleLeadershipLearningExperience';
import PeopleLeadershipProgramAudience from '../../components/Hero/PeopleLeadershipProgramAudience';
import PeopleLeadershipJourney from '../../components/Hero/PeopleLeadershipJourney';
import PeopleLeadershipPageContent from '../../components/Hero/NewComponent'; // Importing the page component
import CustomerExcellenceCertificate from '../../components/Hero/CustomerExcellenceCertificate';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../../components/Hero/ContactForm';

export function PeopleLeadershipPage() {
  return (
    <main>
      <PeopleLeadershipHero />
      <PeopleLeadershipLogos />
      <PeopleLeadershipContent />
      <PeopleLeadershipJourney />
      <PeopleLeadershipLearningExperience />
      <PeopleLeadershipPageContent /> {/* Adding the page component here */}
      <CustomerExcellenceCertificate />
      <SuccessStoriesSection />
      <LatestInsights />
      <LearningExperienceArchitectsSection />
      <ContactForm />
    </main>
  );
}
