import React, { useState, useEffect } from "react";

const CTASection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/10.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
    "/images/5.jpg",
    "/images/7.jpg",
    "/images/6.jpg",
    "/images/9.jpg",
    "/images/3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-50 py-6 sm:py-8 md:py-12">
      <div className="max-w-[1470px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center bg-gray-200 rounded-lg shadow-sm overflow-hidden">
          {/* Left side - Image Carousel */}
          <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
            {galleryImages.map((image, index) => (
              <div
                key={image}
                className={`absolute w-full h-full transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right side - Content */}
          <div className="p-4 sm:p-6 md:p-8 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10">
              For Booking Call Now
            </h2>

            <button
              onClick={() => (window.location.href = "tel:+1234567890")}
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-white bg-[#ff385c] rounded hover:bg-[#ff1f4a] transition-colors duration-300"
            >
              Call Us Now {""}
              <span className="ml-2">(516-585-8791)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
