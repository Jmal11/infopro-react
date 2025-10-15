import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const awards = [
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/awards/ti-1.png',
  },
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/awards/bh.png',
  },
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/fosway-2025.webp',
  },
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/2025-Leadership-Training.webp',
  },
  {
    image: 'https://www.infoprolearning.com/wp-content/themes/ipl/assets/images-new/2024/LIP_BRONZE_Winner_Badge_2024.png',
  },
];

export function AwardSection() {
  return (
    <section className="bg-[#f6f6f6]">
      <div className="container mx-auto px-4 py-12">

        {/* Mobile: Logo Carousel with Dots */}
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
                className={`inline-block w-2.5 h-2.5 mx-1 rounded-full cursor-pointer ${isSelected ? "bg-purple-600" : "bg-gray-300"}`}
                onClick={onClickHandler}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
                style={{ marginTop: 24 }}
              />
            )}
          >
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center min-h-[120px] py-2"
              >
                <img
                  src={award.image}
                  alt={`Award Logo ${idx + 1}`}
                  className="w-40 h-24 object-contain mb-10"
                  loading="lazy"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Desktop/Tablet: Flex Wrap Logos */}
        <div className="hidden md:flex flex-wrap justify-center gap-10">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-2"
            >
              <img
                src={award.image}
                alt={`Award Logo ${idx + 1}`}
                className="w-40 h-24 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
