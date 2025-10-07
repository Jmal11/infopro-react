import React from 'react';

export function MidCareerDevelopmentCertificate() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl flex flex-col md:flex-row items-center gap-8">
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
        <h2 className="text-3xl font-bold mb-6">Certificate</h2>
        <p className="text-gray-700 text-lg">
          Upon completion of the program, participants will earn a Certificate of Completion, acknowledging their leadership skills and preparedness to enhance team and organizational success. This certificate reflects a dedication to personal and professional development, showcasing expertise in leadership, performance management, and communication.
        </p>
      </div>
    </section>
  );
} 