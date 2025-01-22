import React from "react";
import ApartmentListings from "../../Components/demo";
import AboutUs from "../../Components/aboutUs";
import ContactSection from "../../Components/contactUs";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full">
      <div className="text-center p-4 md:p-8 w-full max-w-full mx-auto">
        <div className="mb-4 md:mb-8">
          <img
            src="https://cache.marriott.com/is/image/marriotts7prod/balharbour-cultural-new3:Wide-Hor?wid=2880&fit=constrain"
            alt="Welcome Image"
            className="rounded-xl shadow-xl mx-auto w-full h-48 sm:h-64 md:h-[450px] mt-8 md:mt-16 object-cover hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
          Bal Harbor Getaway
        </h1>
        <p className="text-base md:text-lg text-gray-600 -mb-4 md:-mb-8 px-4 md:px-0">
          Any additional information if u want to give then add here.....
        </p>
      </div>

      <div>
        <ApartmentListings />
      </div>

      <div className="w-full max-w-full mx-auto">
        <AboutUs />
        <ContactSection />
      </div>
    </div>
  );
}

export default Home;
