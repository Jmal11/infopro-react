import React from 'react';

export function VanguardLeadershipCertificate() {
  return (
    <section className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-8">
      {/* Left side - Certificate image */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src="https://via.placeholder.com/400x250.png?text=Certificate+Image"
          alt="Certificate"
          className="max-w-full h-auto border-4 border-purple-700 rounded shadow-lg"
        />
      </div>

      {/* Right side - Text content */}
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Certificate</h2>
        <p className="text-gray-700">
          Upon program completion, participants will earn a Certificate of Completion, acknowledging their mastery of crucial leadership skills and readiness to lead teams and drive organizational success. This credential reflects a commitment to personal and professional growth and showcases expertise in leadership, performance management, and effective communication.
        </p>
      </div>
    </section>
  );
}
