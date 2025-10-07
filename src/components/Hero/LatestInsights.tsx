import React from 'react';
import { ContactForm } from './ContactForm';

const insightsData = {
  featured: {
    category: 'eBook',
    title: 'Cracking the Code of Sales Training',
    snippet: 'Sales teams today face more complexity than ever,...',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    link: '#',
  },
  articles: [
    {
      category: 'Blog',
      title: 'Mastering Customer Service Training: Strategies That Actually Work',
      snippet: 'Do you want to transform your customer service team...',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
      link: '#',
    },
    {
      category: 'Infographic',
      title: 'Coaching vs. Training: What Sales Leaders Should Focus On',
      snippet: 'Sales power revenue for almost every organization, yet today’s...',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      link: '#',
    },
    {
      category: 'Blog',
      title: 'How Virtual Instructor-Led Training (VILT) Is Revolutionizing Corporate Learning in 2025',
      snippet: 'Virtual instructor-led training (VILT) has become a critical option...',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
      link: '#',
    },
  ],
};

export function LatestInsights() {
  return (
    <>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-extrabold mb-8">Our Latest Insights</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Featured Article */}
          <div className="lg:w-2/3 border-r border-purple-700 pr-6">
            <img
              src={insightsData.featured.image}
              alt={insightsData.featured.title}
              className="w-full h-auto rounded-md mb-4 object-cover"
            />
            <p className="text-xs font-semibold text-purple-700 uppercase mb-1">{insightsData.featured.category}</p>
            <h3 className="font-bold text-lg mb-2">{insightsData.featured.title}</h3>
            <p className="text-sm mb-4">{insightsData.featured.snippet}</p>
            <a
              href={insightsData.featured.link}
              className="text-purple-700 font-semibold inline-flex items-center hover:underline"
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
            <hr className="mt-6 border-purple-700" />
          </div>

          {/* Right Articles */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            {insightsData.articles.map((article, idx) => (
              <div key={idx} className="flex gap-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-20 h-20 rounded-md object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-xs font-semibold text-purple-700 uppercase mb-1">{article.category}</p>
                  <h4 className="font-bold text-sm mb-1">{article.title}</h4>
                  <p className="text-xs mb-2">{article.snippet}</p>
                  <a
                    href={article.link}
                    className="text-purple-700 font-semibold inline-flex items-center hover:underline"
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

        {/* See All Insights Button */}
        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="bg-purple-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-800 transition"
          >
            SEE ALL INSIGHTS
          </a>
        </div>
      </section>
      
    </>
  );
}
