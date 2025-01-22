import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-28">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-gray-600 text-xl md:text-2xl relative z-20 mb-4 md:mb-6">
            SOLVING A COMMON PROBLEM
          </h2>
          <h1 className="text-4xl md:text-7xl font-bold text-[#ff385c] mb-6 md:mb-8 relative z-20">
            Finding a home
            <br />
            in the big city
          </h1>
          <div className="flex justify-center mb-4 md:mb-6 z-0 -mt-16 md:-mt-32">
            <img
              src="https://i.pinimg.com/736x/bd/9c/17/bd9c17baa0a31f41d34bb1470a4c61d0.jpg"
              alt="City housing problem illustration"
              className="w-full max-w-sm md:max-w-2xl"
            />
          </div>

          <div className="text-gray-600 text-left max-w-6xl mx-auto text-base md:text-lg space-y-4 md:space-y-6 mb-8 md:mb-16">
            <p>
              Our home-solutions firm, Bal Harbor Getaway, was established in
              Bengaluru by Amarendra Sahu, Deepak Dhar, Jitendra Jagadev and
              Smruti Parida in January 2015. All four founders had experienced a
              common problem – finding a home in the big city. Young people
              faced different kinds of discrimination. Single women and
              bachelors are considered unreliable. Migrants from other places
              are viewed with suspicion as they appear as 'foreigners' in a new
              city. Further, many newcomers did not have the knowhow to get
              around, lacking access to local insights in a new city.
            </p>
            <p>
              We concluded that people leaving homes to relocate to another city
              needed more than just a house. They needed a place they could call
              home, a community where they would be accepted and a platform
              which allows connections to various other access points.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-100 -mt-8 md:-mt-20">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-4">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://i.pinimg.com/736x/b1/6d/72/b16d729befb42c4f9cf1aaa7e93a3b3e.jpg"
                alt="Community living"
                className="rounded-lg w-full md:h-96 md:w-96 shadow-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                Creating Communities That Matter
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div>
            <p className="text-gray-600 text-base md:text-lg mb-4">
              At Bal Harbor Getaway we soon realized that it was necessary to go
              beyond basics and create a platform that could do much more than
              just solve the immediate problems of space and peripherals. With
              globalization and communication taking a forefront, we are aware
              that society is becoming more disparate. Our response to this is -
              No city should be a stranger; no person should feel discriminated.
              The philosophy behind Bal Harbor Getaway grew to create an
              inclusive living environment where youth have choices but are also
              required to take ownership.
            </p>
            <p className="text-gray-600 text-base md:text-lg">
              Tenants would have options so that they could choose according to
              their budget and personal preferences. The burden on owners would
              get reduced - to look for responsible tenants, do background
              checks and chase after tenants to pay in their dues. In the
              future, we believe Bal Harbor Getaway as a platform will grow in
              many other directions, with housing as the core focus.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/e4/09/6f/e4096f0afce5bbb76ef00df733a2e951.jpg"
                alt="Nestie Bike Club"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Nestie Bike Club
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Some of our Nesties love to ride. Short bike trips excite this
                  bunch, and they make sure they get together every weekend.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/22/59/7e/22597eb5571a15e6d476041cb826ef01.jpg"
                alt="Nestie Sports Club"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Nestie Sports Club
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Some of our Nesties love to play. Sports excite this bunch,
                  and they make sure they get together every weekend.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/59/c0/a5/59c0a58255e4f2043550fe55268d9442.jpg"
                alt="Nestie Nights"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Nestie Nights
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Some of our Nesties love to party. Weekend vibes is what this
                  bunch trips on, and they make sure they shake a leg every
                  month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
