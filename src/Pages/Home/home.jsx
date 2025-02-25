import React from "react";
// import ApartmentListings from "../../Components/demo";
import AboutUs from "../../Components/aboutUs";
import ContactSection from "../../Components/contactUs";
import ImageCarousel from "../../Components/images";
import NotificationBanner from "../../Components/notificationBanner";
import ImageGallery from "../../Components/imageGallery";
import CTASection from "../../Components/contactUs";
import LocationFeatures from "../../Components/features";

function Home() {
  return (
    <div className="bg-white relative">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
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
        ></div>
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

      {/* Main content */}
      <div className="min-h-screen -mt-12 sm:-mt-0 flex flex-col items-center justify-center w-full relative">
        <div className="text-center p-4 md:p-6 w-full max-w-full mx-auto">
          <div className="mb-4 md:mb-8">
            <ImageCarousel />
          </div>

          <h1 className="text-2xl md:text-5xl font-bold mb-2 max-w-6xl mx-auto md:mb-4">
            Affordable{" "}
            <span className="bg-clip-text text-transparent text-6xl bg-[#ff385c]">
              Kosher
            </span>{" "}
            Apartments in Bal Harbor – Available Year-Round!
          </h1>

          <p className="text-base md:text-lg text-gray-600 -mb-4 md:-mb-8 max-w-6xl mx-auto px-4 md:px-0">
            The apartment complex is ideally located in a vibrant and diverse
            neighborhood, offering convenient access to various local amenities.
            Situated just a short stroll away from four{" "}
            <span className="font-bold">Prominent Synagogues</span> , it’s
            perfect for those seeking proximity to religious centers.
            <br /> Additionally, the complex is only <span className=" font-bold"> Four Short Blocks</span> from a
            popular <span className="font-bold">Dairy Restaurant</span> , ideal for kosher meals, as well as a
            renowned <span className=" font-bold">Meaty Eatery</span> , offering a range of delicious meat-based
            dishes.
          </p>
        </div>

        <div><LocationFeatures/></div>

        {/* <div>
          <ApartmentListings />
        </div> */}

        <div className="w-full max-w-full mx-auto">
          <AboutUs />

          <ImageGallery />
          <CTASection />
        </div>
      </div>
    </div>
  );
}

export default Home;
