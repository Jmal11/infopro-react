import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#292929] text-gray-300 text-sm border-t border-gray-700 mt-8">
      <div className="container mx-auto px-4">
        {/* Top Grid Columns: Hidden on mobile, visible on md and up */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 py-12">
          {/* Develop Talent */}
          <div>
            <h3 className="font-bold text-white mb-6">Develop Talent</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-purple-600 font-semibold">
                  Managed Learning Services AI+
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">Custom Content</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">Training Delivery</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">LMS Administration</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">Learning Strategy</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 font-semibold">
                  Training Needs Analysis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">Talent Acquisition</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">Onboarding</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">Leadership Development</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">Performance Management</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">Studio on Demand</a>
              </li>
            </ul>
          </div>
          {/* Empower Teams */}
          <div>
            <h3 className="font-bold text-white mb-6">Empower Teams</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-purple-600 font-semibold">
                  Training Delivery As a Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 font-semibold">Leadership Skills</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">Vanguard Leadership</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">Early Career Development</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">Mid Career Development</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">Senior Leader Development</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">Self Leadership Development</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">Diversity, Equity and Inclusion</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 font-semibold">Digital Skills</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">Data Analytics and Visualization</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">AI & Machine Learning</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">Mastering the Digital Workplace</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">AI Integration & Cloud Computing</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">AI & Cybersecurity</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">Agile Project Management</a>
              </li>
            </ul>
          </div>
          {/* Business and Commercial Skills */}
          <div>
            <h3 className="font-bold text-white mb-6">Business and Commercial skills</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-600">Sales Training and Enablement</a></li>
              <li><a href="#" className="hover:text-purple-600">Customer Excellence</a></li>
              <li><a href="#" className="hover:text-purple-600">Commercial Leader Development</a></li>
              <li><a href="#" className="hover:text-purple-600">Product Training</a></li>
              <li><a href="#" className="hover:text-purple-600">People Leadership</a></li>
              <li><a href="#" className="hover:text-purple-600">Business Leadership</a></li>
            </ul>
            <h3 className="font-bold text-white mt-8 mb-3">Platforms</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-600">Unlock:LEARN</a></li>
              <li><a href="#" className="hover:text-purple-600">Unlock:OKR</a></li>
            </ul>
            <h3 className="font-bold text-white mt-8 mb-3">Glossary</h3>
          </div>
          {/* Transform Organizations */}
          <div>
            <h3 className="font-bold text-white mb-6">Transform Organizations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-600 font-semibold">Unlock:U Platform</a></li>
              <li><a href="#" className="hover:text-purple-600 font-semibold">Performance Consulting</a></li>
              <li><a href="#" className="hover:text-purple-600 font-semibold">Agile Enterprise Transformation</a></li>
              <li><a href="#" className="hover:text-purple-600 font-semibold">Organization Change Management</a></li>
              <li><a href="#" className="hover:text-purple-600 font-semibold">Technology Consulting</a></li>
              <li><a href="#" className="hover:text-purple-600 font-semibold">Operating Model Transformation</a></li>
              <li><a href="#" className="hover:text-purple-600 font-semibold">Skills Based Design</a></li>
            </ul>
            <h3 className="font-bold text-white mt-8 mb-3">Our Work</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-600">Case Studies</a></li>
              <li><a href="#" className="hover:text-purple-600">Podcasts</a></li>
              <li><a href="#" className="hover:text-purple-600">Infographics</a></li>
              <li><a href="#" className="hover:text-purple-600">Webinars</a></li>
              <li><a href="#" className="hover:text-purple-600">eBooks</a></li>
              <li><a href="#" className="hover:text-purple-600">Insights</a></li>
            </ul>
          </div>
          {/* About Us + Social */}
          <div>
            <h3 className="font-bold text-white mb-6">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-600">L&D Podcast by Nolan Hout</a></li>
              <li><a href="#" className="hover:text-purple-600">Press Releases</a></li>
              <li><a href="#" className="hover:text-purple-600">Awards</a></li>
              <li><a href="#" className="hover:text-purple-600">Events</a></li>
              <li><a href="#" className="hover:text-purple-600">Careers</a></li>
              <li><a href="#" className="hover:text-purple-600">Contact Us</a></li>
            </ul>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              {/* Add your SVGs here for LinkedIn, X, etc */}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar: always visible */}
        <div className="border-t border-b border-gray-700 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Corporate Office */}
          <div className="flex items-center gap-4 min-w-[200px]">
            {/* Logo box */}
            <div className="border-4 border-color-ipl rounded-sm px-4 py-1 flex items-center justify-center min-w-[65px] min-h-[44px] mr-2">
              <span className="text-white font-semibold text-xs text-left leading-snug">
                Info<br />pro<br />Learning
              </span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-color-ipl"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
              Corporate Office
            </div>
          </div>
          {/* Address */}
          <div className="flex items-center text-gray-300 gap-2">
            4390 Route 1 North, Suite 302, Princeton, NJ 08540, USA
          </div>
          {/* Email */}
          <div className="flex items-center gap-2 text-gray-300">
            <svg
              className="w-5 h-5 text-color-ipl"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4z" fill="none" />
              <path
                d="M4 4l8 8 8-8"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <rect
                x="4"
                y="4"
                width="16"
                height="16"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <a href="mailto:info@infoprolearning.com">info@infoprolearning.com</a>
          </div>
          {/* Phone */}
          <div className="flex items-center gap-2 text-gray-300">
            <svg
              className="w-5 h-5 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M22 16.92V21a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h4.09a2 2 0 012 1.72A13.35 13.35 0 0012 7a2 2 0 01-2 2a13.36 13.36 0 01-5.18-2.09A1.73 1.73 0 013 5.18V21a1.73 1.73 0 001.18 1.72c2.36 1.05 5.57 2.12 6.78 2.26a2 2 0 002.18-2v-4.09a2 2 0 01-1.72-2c.13-.52.34-1 .71-1.36a19.72 19.72 0 0115.36-6.78A2 2 0 0121 16.92z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            +1 (609) 606-9984
          </div>
        </div>

        {/* Footer Legal Bar: always visible */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 mt-2 py-3">
          <span>&copy; INFOPRO LEARNING, INC. ALL RIGHTS RESERVED.</span>
          <span>
            TERMS OF SERVICE &nbsp;|&nbsp; PRIVACY POLICY &nbsp;|&nbsp; INFORMATION
            SECURITY POLICY
          </span>
        </div>
      </div>
    </footer>
  );
}
