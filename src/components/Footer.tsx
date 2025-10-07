import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm mt-8">
      {/* Wrapper with fixed/max width */}
      <div className="container mx-auto px-4"> 
        {/* Internal spacing */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-6 gap-8 border-b border-gray-700">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-white mb-12 text-right">Develop Talent</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-500 font-semibold">Managed Learning Services</a></li>
              <li><a href="#" className="hover:text-purple-500">Custom Content</a></li>
              <li><a href="#" className="hover:text-purple-500">Training Delivery</a></li>
              <li><a href="#" className="hover:text-purple-500">LMS Administration</a></li>
              <li><a href="#" className="hover:text-purple-500">Learning Strategy</a></li>
              <li><a href="#" className="hover:text-purple-500 font-semibold">Training Needs Analysis</a></li>
              <li><a href="#" className="hover:text-purple-500">Talent Acquisition</a></li>
              <li><a href="#" className="hover:text-purple-500">Onboarding</a></li>
              <li><a href="#" className="hover:text-purple-500">Leadership Development</a></li>
              <li><a href="#" className="hover:text-purple-500">Performance Management</a></li>
              <li><a href="#" className="hover:text-purple-500">Studio on Demand</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-white mb-12 text-right">Empower Teams</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-500 font-semibold">Training Delivery As a Service</a></li>
              <li><a href="#" className="hover:text-purple-500 font-semibold">Leadership Skills</a></li>
              <li><a href="#" className="hover:text-purple-500">Vanguard Leadership</a></li>
              <li><a href="#" className="hover:text-purple-500">Early Career Development</a></li>
              <li><a href="#" className="hover:text-purple-500">Mid Career Development</a></li>
              <li><a href="#" className="hover:text-purple-500">Senior Leader Development</a></li>
              <li><a href="#" className="hover:text-purple-500">Self Leadership Development</a></li>
              <li><a href="#" className="hover:text-purple-500">Diversity, Equity and Inclusion</a></li>
              <li><a href="#" className="hover:text-purple-500 font-semibold">Digital Skills</a></li>
              <li><a href="#" className="hover:text-purple-500">Data Analytics and Visualization</a></li>
              <li><a href="#" className="hover:text-purple-500">AI & Machine Learning</a></li>
              <li><a href="#" className="hover:text-purple-500">Mastering the Digital Workplace</a></li>
              <li><a href="#" className="hover:text-purple-500">AI Integration & Cloud Computing</a></li>
              <li><a href="#" className="hover:text-purple-500">AI & Cybersecurity</a></li>
              <li><a href="#" className="hover:text-purple-500">Agile Project Management</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-white mb-12 text-right">Business and Commercial skills</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-500">Sales Training and Enablement</a></li>
              <li><a href="#" className="hover:text-purple-500">Customer Excellence</a></li>
              <li><a href="#" className="hover:text-purple-500">Commercial Leader Development</a></li>
              <li><a href="#" className="hover:text-purple-500">Product Training</a></li>
              <li><a href="#" className="hover:text-purple-500">People Leadership</a></li>
              <li><a href="#" className="hover:text-purple-500">Business Leadership</a></li>
            </ul>
            <h3 className="font-bold text-white mt-6 mb-4">Platforms</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-500">Unlock:LEARN</a></li>
              <li><a href="#" className="hover:text-purple-500">Unlock:OKR</a></li>
            </ul>
            <h3 className="font-bold text-white mt-6 mb-4">Glossary</h3>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-white mb-12 text-right">Transform Organizations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-500 font-semibold">Unlock:U Platform</a></li>
              <li><a href="#" className="hover:text-purple-500 font-semibold">Performance Consulting</a></li>
              <li><a href="#" className="hover:text-purple-500 font-semibold">Agile Enterprise Transformation</a></li>
              <li><a href="#" className="hover:text-purple-500 font-semibold">Organization Change Management</a></li>
              <li><a href="#" className="hover:text-purple-500 font-semibold">Technology Consulting</a></li>
              <li><a href="#" className="hover:text-purple-500 font-semibold">Operating Model Transformation</a></li>
              <li><a href="#" className="hover:text-purple-500 font-semibold">Skills Based Design</a></li>
            </ul>
            <h3 className="font-bold text-white mt-6 mb-4">Our Work</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-500">Case Studies</a></li>
              <li><a href="#" className="hover:text-purple-500">Podcasts</a></li>
              <li><a href="#" className="hover:text-purple-500">Infographics</a></li>
              <li><a href="#" className="hover:text-purple-500">Webinars</a></li>
              <li><a href="#" className="hover:text-purple-500">eBooks</a></li>
              <li><a href="#" className="hover:text-purple-500">Insights</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-bold text-white mb-12 text-right">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-500">L&D Podcast by Nolan Huot</a></li>
              <li><a href="#" className="hover:text-purple-500">Press Releases</a></li>
              <li><a href="#" className="hover:text-purple-500">Awards</a></li>
              <li><a href="#" className="hover:text-purple-500">Events</a></li>
              <li><a href="#" className="hover:text-purple-500">Careers</a></li>
              <li><a href="#" className="hover:text-purple-500">Contact Us</a></li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="LinkedIn" className="hover:text-purple-500">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.2c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24h-5V8z"/>
                </svg>
              </a>
              <a href="#" aria-label="X" className="hover:text-purple-500">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.083-.205-7.702-2.158-10.126-5.134-.422.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.318-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.179 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633.962-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                </svg>
              </a>
              <a href="#" aria-label="Spotify" className="hover:text-purple-500">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm5.4 17.4c-.3.45-.9.6-1.35.3-3.6-2.1-8.1-2.4-11.7-1.2-.45.15-1.05-.15-1.2-.6-.15-.45.15-1.05.6-1.2 4.2-1.35 9.15-1.05 12.6 1.35.45.15.6.75.3 1.35zm1.5-3.6c-.375.6-1.2.75-1.8.375-4.05-2.25-10.8-2.925-14.4-1.425-.6.225-1.275-.15-1.5-.75-.225-.6.15-1.275.75-1.5 4.95-1.65 12.6-1.05 17.1 1.65.6.3.75 1.05.375 1.65zm.15-3.75c-5.1-2.7-13.65-2.925-17.85-1.425-.75.225-1.5-.15-1.725-.9-.225-.75.15-1.5.9-1.725 5.7-1.8 16.05-1.5 22.35 1.65.75.3 1.2 1.2.9 1.95-.3.75-1.2 1.2-1.65.45z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-purple-500">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.97 2.97 0 0 0-2.088-2.088C19.668 3.5 12 3.5 12 3.5s-7.668 0-9.41.598a2.97 2.97 0 0 0-2.088 2.088C0 7.928 0 12 0 12s0 4.072.502 5.814a2.97 2.97 0 0 0 2.088 2.088c1.742.598 9.41.598 9.41.598s7.668 0 9.41-.598a2.97 2.97 0 0 0 2.088-2.088c.502-1.742.502-5.814.502-5.814s0-4.072-.502-5.814s-.502-5.814zM9.75 15.02V8.98l5.818 3.02-5.818 3.02z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-purple-500">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325 1.266-.058 1.645-.07 4.85-.07zm0-2.163C8.756 0 8.332.012 7.052.07 5.772.128 4.548.443 3.515 1.476 2.482 2.509 2.167 3.733 2.109 5.013.012 8.332 0 8.756 0 12c0 3.244.012 3.668.07 4.948.058 1.28.373 2.504 1.406 3.537 1.033 1.033 2.257 1.348 3.537 1.406 1.28.058 1.704.07 4.948.07s3.668-.012 4.948-.07c1.28-.058 2.504-.373 3.537-1.406 1.033-1.033 1.348-2.257 1.406-3.537.058-1.28.07-1.704.07-4.948s-.012-3.668-.07-4.948c-.058-1.28-.373-2.504-1.406-3.537-1.033-1.033-2.257-1.348-3.537-1.406-1.28-.058-1.704-.07-4.948-.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
