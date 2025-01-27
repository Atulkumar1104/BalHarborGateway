// import React from "react";
// import Tilt from "./tilt";
// import { useNavigate } from "react-router-dom";

// const ApartmentListings = () => {
//   const navigate = useNavigate();

//   const handleViewDetails = (id) => {
//     console.log("Navigating to apartment:", id);
//     navigate(`/apartment/${id}`);
//   };

//   const apartments = [
//     {
//       id: 0,
//       title: "Unit 18",
//       description:
//         "We’re ready to welcome you during Passover, Shavuot, and especially the chilly winter months of January, February, and March. With cozy interiors and modern amenities, you'll feel right at home, no matter the weather.",
//       img: "/images/1.jpg",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-20 relative">
//       {/* Animated background pattern */}
//       <div className="absolute inset-0 opacity-[0.03]">
//         <div
//           className="w-full h-full"
//           style={{
//             backgroundImage: `
//               linear-gradient(30deg, rgb(75, 85, 99) 12%, transparent 12.5%, transparent 87%, rgb(75, 85, 99) 87.5%, rgb(75, 85, 99)),
//               linear-gradient(150deg, rgb(75, 85, 99) 12%, transparent 12.5%, transparent 87%, rgb(75, 85, 99) 87.5%, rgb(75, 85, 99)),
//               linear-gradient(30deg, rgb(75, 85, 99) 12%, transparent 12.5%, transparent 87%, rgb(75, 85, 99) 87.5%, rgb(75, 85, 99)),
//               linear-gradient(150deg, rgb(75, 85, 99) 12%, transparent 12.5%, transparent 87%, rgb(75, 85, 99) 87.5%, rgb(75, 85, 99))
//             `,
//             backgroundSize: "80px 140px",
//             backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px",
//             animation: "moveBackground 10s linear infinite",
//           }}
//         />
//       </div>

//       <style>
//         {`
//           @keyframes moveBackground {
//             0% {
//               background-position: 0 0, 0 0, 40px 70px, 40px 70px;
//             }
//             100% {
//               background-position: 80px 140px, 80px 140px, 120px 210px, 120px 210px;
//             }
//           }
//         `}
//       </style>

//       <div className="mx-auto max-w-full relative">
//         <h1 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
//           <span className="bg-clip-text text-transparent text-6xl bg-[#ff385c]">
//             Kosher
//           </span>{" "}
//           Available Apartments
//         </h1>
//         <div className="mb-4">
//           <p className="text-sm sm:text-base text-gray-600">
//             Showing {apartments.length} apartments
//           </p>
//         </div>
//         <div className="flex flex-col items-center">
//           <div className="w-full max-w-7xl">
//             {apartments.map((apartment) => (
//               <Tilt key={apartment.id} rotationFactor={5} isRevese>
//                 <div className="h-full min-h-[400px] sm:h-[450px] w-full overflow-hidden rounded-lg bg-white shadow-lg flex flex-row">
//                   {/* Image on the left */}
//                   <div className="w-1/2 flex-shrink-0">
//                     <img
//                       src={apartment.img}
//                       alt={apartment.title}
//                       className="h-full w-full object-cover"
//                     />
//                   </div>
//                   {/* Content on the right */}
//                   <div className="w-1/2 p-4 sm:p-6 flex-grow flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
//                         {apartment.title}
//                       </h3>
//                       <p className="text-sm sm:text-base text-gray-600">
//                         {apartment.description}
//                       </p>
//                     </div>
//                     <button
//                       className="mt-4 w-full rounded-lg bg-[#ff385c] px-4 py-2 font-medium text-white transition-colors hover:bg-[#e31c5f] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
//                       onClick={() => handleViewDetails(apartment.id)}
//                     >
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               </Tilt>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApartmentListings;
