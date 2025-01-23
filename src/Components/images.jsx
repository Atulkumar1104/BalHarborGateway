import React, { useState, useEffect } from "react";

export const ImageCarousel = () => {
  const images = [
    "https://uc5ee2d63b2b960fdbe04ee69203.previews.dropboxusercontent.com/p/thumb/ACiY-Fq1jsVAUb6WlE-JH5RANQh-V9g0nCNL4cGyQRsDWTA5P6k_frAEEuypL4r3VFgR6HWkFrr2z1z5PEVpzyWW9fxEplkhadCiY9R1muXZoBTDWxmuIPmGVRArYyzdFFJ9LMq1tZI1z1cQYzc0WjWkvbhXIQUhvmVeG1alMYzqALS2UV6aY4gcqJf39h4I-24SYe8AiJw6Ky6-VECZ8h6WnrayQcTKHl949ce-qe06C3TFTXn-_vvVSmcwSshnX5j2hkllt3W2SmPtyrHccXYzkw_bu6y_a0qRtiguPvfj_UDxwZ8ji3V-clt-2HhQOBWgSvJgG4QVQjAzKyuTjODxDfW4_-TedUgGG_0fzIQejQ/p.jpeg",
    "https://uc6ad5e42c79da4dd4c84b0c18e7.previews.dropboxusercontent.com/p/thumb/AChCdpPo6-wW4fAGuCkNjZDXEj3ITr-Xbyqpe_E0EqxLYMk9TAz3nPEgaUuCNvU0ZD-wF7_cz9LybpQgVF3HY2Q7y2dCdvW4l3jNQzZUeU4i2ULyJxG7J6fzlwm7act7bdwbvjI_c5sScamh6ix_tg8av6vpmHlBp6Lv3s6SswYPuz-i1t7T8CzcTLba7m2-HGsRVBB81aFuydZ_mYbcVsRLd5zA7XaCdo6xSXUKhk6RKftHEshIGw-W3gDXv8YfBVgFSDFaC988qWcCp5scV1f9M14VQyAYqz3uxjkfLHJ4XoWjN7szuHu38xMyZEVjjrkOKaJYnMabmZLtiOEUggt9ykd2nmZOP8hAh4XKm6H51A/p.jpeg",
    "https://ucab901e7da6ebd475bc6b7982f9.previews.dropboxusercontent.com/p/thumb/ACiRQ4cc1aJ3j14ClofxrU-h1Jp1KuexMjtkr5M8zmlOMkT87Q968bYSVvld7cVv20H3akS7N_OAKpXH_616gGOTzWrCt9cN8HYDPJdgPxQi3nXjDECtNal4WgHdZ8DutcypfTLJEG7pccoVvDCilPkxHeU9WFNyer6ZFgAqzLNMbaZt0RHclSshIr_a5uPpliq421gPy_YOwTx8TerTyRgaY02yDLh4YT41d_mjEnxqAKGxrgYmF0khohU4E0Ksdus1e8W526V988-RSE1F6ANDaKktzjLKbvS4fs13wZjQmciACq_XK_FqR4JrxMKhIapHiS9k2gm3vbji_y53snHuvUQVdVnQhVpDLNNcSJqwCg/p.jpeg",
      "https://ucf18d4af2fe764f09482f3ad74d.previews.dropboxusercontent.com/p/thumb/ACiKlAj8izr_M0o-OhOfPD9yB-9aPYgAwODXHYzMTTcqrshSj2kPPsrAyfF1_na7bIqEPS3O35rS-M4gNZsfhj5WrcqhI5r4Q2JQl4SQaDXLxguZzCIJOspzTgbhndfkUdQ7VP7leIGREzrnVuYBP6D_ErESNNNJID0dYrr2cijMfZPH0JFqWWt1Fzm83WUU5OeKSNqoWHwXtT-jqY3DDV6FlE9-0IZ4e6R4PKMvc_288gJE5g1CxH5sAfy3PurAvZjakqes4TTEI1P86Z2h9WVinWvyE0OcJCOg-0HYAIWl4cs0m53Y1KymoxseLzsCtYu2GCl13pZbSThgAtU6-jmMQWLwISvlZo1xFQCjrhcEkQ/p.jpeg",
      "https://uc6f4313cda285db3514e7de7c76.previews.dropboxusercontent.com/p/thumb/AChm6_SK3gzHbOWdTa1T9d4moqD3EULYDJjocrDMT__--2Rd0D2uB-hGphk5s5zpVwql-l-MkH4M5KkmXtmSMpzsfo9nYBQCDECsAF7WoiYS0zdSitxptqHRr_EFvzFYgiaZ2ssRM_avw8LcwKuMO80rirhZYG2tpupuopPlS_uQS1SXcIeuQek7ExxX_Y_yyCN-iRmS6Tu9K0vWwH4iqL4VGfjAk591o8oRsUX1I4NKm9M-0sytXd3kN93DGOYjTu-fy5hgndkedVhVBnY1DemCPrU2vHoSDG8oJzJJfUlWlB2Y_8CHy7jGUP6qE9b4i_N2nIvhp_541TER546JKefXAIiYFC3RYDNwFLICCcN8aA/p.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-48 sm:h-64 md:h-[540px] mt-6">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
