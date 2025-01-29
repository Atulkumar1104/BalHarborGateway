import React, { useState } from "react";
import { MapPin, Phone, Mail, X } from "lucide-react";
import MapboxPreview from "../Components/googlemaps";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    bedrooms: "1",
    name: "",
    email: "",
    phone: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Placeholder for future form submission logic
    try {
      // You can add your form submission logic here later
      console.log("Form submitted:", formData);

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
      console.error("Submission Error:", error);
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

  return (
    <>
      {/* Animated background pattern */}
      <div className="fixed -z-10 inset-0 opacity-40">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(30deg, rgb(75, 85, 99) 12%, transparent 12.5%, transparent 87%, rgb(75, 85, 99) 87.5%, rgb(75, 85, 99)),
              linear-gradient(150deg, rgb(75, 85, 99) 12%, transparent 12.5%, transparent 87%, rgb(75, 85, 99) 87.5%, rgb(75, 85, 99)),
              linear-gradient(30deg, rgb(75, 85, 99) 12%, transparent 12.5%, transparent 87%, rgb(75, 85, 99) 87.5%, rgb(75, 85, 99)),
              linear-gradient(150deg, rgb(75, 85, 99) 12%, transparent 12.5%, transparent 87%, rgb(75, 85, 99) 87.5%, rgb(75, 85, 99))
            `,
            backgroundSize: "80px 140px",
            backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px",
            animation: "moveBackground 10s linear infinite",
          }}
        />
      </div>

      <style>
        {`
          @keyframes moveBackground {
            0% {
              background-position: 0 0, 0 0, 40px 70px, 40px 70px;
            }
            100% {
              background-position: 80px 140px, 80px 140px, 120px 210px, 120px 210px;
            }
          }
        `}
      </style>

      <div className="min-h-screen bg-white bg-opacity-90">
        {/* Hero Section */}
        <div className="relative h-64 -mt-16 sm:-mt-0 sm:h-80 md:h-96 overflow-hidden">
          <img
            src="/images/12.jpg"
            alt="Luxury Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
            <div className="text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
                Make a Reservation
              </h1>
              <p className="text-base sm:text-lg md:text-xl">
                Book Your Dream Stay Today
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                  Our team is here to assist you in booking your perfect stay.
                  Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="grid gap-4 sm:gap-6">
                <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 transform transition-transform duration-300 hover:scale-105">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Visit Us</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        10000 E Bay Harbor Dr #7,
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Miami Beach, FL 33154 2
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 transform transition-transform duration-300 hover:scale-105">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        516-585-8791
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Monday - Friday, 9AM - 6PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 transform transition-transform duration-300 hover:scale-105">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        balharborgetaway@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Form */}
            <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Make Your Reservation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Number of Bedrooms
                  </label>
                  <select
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Bedroom" : "Bedrooms"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                  />
                </div>

                {submitStatus.message && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#ff385c] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit Reservation
                </button>
              </form>
            </div>
          </div>

          <div>
            <MapboxPreview />
          </div>

          {/* Image Gallery Section */}
          <div className="w-full mt-16">
            <div className="container mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                <span className="bg-clip-text text-transparent text-6xl bg-[#ff385c]">
                  Kosher
                </span>{" "}
                Apartment Gallery
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-lg cursor-pointer w-full"
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

            {selectedImage && (
              <div
                className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                onClick={closeModal}
              >
                <div
                  className="relative w-full max-w-7xl"
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
                    className="max-h-[90vh] w-full object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
