import React from 'react';

const leftOutcomes = [
  "Achieve Sales Quotas",
  "Increase Average Order Value",
  "Increase Customer Retention",
];

const rightOutcomes = [
  "Forecast Accuracy",
  "Improve Upselling & Cross-Selling",
  "Improve Negotiation Skills",
];

export function SalesTrainingEnablementContent() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left: Heading */}
          <div className="md:col-span-4">
            <h2 className="text-4xl font-bold leading-tight text-gray-900">
              Optimizing Sales
              <br />
              Approaches for Modern
              <br />
              Customer Needs
            </h2>
          </div>
          {/* Right: Description and Outcomes */}
          <div className="md:col-span-8">
            <p className="mb-4 text-base text-gray-700 leading-relaxed">
              As the market's buying behaviors shift more from transactional to consultative, the challenge of securing new and existing customers becomes increasingly significant. Organizations must empower their sales teams with a value-driven, customer-centric approach to successfully navigate this new landscape and drive customer acquisition and retention. A series of sales workshops or PowerPoint presentations won't suffice; a more comprehensive sales training approach is crucial. Our innovative sales enablement approach and expansion sales strategy equips your teams with the tools and knowledge they need to confidently navigate the complexities of the market. Let us help you craft a tailored success plan to achieve your sales objectives, offering a more cost-effective and lower-risk alternative to traditional sales training programs.
            </p>
            <h3 className="text-xl font-bold mb-6 text-gray-900">Development Outcomes:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              {/* Left Column */}
              <ul className="space-y-4">
                {leftOutcomes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <img
                      src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg"
                      alt="check"
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="font-semibold text-gray-900">{item}</span>
                  </li>
                ))}
              </ul>
              {/* Right Column */}
              <ul className="space-y-4">
                {rightOutcomes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <img
                      src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/Check-icon.svg"
                      alt="check"
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="font-semibold text-gray-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}