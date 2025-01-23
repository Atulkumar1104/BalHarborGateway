import React from "react";
import Tilt from "./tilt";
import { useNavigate } from "react-router-dom";

const ApartmentListings = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    console.log("Navigating to apartment:", id);
    navigate(`/apartment/${id}`);
  };

  const apartments = [
    {
      id: 0,
      title: "Unit 18",
      description:
        " We’re ready to welcome you during Passover, Shavuot, and especially the chilly winter months of January, February, and March. With cozy interiors and modern amenities, you'll feel right at home, no matter the weather. ",
      img: "https://uc144a68c58295829b5e35d00619.previews.dropboxusercontent.com/p/thumb/ACh-AjTw9apLgYENh6iQMLbpEsq9TXNEYJiFz-BPdjd1Vgck6HWe_KqQn7jlQbO0uwOdMZNKnaLhmF5L-j22_YoNqGiaBC8QR4yjZXPqm9gAzcBUuoyQTI9s5l2ZnX8kcfxyS9FDiaoUS-RFsAqrh29Sp_WlqoEg6W61BEFtAVQg1YF9XJYYfKx9ZKGnWzpQREaJfZ9DVEzcTqQJIsbd8kUDjIeuiHSkT2GPYqPNo6KosZEYnenlYWhbPWQJc9DesIpvL93ky5mFELEtElXd91Vz2ngSPztu0OAeFlnbDywUTBWa2frOCffwIjO1UZP1Qq_CE3tUehfrvquKs5SCptNxXISAK8Ydd3yfRFdWH8fF8g/p.jpeg",
    },
    {
      id: 1,
      title: "Unit 18",
      description:
        "We’re ready to welcome you during Passover, Shavuot, and especially the chilly winter months of January, February, and March. With cozy interiors and modern amenities, you'll feel right at home, no matter the weather. ",
      img: "https://ucfec0834f97ed010fa2fbfa0b13.previews.dropboxusercontent.com/p/thumb/ACifH9Kk_IBPSkReD0AD8gVA6gdgPJAPqt_KaQ0NSk6dqDYGUut3FEnfC-8MQvi4e3qnUcHAbL7WqGPvALsQNfqqKSEK22CXtqT12Typ95Q5ooqcG-B8c3l9b3Hs6pWiQg9-iz9iOf_FFTxpl14vPf6VWpN6fQajZpgo5HEld31SMz-952CN-1HZene_gSkVF0isqvR2br7T5XdsQ4HYTfKfrQ6Z048kO3UjumXT1jbqOGmLkCaXkj7JiCM-YSV66Die_pVCAj4dZgRlHFgHebN828Ij5b1MgUbo4yUxPm0D3dTIZ2Pv1XofxH92haxbv-eci_yvT1499VJVzDri88IfjeRI-84KIPR9usx4EFfmvg/p.jpeg",
    },
    {
      id: 2,
      title: "Unit 18",
      description:
        "We’re ready to welcome you during Passover, Shavuot, and especially the chilly winter months of January, February, and March. With cozy interiors and modern amenities, you'll feel right at home, no matter the weather. ",
      img: "https://uca82608d65465054b3c33057e88.previews.dropboxusercontent.com/p/thumb/ACg9js7_HMosHbkyyniBjxdyWYp4JYZmv0rT3MjoJeKxQiL_avVl7FnjUui2utLgZJgj_MYfdCvbzgxJ3aaeLADEOiD1aAvSkEyhw53bVl78ib295KV9oQvAqPVmOldaRQN3yrPauVc0j5Srhni2Un4-8g_hUuaAt4pX2lTPbqgQ-FRsUFCJEpccR649f56nU2MZJWC9kOeqzJCoh2zSCkK1lGD_oSXM-eymbBVW8VIiE7E8uvIoGz-fx3MjNxKuqCNau0J2TLKGdpBtcXMmU3cRu3U8ekqLbYCKa4jSBl_07bRDzRmcaT7Z8h1KGbgQ8W9mDOSes_NyrWb52Ki2C6FXuQBJ05tX50B68jeVnh1pYQ/p.jpeg",
    },
    {
      id: 3,
      title: "Unit 18",
      description:
        "We’re ready to welcome you during Passover, Shavuot, and especially the chilly winter months of January, February, and March. With cozy interiors and modern amenities, you'll feel right at home, no matter the weather. ",
      img: "https://ucc4c0c7e1359f546970d05d41b1.previews.dropboxusercontent.com/p/thumb/ACgrxslapAPQnnXFhIXlclHrlnUfz7Ym-ZM2NhXSgh0a8p6wyClZjJygBicn43r_cpxhSLeKxD9IFmsloXhLNeKYY3sFD5565VqsdMRfn00qeyRoCIid9-kAP1Yo33TkNBZfxRJjn9MTgoYd-EXH3UAkCgEY1cXpkSW3P0z7gdeqI22ImUGOhuAOzhl2fOUm7IQ0sUpqsXcUDV6N5FSqn4IPFtf76pkajNdPKt7WwAW-5obHjJekyswJacndE1c7g9toMu78cipHaC3pMZ0dX1YSI5cJx0kXrcJCbcHIFpqbAcEsG-ss9pj8IZcN1ierJ628-Xiq89c9jI3chOKEhbtF2R-6FXDpbndiUQnbSYJC9g/p.jpeg",
    },
    {
      id: 4,
      title: "Unit 18",
      description:
        "We’re ready to welcome you during Passover, Shavuot, and especially the chilly winter months of January, February, and March. With cozy interiors and modern amenities, you'll feel right at home, no matter the weather. ",
      img: "https://uc454486c87fc77d0db39c547057.previews.dropboxusercontent.com/p/thumb/ACi7VcJid5SFHiGO3wFN_G0QPfu2OcCwV2XkwMcSmOxUXp68orDTAkaJ4NtJeaqSrKtAR1etQ4KIa0EY4gTLGG7dZnOh2H1zxsDXrdaqrZRUtBSbs-hkEK0cksvDxOb53O7HVv6Gl5yC2026O7kv0uDJ9Up5-2b17uznW3IpT_zQ6ZbbUSavejS9iyxvU-Zii9ls9mtT4TnL-dXIZ85MRxbuAqaED2C7vaTSmSDri1AJGV_cNW6K0OFt74sz3vfrG-1zML1s4wJgAcExjVU6OJlTIUaNz9xTpk1215xWtw5xZd6W30L1kRb7HLzkR1BgBuLEQ-_0uJu1HZWVpqY5AX16QxJcWgzV-LC4DxHwGjaywQ/p.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-20 relative">
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

      <div className="mx-auto max-w-full relative">
        <h1 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          <span className="bg-clip-text text-transparent text-6xl bg-[#ff385c]">
            Kosher
          </span>{" "}
          Available Apartments
        </h1>
        <div className="mb-4">
          <p className="text-sm sm:text-base text-gray-600">
            Showing {apartments.length} apartments
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8">
            {apartments.slice(0, 3).map((apartment) => (
              <Tilt key={apartment.id} rotationFactor={5} isRevese>
                <div className="h-full min-h-[400px] sm:h-[450px] w-full overflow-hidden rounded-lg bg-white shadow-lg flex flex-col">
                  <div className="h-40 sm:h-48 flex-shrink-0">
                    <img
                      src={apartment.img}
                      alt={apartment.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        {apartment.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        {apartment.description}
                      </p>
                    </div>
                    <button
                      className="mt-4 w-full rounded-lg bg-[#ff385c] px-4 py-2 font-medium text-white transition-colors hover:bg-[#e31c5f] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                      onClick={() => handleViewDetails(apartment.id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl">
            {apartments.slice(3, 5).map((apartment) => (
              <Tilt key={apartment.id} rotationFactor={5} isRevese>
                <div className="h-full min-h-[400px] sm:h-[450px] w-full overflow-hidden rounded-lg bg-white shadow-lg flex flex-col">
                  <div className="h-40 sm:h-48 flex-shrink-0">
                    <img
                      src={apartment.img}
                      alt={apartment.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        {apartment.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        {apartment.description}
                      </p>
                    </div>
                    <button
                      className="mt-4 w-full rounded-lg bg-[#ff385c] px-4 py-2 font-medium text-white transition-colors hover:bg-[#e31c5f] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                      onClick={() => handleViewDetails(apartment.id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentListings;
