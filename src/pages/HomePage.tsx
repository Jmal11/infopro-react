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
import ContactForm from '../components/Hero/ContactForm';


export function HomePage() {
  return (
    <main className="section-responsive">
      <HeroSection />
      <section className="">
        <WorkforcePage />
      </section>
      <section className="">
        <PartnerLogos />
      </section>
      <section className="">
        <AccordionContentSection />
      </section>
      <section className="">
        <StatsBar />
      </section>
      <section className="">
        <ManagedLearningServices />
      </section>
      <section className="">
        <AwardSection />
        <FutureSkillsSection />
      </section>
      <section className="">
        <TestimonialSection />
      </section>
      <section className="">
        <CarouselSection />
      </section>
      <section className="">
        <LatestInsights />
      </section>
      <section className="">
        <ContactForm />
      </section>
    </main>
  );
}
