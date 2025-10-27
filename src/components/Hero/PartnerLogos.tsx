import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const logos = [
  { name: 'Bayer', src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/our-client/Bayer.png', alt: 'Bayer Logo' },
  { name: 'Nordea', src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/our-client/nordea-latest.png', alt: 'Nordea Logo' },
  { name: 'Meta', src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/our-client/Meta.png', alt: 'Meta Logo' },
  { name: 'Deloitte', src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/our-client/Deloitte.png', alt: 'Deloitte Logo' },
  { name: 'Dell Technologies', src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/our-client/Dell.png', alt: 'Dell Technologies Logo' },
  { name: 'General Mills', src: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/our-client/General_Mills.png', alt: 'General Mills Logo' },
];

export function PartnerLogos() {
  return (
    <div className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={4000}
            swipeable
            emulateTouch
            showIndicators
            renderIndicator={(onClickHandler, isSelected, index, label) => (
              <li
                className={`inline-block w-2.5 h-2.5 mx-1 rounded-full cursor-pointer transition-all duration-150 ${
                  isSelected ? "bg-gray-800" : "bg-gray-300"
                }`}
                onClick={onClickHandler}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
                style={{ marginTop: 12 }}
              />
            )}
          >
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex flex-col items-center min-h-[120px] py-2 justify-between"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 mb-10 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer mx-auto"
                  loading="lazy"
                  style={{ maxHeight: '64px', objectFit: 'contain' }}
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Desktop/tablet flex layout */}
        <div className="hidden md:flex justify-between items-center space-x-8">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.alt}
              className="h-16 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
              loading="lazy"
              style={{ maxHeight: '64px', objectFit: 'contain' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}