import React, { useState } from "react";
import Tilt from "./tilt";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ApartmentListings = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    console.log("Navigating to apartment:", id);
    navigate(`/apartment/${id}`);
  };

  const apartments = [
    {
      id: 0,
      title: "Luxury Lake View Apartment",
      description:
        "Modern 2-bedroom apartment with stunning lake views, fully furnished kitchen, and private balcony.",
      img: "https://i.pinimg.com/736x/3a/e7/59/3ae759999fb45a328028241181dec73a.jpg",
    },
    {
      id: 1,
      title: "Cozy Studio Downtown",
      description:
        "Efficient studio apartment in the heart of downtown. Perfect for young professionals.",
      img: "https://i.pinimg.com/736x/21/47/f4/2147f49b409ab77b1976567b2c7d72b9.jpg",
    },
    {
      id: 2,
      title: "Family Garden Apartment",
      description:
        "Spacious 3-bedroom apartment with private garden and modern amenities.",
      img: "https://i.pinimg.com/736x/48/76/80/487680af596db0d5dd1f3acff679e6ab.jpg",
    },
    {
      id: 3,
      title: "Urban Loft Apartment",
      description:
        "Contemporary 1-bedroom loft with high ceilings and industrial design elements.",
      img: "https://i.pinimg.com/736x/a2/5f/14/a25f14e748d8bd58210ef74bca4d8ad2.jpg",
    },
    {
      id: 4,
      title: "Penthouse Suite",
      description:
        "Luxurious 3-bedroom penthouse with panoramic city views and private terrace.",
      img: "https://i.pinimg.com/736x/14/83/2e/14832edcea75d64a51176d0ebbba2328.jpg",
    },
    {
      id: 5,
      title: "Garden View Studio",
      description:
        "Charming studio apartment overlooking community gardens with updated appliances.",
      img: "https://i.pinimg.com/736x/a5/42/71/a54271f6c829190c4fef81a9346e1a19.jpg",
    },
    {
      id: 6,
      title: "Modern Two-Bedroom",
      description:
        "Contemporary 2-bedroom apartment with open floor plan and smart home features.",
      img: "https://i.pinimg.com/736x/db/5f/63/db5f63f65ed24c3444764b59486bbe33.jpg",
    },
    {
      id: 7,
      title: "Riverside Apartment",
      description:
        "Elegant 2-bedroom apartment with river views and access to community amenities.",
      img: "https://i.pinimg.com/736x/52/92/98/529298611bb7d1df076b4b869d00e03c.jpg",
    },
    {
      id: 8,
      title: "Heritage Loft",
      description:
        "Historic building converted into modern loft spaces with original architectural details.",
      img: "https://i.pinimg.com/736x/3a/e7/59/3ae759999fb45a328028241181dec73a.jpg",
    },
    {
      id: 9,
      title: "Sky View Apartment",
      description:
        "High-rise apartment with floor-to-ceiling windows and stunning city skyline views.",
      img: "https://i.pinimg.com/736x/21/47/f4/2147f49b409ab77b1976567b2c7d72b9.jpg",
    },
    {
      id: 10,
      title: "Eco-Friendly Studio",
      description:
        "Sustainable living space with energy-efficient appliances and green building features.",
      img: "https://i.pinimg.com/736x/48/76/80/487680af596db0d5dd1f3acff679e6ab.jpg",
    },
    {
      id: 11,
      title: "Artist's Loft",
      description:
        "Spacious loft with natural lighting, perfect for creative professionals.",
      img: "https://i.pinimg.com/736x/a2/5f/14/a25f14e748d8bd58210ef74bca4d8ad2.jpg",
    },
    {
      id: 12,
      title: "Garden Terrace Suite",
      description:
        "Ground floor apartment with private terrace and direct garden access.",
      img: "https://i.pinimg.com/736x/14/83/2e/14832edcea75d64a51176d0ebbba2328.jpg",
    },
  ];

  const cardsPerPage = {
    mobile: 4,
    tablet: 6,
    desktop: 8,
  };

  const getCardsPerPage = () => {
    if (window.innerWidth < 768) return cardsPerPage.mobile;
    if (window.innerWidth < 1024) return cardsPerPage.tablet;
    return cardsPerPage.desktop;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getCardsPerPage());

  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getCardsPerPage());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(apartments.length / itemsPerPage);
  const startIdx = currentPage * itemsPerPage;
  const visibleApartments = apartments.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-20">
      <div className="mx-auto max-w-full">
        <h1 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Available Apartments
        </h1>
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm sm:text-base text-gray-600">
            Showing {visibleApartments.length} of {apartments.length} apartments
          </p>
          <div className="flex gap-2 sm:gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
              className="rounded-full bg-[#ff385c] px-3 py-2 sm:px-4 sm:py-3 font-medium text-white shadow-md transition-colors hover:bg-[#e31c5f] disabled:opacity-50"
              disabled={currentPage === 0}
            >
              <FaArrowLeft className="text-sm sm:text-base" />
            </button>
            <span className="flex items-center text-sm sm:text-base text-gray-600">
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
              }
              className="rounded-full bg-[#ff385c] px-3 py-2 sm:px-4 sm:py-3 font-medium text-white shadow-md transition-colors hover:bg-[#e31c5f] disabled:opacity-50"
              disabled={currentPage === totalPages - 1}
            >
              <FaArrowRight className="text-sm sm:text-base" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {visibleApartments.map((apartment) => (
            <Tilt key={apartment.id} rotationFactor={5} isRevese>
              <div className="h-full min-h-[400px] sm:h-[450px] w-full overflow-hidden rounded-lg bg-white shadow-lg flex flex-col">
                <div className="h-40 sm:h-48 flex-shrink-0">
                  <img
                    src={apartment.img}
                    alt={apartment.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      {apartment.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {apartment.description}
                    </p>
                  </div>
                  <button
                    className="mt-4 w-full rounded-lg bg-[#ff385c] px-4 py-2 font-medium text-white transition-colors hover:bg-[#e31c5f] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    onClick={() => handleViewDetails(apartment.id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApartmentListings;
