import React from "react";
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

const ApartmentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Navigate to root/home page where apartments listing is
  };
  
  const apartments = [
    {
      id: 0,
      title: "Luxury Lake View Apartment",
      description:
        "Modern 2-bedroom apartment with stunning lake views, fully furnished kitchen, and private balcony.",
      img: "https://i.pinimg.com/736x/3a/e7/59/3ae759999fb45a328028241181dec73a.jpg",
      price: "$2,500/month",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sq ft",
      amenities: ["WiFi", "Parking", "Pool", "Gym"],
      fullDescription:
        "Experience luxury living at its finest with this stunning lake view apartment. Featuring floor-to-ceiling windows, premium appliances, and designer furnishings throughout. The open-concept living area flows seamlessly onto a private balcony offering breathtaking views of the lake.",
      location: "123 Lakefront Drive",
      availableFrom: "Immediate",
    },
    {
      id: 1,
      title: "Cozy Studio Downtown",
      description:
        "Efficient studio apartment in the heart of downtown. Perfect for young professionals.",
      img: "https://i.pinimg.com/736x/21/47/f4/2147f49b409ab77b1976567b2c7d72b9.jpg",
      price: "$1,200/month",
      bedrooms: 1,
      bathrooms: 1,
      area: "500 sq ft",
      amenities: ["WiFi", "Parking", "Laundry", "Security"],
      fullDescription:
        "Located in the vibrant downtown district, this modern studio apartment offers the perfect blend of comfort and convenience. The thoughtfully designed space features high-end finishes, built-in storage solutions, and large windows that flood the apartment with natural light.",
      location: "456 Main Street",
      availableFrom: "Next Month",
    },
    {
      id: 2,
      title: "Family Garden Apartment",
      description:
        "Spacious 3-bedroom apartment with private garden and modern amenities.",
      img: "https://i.pinimg.com/736x/48/76/80/487680af596db0d5dd1f3acff679e6ab.jpg",
      price: "$3,200/month",
      bedrooms: 3,
      bathrooms: 2.5,
      area: "1,800 sq ft",
      amenities: ["WiFi", "Parking", "Garden", "Playground"],
      fullDescription:
        "Perfect for families, this ground-floor apartment offers generous living spaces and a private garden. The modern kitchen comes fully equipped with stainless steel appliances, while the spacious bedrooms feature ample closet space and garden views.",
      location: "789 Garden Avenue",
      availableFrom: "Next Week",
    },
    {
      id: 3,
      title: "Urban Loft Apartment",
      description:
        "Contemporary 1-bedroom loft with high ceilings and industrial design elements.",
      img: "https://i.pinimg.com/736x/a2/5f/14/a25f14e748d8bd58210ef74bca4d8ad2.jpg",
      price: "$1,800/month",
      bedrooms: 1,
      bathrooms: 1,
      area: "850 sq ft",
      amenities: ["WiFi", "Parking", "Elevator", "Roof Deck"],
      fullDescription:
        "This stunning loft apartment combines industrial charm with modern comfort. Features include exposed brick walls, 14-foot ceilings, and oversized windows. The open floor plan and flexible layout make it perfect for both living and working.",
      location: "101 Warehouse District",
      availableFrom: "Two Weeks",
    },
    {
      id: 4,
      title: "Penthouse Suite",
      description:
        "Luxurious 3-bedroom penthouse with panoramic city views and private terrace.",
      img: "https://i.pinimg.com/736x/14/83/2e/14832edcea75d64a51176d0ebbba2328.jpg",
      price: "$5,500/month",
      bedrooms: 3,
      bathrooms: 3.5,
      area: "2,500 sq ft",
      amenities: ["WiFi", "Parking", "Pool", "Concierge", "Gym"],
      fullDescription:
        "Experience unparalleled luxury in this spectacular penthouse suite. Features include a gourmet kitchen with top-of-the-line appliances, a master suite with spa-like bathroom, and a wraparound terrace offering breathtaking city views.",
      location: "1000 Skyline Boulevard",
      availableFrom: "Next Month",
    },
    {
      id: 5,
      title: "Garden View Studio",
      description:
        "Charming studio apartment overlooking community gardens with updated appliances.",
      img: "https://i.pinimg.com/736x/a5/42/71/a54271f6c829190c4fef81a9346e1a19.jpg",
      price: "$1,100/month",
      bedrooms: 1,
      bathrooms: 1,
      area: "450 sq ft",
      amenities: ["WiFi", "Garden Access", "Laundry", "Bike Storage"],
      fullDescription:
        "This delightful studio offers a peaceful retreat with views of the community gardens. Recently updated with modern appliances and finishes, the apartment features clever storage solutions and a well-designed layout that maximizes space.",
      location: "202 Garden View Lane",
      availableFrom: "Immediate",
    },
    {
      id: 6,
      title: "Modern Two-Bedroom",
      description:
        "Contemporary 2-bedroom apartment with open floor plan and smart home features.",
      img: "https://i.pinimg.com/736x/db/5f/63/db5f63f65ed24c3444764b59486bbe33.jpg",
      price: "$2,800/month",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,100 sq ft",
      amenities: ["WiFi", "Parking", "Smart Home", "Storage"],
      fullDescription:
        "This sophisticated apartment combines modern design with cutting-edge technology. Features include integrated smart home systems, an open-concept living area, and a sleek kitchen with premium appliances. Both bedrooms offer en-suite bathrooms and walk-in closets.",
      location: "303 Tech Avenue",
      availableFrom: "Next Month",
    },
    {
      id: 7,
      title: "Riverside Apartment",
      description:
        "Elegant 2-bedroom apartment with river views and access to community amenities.",
      img: "https://i.pinimg.com/736x/52/92/98/529298611bb7d1df076b4b869d00e03c.jpg",
      price: "$2,900/month",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,300 sq ft",
      amenities: ["WiFi", "Parking", "Pool", "River Access"],
      fullDescription:
        "Enjoy waterfront living in this beautifully appointed apartment. The spacious interior features high-end finishes, a gourmet kitchen, and floor-to-ceiling windows showcasing stunning river views. Residents have access to premium community amenities including a riverside walking trail.",
      location: "404 River Road",
      availableFrom: "Two Weeks",
    },
    {
      id: 8,
      title: "Heritage Loft",
      description:
        "Historic building converted into modern loft spaces with original architectural details.",
      img: "https://i.pinimg.com/736x/3a/e7/59/3ae759999fb45a328028241181dec73a.jpg",
      price: "$2,200/month",
      bedrooms: 1,
      bathrooms: 1.5,
      area: "950 sq ft",
      amenities: ["WiFi", "Parking", "Elevator", "Storage"],
      fullDescription:
        "This unique loft apartment seamlessly blends historic charm with modern convenience. Original features include exposed brick walls and timber beams, while modern updates provide all the comforts of contemporary living. The soaring ceilings and large windows create an inspiring living space.",
      location: "505 Heritage Square",
      availableFrom: "Next Month",
    },
    {
      id: 9,
      title: "Sky View Apartment",
      description:
        "High-rise apartment with floor-to-ceiling windows and stunning city skyline views.",
      img: "https://i.pinimg.com/736x/21/47/f4/2147f49b409ab77b1976567b2c7d72b9.jpg",
      price: "$3,100/month",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,400 sq ft",
      amenities: ["WiFi", "Parking", "Gym", "Roof Deck"],
      fullDescription:
        "Located on the 25th floor, this spectacular apartment offers unobstructed city views through wall-to-wall windows. The modern interior features premium finishes, a chef's kitchen, and a spacious primary suite. Building amenities include a state-of-the-art fitness center and rooftop lounge.",
      location: "606 Sky Tower",
      availableFrom: "Immediate",
    },
    {
      id: 10,
      title: "Eco-Friendly Studio",
      description:
        "Sustainable living space with energy-efficient appliances and green building features.",
      img: "https://i.pinimg.com/736x/48/76/80/487680af596db0d5dd1f3acff679e6ab.jpg",
      price: "$1,400/month",
      bedrooms: 1,
      bathrooms: 1,
      area: "550 sq ft",
      amenities: ["WiFi", "Bike Storage", "Solar Power", "Composting"],
      fullDescription:
        "This innovative studio apartment sets new standards for sustainable urban living. Features include energy-efficient appliances, solar power integration, and smart climate control systems. The thoughtful design maximizes natural light and airflow while minimizing environmental impact.",
      location: "707 Green Street",
      availableFrom: "Next Week",
    },
    {
      id: 11,
      title: "Artist's Loft",
      description:
        "Spacious loft with natural lighting, perfect for creative professionals.",
      img: "https://i.pinimg.com/736x/a2/5f/14/a25f14e748d8bd58210ef74bca4d8ad2.jpg",
      price: "$2,000/month",
      bedrooms: 1,
      bathrooms: 1,
      area: "900 sq ft",
      amenities: ["WiFi", "Freight Elevator", "Studio Space", "Storage"],
      fullDescription:
        "Designed with creators in mind, this expansive loft offers abundant natural light through massive windows and an open floor plan perfect for a live/work lifestyle. The industrial-chic space features concrete floors, exposed ductwork, and flexible areas that can be adapted to various creative pursuits.",
      location: "808 Arts District",
      availableFrom: "Two Weeks",
    },
    {
      id: 12,
      title: "Garden Terrace Suite",
      description:
        "Ground floor apartment with private terrace and direct garden access.",
      img: "https://i.pinimg.com/736x/14/83/2e/14832edcea75d64a51176d0ebbba2328.jpg",
      price: "$2,400/month",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,150 sq ft",
      amenities: ["WiFi", "Parking", "Private Garden", "Storage"],
      fullDescription:
        "This charming ground-floor apartment offers the best of indoor-outdoor living. The spacious interior opens onto a private terrace and garden, perfect for entertaining or relaxing. Inside, you'll find updated finishes, a modern kitchen, and generous bedroom suites.",
      location: "909 Garden Court",
      availableFrom: "Next Month",
    },
  ];


  const apartment = apartments.find((apt) => apt.id === parseInt(id));

  if (!apartment) {
    return <div className="text-center p-4 md:p-8">Apartment not found</div>;
  }

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
   
      {/* Original Apartment Details Section */}
      <div className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 md:mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900"
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
                <div className="text-2xl md:text-3xl font-bold text-[#ff385c]">
                  {apartment.price}
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
                <p className="text-gray-600 leading-relaxed">
                  {apartment.fullDescription}
                </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;
