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
            src="https://uc5ee2d63b2b960fdbe04ee69203.previews.dropboxusercontent.com/p/thumb/ACiY-Fq1jsVAUb6WlE-JH5RANQh-V9g0nCNL4cGyQRsDWTA5P6k_frAEEuypL4r3VFgR6HWkFrr2z1z5PEVpzyWW9fxEplkhadCiY9R1muXZoBTDWxmuIPmGVRArYyzdFFJ9LMq1tZI1z1cQYzc0WjWkvbhXIQUhvmVeG1alMYzqALS2UV6aY4gcqJf39h4I-24SYe8AiJw6Ky6-VECZ8h6WnrayQcTKHl949ce-qe06C3TFTXn-_vvVSmcwSshnX5j2hkllt3W2SmPtyrHccXYzkw_bu6y_a0qRtiguPvfj_UDxwZ8ji3V-clt-2HhQOBWgSvJgG4QVQjAzKyuTjODxDfW4_-TedUgGG_0fzIQejQ/p.jpeg"
            alt="Welcome Image"
            className="rounded-xl shadow-xl mx-auto w-full h-48 sm:h-64 md:h-[510px] mt-8 md:mt-16 object-cover hover:shadow-2xl transition-shadow duration-300"
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
