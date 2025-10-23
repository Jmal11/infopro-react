import SkillsBasedDesignHeroSection from '../../components/SkillsBasedDesign/SkillsBasedDesignHeroSection';
import WhySkillBasedSection from '../../components/SkillsBasedDesign/WhySkillBasedSection';
import SkillsJourneySection from '../../components/SkillsBasedDesign/SkillsJourneySection';

export default function SkillsBasedDesignPage() {
  return (
    <main className="section-responsive">
      <SkillsBasedDesignHeroSection />
      <WhySkillBasedSection />
      <SkillsJourneySection />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-gray-600">More sections coming soon…</div>
      </div>
    </main>
  );
}
