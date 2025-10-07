import { HeroSection } from '../components/Hero/HeroSection';
import { WorkforcePage } from './Workforce';
import { PartnerLogos } from '../components/Hero/PartnerLogos';
import { AccordionContentSection } from '../components/Hero/AccordionContentSection';
import { StatsBar } from '../components/Hero/StatsBar';
import { ManagedLearningServices } from '../components/Hero/ManagedLearningServices';
import { AwardSection } from '../components/Hero/AwardSection';
import { FutureSkillsSection } from '../components/Hero/FutureSkillsSection';
import { TestimonialSection } from '../components/Hero/TestimonialSection';
import { CarouselSection } from '../components/Hero/CarouselSection';
import { LatestInsights } from '../components/Hero/LatestInsights';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <WorkforcePage />
      <PartnerLogos />
      <AccordionContentSection />
      <StatsBar />
      <ManagedLearningServices />
      <AwardSection />
      <FutureSkillsSection />
      <TestimonialSection />
      <CarouselSection />
      <LatestInsights />
    </main>
  );
}
