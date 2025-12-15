import React from 'react';

export function EarlyCareerDevelopmentCertificate() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-[1280px] flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2">
        <img
          src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Certificate.webp"
          alt="Certificate"
          className="w-full h-auto rounded shadow-lg"
        />
      </div>
      <div className="md:w-1/2 text-left">
        <h2 className="text-3xl font-bold mb-6">Certificate</h2>
        <p className="text-gray-700 text-lg">
          Upon successfully completing the program, participants will receive a Certificate of Completion, recognizing their mastery of essential leadership skills and readiness to drive team and organizational success. This credential signifies a commitment to personal and professional growth, demonstrating expertise in leadership, performance management, and effective communication.
        </p>
      </div>
    </section>
  );
}
