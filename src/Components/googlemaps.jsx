import React, { useState } from "react";
import { MapPin, ZoomIn, ZoomOut } from "lucide-react";

const MapboxPreview = () => {
  const address = "10000 E Bay Harbor Dr #7, Miami Beach, FL 33154";
  const [coordinates] = useState([-80.1334, 25.8876]);
  const [zoomLevel, setZoomLevel] = useState(15.5);

  const mapboxToken =
    "pk.eyJ1IjoieHNzMSIsImEiOiJjbTM0OHBrN3cxazVjMmtzNHl3emUyNGJ3In0.2sFfOtaeQDIVzpDB_azClA";

  const mapboxUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/geojson(%7B%22type%22%3A%22Point%22%2C%22coordinates%22%3A%5B${coordinates[0]}%2C${coordinates[1]}%5D%7D)/${coordinates[0]},${coordinates[1]},${zoomLevel},0/1200x600@2x?access_token=${mapboxToken}`;

  const handleNavigation = () => {
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      "_blank"
    );
  };

  const handleShareClick = (e) => {
    e.stopPropagation(); // Prevent map navigation when clicking share
    if (navigator.share) {
      navigator
        .share({
          title: "Bay Harbor Location",
          text: address,
          url: window.location.href,
        })
        .catch(console.error);
    }
  };

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 3.0, 20));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 3.0, 10));
  };

  return (
    <div className="w-full max-w-6xl mt-16 mx-auto">
      <div
        className="relative w-full h-[450px] rounded-xl overflow-hidden border border-gray-200 bg-white cursor-pointer"
        onClick={handleNavigation}
      >
        <img
          src={mapboxUrl}
          alt="Bay Harbor Location Map"
          className="w-full h-full object-cover hover:opacity-95 transition-opacity"
          loading="eager"
          style={{
            imageRendering: "crisp-edges",
          }}
        />

        {/* Zoom Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            onClick={handleZoomIn}
            className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/80 via-white/10 to-transparent pt-20 pb-4">
          <div className="px-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-xl text-gray-900">
                  Bay Harbor Location
                </h3>
                <p className="text-gray-600 text-xl mt-1">{address}</p>
                <div className="flex gap-6 mt-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent map navigation
                      handleNavigation();
                    }}
                    className="text-blue-600 hover:text-blue-700 text-xl font-medium"
                  >
                    Directions
                  </button>
                  <button
                    onClick={handleShareClick}
                    className="text-blue-600 hover:text-blue-700 text-xl font-medium"
                  >
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapboxPreview;
