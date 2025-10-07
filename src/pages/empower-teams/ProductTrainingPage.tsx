import React from 'react';
import { ProductTrainingHero } from '../../components/Hero/ProductTrainingHero';
import { ProductTrainingPartnerLogos } from '../../components/Hero/ProductTrainingPartnerLogos';
import { ProductTrainingOutcomes } from '../../components/Hero/ProductTrainingOutcomes';
import { ProductTrainingStatsBar } from '../../components/Hero/ProductTrainingStatsBar';
import { ProductTrainingImplementation } from '../../components/Hero/ProductTrainingImplementation';

import { ProductTrainingDifferentiators } from '../../components/Hero/ProductTrainingDifferentiators';
import { ProductTrainingSolutions } from '../../components/Hero/ProductTrainingSolutions';
import { ProductTrainingImmersiveExperience } from '../../components/Hero/ProductTrainingImmersiveExperience';
import { ProductTrainingBenefits } from '../../components/Hero/ProductTrainingBenefits';
import { SuccessStoriesSection } from '../../components/Hero/SuccessStoriesSection';
import { LatestInsights } from '../../components/Hero/LatestInsights';
import { TransformLDVision } from '../../components/Hero/TransformLDVision';
import ContactForm from '../../components/Hero/ContactForm';

export function ProductTrainingPage() {
  return (
    <main className="pt-16 overflow-x-hidden">
      <ProductTrainingHero />
      <ProductTrainingPartnerLogos />
      <ProductTrainingOutcomes />
      <ProductTrainingStatsBar />
      <ProductTrainingImplementation />
      <ProductTrainingDifferentiators />
      <ProductTrainingSolutions />
      <ProductTrainingImmersiveExperience />
      <ProductTrainingBenefits />
      <SuccessStoriesSection />
      <LatestInsights />
      <TransformLDVision />
      <ContactForm />
    </main>
  );
}

export default ProductTrainingPage; 