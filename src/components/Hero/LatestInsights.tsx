import React from 'react';
import { ContactForm } from './ContactForm';

const insightsData = {
  featured: {
    category: 'eBook',
    title: 'AI-First Learning: How Generative AI Is Transforming Education and Training',
    snippet: 'AI is no longer an emerging trend, it...',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    link: '#',
  },
  articles: [
    {
      category: 'Blog',
      title: '5 Learning Methodologies That Drive Continuous Professional Development',
      snippet: 'Given the rapid pace of business today, skill maintenance...',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
      link: '#',
    },
    {
      category: 'Blog',
      title: 'Gamified Learning: Transforming Employee Training into an Engaging Experience',
      snippet: 'Traditional corporate training is usually quite a drag. Typically,...',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      link: '#',
    },
    {
      category: 'Blog',
      title: 'Learning Strategy Best Practices: Driving Business Growth Through Knowledge',
      snippet: 'The ability to learn faster than competitors often determine...',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
      link: '#',
    },
  ],
};

export function LatestInsights() {
  return (
    <>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Our Latest Insights</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="border-t-4 border-purple-600 inline-block">
              <img
                src={insightsData.featured.image}
                alt={insightsData.featured.title}
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-sm font-semibold text-purple-600 uppercase mt-4 mb-2">
              {insightsData.featured.category}
            </p>
            <h3 className="font-bold text-xl mb-3">{insightsData.featured.title}</h3>
            <p className="text-sm text-gray-700 mb-4">{insightsData.featured.snippet}</p>
            <a
              href={insightsData.featured.link}
              className="text-purple-600 font-semibold inline-flex items-center hover:underline text-sm"
            >
              LEARN MORE
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-6">
            {insightsData.articles.map((article, idx) => (
              <div key={idx} className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0">
                <div className="border-t-4 border-purple-600 inline-block flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-32 h-24 object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-purple-600 uppercase mb-2">
                    {article.category}
                  </p>
                  <h4 className="font-bold text-base mb-2 leading-tight">{article.title}</h4>
                  <p className="text-sm text-gray-700 mb-3">{article.snippet}</p>
                  <a
                    href={article.link}
                    className="text-purple-600 font-semibold inline-flex items-center hover:underline text-sm"
                  >
                    LEARN MORE
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="bg-purple-600 text-white font-semibold px-8 py-3 rounded hover:bg-purple-700 transition uppercase text-sm"
          >
            SEE ALL INSIGHTS
          </a>
        </div>
      </section>
    </>
  );
}