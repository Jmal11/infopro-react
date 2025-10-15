import React from 'react';

export function DiversityEquityInclusionCertificate() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Certificate Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Certificate.webp"
            alt="Certificate"
            className="max-w-md w-full rounded shadow-lg border"
          />
        </div>
        {/* Right: Certificate Description */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Certificate</h2>
          <p className="text-gray-700 text-base md:text-lg">
            Upon program completion, participants will earn a Certificate of Completion, acknowledging their mastery of crucial diversity, equity, and inclusion skills and readiness to lead inclusive teams and drive organizational change. This credential reflects a commitment to creating inclusive workplaces and showcases expertise in inclusive leadership, cultural competency, and fostering belonging.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DiversityEquityInclusionCertificate;
