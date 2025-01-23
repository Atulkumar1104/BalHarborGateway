import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaBed,
  FaBath,
  FaRuler,
  FaWifi,
  FaParking,
  FaSwimmingPool,
} from "react-icons/fa";

import { X } from "lucide-react";

const ApartmentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleBack = () => {
    navigate("/");
  };
  const closeModal = () => setSelectedImage(null);

  const galleryImages = [
    "https://uc3c8f028386d9b1d396178a676d.previews.dropboxusercontent.com/p/thumb/ACgelWO3T18rafeMH08Nzcv2zDhkMOOZKl6LU_uoZrvAjYrTmVQfJt4Bcft1ZUcBM1YznIyHjpJEiVCy6z11uDm8G2DoHVdftGcRisfahuvNWu_fsBHairgj8GTdZ_KFYvu6P165nUE_pMzGzbFghsk414viKLJW4lDHCXzF9yZEf7qJByYCbNkD8xBDT-bZIQeavgJ1tT77NlbrIoKTVEkqJiJ86xnp-xYb1uC-RkpArPDs3JtLkesjWDLn-T5NRJsj9xbhWX0cqycHhxqM9i3hIwehEUdiHmUFOxZDwAqfA9YsAuiW1mgCX16x8NM4MfeR-4uVGJRmVIAGnr2YSCD8fTfZkbPeTLKiKuJc2LukOg/p.jpeg",
    "https://uc89899a1ba6ca8ce649e9342711.previews.dropboxusercontent.com/p/thumb/ACgvr_4wJfoRk914Td2cmR4aJlp-KWOp6kaV4tYUJXT1Q1FVMeVow9XB-QY1XPeTP6ooI96fyYIVQoqLwMQ8UpX5xOYVAPsKyNj3XnnbyMlpwZr-2TWJVo4-DrYtF9py6LZdKtpP9_btiJVR-vWcd2weCOwBh462pBeiNLxdIeuv7Rsqq2mi-niAh6HCHIvrokbAiAL7dBr-Cx_-c71-uh2AdWYGoVmiAOzoyOdVr-CaubF1c8DQy73PXaVA43lCPH_1zJN_xErc3a9hE33PtMH8OpkakhNo69Yc7knP85L1HAdxvfrEKE-f8AWu2QRU0i1Z7-4HEPqdIsKPOlXoPrDl-gd5btD1kOtdzAW9lP0OfQ/p.jpeg",
    "https://uc39219ba63ad22363b31e1d15ed.previews.dropboxusercontent.com/p/thumb/AChE0moHEKc3jzecy-auAVi2b8gnsfuSqte576Z-8Q7fyV8Khh9p_I6itWb1yylWvI4E8834_0pVRAZXIfa02BvngaOkuWtHqSOZfPXeAaSA9Teg8KqR-tr92kKdv1uYCqt1K4LU5agdiXdsL_Dt_9zfXUxRSMu5ru_s21M3gAvOHJNR3MDs19tUAPQLV1O4Alz3TfLpt94O0J_SPr40ToQ4KBoFlXUQODkjHHb0heZcZSMzJ0UZUcHw74CJ4bv62AwdVJQc7Wt2J9SLNoXVSEaL5OW1FDCb_IkT9Es1JVaHx9FaxGtfId9JJM1CNhsa3NyidKgaTOw3qcrPaSq7FahhbpPxTCGCQLVvbWY44zp-yQ/p.jpeg",
    "https://uc5ee2d63b2b960fdbe04ee69203.previews.dropboxusercontent.com/p/thumb/ACgNZ5RaAjAM76knNNOxzF-E92bioD1gEynOOI95O75VpmbCauDzMqprL8sk_uU8rAF7D9Zukj8INW_APdhqW2bCv8BUVFcNS3mIFVNuTFGYyoPbmqi91SuzXXAE8t5reB2r5MgSnIfnnWuOZ4kTSgflD5tcE1T2G4lxjN5SdNNhFdfF6R_H0bKgIVi1RNQlUZaRxZbNkwVQkBtKvpg0ND0HewT-_-FAG-5SsSnpKNlC3YLH0qkWcc6mK0NGhzcUZSW9B_axBFpQen1Hmyw7Lb7wlpbM67b7h7vAwoqFf_WekAFKPq8yuX_Ji-rH3xL1tPzaCLZydiJclwZBnN1AQaGmSfQSSFvqWz4jbRkTejCGLw/p.jpeg",
    "https://ucd072596514c59c736fa15c08da.previews.dropboxusercontent.com/p/thumb/AChyqVJHq6HFUPrXxFsuJA9eqrTuq6nH3sG03PdOjPcZkT-s33ttzFbwOs1wsBYf8aajt1mIwvGZkyLL55EXClLWMj0ruM0Fb0XHpNQGHtp40B1YiZTFj1F3ovqCkTbaGv-2vb0qk978MR92BzG-YdyjBW9K4_IXS2_gxGGnUv6MQBSTUxlgq3VvvK-CCCySXC5mZo3ovuHV-KID_uUoYOj-qFgTj_W-dRFQUCO_W1JqNvpVkSoybeyW4iM-tzMO6JmP7dUCyi03JK-q3jXzLVJAD_EUsZ3YN9SErFHSugunwERUufZ_KqhabI5OuyDx9OoVPgMeyGnKaY8IQrQFqT-bEVe-rDeBg6Hz74UiOvBuEw/p.jpeg",
    "https://ucfb76479a56bf84435a15717eb3.previews.dropboxusercontent.com/p/thumb/ACh2WpHdEojS9KdgoHbvbD0U4BzrAyfkYrssHWQtt6OmrcqZrB8OCBiuC1cbSxbTYJttuDac5Q8AX0fkuzv5iF-7Xk4BpZkAhUPSrVo1T68mQk5PUUQ1c62oXQenC7xtml4idw888qw0w3E17f8OSq2Km4xuTrTpdTEmReyXLapxNYJ3GPc-02TNZH7NVnU83F4aaBaTbkhN-izA7fLJqQlsejdkFfaYHneRkw0nJ2jdhjx6hHQx73zv1L3nolAV9VHd9tsgiduKNoJFVaXy7q_S1MR78AI76WKUMJ1mTljJWlHN1cnxNojDGenVhRmVO3Lrj3ZhrRb1jjFk_A8nO0VUlGTXGr_gfoe59qnORlhUZg/p.jpeg",
    "https://ucfb76479a56bf84435a15717eb3.previews.dropboxusercontent.com/p/thumb/ACh2WpHdEojS9KdgoHbvbD0U4BzrAyfkYrssHWQtt6OmrcqZrB8OCBiuC1cbSxbTYJttuDac5Q8AX0fkuzv5iF-7Xk4BpZkAhUPSrVo1T68mQk5PUUQ1c62oXQenC7xtml4idw888qw0w3E17f8OSq2Km4xuTrTpdTEmReyXLapxNYJ3GPc-02TNZH7NVnU83F4aaBaTbkhN-izA7fLJqQlsejdkFfaYHneRkw0nJ2jdhjx6hHQx73zv1L3nolAV9VHd9tsgiduKNoJFVaXy7q_S1MR78AI76WKUMJ1mTljJWlHN1cnxNojDGenVhRmVO3Lrj3ZhrRb1jjFk_A8nO0VUlGTXGr_gfoe59qnORlhUZg/p.jpeg",
    "https://uc0d160c340863d07b4acf3bc192.previews.dropboxusercontent.com/p/thumb/ACji3TMVM-HTDEsr2wf-_elgzeiZMSRakeCFvrRad14ZahJuH-PszE1yOjZXayJZl-YAdIXBNNLpBxrjtt7KQVLIXhMvwKSXhmfpAnqlG_ildsakSDDWXfivgeNEPkpMiaj9O2ZSGA679C93nHu3lKfs5q5upAoVWgxKMjKNPFhxiJXzYIspRZqvd8tcqoptv5A2NqcFLIECqtNpW_uH4uDOPOTS0RJwcGi1VS0FKGmmuf_pyvwH3-f9SqOcS1J41gezK6LRDgFNewG7NhvgSRH4N-0BhJ_Uu1_q6WY5bTjFyn59PNwdooBnOzk8BrLDmaH6Y0G9SqBmGG5wjJ_JllKgVp2K44Kf0eJhvGDcBm2ioQ/p.jpeg",
    "https://uca731f7c64c7a531de8b601905d.previews.dropboxusercontent.com/p/thumb/ACjVxJjpM-5ZF0DjjRuleKIvEQYVPZ3-JJok_7dFRMHAVo0gj0aJT8WokCy3Hol34u-jYQC1Wctk-X0Fhw_ts9Nbo6nzHSgO2apkReDgh93LNEzaHAGHSySIZikGWK7BNFWHV0e_5D5hglSJuwUmqT9HFI1Rh4Y2xE9a4BUxtdRT0bQrIxQpDiDQ2EvLA06K4Dps4QR5Tg7XhOjzJOwGJMMO7s6NL3riClKEcjsePsb5jfdYQKIju85lHl5mqwXbHQ8rkcUFkEG20XBEfWuWoBbN3Ek7C41T9nuCRkKGuRTGTJhSQD_VcXLQUkZA9ex-CrouUBDg0kW_8DxBjMIkAEZjcxLR4f3FkXPXBPV6lVInxw/p.jpeg",
    "https://uc6f4313cda285db3514e7de7c76.previews.dropboxusercontent.com/p/thumb/AChm6_SK3gzHbOWdTa1T9d4moqD3EULYDJjocrDMT__--2Rd0D2uB-hGphk5s5zpVwql-l-MkH4M5KkmXtmSMpzsfo9nYBQCDECsAF7WoiYS0zdSitxptqHRr_EFvzFYgiaZ2ssRM_avw8LcwKuMO80rirhZYG2tpupuopPlS_uQS1SXcIeuQek7ExxX_Y_yyCN-iRmS6Tu9K0vWwH4iqL4VGfjAk591o8oRsUX1I4NKm9M-0sytXd3kN93DGOYjTu-fy5hgndkedVhVBnY1DemCPrU2vHoSDG8oJzJJfUlWlB2Y_8CHy7jGUP6qE9b4i_N2nIvhp_541TER546JKefXAIiYFC3RYDNwFLICCcN8aA/p.jpeg",
  ];
  const apartments = [
    {
      id: 0,
      title: "Unit 18",
      description:
        "Modern 2-bedroom apartment with stunning lake views, fully furnished kitchen, and private balcony.",
      img: "/images/1.jpg",
      price: "$200/Night",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sq ft",
      amenities: ["WiFi", "Parking", "Pool", "Gym"],
      fullDescription:
        "Stress our availability for Passover , Shavuot and, of course, the harsh winter  months of January, February and march. We Need to stress that we offer excellent totally kosher (for both peach and the entire year) complete apartments, pool all day, 4 short blocks from an excellent meaty and milky restaurant , all at an unbeatable price! 6 blocks from the beach!",
      location: "123 Lakefront Drive",
      availableFrom: "Immediate",
    },
    {
      id: 1,
      title: "Unit 18",
      description:
        "Efficient studio apartment in the heart of downtown. Perfect for young professionals.",
      img: "/images/2.jpg",
      price: "$200/Night",
      bedrooms: 1,
      bathrooms: 1,
      area: "500 sq ft",
      amenities: ["WiFi", "Parking", "Laundry", "Security"],
      fullDescription:
        "Stress our availability for Passover , Shavuot and, of course, the harsh winter months of January, February and march. We Need to stress that we offer excellent totally kosher (for both peach and the entire year) complete apartments, pool all day, 4 short blocks from an excellent meaty and milky restaurant , all at an unbeatable price! 6 blocks from the beach!",
      location: "456 Main Street",
      availableFrom: "Next Month",
    },
    {
      id: 2,
      title: "Unit 18",
      description:
        "Spacious 3-bedroom apartment with private garden and modern amenities.",
      img: "/images/3.jpg",
      price: "$200/Night",
      bedrooms: 3,
      bathrooms: 2.5,
      area: "1,800 sq ft",
      amenities: ["WiFi", "Parking", "Garden", "Playground"],
      fullDescription:
        "Stress our availability for Passover , Shavuot and, of course, the harsh winter months of January, February and march. We Need to stress that we offer excellent totally kosher (for both peach and the entire year) complete apartments, pool all day, 4 short blocks from an excellent meaty and milky restaurant , all at an unbeatable price! 6 blocks from the beach!",
      location: "789 Garden Avenue",
      availableFrom: "Next Week",
    },
    {
      id: 3,
      title: "Unit 18",
      description:
        "Contemporary 1-bedroom loft with high ceilings and industrial design elements.",
      img: "/images/4.jpg",
      price: "$200/Night",
      bedrooms: 1,
      bathrooms: 1,
      area: "850 sq ft",
      amenities: ["WiFi", "Parking", "Elevator", "Roof Deck"],
      fullDescription:
        "Stress our availability for Passover , Shavuot and, of course, the harsh winter months of January, February and march. We Need to stress that we offer excellent totally kosher (for both peach and the entire year) complete apartments, pool all day, 4 short blocks from an excellent meaty and milky restaurant , all at an unbeatable price! 6 blocks from the beach!",
      location: "101 Warehouse District",
      availableFrom: "Two Weeks",
    },
    {
      id: 4,
      title: "Unit 18",
      description:
        "Luxurious 3-bedroom penthouse with panoramic city views and private terrace.",
      img: "/images/5.jpg",
      price: "$200/Night",
      bedrooms: 3,
      bathrooms: 3.5,
      area: "2,500 sq ft",
      amenities: ["WiFi", "Parking", "Pool", "Concierge", "Gym"],
      fullDescription:
        "Stress our availability for Passover , Shavuot and, of course, the harsh winter months of January, February and march. We Need to stress that we offer excellent totally kosher (for both peach and the entire year) complete apartments, pool all day, 4 short blocks from an excellent meaty and milky restaurant , all at an unbeatable price! 6 blocks from the beach!",
      location: "1000 Skyline Boulevard",
      availableFrom: "Next Month",
    },
  ];

  const apartment = apartments.find((apt) => apt.id === parseInt(id));

  if (!apartment) {
    return <div className="text-center p-4 md:p-8">Apartment not found</div>;
  }

  // Extract numeric price value and calculate tax
  const basePrice = parseInt(apartment.price.replace(/[^0-9]/g, ""));
  const taxRate = 0.13; // 13% Florida sales tax
  const taxAmount = basePrice * taxRate;
  const totalPrice = basePrice + taxAmount;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back to Apartments Header for Mobile */}
      <div className="md:hidden bg-white shadow-sm">
        <button
          onClick={handleBack}
          className="w-full p-4 flex items-center justify-center text-gray-700 hover:bg-gray-50"
        >
          <FaArrowLeft className="mr-2" />
          Back to Apartments
        </button>
      </div>

      {/* Apartment Details Section */}
      
      <div className="p-4  md:p-8">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 md:mb-6 flex items-center mt-3 gap-2 text-gray-600 hover:text-gray-900"
          >
            <FaArrowLeft /> Back to listings
          </button>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-[300px] md:h-[500px] w-full">
              <img
                src={apartment.img}
                alt={apartment.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 md:p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                    {apartment.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600">
                    {apartment.location}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-2xl md:text-3xl font-bold text-[#ff385c]">
                    {apartment.price}
                  </div>
                  <div className="text-sm text-gray-600">
                    + ${taxAmount.toFixed(2)} (13% Florida sales tax)
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mt-1">
                    Total: ${totalPrice.toFixed(2)}/Night
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <FaBed className="text-gray-500" />
                  <span>{apartment.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBath className="text-gray-500" />
                  <span>{apartment.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRuler className="text-gray-500" />
                  <span>{apartment.area}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Available: {apartment.availableFrom}</span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {apartment.fullDescription}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    Excellent totally kosher facilities for both Pesach and
                    year-round use with complete apartment amenities
                  </li>
                  <li>
                    Full-day pool access, convenient location just 4 blocks from
                    kosher restaurants and 6 blocks from the beach
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {apartment.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {amenity === "WiFi" && (
                        <FaWifi className="text-gray-500" />
                      )}
                      {amenity === "Parking" && (
                        <FaParking className="text-gray-500" />
                      )}
                      {amenity === "Pool" && (
                        <FaSwimmingPool className="text-gray-500" />
                      )}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#ff385c] text-white py-3 md:py-4 px-4 md:px-6 rounded-lg font-semibold hover:bg-[#e31c5f] transition-colors cursor-pointer flex items-center gap-2 md:gap-3 w-full md:w-fit text-sm md:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Call us at: </span>
                <span className="font-bold">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Image Gallery Section */}
      <div className="max-w-[1410px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Property Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-7xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="max-h-[90vh] mx-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* Article Section with Responsive Contact Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:justify-between relative gap-8">
          {/* Left Side - Scrollable Article Content */}
          <div className="w-full lg:flex-1 lg:pr-8 max-h-full lg:max-h-[800px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
            <div className="prose prose-sm md:prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Luxury Living at Its Finest
              </h2>
              <p className="text-gray-700 mb-6">
                Welcome to the epitome of sophisticated urban living. Our Luxury
                Lake View Apartment represents the perfect harmony between
                modern design and natural beauty, offering residents an
                unparalleled living experience in one of the city's most coveted
                locations.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Prime Location & Neighborhood
              </h3>
              <p className="text-gray-700 mb-6">
                Nestled in the heart of the city's most prestigious district,
                this property offers the perfect balance of urban convenience
                and serene living. The lakefront location provides breathtaking
                views and easy access to outdoor activities, while the proximity
                to downtown ensures you're never far from the action.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                A Culinary Paradise
              </h3>
              <p className="text-gray-700 mb-6">
                Food enthusiasts will appreciate the diverse dining scene within
                walking distance. From Michelin-starred restaurants to charming
                local cafes, the neighborhood offers an exceptional range of
                culinary experiences. Notable establishments include: • The Lake
                View Bistro - Contemporary American cuisine • Sakura Japanese
                Restaurant - Authentic sushi and izakaya • Café Milano - Italian
                delicacies • The Green Kitchen - Farm-to-table organic dining
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Shopping & Entertainment
              </h3>
              <p className="text-gray-700 mb-6">
                The area is a shopping paradise with numerous boutiques,
                designer stores, and specialty shops. The nearby Market Street
                Mall features over 150 retailers, while the Historic District
                offers unique antique stores and art galleries. Entertainment
                options include: • The Grand Theater - Live performances and
                shows • Lakeside Cinema - Latest releases in luxury seating •
                The Arts Center - Rotating exhibitions and workshops • Night
                Market - Weekend street food and local artisans
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Wellness & Recreation
              </h3>
              <p className="text-gray-700 mb-6">
                Health and wellness enthusiasts will find everything they need
                within reach: • Lake Trail - 5-mile scenic jogging and biking
                path • Wellness Center - Yoga, pilates, and meditation classes •
                Sports Complex - Tennis courts and Olympic-size pool • Botanical
                Gardens - Perfect for peaceful walks
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Smart Home Technology
              </h3>
              <p className="text-gray-700 mb-6">
                Our apartments feature cutting-edge smart home technology: •
                Voice-controlled lighting and climate control • Smart security
                system with mobile app integration • Digital door locks with
                fingerprint access • Smart appliances with remote control
                capabilities • Integrated entertainment systems • Energy
                efficiency monitoring
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Premium Amenities
              </h3>
              <p className="text-gray-700 mb-6">
                The building offers world-class amenities: • 24/7 Concierge
                service • Rooftop infinity pool with city views •
                State-of-the-art fitness center • Private movie theater • Wine
                cellar and tasting room • Pet spa and dog park • Co-working
                spaces • Guest suites for visitors
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Transportation Hub
              </h3>
              <p className="text-gray-700 mb-6">
                Connectivity is seamless with: • Light rail station - 5-minute
                walk • Multiple bus lines • Dedicated ride-share pickup zone •
                Electric vehicle charging stations • Bicycle storage and repair
                station • Easy highway access
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Education & Schools
              </h3>
              <p className="text-gray-700 mb-6">
                The neighborhood is served by top-rated educational
                institutions: • Lake View Elementary (Rating: 9/10) • Central
                Middle School (Rating: 8/10) • International High School
                (Rating: 9/10) • City University - Downtown Campus • Language
                Learning Center • Public Library - Historical Branch
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Community Events
              </h3>
              <p className="text-gray-700 mb-6">
                Our vibrant community hosts regular events: • Monthly wine
                tasting socials • Seasonal pool parties • Fitness classes and
                workshops • Cooking demonstrations • Art exhibitions • Holiday
                celebrations • Networking events
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Safety & Security
              </h3>
              <p className="text-gray-700 mb-6">
                Your security is our priority: • 24/7 security personnel •
                Advanced surveillance systems • Controlled access to all areas •
                Emergency response system • Secure package delivery • Video
                intercom system
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Interior Design
              </h3>
              <p className="text-gray-700 mb-6">
                Every detail has been carefully considered: • Floor-to-ceiling
                windows with UV protection • Custom Italian cabinetry • Quartz
                countertops • Hardwood flooring • Designer lighting fixtures •
                Spacious walk-in closets • Premium bathroom fixtures
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Sustainability Initiatives
              </h3>
              <p className="text-gray-700 mb-6">
                We're committed to environmental responsibility: • LEED Gold
                certification • Solar panel installation • Rainwater harvesting
                • Energy-efficient appliances • Green roof gardens • Recycling
                program • Composting facilities
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Pet-Friendly Features
              </h3>
              <p className="text-gray-700 mb-6">
                We welcome your furry friends: • Private dog park • Pet washing
                station • Walking services available • Veterinary services
                nearby • Pet social events • Training facilities
              </p>

              <div className="bg-blue-50 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Limited Time Offer
                </h3>
                <p className="text-gray-700">
                  Current residents enjoy exclusive benefits: • First month
                  rent-free • Waived application fee • Complimentary parking for
                  6 months • Free fitness center membership • Move-in assistance
                  Contact us today to learn more about these special offers!
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-gray-900 rounded-lg p-4 md:p-6 text-white lg:sticky lg:top-24">
              <h2 className="text-lg md:text-xl font-bold mb-4">Book Now</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent border border-gray-600 rounded p-2 text-sm"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border border-gray-600 rounded p-2 text-sm"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-transparent border border-gray-600 rounded p-2 text-sm"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full bg-transparent border border-gray-600 rounded p-2 text-sm"
                ></textarea>
                <button className="w-full bg-[#ff385c] text-white px-4 py-2 rounded text-sm hover:bg-[#e31c5f] transition-colors">
                  Book Now
                </button>
              </form>
              <div className="mt-4 text-sm text-gray-400">
                <p>Base Rent: {apartment.price}</p>
                <p>Florida Sales Tax (13%): ${taxAmount.toFixed(2)}</p>
                <p className="font-semibold">
                  Total Monthly: ${totalPrice.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;
