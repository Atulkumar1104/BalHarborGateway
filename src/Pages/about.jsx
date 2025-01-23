import React from "react";

const AboutUs = () => {
 return (
   <div className="w-full relative">
     {/* Animated background pattern */}
     <div className="absolute inset-0 opacity-[0.05]">
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

     {/* Hero Section */}
     <div className="relative h-screen mb-20">
       <img
         src="images/6.jpg"
         alt="Luxury Apartment Exterior"
         className="w-full h-full object-cover"
       />
       <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
         <h1 className="text-6xl font-bold text-white text-center max-w-4xl px-4">
           Kosher Bal Harbor Getway
         </h1>
       </div>
     </div>

     {/* About Section */}
     <div className="max-w-7xl mx-auto px-4 mb-32">
       <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
         At Luxury Living, we believe in creating more than just apartments – we
         craft living experiences. Our commitment to excellence drives us to
         innovate constantly, ensuring each resident enjoys unparalleled comfort
         and style. With over a decade of expertise, we've mastered the art of
         blending luxury with functionality, creating spaces that truly feel
         like home.
       </p>
     </div>

     {/* Features Grid */}
     <div className="max-w-7xl mx-auto px-4 space-y-32 mb-32">
       {/* Section 1 */}
       <div className="flex flex-col md:flex-row items-center gap-16">
         <div className="w-full md:w-1/2">
           <img
             src="/images/13.jpg"
             alt="Premium Amenities"
             className="w-full h-96 object-cover rounded-lg shadow-xl"
           />
         </div>
         <div className="w-full md:w-1/2 space-y-6">
           <h2 className="text-4xl font-bold text-gray-800">Pool Amenities</h2>
           <p className="text-lg text-gray-600">
             Dive into relaxation with our state-of-the-art pool amenities,
             designed for both leisure and fitness. Whether you’re enjoying a
             refreshing swim, lounging by the poolside, or unwinding after a
             long day, our pool area offers the perfect escape. With clean,
             well-maintained facilities and a serene atmosphere, it’s more than
             just a pool—it’s your personal oasis.
           </p>
         </div>
       </div>

       {/* Section 2 */}
       <div className="flex flex-col md:flex-row-reverse items-center gap-16">
         <div className="w-full md:w-1/2">
           <img
             src="images/8.jpg"
             alt="Location Excellence"
             className="w-full h-96 object-cover rounded-lg shadow-xl"
           />
         </div>
         <div className="w-full md:w-1/2 space-y-6">
           <h2 className="text-4xl font-bold text-gray-800">Prime Locations</h2>
           <p className="text-lg text-gray-600">
             Discover the perfect blend of convenience and luxury with our
             properties situated in prime locations. Whether you desire
             proximity to bustling business hubs, renowned schools, vibrant
             shopping centers, or tranquil parks, our apartments are
             thoughtfully positioned to offer the best of urban living. Enjoy
             easy access to essential amenities and a lifestyle that keeps you
             connected to everything you need.
           </p>
         </div>
       </div>

       {/* Section 3 */}
       <div className="flex flex-col md:flex-row items-center gap-16">
         <div className="w-full md:w-1/2">
           <img
             src="/images/12.jpg"
             alt="Customer Service"
             className="w-full h-96 object-cover rounded-lg shadow-xl"
           />
         </div>
         <div className="w-full md:w-1/2 space-y-6">
           <h2 className="text-4xl font-bold text-gray-800">
             Round-the-Clock Apartment Services
           </h2>
           <p className="text-lg text-gray-600">
             Experience unparalleled convenience with our round-the-clock
             apartment services. Whether it’s a late-night maintenance request,
             assistance with your living needs, or ensuring the security of your
             home, our dedicated team is available 24/7 to provide prompt and
             reliable support. Your comfort and peace of mind are our top
             priorities, making every moment in your apartment truly
             exceptional.
           </p>
         </div>
       </div>
     </div>

     {/* Company Stats */}
     <div className="bg-gray-50 -mt-16 py-8">
       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
         <div className="text-center bg-[#ff385c] rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
           <h3 className="text-4xl font-bold text-white mb-2">10+</h3>
           <p className="text-white">Years of Excellence</p>
         </div>
         <div className="text-center bg-[#ff385c] rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
           <h3 className="text-4xl font-bold text-white mb-2">750+</h3>
           <p className="text-white">Happy Families</p>
         </div>
         <div className="text-center bg-[#ff385c] rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
           <h3 className="text-4xl font-bold text-white mb-2">20+</h3>
           <p className="text-white">Premium Properties</p>
         </div>
         <div className="text-center bg-[#ff385c] rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
           <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
           <p className="text-white">Support & Maintenance</p>
         </div>
       </div>
     </div>
   </div>
 );
};

export default AboutUs;
