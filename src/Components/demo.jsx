import React, { useState } from "react";
import Tilt from "./tilt";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ApartmentListings = () => {
  const [currentPage, setCurrentPage] = useState(0);
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
        "Modern 2-bedroom apartment with stunning lake views, fully furnished kitchen, and private balcony.",
      img: "https://uc144a68c58295829b5e35d00619.previews.dropboxusercontent.com/p/thumb/ACh-AjTw9apLgYENh6iQMLbpEsq9TXNEYJiFz-BPdjd1Vgck6HWe_KqQn7jlQbO0uwOdMZNKnaLhmF5L-j22_YoNqGiaBC8QR4yjZXPqm9gAzcBUuoyQTI9s5l2ZnX8kcfxyS9FDiaoUS-RFsAqrh29Sp_WlqoEg6W61BEFtAVQg1YF9XJYYfKx9ZKGnWzpQREaJfZ9DVEzcTqQJIsbd8kUDjIeuiHSkT2GPYqPNo6KosZEYnenlYWhbPWQJc9DesIpvL93ky5mFELEtElXd91Vz2ngSPztu0OAeFlnbDywUTBWa2frOCffwIjO1UZP1Qq_CE3tUehfrvquKs5SCptNxXISAK8Ydd3yfRFdWH8fF8g/p.jpeg",
    },
    {
      id: 1,
      title: "Unit 18",
      description:
        "Efficient studio apartment in the heart of downtown. Perfect for young professionals.",
      img: "https://ucfec0834f97ed010fa2fbfa0b13.previews.dropboxusercontent.com/p/thumb/ACifH9Kk_IBPSkReD0AD8gVA6gdgPJAPqt_KaQ0NSk6dqDYGUut3FEnfC-8MQvi4e3qnUcHAbL7WqGPvALsQNfqqKSEK22CXtqT12Typ95Q5ooqcG-B8c3l9b3Hs6pWiQg9-iz9iOf_FFTxpl14vPf6VWpN6fQajZpgo5HEld31SMz-952CN-1HZene_gSkVF0isqvR2br7T5XdsQ4HYTfKfrQ6Z048kO3UjumXT1jbqOGmLkCaXkj7JiCM-YSV66Die_pVCAj4dZgRlHFgHebN828Ij5b1MgUbo4yUxPm0D3dTIZ2Pv1XofxH92haxbv-eci_yvT1499VJVzDri88IfjeRI-84KIPR9usx4EFfmvg/p.jpeg",
    },
    {
      id: 2,
      title: "Unit 18",
      description:
        "Spacious 3-bedroom apartment with private garden and modern amenities.",
      img: "https://uca82608d65465054b3c33057e88.previews.dropboxusercontent.com/p/thumb/ACg9js7_HMosHbkyyniBjxdyWYp4JYZmv0rT3MjoJeKxQiL_avVl7FnjUui2utLgZJgj_MYfdCvbzgxJ3aaeLADEOiD1aAvSkEyhw53bVl78ib295KV9oQvAqPVmOldaRQN3yrPauVc0j5Srhni2Un4-8g_hUuaAt4pX2lTPbqgQ-FRsUFCJEpccR649f56nU2MZJWC9kOeqzJCoh2zSCkK1lGD_oSXM-eymbBVW8VIiE7E8uvIoGz-fx3MjNxKuqCNau0J2TLKGdpBtcXMmU3cRu3U8ekqLbYCKa4jSBl_07bRDzRmcaT7Z8h1KGbgQ8W9mDOSes_NyrWb52Ki2C6FXuQBJ05tX50B68jeVnh1pYQ/p.jpeg",
    },
    {
      id: 3,
      title: "Unit 18",
      description:
        "Contemporary 1-bedroom loft with high ceilings and industrial design elements.",
      img: "https://ucc4c0c7e1359f546970d05d41b1.previews.dropboxusercontent.com/p/thumb/ACgrxslapAPQnnXFhIXlclHrlnUfz7Ym-ZM2NhXSgh0a8p6wyClZjJygBicn43r_cpxhSLeKxD9IFmsloXhLNeKYY3sFD5565VqsdMRfn00qeyRoCIid9-kAP1Yo33TkNBZfxRJjn9MTgoYd-EXH3UAkCgEY1cXpkSW3P0z7gdeqI22ImUGOhuAOzhl2fOUm7IQ0sUpqsXcUDV6N5FSqn4IPFtf76pkajNdPKt7WwAW-5obHjJekyswJacndE1c7g9toMu78cipHaC3pMZ0dX1YSI5cJx0kXrcJCbcHIFpqbAcEsG-ss9pj8IZcN1ierJ628-Xiq89c9jI3chOKEhbtF2R-6FXDpbndiUQnbSYJC9g/p.jpeg",
    },
    {
      id: 4,
      title: "Unit 18",
      description:
        "Luxurious 3-bedroom penthouse with panoramic city views and private terrace.",
      img: "https://uc454486c87fc77d0db39c547057.previews.dropboxusercontent.com/p/thumb/ACi7VcJid5SFHiGO3wFN_G0QPfu2OcCwV2XkwMcSmOxUXp68orDTAkaJ4NtJeaqSrKtAR1etQ4KIa0EY4gTLGG7dZnOh2H1zxsDXrdaqrZRUtBSbs-hkEK0cksvDxOb53O7HVv6Gl5yC2026O7kv0uDJ9Up5-2b17uznW3IpT_zQ6ZbbUSavejS9iyxvU-Zii9ls9mtT4TnL-dXIZ85MRxbuAqaED2C7vaTSmSDri1AJGV_cNW6K0OFt74sz3vfrG-1zML1s4wJgAcExjVU6OJlTIUaNz9xTpk1215xWtw5xZd6W30L1kRb7HLzkR1BgBuLEQ-_0uJu1HZWVpqY5AX16QxJcWgzV-LC4DxHwGjaywQ/p.jpeg",
    },
    {
      id: 5,
      title: "Unit 18",
      description:
        "Charming studio apartment overlooking community gardens with updated appliances.",
      img: "https://uc5b82e5a1b49c12abbe356ffdc1.previews.dropboxusercontent.com/p/thumb/ACiZoFFUXRUvQ0cM5Ri_YcbGhLidryS0Mn9c7oLV3KUYOZuYwSb9XGVG7ZYv2dZv4I2qKEwmsSRLVVwKHN7w_xGJLHQqPXt9fbplj0JQIs8F8-mm4nJjgf8SD0ilIV-3w8rQcpmmewFQcSG9YrgUA_hNMN07FPwlDr1UZ3KVEDBcEfQrqIBY9jeiD7MHCH-HdTF9HmxXwVNkxaWcfN1m8-nskPKYtWBBg9b-PXosvbaCGsQZvabG1Yo6cAL2GVNMMW8bwXmMq29i99sCnrdBcqzD-0yY6DuCluXf__NKo1npjII2ZA7kOuuQSM8llEbp4YBO6o306VadGkbe9eBn9ds3pd82DaHrFYk9_F8J4CGkEw/p.jpeg",
    },
    {
      id: 6,
      title: "Unit 18",
      description:
        "Contemporary 2-bedroom apartment with open floor plan and smart home features.",
      img: "https://ucc08743157b86c01d7b4221d578.previews.dropboxusercontent.com/p/thumb/ACg6BQcx8vKs7G77Y5pSxNwn4lFpoaaDTmXvsDu0PL5FzlyLseu1ujkZuiqoMFznqKFjMErPh-SyNW4xqRRxDvuykv-Z3xoUlI6s4dGo1szSm2XRBS8MK6M6LE3h3VVsFC6qcZYEGUFZsHyr5ZctnKwHC-lXKVaFG-KY2Zxkmg7hMmnFFeT1FTDmNUYb2i2LiWX1eW6hKpXIoeBdirZU3ceDdmrRFS1hF1neTh2KQ87YNPOFs6SMmZdNeCbeBFBvd0IVaP0sPU5ZaNzTB7cY3pgIzEtKY-18frlWTRCuXh98dagriTdW_TO7aoYzQ3BH0CbMdDLllkdLnCPcNdDJh5eAR-PNNU1Dq2nltJZWoa5_Ng/p.jpeg",
    },
    {
      id: 7,
      title: "Unit 18",
      description:
        "Elegant 2-bedroom apartment with river views and access to community amenities.",
      img: "https://uc39219ba63ad22363b31e1d15ed.previews.dropboxusercontent.com/p/thumb/ACiP-bZfBiMxo9kEnC4VWoHDMxACaGpLgtgipxg47mYwcDdk8vkK7LK31QPNkeVjqDAlCZK0L6ZtYnZL8dEybkdf8wt7Gsm4naJoiVJP3IrGNKlW-NeX3R5LK_i-jgihs14vVQt6xKqLtoFChSOVH9xU6Ki0Nr6sWs8owqd1U3z8zj12aKZUJmGeYv-NK5vDt_HS7_QhUnvFE4VuaBjNKyB-xN0QaJihkulQ0QQVKC7QT73pYxl0vZ29YaABdV1sEJo3mt3xA-prBIBYl6g5gk1K4eg__Vh5KgZUVyefxh65MjJZDXWdCgJ544mp06NY3v5sV19YNLaTFS0EblDRCnuXDdm7Pp3cYCfX5bqq6zlUSA/p.jpeg",
    },
    {
      id: 8,
      title: "Unit 18",
      description:
        "Historic building converted into modern loft spaces with original architectural details.",
      img: "https://uc42abed1bffc61daad344b6f84e.previews.dropboxusercontent.com/p/thumb/ACjRNtg_Bk8a-j7lcYFnlrn3F1ZJIRSLubxQev4knk1YznNXANKhpBOhSIglqDQ6-vnM_e5X1plRzF2jxlUQ6QLHz2rYz14EsvifQwyC4kj7MgiOOnOIN6Y8sqPDKBwuCFuWgS4CXcaVMV5k6Zm95AhH9vf_aR4kQph9Ce-L_UE9nAWGeE2d077BeOiRp0mkKePC58BUTsfWxt37J9enZ4Qnn70-ug7Fj_632ySh7G1D9dxYfO9jHc2gMgUFlTaYJMIDclu9t5GCzJucRXSryOUrJVrnTsLyyEDcvweuBY8GU41sXHmBOEkGAuIXvidbQywVQxAW-r82JI9aOuCE_NaBKeLjkcqAL9JP9in1d0a5ow/p.jpeg",
    },
    {
      id: 9,
      title: "Unit 18",
      description:
        "High-rise apartment with floor-to-ceiling windows and stunning city skyline views.",
      img: "https://uc454486c87fc77d0db39c547057.previews.dropboxusercontent.com/p/thumb/ACi7VcJid5SFHiGO3wFN_G0QPfu2OcCwV2XkwMcSmOxUXp68orDTAkaJ4NtJeaqSrKtAR1etQ4KIa0EY4gTLGG7dZnOh2H1zxsDXrdaqrZRUtBSbs-hkEK0cksvDxOb53O7HVv6Gl5yC2026O7kv0uDJ9Up5-2b17uznW3IpT_zQ6ZbbUSavejS9iyxvU-Zii9ls9mtT4TnL-dXIZ85MRxbuAqaED2C7vaTSmSDri1AJGV_cNW6K0OFt74sz3vfrG-1zML1s4wJgAcExjVU6OJlTIUaNz9xTpk1215xWtw5xZd6W30L1kRb7HLzkR1BgBuLEQ-_0uJu1HZWVpqY5AX16QxJcWgzV-LC4DxHwGjaywQ/p.jpeg",
    },
    {
      id: 10,
      title: "Unit 18",
      description:
        "Sustainable living space with energy-efficient appliances and green building features.",
      img: "https://uca731f7c64c7a531de8b601905d.previews.dropboxusercontent.com/p/thumb/ACjLwlm75695THZ3zzZB_EnvDNJaLF57EIZSo6XJzlrH8YWIw1iCiUcoYDNOuMtyJxe7G5T79rth5dbgt862WL2FFz6zkrdCEctjFflWMs3soi1hP1_Ar6sbL2sdGnMPlrN2Ix9sAodRujw1ysNuCcjXYG_uwoTxtX1RnCNXHI9ToA-2QoUo2v8ETZqYWVQbhGSnjmhepC2T-bYPWsnOvVqwutQv20IqmZgU2kL5FbbUowYDV8dGxrg2LkNGJl3W985_lcnKzZItQIhF5c8-CykVkcTe5RIbKncVbxSzNwKH1GUrWAIZZXCOtE38OtyfJcNEqc5RQFrOpHy5sGpgfGKub-xLNYa3r_pNE2pzJS4oVA/p.jpeg",
    },
    {
      id: 11,
      title: "Unit 18",
      description:
        "Spacious loft with natural lighting, perfect for creative professionals.",
      img: "https://uc5b82e5a1b49c12abbe356ffdc1.previews.dropboxusercontent.com/p/thumb/ACiZoFFUXRUvQ0cM5Ri_YcbGhLidryS0Mn9c7oLV3KUYOZuYwSb9XGVG7ZYv2dZv4I2qKEwmsSRLVVwKHN7w_xGJLHQqPXt9fbplj0JQIs8F8-mm4nJjgf8SD0ilIV-3w8rQcpmmewFQcSG9YrgUA_hNMN07FPwlDr1UZ3KVEDBcEfQrqIBY9jeiD7MHCH-HdTF9HmxXwVNkxaWcfN1m8-nskPKYtWBBg9b-PXosvbaCGsQZvabG1Yo6cAL2GVNMMW8bwXmMq29i99sCnrdBcqzD-0yY6DuCluXf__NKo1npjII2ZA7kOuuQSM8llEbp4YBO6o306VadGkbe9eBn9ds3pd82DaHrFYk9_F8J4CGkEw/p.jpeg",
    },
    {
      id: 12,
      title: "Unit 18",
      description:
        "Ground floor apartment with private terrace and direct garden access.",
      img: "https://uc144a68c58295829b5e35d00619.previews.dropboxusercontent.com/p/thumb/ACh-AjTw9apLgYENh6iQMLbpEsq9TXNEYJiFz-BPdjd1Vgck6HWe_KqQn7jlQbO0uwOdMZNKnaLhmF5L-j22_YoNqGiaBC8QR4yjZXPqm9gAzcBUuoyQTI9s5l2ZnX8kcfxyS9FDiaoUS-RFsAqrh29Sp_WlqoEg6W61BEFtAVQg1YF9XJYYfKx9ZKGnWzpQREaJfZ9DVEzcTqQJIsbd8kUDjIeuiHSkT2GPYqPNo6KosZEYnenlYWhbPWQJc9DesIpvL93ky5mFELEtElXd91Vz2ngSPztu0OAeFlnbDywUTBWa2frOCffwIjO1UZP1Qq_CE3tUehfrvquKs5SCptNxXISAK8Ydd3yfRFdWH8fF8g/p.jpeg",
    },
  ];

  const cardsPerPage = {
    mobile: 4,
    tablet: 6,
    desktop: 8,
  };

  const getCardsPerPage = () => {
    if (window.innerWidth < 768) return cardsPerPage.mobile;
    if (window.innerWidth < 1024) return cardsPerPage.tablet;
    return cardsPerPage.desktop;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getCardsPerPage());

  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getCardsPerPage());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(apartments.length / itemsPerPage);
  const startIdx = currentPage * itemsPerPage;
  const visibleApartments = apartments.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-20">
      <div className="mx-auto max-w-full">
        <h1 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Available Apartments
        </h1>
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm sm:text-base text-gray-600">
            Showing {visibleApartments.length} of {apartments.length} apartments
          </p>
          <div className="flex gap-2 sm:gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
              className="rounded-full bg-[#ff385c] px-3 py-2 sm:px-4 sm:py-3 font-medium text-white shadow-md transition-colors hover:bg-[#e31c5f] disabled:opacity-50"
              disabled={currentPage === 0}
            >
              <FaArrowLeft className="text-sm sm:text-base" />
            </button>
            <span className="flex items-center text-sm sm:text-base text-gray-600">
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
              }
              className="rounded-full bg-[#ff385c] px-3 py-2 sm:px-4 sm:py-3 font-medium text-white shadow-md transition-colors hover:bg-[#e31c5f] disabled:opacity-50"
              disabled={currentPage === totalPages - 1}
            >
              <FaArrowRight className="text-sm sm:text-base" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {visibleApartments.map((apartment) => (
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
  );
};

export default ApartmentListings;
