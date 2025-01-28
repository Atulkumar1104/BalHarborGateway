import React from "react";

const LocationFeatures = () => {
  return (
    <div className="max-w-[1380px] mx-auto p-4 mt-16 space-y-12">
      {/* Surfside Beach Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <img
            src="/images/52.jpg"
            alt="Surfside Beach"
            className="rounded-lg shadow-lg w-full h-96 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Surfside Beach</h2>
          <p className="text-lg text-gray-600">
            Just <span className="font-bold">Seven Blocks</span> away from the
            scenic Surfside beach, residents can enjoy easy access to a
            beautiful coastal escape. Perfect for morning walks, afternoon
            sunbathing, or evening strolls along the shoreline.
          </p>
        </div>
      </div>

      {/* Shopping Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="w-full md:w-1/2">
          <img
            src="/images/45.jpg"
            alt="Harding Avenue Shopping"
            className="rounded-lg shadow-lg w-full h-96 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Wonderful Shopping
          </h2>
          <p className="text-lg text-gray-600">
            Explore the nearby shopping area, located just <span className="font-bold">Six Blocks</span> away.
            Discover a wide variety of stores, boutiques, and dining options
            that cater to all tastes and preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationFeatures;
