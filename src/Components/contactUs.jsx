import React, { useState, useRef, useEffect } from "react";
import { Upload, ChevronDown, Copy, Check } from "lucide-react";

const officeAddresses = {
  Poland: {
    address: "123 Jerozolimskie avenue, Warszawa, 00-001",
    flag: "🇵🇱",
  },
  Ukraine: {
    address: "456 Khreshchatyk Street, Kyiv, 01001",
    flag: "🇺🇦",
  },
  Cyprus: {
    address: "789 Makarios Avenue, Limassol, 3042",
    flag: "🇨🇾",
  },
  Estonia: {
    address: "321 Narva Road, Tallinn, 10120",
    flag: "🇪🇪",
  },
};

const CopyableText = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-700">{text}</span>
      <button
        onClick={handleCopy}
        className="p-1 hover:text-[#ff385c] transition-colors"
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <Check className="w-4 h-4 text-[#ff385c]" />
        ) : (
          <Copy className="w-4 h-4 text-gray-600" />
        )}
      </button>
    </div>
  );
};

const CustomDropdown = ({ country, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <button
        className="flex items-center gap-1 text-gray-700 hover:text-[#ff385c] transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <span>
          {data.flag} {country}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4">
            <h4 className="font-semibold mb-2 text-gray-900">
              {country} Office
            </h4>
            <p className="text-sm text-gray-600">{data.address}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    aboutProject: "",
    hasReadPrivacy: false,
    acceptsMarketing: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white p-8 max-w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-gray-900 text-2xl font-semibold mb-6">
            Schedule a Call
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full name*"
                  className="w-full p-3 border-b border-gray-300 rounded bg-white text-gray-900"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address*"
                  className="w-full p-3 border-b border-gray-300 rounded bg-white text-gray-900"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Company name"
                  className="w-full p-3 border-b border-gray-300 rounded bg-white text-gray-900"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                  className="w-full p-3 border-b border-gray-300 rounded bg-white text-gray-900"
                />
              </div>
            </div>

            <div>
              <textarea
                name="aboutProject"
                value={formData.aboutProject}
                onChange={handleInputChange}
                placeholder="About your project*"
                className="w-full p-3 border border-gray-300 rounded h-32 bg-white text-gray-900"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="hasReadPrivacy"
                  checked={formData.hasReadPrivacy}
                  onChange={handleInputChange}
                  className="mt-1"
                  required
                />
                <span className="text-sm text-gray-600">
                  I have read Privacy Notice*
                </span>
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="acceptsMarketing"
                  checked={formData.acceptsMarketing}
                  onChange={handleInputChange}
                  className="mt-1"
                />
                <span className="text-sm text-gray-600">
                  I agree to receive marketing materials
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff385c] text-white py-3 rounded  transition-colors"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="space-y-12">
          <div>
            <h3 className="text-gray-900 font-bold mb-6">
              Bal Harbor Getaway in brief :-
            </h3>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl text-[#ff385c] font-bold">15+</div>
                <div className="text-sm text-gray-700">years of experience</div>
              </div>
              <div>
                <div className="text-4xl text-[#ff385c] font-bold">500+</div>
                <div className="text-sm text-gray-700">IT experts aboard</div>
              </div>
              <div>
                <div className="text-4xl text-[#ff385c] font-bold">35+</div>
                <div className="text-sm text-gray-700">active clients</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-gray-900 font-bold mb-4">
                Project inquiries
              </h3>
              <CopyableText text="hello@balharborgetaway.com" />
            </div>

            <div>
              <h3 className="text-gray-700 mb-4">Careers</h3>
              <CopyableText text="careers@balharborgetaway.com" />
            </div>

            <div>
              <h3 className="text-gray-700 mb-4">Phone number</h3>
              <CopyableText text="+1 213 4019311" />
            </div>

            <div>
              <h3 className="text-gray-700 mb-4">Our offices</h3>
              <div className="flex flex-wrap gap-4">
                {Object.entries(officeAddresses).map(([country, data]) => (
                  <CustomDropdown key={country} country={country} data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
