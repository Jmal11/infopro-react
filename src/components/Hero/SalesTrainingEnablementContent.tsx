import React from 'react';
import { CheckCircle } from 'lucide-react';

const outcomes = [
  'Achieve Sales Quotas',
  'Increase Average Order Value',
  'Increase Customer Retention',
  'Forecast Accuracy',
  'Improve Upselling & Cross-Selling',
  'Improve Negotiation Skills',
];

export function SalesTrainingEnablementContent() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Heading */}
        <div>
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">
            Optimizing Sales<br />
            Approaches for Modern<br />
            Customer Needs
          </h2>
        </div>
        {/* Right: Description and Outcomes */}
        <div>
          <p className="mb-8 text-gray-700 text-base">
            As the market’s buying behaviors shift more from transactional to consultative, the challenge of securing new and existing customers becomes increasingly significant. Organizations must empower their sales teams with a value-driven, customer-centric approach to successfully navigate this new landscape and drive customer acquisition and retention. A series of sales workshops or PowerPoint presentations won’t suffice; a more comprehensive sales training approach is crucial. Our innovative sales enablement approach and expansion sales strategy equips your teams with the tools and knowledge they need to confidently navigate the complexities of the market. Let us help you craft a tailored success plan to achieve your sales objectives, offering a more cost-effective and lower-risk alternative to traditional sales training programs.
          </p>
          <h3 className="text-2xl font-bold mb-4">Development Outcomes:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {outcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-purple-500" size={20} />
                <span className="font-bold text-gray-900">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SalesTrainingEnablementContent; 