import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, X } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  useEffect(() => {
    emailjs.init("YQGkrIqe5IMUp5e_8");
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyInterest: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send("service_mm5f34b", "template_p2js8ug", {
        to_email: "atulkumar83013@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        property_interest: formData.propertyInterest,
        message: formData.message,
      });

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        propertyInterest: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const location = {
    latitude: 40.7128,
    longitude: -74.006,
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
        {/* Hero Section - Responsive height */}
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
          <img
            src="/images/12.jpg"
            alt="Luxury Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
            <div className="text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
                Get in Touch
              </h1>
              <p className="text-base sm:text-lg md:text-xl">
                Discover Your Dream Property Today
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Responsive padding and spacing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                  Our team of expert real estate professionals is here to assist
                  you in finding your perfect property. Reach out to us through
                  any of the following channels.
                </p>
              </div>

              <div className="grid gap-4  sm:gap-6">
                {/* Contact Cards - Responsive padding and flex layout */}
                <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 transform transition-transform duration-300 hover:scale-105">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Visit Us</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        123 Luxury Avenue, Suite 456
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base">
                        New York, NY 10001
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

            {/* Contact Form - Responsive padding and input sizes */}
            <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Property Interest
                  </label>
                  <input
                    type="text"
                    name="propertyInterest"
                    value={formData.propertyInterest}
                    onChange={handleChange}
                    placeholder="e.g., 2BR Apartment, Luxury Penthouse"
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about what you're looking for..."
                    rows={4}
                    required
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 resize-none"
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
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section - Responsive height and padding */}
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <div className="bg-white rounded-lg shadow-lg p-2 sm:p-4">
              <div className="h-64 sm:h-80 lg:h-96 bg-gray-100 rounded-lg relative overflow-hidden">
                <svg
                  viewBox="0 0 800 400"
                  className="w-full h-full"
                  style={{
                    background: "#f3f4f6",
                  }}
                >
                  <rect x="0" y="0" width="800" height="400" fill="#f3f4f6" />
                  <line
                    x1="100"
                    y1="200"
                    x2="700"
                    y2="200"
                    stroke="#cbd5e1"
                    strokeWidth="20"
                  />
                  <line
                    x1="400"
                    y1="50"
                    x2="400"
                    y2="350"
                    stroke="#cbd5e1"
                    strokeWidth="20"
                  />
                  <circle cx="400" cy="200" r="8" fill="#ef4444" />
                  <path
                    d="M400 180 L420 220 L400 210 L380 220 Z"
                    fill="#ef4444"
                  />
                  <rect
                    x="360"
                    y="150"
                    width="80"
                    height="20"
                    rx="10"
                    fill="#1e40af"
                  />
                  <text
                    x="400"
                    y="164"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                  >
                    Our Office
                  </text>
                </svg>

                <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-md">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full" />
                    <span className="text-xs sm:text-sm text-gray-600">
                      123 Luxury Avenue
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Image Gallery Section */}
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Property Gallery
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
      </div>
    </>
  );
};

export default ContactPage;
