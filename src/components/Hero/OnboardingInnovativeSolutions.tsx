import React from 'react';

export function OnboardingInnovativeSolutions() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Innovative Onboarding Solutions for Modern Workplaces
          </h2>
          <p className="text-gray-700 leading-relaxed">
            With over 30 years of experience, we're your trusted partner for onboarding solutions.
            You can customize your onboarding process with our flexible options. Our team of experts
            can create customized programs that meet your needs, from role-based training to interactive
            mobile-friendly solutions. We've helped countless global organizations improve their employee
            onboarding processes and achieve their business goals. Let us help you create a seamless and
            effective onboarding experience.
          </p>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://www.infoprolearning.com/wp-content/uploads/2023/03/chelsea-piers-tennis-center-1024x576.jpg"
            alt="The Tennis Center"
            className="w-full rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
