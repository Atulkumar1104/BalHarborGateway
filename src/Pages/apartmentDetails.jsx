import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaBed,
  FaBath,
  FaRuler,
  FaWifi,
  FaParking,
  FaSwimmingPool,
} from "react-icons/fa";
import { X } from "lucide-react";
import CTASection from "../Components/contactUs";

const ApartmentDetails = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
   const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
   const [formData, setFormData] = useState({
     checkIn: "",
     checkOut: "",
     bedrooms: "1",
     name: "",
     email: "",
     phone: "",
   });
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send("service_mm5f34b", "template_p2js8ug", {
        to_email: "atulkumar83013@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        check_in: formData.checkIn,
        check_out: formData.checkOut,
        bedrooms: formData.bedrooms,
      });

      setSubmitStatus({
        type: "success",
        message: "Reservation request sent successfully!",
      });
      setFormData({
        checkIn: "",
        checkOut: "",
        bedrooms: "1",
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send reservation request. Please try again.",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBack = () => {
    navigate("/");
  };
  const closeModal = () => setSelectedImage(null);

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

  const apartments = [
    {
      // title: "Unit 18",
      description:
        "Modern 2-bedroom apartment with stunning lake views, fully furnished kitchen, and private balcony.",
      img: "/images/1.jpg",
      price: "$200/Night",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sq ft",
      amenities: ["WiFi", "Parking", "Pool", "Gym"],
      fullDescription:
        "Stress our availability for Passover, Shavuot, and the harsh winter months of January, February, and March. We offer excellent totally kosher (for both Pesach and the entire year) complete apartments, pool all day, 4 short blocks from an excellent meaty and milky restaurant, all at an unbeatable price! 6 blocks from the beach!",
      location: "123 Lakefront Drive",
      availableFrom: "Immediate",
    },
  ];

  const apartment = apartments[0]; // Directly use the first apartment

  // Extract numeric price value and calculate tax
  const basePrice = parseInt(apartment.price.replace(/[^0-9]/g, ""));
  const taxRate = 0.13; // 13% Florida sales tax
  const taxAmount = basePrice * taxRate;
  const totalPrice = basePrice + taxAmount;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Apartment Details Section */}
      <div className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-5">
            <div className="h-[300px] md:h-[500px] w-full">
              <img
                src={apartment.img}
                // alt={apartment.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 md:p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                    {apartment.title}
                  </h1>
                  <p className="text-lg md:text-xl font-bold mt-5 text-gray-600">
                    {apartment.location}
                  </p>
                </div>
                {/* <div className="flex flex-col items-end">
                  <div className="text-2xl md:text-3xl font-bold text-[#ff385c]">
                    {apartment.price}
                  </div>
                  <div className="text-sm text-gray-600">
                    + ${taxAmount.toFixed(2)} (13% Florida sales tax)
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mt-1">
                    Total: ${totalPrice.toFixed(2)}/Night
                  </div>
                </div> */}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <FaBed className="text-gray-500" />
                  <span>{apartment.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBath className="text-gray-500" />
                  <span>{apartment.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRuler className="text-gray-500" />
                  <span>{apartment.area}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Available: {apartment.availableFrom}</span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {apartment.fullDescription}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    Excellent totally kosher facilities for both Pesach and
                    year-round use with complete apartment amenities
                  </li>
                  <li>
                    Full-day pool access, convenient location just 4 blocks from
                    kosher restaurants and 6 blocks from the beach
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {apartment.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {amenity === "WiFi" && (
                        <FaWifi className="text-gray-500" />
                      )}
                      {amenity === "Parking" && (
                        <FaParking className="text-gray-500" />
                      )}
                      {amenity === "Pool" && (
                        <FaSwimmingPool className="text-gray-500" />
                      )}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#ff385c] text-white py-3 md:py-4 px-4 md:px-6 rounded-lg font-semibold hover:bg-[#e31c5f] transition-colors cursor-pointer flex items-center gap-2 md:gap-3 w-full md:w-fit text-sm md:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Call us at: </span>
                <span className="font-bold">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="max-w-[1410px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

      {/* Article Section with Responsive Contact Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:justify-between relative gap-8">
          {/* Left Side - Scrollable Article Content */}
          <div className="w-full lg:flex-1 lg:pr-8 max-h-full lg:max-h-[800px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
            <div className="prose prose-sm md:prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Luxury Living at Its Finest
              </h2>
              <p className="text-gray-700 mb-6">
                Welcome to the epitome of sophisticated urban living. Our Luxury
                Lake View Apartment represents the perfect harmony between
                modern design and natural beauty, offering residents an
                unparalleled living experience in one of the city's most coveted
                locations.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Prime Location & Neighborhood
              </h3>
              <p className="text-gray-700 mb-6">
                Nestled in the heart of the city's most prestigious district,
                this property offers the perfect balance of urban convenience
                and serene living. The lakefront location provides breathtaking
                views and easy access to outdoor activities, while the proximity
                to downtown ensures you're never far from the action.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                A Culinary Paradise
              </h3>
              <p className="text-gray-700 mb-6">
                Food enthusiasts will appreciate the diverse dining scene within
                walking distance. From Michelin-starred restaurants to charming
                local cafes, the neighborhood offers an exceptional range of
                culinary experiences. Notable establishments include: • The Lake
                View Bistro - Contemporary American cuisine • Sakura Japanese
                Restaurant - Authentic sushi and izakaya • Café Milano - Italian
                delicacies • The Green Kitchen - Farm-to-table organic dining
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Shopping & Entertainment
              </h3>
              <p className="text-gray-700 mb-6">
                The area is a shopping paradise with numerous boutiques,
                designer stores, and specialty shops. The nearby Market Street
                Mall features over 150 retailers, while the Historic District
                offers unique antique stores and art galleries. Entertainment
                options include: • The Grand Theater - Live performances and
                shows • Lakeside Cinema - Latest releases in luxury seating •
                The Arts Center - Rotating exhibitions and workshops • Night
                Market - Weekend street food and local artisans
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Wellness & Recreation
              </h3>
              <p className="text-gray-700 mb-6">
                Health and wellness enthusiasts will find everything they need
                within reach: • Lake Trail - 5-mile scenic jogging and biking
                path • Wellness Center - Yoga, pilates, and meditation classes •
                Sports Complex - Tennis courts and Olympic-size pool • Botanical
                Gardens - Perfect for peaceful walks
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Smart Home Technology
              </h3>
              <p className="text-gray-700 mb-6">
                Our apartments feature cutting-edge smart home technology: •
                Voice-controlled lighting and climate control • Smart security
                system with mobile app integration • Digital door locks with
                fingerprint access • Smart appliances with remote control
                capabilities • Integrated entertainment systems • Energy
                efficiency monitoring
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Premium Amenities
              </h3>
              <p className="text-gray-700 mb-6">
                The building offers world-class amenities: • 24/7 Concierge
                service • Rooftop infinity pool with city views •
                State-of-the-art fitness center • Private movie theater • Wine
                cellar and tasting room • Pet spa and dog park • Co-working
                spaces • Guest suites for visitors
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Transportation Hub
              </h3>
              <p className="text-gray-700 mb-6">
                Connectivity is seamless with: • Light rail station - 5-minute
                walk • Multiple bus lines • Dedicated ride-share pickup zone •
                Electric vehicle charging stations • Bicycle storage and repair
                station • Easy highway access
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Education & Schools
              </h3>
              <p className="text-gray-700 mb-6">
                The neighborhood is served by top-rated educational
                institutions: • Lake View Elementary (Rating: 9/10) • Central
                Middle School (Rating: 8/10) • International High School
                (Rating: 9/10) • City University - Downtown Campus • Language
                Learning Center • Public Library - Historical Branch
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Community Events
              </h3>
              <p className="text-gray-700 mb-6">
                Our vibrant community hosts regular events: • Monthly wine
                tasting socials • Seasonal pool parties • Fitness classes and
                workshops • Cooking demonstrations • Art exhibitions • Holiday
                celebrations • Networking events
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Safety & Security
              </h3>
              <p className="text-gray-700 mb-6">
                Your security is our priority: • 24/7 security personnel •
                Advanced surveillance systems • Controlled access to all areas •
                Emergency response system • Secure package delivery • Video
                intercom system
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Interior Design
              </h3>
              <p className="text-gray-700 mb-6">
                Every detail has been carefully considered: • Floor-to-ceiling
                windows with UV protection • Custom Italian cabinetry • Quartz
                countertops • Hardwood flooring • Designer lighting fixtures •
                Spacious walk-in closets • Premium bathroom fixtures
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Sustainability Initiatives
              </h3>
              <p className="text-gray-700 mb-6">
                We're committed to environmental responsibility: • LEED Gold
                certification • Solar panel installation • Rainwater harvesting
                • Energy-efficient appliances • Green roof gardens • Recycling
                program • Composting facilities
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Pet-Friendly Features
              </h3>
              <p className="text-gray-700 mb-6">
                We welcome your furry friends: • Private dog park • Pet washing
                station • Walking services available • Veterinary services
                nearby • Pet social events • Training facilities
              </p>

              <div className="bg-blue-50 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Limited Time Offer
                </h3>
                <p className="text-gray-700">
                  Current residents enjoy exclusive benefits: • First month
                  rent-free • Waived application fee • Complimentary parking for
                  6 months • Free fitness center membership • Move-in assistance
                  Contact us today to learn more about these special offers!
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-80 flex-shrink-0">
      <div className="bg-gray-900 rounded-lg p-4 md:p-6 text-white lg:sticky lg:top-24">
        <h2 className="text-lg md:text-xl font-bold mb-4">Make Your Reservation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Check-in Date</label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-gray-600 rounded p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Check-out Date</label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-gray-600 rounded p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Number of Bedrooms</label>
            <select
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white [&>option]:bg-gray-800 [&>option]:text-white"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num} className="bg-gray-800 text-white">
                  {num} {num === 1 ? "Bedroom" : "Bedrooms"}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full bg-transparent border border-gray-600 rounded p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="w-full bg-transparent border border-gray-600 rounded p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className="w-full bg-transparent border border-gray-600 rounded p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {submitStatus.message && (
            <div
              className={`p-4 rounded ${
                submitStatus.type === "success"
                  ? "bg-green-800 text-green-100"
                  : "bg-red-800 text-red-100"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#ff385c] text-white px-4 py-2 rounded text-sm hover:bg-[#e31c5f] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Reservation
          </button>
        </form>
      </div>
          </div>
          </div>
        </div>
      <CTASection />
    </div>
  );
};

export default ApartmentDetails;
