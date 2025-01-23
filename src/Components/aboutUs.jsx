import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/apartments");
  };

  return (
    <section className="container mx-auto px-4 py-16 -mt-20 relative">
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

      <div className="flex flex-col md:flex-row items-center p-4 md:p-8 gap-8 relative">
        <div className="w-full md:w-1/2">
          <img
            src="https://uc3c8768b19c4ebd9ffbaeac356a.previews.dropboxusercontent.com/p/thumb/ACg5j7RNVUGmI_NhE64Rd1Td5SdE0sr5cuAPiXMGhPh0pEZ4oNxECdtYEJ1yM6lzn8Ays_JEetnqn7_7nBX56aJMzkavFLeLVVW-sJvWGl89nO1JNbznZ9b3wldUVrA58iG5WmQGxzaXtjvXLUg_GGEDf31M1rQPbqhqjazd-cpkxpBC_vJjIib3oK6fzkBKJGvGrVGvVRPZL-SjeXjDaQwsZepyOhwHe5k_2lw9gnG22AwDKxEr6P0b6dZGCtQ8LHTFRS8I7t5V3VOioO7iLVsIoYejnCYTcgTMjQxR6dPDEhSt2kMXIO_xFOK_K_LFPP3eh64j0tr3KQJ5r9Fj-xrlu0bTlVw_HO8RkSM3mdqKEg/p.jpeg"
            alt="About Us"
            className="rounded-lg shadow-lg w-full h-64 md:h-96 object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6 mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            <span className="bg-clip-text text-transparent text-6xl bg-[#ff385c]">
              Kosher
            </span>{" "}
            Bal Harbor Getaway
          </h2>

          <p className="text-base md:text-lg text-gray-600">
            Stress our availability for Passover, Shavuot and, of course, the
            harsh winter months of January, February and march.
          </p>

          <p className="text-base md:text-lg text-gray-600">
            Availability for Passover, Shavuot, and the Winter Months (January,
            February, March). Proximity to kosher meaty and milky restaurants (4
            blocks) and the beach (6 blocks). Affordable and unbeatable prices.
          </p>

          <button
            onClick={handleClick}
            className="bg-red-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-red-600 transition-colors duration-300 w-full md:w-auto"
          >
            Our Apartments
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
