import React, { useState, useEffect, useRef } from 'react';

const officeLocations = {
  'New Jersey': {
    address: '4390 Route 1 North, Suite 302, Princeton, NJ 08540, USA',
    phone: '+1 (609) 606-9984',
    email: 'info@infoprolearning.com'
  },
  'Washington': {
    address: '1234 Washington Street, Suite 100, Seattle, WA 98101, USA',
    phone: '+1 (206) 123-4567',
    email: 'info@infoprolearning.com'
  },
  'New-York': {
    address: '5678 Broadway Avenue, New York, NY 10001, USA',
    phone: '+1 (212) 987-6543',
    email: 'info@infoprolearning.com'
  },
  'Soborg': {
    address: 'Gladsaxe Ringvej 123, 2860 Søborg, Denmark',
    phone: '+45 12 34 56 78',
    email: 'info@infoprolearning.com'
  },
  'London': {
    address: '123 Oxford Street, London W1D 2HG, United Kingdom',
    phone: '+44 20 1234 5678',
    email: 'info@infoprolearning.com'
  },
  'Singapore': {
    address: '123 Marina Boulevard, Singapore 018989',
    phone: '+65 6123 4567',
    email: 'info@infoprolearning.com'
  },
  'Toronto': {
    address: '456 Bay Street, Toronto, ON M5H 2Y4, Canada',
    phone: '+1 (416) 123-4567',
    email: 'info@infoprolearning.com'
  },
  'Noida': {
    address: 'Sector 62, Noida, Uttar Pradesh 201309, India',
    phone: '+91 120 123 4567',
    email: 'info@infoprolearning.com'
  },
  'Goa': {
    address: 'Panaji, Goa 403001, India',
    phone: '+91 832 123 4567',
    email: 'info@infoprolearning.com'
  },
  'Kolkata': {
    address: 'Salt Lake, Kolkata 700091, West Bengal, India',
    phone: '+91 33 1234 5678',
    email: 'info@infoprolearning.com'
  },
  'Pune': {
    address: 'Hinjewadi, Pune 411057, Maharashtra, India',
    phone: '+91 20 1234 5678',
    email: 'info@infoprolearning.com'
  },
  'Dubai': {
    address: 'Dubai Internet City, Dubai, UAE',
    phone: '+971 4 123 4567',
    email: 'info@infoprolearning.com'
  }
};

export function Footer() {
  const [selectedOffice, setSelectedOffice] = useState('New Jersey');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const currentOffice = officeLocations[selectedOffice];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  const handleOfficeSelect = (office) => {
    setSelectedOffice(office);
    setShowDropdown(false);
  };

  return (
    <footer className="bg-[#292929] text-gray-300 text-sm border-t border-gray-700 mt-8 overflow-visible">
      <div className="container mx-auto px-4 overflow-visible">
        {/* Top Grid Columns: Hidden on mobile, visible on md and up */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 py-12 overflow-visible">
          {/* Column 1: Develop Talent */}
          <div>
            <h3 className="font-bold text-white mb-6">Develop Talent</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline font-semibold">
                  Managed Learning Services AI+
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">Custom Content</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">Training Delivery</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">LMS Administration</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">Learning Strategy</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline font-semibold">
                  Training Needs Analysis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">Talent Acquisition</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">Onboarding</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">Leadership Development</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">Performance Management</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">Studio on Demand</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Empower Teams */}
          <div>
            <h3 className="font-bold text-white mb-6">Empower Teams</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline font-semibold">
                  Training Delivery As a Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline font-semibold">Leadership Skills</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">Vanguard Leadership</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">Early Career Development</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">Mid Career Development</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">Senior Leader Development</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">Self Leadership Development</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">Diversity, Equity and Inclusion</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline font-semibold">Digital Skills</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">Data Analytics and Visualization</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">AI & Machine Learning</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">Mastering the Digital Workplace</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">AI Integration & Cloud Computing</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">AI & Cybersecurity</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 hover:underline">Agile Project Management</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Business and Commercial Skills + Platforms + Glossary */}
          <div>
            {/* Business and Commercial Skills Section */}
            <div className="mb-8">
              <h3 className="font-bold text-white mb-6">Business and Commercial skills</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-600 hover:underline">Sales Training and Enablement</a></li>
                <li><a href="#" className="hover:text-purple-600 hover:underline">Customer Excellence</a></li>
                <li><a href="#" className="hover:text-purple-600 hover:underline">Commercial Leader Development</a></li>
                <li><a href="#" className="hover:text-purple-600 hover:underline">Product Training</a></li>
                <li><a href="#" className="hover:text-purple-600 hover:underline">People Leadership</a></li>
                <li><a href="#" className="hover:text-purple-600 hover:underline">Business Leadership</a></li>
              </ul>
            </div>

            {/* Platforms Section */}
            <div className="mb-8">
              <h3 className="font-bold text-white mb-3">Platforms</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-600 hover:underline">Unlock:LEARN</a></li>
                <li><a href="#" className="hover:text-purple-600 hover:underline">Unlock:OKR</a></li>
              </ul>
            </div>

            {/* Glossary Section */}
            <div>
              <h3 className="font-bold text-white mb-3">
                <a href="#" className="hover:text-purple-600 hover:underline">Glossary</a>
              </h3>
            </div>
          </div>

          {/* Column 4: Transform Organizations + Our Work */}
          <div>
            {/* Transform Organizations Section */}
            <div className="mb-8">
              <h3 className="font-bold text-white mb-6">Transform Organizations</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-600 hover:underline font-semibold">Unlock:U Platform</a></li>
                <li><a href="#" className="hover:text-purple-600 hover:underline font-semibold">Performance Consulting</a></li>
                <li><a href="#" className="hover:text-purple-600 hover:underline font-semibold">Agile Enterprise Transformation</a></li>
                <li><a href="#" className="hover:text-purple-600 hover:underline font-semibold">Organization Change Management</a></li>
                <li><a href="#" className="hover:text-purple-600 hover:underline font-semibold">Technology Consulting</a></li>
                <li><a href="#" className="hover:text-purple-600 hover:underline font-semibold">Operating Model Transformation</a></li>
                <li><a href="#" className="hover:text-purple-600 hover:underline font-semibold">Skills Based Design</a></li>
              </ul>
            </div>

            {/* Our Work Section */}
            <div>
              <h3 className="font-bold text-white mb-3">Our Work</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-600 hover:underline">Case Studies</a></li>
                <li><a href="#" className="hover:text-purple-600 hover:underline">Podcasts</a></li>
                <li><a href="#" className="hover:text-purple-600 hover:underline">Infographics</a></li>
                <li><a href="#" className="hover:text-purple-600 hover:underline">Webinars</a></li>
                <li><a href="#" className="hover:text-purple-600 hover:underline">eBooks</a></li>
                <li><a href="#" className="hover:text-purple-600 hover:underline">Insights</a></li>
              </ul>
            </div>
          </div>

          {/* Column 5: About Us + Social */}
          <div>
            <h3 className="font-bold text-white mb-6">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-600 hover:underline">L&D Podcast by Nolan Hout</a></li>
              <li><a href="#" className="hover:text-purple-600 hover:underline">Press Releases</a></li>
              <li><a href="#" className="hover:text-purple-600 hover:underline">Awards</a></li>
              <li><a href="#" className="hover:text-purple-600 hover:underline">Events</a></li>
              <li><a href="#" className="hover:text-purple-600 hover:underline">Careers</a></li>
              <li><a href="#" className="hover:text-purple-600 hover:underline">Contact Us</a></li>
            </ul>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              {/* Add your social media icons here */}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar: always visible */}
        <div className="border-t border-b border-gray-700 py-4 flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-visible">
          {/* Logo and Corporate Office */}
          <div className="flex items-center gap-4 min-w-[200px] relative overflow-visible">
            {/* Logo */}
            <div className="flex items-center mr-4">
              <img 
                src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/logo-new.svg"
                alt="Infopro Learning"
                className="h-auto w-auto"
              />
            </div>
            <div className="relative overflow-visible" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 text-white hover:text-purple-600 transition-colors"
              >
                <img 
                  src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/corporate-office%201.svg"
                  alt="Corporate Office"
                  className="w-5 h-5"
                />
                <span>Corporate Office</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu - Popup showing all 12 office locations */}
              {showDropdown && (
                <div 
                  className="absolute bg-white text-gray-900 shadow-2xl border-2 border-gray-300"
                  style={{ 
                    minWidth: '200px',
                    bottom: '100%',
                    left: '0',
                    marginBottom: '8px',
                    zIndex: 99999,
                    display: 'block'
                  }}
                >
                  {/* Header */}
                  <div className="px-4 py-2 font-bold text-sm border-b-2 border-gray-300 bg-gray-50 text-gray-900" style={{ display: 'block' }}>
                    Corporate Office
                  </div>
                  {/* All Office Locations List */}
                  <div style={{ display: 'block' }}>
                    <button
                      onClick={() => handleOfficeSelect('New Jersey')}
                      style={{ display: 'block', width: '100%' }}
                      className={`text-left px-4 py-2 text-sm whitespace-nowrap hover:bg-purple-600 hover:text-white transition-colors ${
                        selectedOffice === 'New Jersey' ? 'bg-purple-600 text-white' : 'text-gray-900'
                      }`}
                    >
                      New Jersey
                    </button>
                    <button
                      onClick={() => handleOfficeSelect('Washington')}
                      style={{ display: 'block', width: '100%' }}
                      className={`text-left px-4 py-2 text-sm whitespace-nowrap hover:bg-purple-600 hover:text-white transition-colors ${
                        selectedOffice === 'Washington' ? 'bg-purple-600 text-white' : 'text-gray-900'
                      }`}
                    >
                      Washington
                    </button>
                    <button
                      onClick={() => handleOfficeSelect('New-York')}
                      style={{ display: 'block', width: '100%' }}
                      className={`text-left px-4 py-2 text-sm whitespace-nowrap hover:bg-purple-600 hover:text-white transition-colors ${
                        selectedOffice === 'New-York' ? 'bg-purple-600 text-white' : 'text-gray-900'
                      }`}
                    >
                      New-York
                    </button>
                    <button
                      onClick={() => handleOfficeSelect('Soborg')}
                      style={{ display: 'block', width: '100%' }}
                      className={`text-left px-4 py-2 text-sm whitespace-nowrap hover:bg-purple-600 hover:text-white transition-colors ${
                        selectedOffice === 'Soborg' ? 'bg-purple-600 text-white' : 'text-gray-900'
                      }`}
                    >
                      Soborg
                    </button>
                    <button
                      onClick={() => handleOfficeSelect('London')}
                      style={{ display: 'block', width: '100%' }}
                      className={`text-left px-4 py-2 text-sm whitespace-nowrap hover:bg-purple-600 hover:text-white transition-colors ${
                        selectedOffice === 'London' ? 'bg-purple-600 text-white' : 'text-gray-900'
                      }`}
                    >
                      London
                    </button>
                    <button
                      onClick={() => handleOfficeSelect('Singapore')}
                      style={{ display: 'block', width: '100%' }}
                      className={`text-left px-4 py-2 text-sm whitespace-nowrap hover:bg-purple-600 hover:text-white transition-colors ${
                        selectedOffice === 'Singapore' ? 'bg-purple-600 text-white' : 'text-gray-900'
                      }`}
                    >
                      Singapore
                    </button>
                    <button
                      onClick={() => handleOfficeSelect('Toronto')}
                      style={{ display: 'block', width: '100%' }}
                      className={`text-left px-4 py-2 text-sm whitespace-nowrap hover:bg-purple-600 hover:text-white transition-colors ${
                        selectedOffice === 'Toronto' ? 'bg-purple-600 text-white' : 'text-gray-900'
                      }`}
                    >
                      Toronto
                    </button>
                    <button
                      onClick={() => handleOfficeSelect('Noida')}
                      style={{ display: 'block', width: '100%' }}
                      className={`text-left px-4 py-2 text-sm whitespace-nowrap hover:bg-purple-600 hover:text-white transition-colors ${
                        selectedOffice === 'Noida' ? 'bg-purple-600 text-white' : 'text-gray-900'
                      }`}
                    >
                      Noida
                    </button>
                    <button
                      onClick={() => handleOfficeSelect('Goa')}
                      style={{ display: 'block', width: '100%' }}
                      className={`text-left px-4 py-2 text-sm whitespace-nowrap hover:bg-purple-600 hover:text-white transition-colors ${
                        selectedOffice === 'Goa' ? 'bg-purple-600 text-white' : 'text-gray-900'
                      }`}
                    >
                      Goa
                    </button>
                    <button
                      onClick={() => handleOfficeSelect('Kolkata')}
                      style={{ display: 'block', width: '100%' }}
                      className={`text-left px-4 py-2 text-sm whitespace-nowrap hover:bg-purple-600 hover:text-white transition-colors ${
                        selectedOffice === 'Kolkata' ? 'bg-purple-600 text-white' : 'text-gray-900'
                      }`}
                    >
                      Kolkata
                    </button>
                    <button
                      onClick={() => handleOfficeSelect('Pune')}
                      style={{ display: 'block', width: '100%' }}
                      className={`text-left px-4 py-2 text-sm whitespace-nowrap hover:bg-purple-600 hover:text-white transition-colors ${
                        selectedOffice === 'Pune' ? 'bg-purple-600 text-white' : 'text-gray-900'
                      }`}
                    >
                      Pune
                    </button>
                    <button
                      onClick={() => handleOfficeSelect('Dubai')}
                      style={{ display: 'block', width: '100%' }}
                      className={`text-left px-4 py-2 text-sm whitespace-nowrap hover:bg-purple-600 hover:text-white transition-colors ${
                        selectedOffice === 'Dubai' ? 'bg-purple-600 text-white' : 'text-gray-900'
                      }`}
                    >
                      Dubai
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Address */}
          <div className="flex items-center text-gray-300 gap-2">
            {currentOffice.address}
          </div>
          {/* Email */}
          <div className="flex items-center gap-2 text-gray-300">
            <img 
              src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/email%203.svg"
              alt="Email"
              className="w-5 h-5"
            />
            <a href={`mailto:${currentOffice.email}`} className="hover:text-purple-600">
              {currentOffice.email}
            </a>
          </div>
          {/* Phone */}
          <div className="flex items-center gap-2 text-gray-300">
            <img 
              src="https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/phone%204.svg"
              alt="Phone"
              className="w-5 h-5"
            />
            <a href={`tel:${currentOffice.phone.replace(/\s/g, '')}`} className="hover:text-purple-600">
              {currentOffice.phone}
            </a>
          </div>
        </div>

        {/* Footer Legal Bar: always visible */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 py-3">
          <span>&copy; INFOPRO LEARNING, INC. ALL RIGHTS RESERVED.</span>
          <span>
            <a href="#" className="hover:text-purple-600">TERMS OF SERVICE</a>
            &nbsp;|&nbsp;
            <a href="#" className="hover:text-purple-600">PRIVACY POLICY</a>
            &nbsp;|&nbsp;
            <a href="#" className="hover:text-purple-600">INFORMATION SECURITY POLICY</a>
          </span>
        </div>
      </div>
    </footer>
  );
}