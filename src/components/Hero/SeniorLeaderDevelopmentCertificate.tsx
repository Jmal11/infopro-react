import React from 'react';

export function SeniorLeaderDevelopmentCertificate() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-[1280px] flex flex-col md:flex-row items-center gap-8">
      {/* Left: Certificate Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Certificate.webp"
          alt="Certificate"
          className="w-full h-auto max-w-md rounded shadow-lg border"
        />
      </div>
      {/* Right: Certificate Text */}
      <div className="md:w-1/2 w-full text-left">
        <h2 className="text-3xl font-bold mb-4">Certificate of Completion</h2>
        <p className="text-lg text-gray-700 mb-4">
          Upon successful completion of the Senior Leader Development Program, participants will receive a certificate recognizing their commitment to advanced leadership, strategic thinking, and executive presence. This certificate demonstrates your readiness to lead in complex, high-stakes business environments.
        </p>
      </div>
    </section>
  );
} 