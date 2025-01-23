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
         src="https://uc5ee2d63b2b960fdbe04ee69203.previews.dropboxusercontent.com/p/thumb/ACgNZ5RaAjAM76knNNOxzF-E92bioD1gEynOOI95O75VpmbCauDzMqprL8sk_uU8rAF7D9Zukj8INW_APdhqW2bCv8BUVFcNS3mIFVNuTFGYyoPbmqi91SuzXXAE8t5reB2r5MgSnIfnnWuOZ4kTSgflD5tcE1T2G4lxjN5SdNNhFdfF6R_H0bKgIVi1RNQlUZaRxZbNkwVQkBtKvpg0ND0HewT-_-FAG-5SsSnpKNlC3YLH0qkWcc6mK0NGhzcUZSW9B_axBFpQen1Hmyw7Lb7wlpbM67b7h7vAwoqFf_WekAFKPq8yuX_Ji-rH3xL1tPzaCLZydiJclwZBnN1AQaGmSfQSSFvqWz4jbRkTejCGLw/p.jpeg"
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
             src="https://uc0d160c340863d07b4acf3bc192.previews.dropboxusercontent.com/p/thumb/ACji3TMVM-HTDEsr2wf-_elgzeiZMSRakeCFvrRad14ZahJuH-PszE1yOjZXayJZl-YAdIXBNNLpBxrjtt7KQVLIXhMvwKSXhmfpAnqlG_ildsakSDDWXfivgeNEPkpMiaj9O2ZSGA679C93nHu3lKfs5q5upAoVWgxKMjKNPFhxiJXzYIspRZqvd8tcqoptv5A2NqcFLIECqtNpW_uH4uDOPOTS0RJwcGi1VS0FKGmmuf_pyvwH3-f9SqOcS1J41gezK6LRDgFNewG7NhvgSRH4N-0BhJ_Uu1_q6WY5bTjFyn59PNwdooBnOzk8BrLDmaH6Y0G9SqBmGG5wjJ_JllKgVp2K44Kf0eJhvGDcBm2ioQ/p.jpeg"
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
             src="https://uca731f7c64c7a531de8b601905d.previews.dropboxusercontent.com/p/thumb/ACjVxJjpM-5ZF0DjjRuleKIvEQYVPZ3-JJok_7dFRMHAVo0gj0aJT8WokCy3Hol34u-jYQC1Wctk-X0Fhw_ts9Nbo6nzHSgO2apkReDgh93LNEzaHAGHSySIZikGWK7BNFWHV0e_5D5hglSJuwUmqT9HFI1Rh4Y2xE9a4BUxtdRT0bQrIxQpDiDQ2EvLA06K4Dps4QR5Tg7XhOjzJOwGJMMO7s6NL3riClKEcjsePsb5jfdYQKIju85lHl5mqwXbHQ8rkcUFkEG20XBEfWuWoBbN3Ek7C41T9nuCRkKGuRTGTJhSQD_VcXLQUkZA9ex-CrouUBDg0kW_8DxBjMIkAEZjcxLR4f3FkXPXBPV6lVInxw/p.jpeg"
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
             src="https://uc28d668bf1fd2cb3e6d297bc22a.previews.dropboxusercontent.com/p/thumb/ACgjCGXFKxv6UqA2Bh1yn7dEJR2GsZavDXpql_ir1mZyt-ERelxR-pgvKd9d3Af4ebT2mjffYTj9X6o1SC2ohWn9CK7hPo040Fc6fcglCwBeoJdO6xEj_XKJqto3I237zk4tF0zgw1wQeGZUYaDe2ehOC_p3R3tcYNWpQmmiNhxDCQXEbdMQoB7b4VXvqkDBrrB_kK7LPZQ0_cfvY05ULYwZxA6GmUuECWUZAjTWdTkfskJGWFuRmFtx3CfuyfEYjVOG0vs-nnycYiyl5IzobP_J1MIJ-BcvvO__XnYqr5lyLCGHHB6TaFelE2VfPKpwcy2ClBqs3kR_yqolEwxf5MDMmDIMpwQ-RHQ0NRAVALM3HA/p.jpeg"
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
