import React from 'react';

export function VanguardLeadershipCertificate() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left side - Certificate image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="shadow-xl">
              <img
                src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Certificate.webp"
                alt="Certificate"
                className="max-w-full h-auto w-full max-w-md"
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Certificate</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Upon program completion, participants will earn a Certificate of Completion, acknowledging their mastery of crucial leadership skills and readiness to lead teams and drive organizational success. This credential reflects a commitment to personal and professional growth and showcases expertise in leadership, performance management, and effective communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}