import { PeopleLeadershipHero } from '../../components/Hero/PeopleLeadershipHero';
import PeopleLeadershipContent from '../../components/Hero/PeopleLeadershipContent';
import PeopleLeadershipLearningExperience from '../../components/Hero/PeopleLeadershipLearningExperience';
import {PeopleLeadershipJourney} from '../../components/Hero/PeopleLeadershipJourney';
import PeopleLeadershipPageContent from '../../components/Hero/NewComponent'; // Importing the page component
import CustomerExcellenceCertificate from '../../components/Hero/CustomerExcellenceCertificate';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { LearningExperienceArchitectsSection } from '../../components/Hero/LearningExperienceArchitectsSection';
import ContactForm from '../../components/Hero/ContactForm';
import { LeadershipDevelopmentPartners } from '../../components/Hero/LeadershipDevelopmentPartners';

export function PeopleLeadershipPage() {
  return (
    <main>
      <PeopleLeadershipHero />
      <LeadershipDevelopmentPartners />
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
