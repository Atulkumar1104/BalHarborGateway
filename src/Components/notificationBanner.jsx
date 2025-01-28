import React, { useState } from "react";
import { Mail, Phone, X } from "lucide-react";

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#ff385c] hidden md:block p-2">
      <div className="flex items-center justify-between ml-8 max-w-full mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-white rounded-full" />
          </div>
          <span className="text-lg font-bold text-white">
            New apartments just listed in your area!{" "}
            <a href="/apartmentDetails" className="underline">
              View listings
            </a>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="tel:516-585-8791"
            className="flex items-center px-4 font-bold py-2 bg-white text-blue-500 rounded hover:bg-blue-50"
          >
            <Phone className="w-4 h-4 mr-2" />
            Book Now (516-585-8791)
          </a>
          <a
            href="/contact"
            className="flex items-center px-4 py-2 font-bold bg-white text-blue-500 rounded hover:bg-blue-50"
          >
            
            Make a Reservation
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-blue-100"
            aria-label="Close banner"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default NotificationBanner;
