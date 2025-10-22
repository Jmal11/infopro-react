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
    <main className="section-responsive">
      <HeroSection />
      <section className="container mx-auto px-4 stack-lg-row">
        <WorkforcePage />
      </section>
      <section className="container mx-auto px-4">
        <PartnerLogos />
      </section>
      <section className="container mx-auto px-4">
        <AccordionContentSection />
      </section>
      <section className="container mx-auto px-4">
        <StatsBar />
      </section>
      <section className="container mx-auto px-4">
        <ManagedLearningServices />
      </section>
      <section className="container mx-auto px-4 grid gap-8">
        <AwardSection />
        <FutureSkillsSection />
      </section>
      <section className="container mx-auto px-4">
        <TestimonialSection />
      </section>
      <section className="container mx-auto px-4">
        <CarouselSection />
      </section>
      <section className="container mx-auto px-4">
        <LatestInsights />
      </section>
    </main>
  );
}
