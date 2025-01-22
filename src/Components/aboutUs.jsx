import React from "react";

const AboutUs = () => {
  return (
    <section className="container mx-auto px-4 py-16 -mt-20">
      <div className="flex flex-col md:flex-row items-center p-4 md:p-8 gap-8">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://i.pinimg.com/736x/0f/6f/83/0f6f8364798d616a5deff181eaca007e.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 space-y-6 mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Bal Harbor Getaway
          </h2>

          <p className="text-base md:text-lg text-gray-600">
            We are a passionate team dedicated to creating innovative solutions
            that make a difference. With years of experience and a commitment to
            excellence, we strive to deliver exceptional results for our
            clients.
          </p>

          <p className="text-base md:text-lg text-gray-600">
            Our mission is to transform ideas into reality while maintaining the
            highest standards of quality and customer satisfaction.
          </p>

          <button
            className="bg-red-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg
            hover:bg-red-600 transition-colors duration-300 w-full md:w-auto"
          >
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
