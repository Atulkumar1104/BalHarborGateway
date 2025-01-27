import React, { useState } from "react";
import { X } from "lucide-react";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="max-w-[1500px] mx-auto -mt-12 px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        <span className="bg-clip-text text-transparent text-6xl bg-[#ff385c]">
          Kosher
        </span>{" "}
        Apartment Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-7xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="max-h-[90vh] mx-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
