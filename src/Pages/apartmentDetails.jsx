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
      title: "Unit 18",
      description:
        "Modern 2-bedroom apartment with stunning lake views, fully furnished kitchen, and private balcony.",
      img: "https://uc144a68c58295829b5e35d00619.previews.dropboxusercontent.com/p/thumb/ACh-AjTw9apLgYENh6iQMLbpEsq9TXNEYJiFz-BPdjd1Vgck6HWe_KqQn7jlQbO0uwOdMZNKnaLhmF5L-j22_YoNqGiaBC8QR4yjZXPqm9gAzcBUuoyQTI9s5l2ZnX8kcfxyS9FDiaoUS-RFsAqrh29Sp_WlqoEg6W61BEFtAVQg1YF9XJYYfKx9ZKGnWzpQREaJfZ9DVEzcTqQJIsbd8kUDjIeuiHSkT2GPYqPNo6KosZEYnenlYWhbPWQJc9DesIpvL93ky5mFELEtElXd91Vz2ngSPztu0OAeFlnbDywUTBWa2frOCffwIjO1UZP1Qq_CE3tUehfrvquKs5SCptNxXISAK8Ydd3yfRFdWH8fF8g/p.jpeg",
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
      title: "Unit 18",
      description:
        "Efficient studio apartment in the heart of downtown. Perfect for young professionals.",
      img: "https://ucfec0834f97ed010fa2fbfa0b13.previews.dropboxusercontent.com/p/thumb/ACifH9Kk_IBPSkReD0AD8gVA6gdgPJAPqt_KaQ0NSk6dqDYGUut3FEnfC-8MQvi4e3qnUcHAbL7WqGPvALsQNfqqKSEK22CXtqT12Typ95Q5ooqcG-B8c3l9b3Hs6pWiQg9-iz9iOf_FFTxpl14vPf6VWpN6fQajZpgo5HEld31SMz-952CN-1HZene_gSkVF0isqvR2br7T5XdsQ4HYTfKfrQ6Z048kO3UjumXT1jbqOGmLkCaXkj7JiCM-YSV66Die_pVCAj4dZgRlHFgHebN828Ij5b1MgUbo4yUxPm0D3dTIZ2Pv1XofxH92haxbv-eci_yvT1499VJVzDri88IfjeRI-84KIPR9usx4EFfmvg/p.jpeg",
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
      title: "Unit 18",
      description:
        "Spacious 3-bedroom apartment with private garden and modern amenities.",
      img: "https://uca82608d65465054b3c33057e88.previews.dropboxusercontent.com/p/thumb/ACg9js7_HMosHbkyyniBjxdyWYp4JYZmv0rT3MjoJeKxQiL_avVl7FnjUui2utLgZJgj_MYfdCvbzgxJ3aaeLADEOiD1aAvSkEyhw53bVl78ib295KV9oQvAqPVmOldaRQN3yrPauVc0j5Srhni2Un4-8g_hUuaAt4pX2lTPbqgQ-FRsUFCJEpccR649f56nU2MZJWC9kOeqzJCoh2zSCkK1lGD_oSXM-eymbBVW8VIiE7E8uvIoGz-fx3MjNxKuqCNau0J2TLKGdpBtcXMmU3cRu3U8ekqLbYCKa4jSBl_07bRDzRmcaT7Z8h1KGbgQ8W9mDOSes_NyrWb52Ki2C6FXuQBJ05tX50B68jeVnh1pYQ/p.jpeg",
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
      title: "Unit 18",
      description:
        "Contemporary 1-bedroom loft with high ceilings and industrial design elements.",
      img: "https://uca82608d65465054b3c33057e88.previews.dropboxusercontent.com/p/thumb/ACg9js7_HMosHbkyyniBjxdyWYp4JYZmv0rT3MjoJeKxQiL_avVl7FnjUui2utLgZJgj_MYfdCvbzgxJ3aaeLADEOiD1aAvSkEyhw53bVl78ib295KV9oQvAqPVmOldaRQN3yrPauVc0j5Srhni2Un4-8g_hUuaAt4pX2lTPbqgQ-FRsUFCJEpccR649f56nU2MZJWC9kOeqzJCoh2zSCkK1lGD_oSXM-eymbBVW8VIiE7E8uvIoGz-fx3MjNxKuqCNau0J2TLKGdpBtcXMmU3cRu3U8ekqLbYCKa4jSBl_07bRDzRmcaT7Z8h1KGbgQ8W9mDOSes_NyrWb52Ki2C6FXuQBJ05tX50B68jeVnh1pYQ/p.jpeg",
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
      title: "Unit 18",
      description:
        "Luxurious 3-bedroom penthouse with panoramic city views and private terrace.",
      img: "https://uc454486c87fc77d0db39c547057.previews.dropboxusercontent.com/p/thumb/ACi7VcJid5SFHiGO3wFN_G0QPfu2OcCwV2XkwMcSmOxUXp68orDTAkaJ4NtJeaqSrKtAR1etQ4KIa0EY4gTLGG7dZnOh2H1zxsDXrdaqrZRUtBSbs-hkEK0cksvDxOb53O7HVv6Gl5yC2026O7kv0uDJ9Up5-2b17uznW3IpT_zQ6ZbbUSavejS9iyxvU-Zii9ls9mtT4TnL-dXIZ85MRxbuAqaED2C7vaTSmSDri1AJGV_cNW6K0OFt74sz3vfrG-1zML1s4wJgAcExjVU6OJlTIUaNz9xTpk1215xWtw5xZd6W30L1kRb7HLzkR1BgBuLEQ-_0uJu1HZWVpqY5AX16QxJcWgzV-LC4DxHwGjaywQ/p.jpeg",
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
      title: "Unit 18",
      description:
        "Charming studio apartment overlooking community gardens with updated appliances.",
      img: "https://uc5b82e5a1b49c12abbe356ffdc1.previews.dropboxusercontent.com/p/thumb/ACiZoFFUXRUvQ0cM5Ri_YcbGhLidryS0Mn9c7oLV3KUYOZuYwSb9XGVG7ZYv2dZv4I2qKEwmsSRLVVwKHN7w_xGJLHQqPXt9fbplj0JQIs8F8-mm4nJjgf8SD0ilIV-3w8rQcpmmewFQcSG9YrgUA_hNMN07FPwlDr1UZ3KVEDBcEfQrqIBY9jeiD7MHCH-HdTF9HmxXwVNkxaWcfN1m8-nskPKYtWBBg9b-PXosvbaCGsQZvabG1Yo6cAL2GVNMMW8bwXmMq29i99sCnrdBcqzD-0yY6DuCluXf__NKo1npjII2ZA7kOuuQSM8llEbp4YBO6o306VadGkbe9eBn9ds3pd82DaHrFYk9_F8J4CGkEw/p.jpeg",
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
      title: "Unit 18",
      description:
        "Contemporary 2-bedroom apartment with open floor plan and smart home features.",
      img: "https://ucc08743157b86c01d7b4221d578.previews.dropboxusercontent.com/p/thumb/ACg6BQcx8vKs7G77Y5pSxNwn4lFpoaaDTmXvsDu0PL5FzlyLseu1ujkZuiqoMFznqKFjMErPh-SyNW4xqRRxDvuykv-Z3xoUlI6s4dGo1szSm2XRBS8MK6M6LE3h3VVsFC6qcZYEGUFZsHyr5ZctnKwHC-lXKVaFG-KY2Zxkmg7hMmnFFeT1FTDmNUYb2i2LiWX1eW6hKpXIoeBdirZU3ceDdmrRFS1hF1neTh2KQ87YNPOFs6SMmZdNeCbeBFBvd0IVaP0sPU5ZaNzTB7cY3pgIzEtKY-18frlWTRCuXh98dagriTdW_TO7aoYzQ3BH0CbMdDLllkdLnCPcNdDJh5eAR-PNNU1Dq2nltJZWoa5_Ng/p.jpeg",
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
      title: "Unit 18",
      description:
        "Elegant 2-bedroom apartment with river views and access to community amenities.",
      img: "https://uc39219ba63ad22363b31e1d15ed.previews.dropboxusercontent.com/p/thumb/ACiP-bZfBiMxo9kEnC4VWoHDMxACaGpLgtgipxg47mYwcDdk8vkK7LK31QPNkeVjqDAlCZK0L6ZtYnZL8dEybkdf8wt7Gsm4naJoiVJP3IrGNKlW-NeX3R5LK_i-jgihs14vVQt6xKqLtoFChSOVH9xU6Ki0Nr6sWs8owqd1U3z8zj12aKZUJmGeYv-NK5vDt_HS7_QhUnvFE4VuaBjNKyB-xN0QaJihkulQ0QQVKC7QT73pYxl0vZ29YaABdV1sEJo3mt3xA-prBIBYl6g5gk1K4eg__Vh5KgZUVyefxh65MjJZDXWdCgJ544mp06NY3v5sV19YNLaTFS0EblDRCnuXDdm7Pp3cYCfX5bqq6zlUSA/p.jpeg",
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
      title: "Unit 18",
      description:
        "Historic building converted into modern loft spaces with original architectural details.",
      img: "https://uc42abed1bffc61daad344b6f84e.previews.dropboxusercontent.com/p/thumb/ACjRNtg_Bk8a-j7lcYFnlrn3F1ZJIRSLubxQev4knk1YznNXANKhpBOhSIglqDQ6-vnM_e5X1plRzF2jxlUQ6QLHz2rYz14EsvifQwyC4kj7MgiOOnOIN6Y8sqPDKBwuCFuWgS4CXcaVMV5k6Zm95AhH9vf_aR4kQph9Ce-L_UE9nAWGeE2d077BeOiRp0mkKePC58BUTsfWxt37J9enZ4Qnn70-ug7Fj_632ySh7G1D9dxYfO9jHc2gMgUFlTaYJMIDclu9t5GCzJucRXSryOUrJVrnTsLyyEDcvweuBY8GU41sXHmBOEkGAuIXvidbQywVQxAW-r82JI9aOuCE_NaBKeLjkcqAL9JP9in1d0a5ow/p.jpeg",
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
      title: "Unit 18",
      description:
        "High-rise apartment with floor-to-ceiling windows and stunning city skyline views.",
      img: "https://uc454486c87fc77d0db39c547057.previews.dropboxusercontent.com/p/thumb/ACi7VcJid5SFHiGO3wFN_G0QPfu2OcCwV2XkwMcSmOxUXp68orDTAkaJ4NtJeaqSrKtAR1etQ4KIa0EY4gTLGG7dZnOh2H1zxsDXrdaqrZRUtBSbs-hkEK0cksvDxOb53O7HVv6Gl5yC2026O7kv0uDJ9Up5-2b17uznW3IpT_zQ6ZbbUSavejS9iyxvU-Zii9ls9mtT4TnL-dXIZ85MRxbuAqaED2C7vaTSmSDri1AJGV_cNW6K0OFt74sz3vfrG-1zML1s4wJgAcExjVU6OJlTIUaNz9xTpk1215xWtw5xZd6W30L1kRb7HLzkR1BgBuLEQ-_0uJu1HZWVpqY5AX16QxJcWgzV-LC4DxHwGjaywQ/p.jpeg",
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
      title: "Unit 18",
      description:
        "Sustainable living space with energy-efficient appliances and green building features.",
      img: "https://uca731f7c64c7a531de8b601905d.previews.dropboxusercontent.com/p/thumb/ACjLwlm75695THZ3zzZB_EnvDNJaLF57EIZSo6XJzlrH8YWIw1iCiUcoYDNOuMtyJxe7G5T79rth5dbgt862WL2FFz6zkrdCEctjFflWMs3soi1hP1_Ar6sbL2sdGnMPlrN2Ix9sAodRujw1ysNuCcjXYG_uwoTxtX1RnCNXHI9ToA-2QoUo2v8ETZqYWVQbhGSnjmhepC2T-bYPWsnOvVqwutQv20IqmZgU2kL5FbbUowYDV8dGxrg2LkNGJl3W985_lcnKzZItQIhF5c8-CykVkcTe5RIbKncVbxSzNwKH1GUrWAIZZXCOtE38OtyfJcNEqc5RQFrOpHy5sGpgfGKub-xLNYa3r_pNE2pzJS4oVA/p.jpeg",
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
      title: "Unit 18",
      description:
        "Spacious loft with natural lighting, perfect for creative professionals.",
      img: "https://uc5b82e5a1b49c12abbe356ffdc1.previews.dropboxusercontent.com/p/thumb/ACiZoFFUXRUvQ0cM5Ri_YcbGhLidryS0Mn9c7oLV3KUYOZuYwSb9XGVG7ZYv2dZv4I2qKEwmsSRLVVwKHN7w_xGJLHQqPXt9fbplj0JQIs8F8-mm4nJjgf8SD0ilIV-3w8rQcpmmewFQcSG9YrgUA_hNMN07FPwlDr1UZ3KVEDBcEfQrqIBY9jeiD7MHCH-HdTF9HmxXwVNkxaWcfN1m8-nskPKYtWBBg9b-PXosvbaCGsQZvabG1Yo6cAL2GVNMMW8bwXmMq29i99sCnrdBcqzD-0yY6DuCluXf__NKo1npjII2ZA7kOuuQSM8llEbp4YBO6o306VadGkbe9eBn9ds3pd82DaHrFYk9_F8J4CGkEw/p.jpeg",
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
      title: "Unit 18",
      description:
        "Ground floor apartment with private terrace and direct garden access.",
      img: "https://uc144a68c58295829b5e35d00619.previews.dropboxusercontent.com/p/thumb/ACh-AjTw9apLgYENh6iQMLbpEsq9TXNEYJiFz-BPdjd1Vgck6HWe_KqQn7jlQbO0uwOdMZNKnaLhmF5L-j22_YoNqGiaBC8QR4yjZXPqm9gAzcBUuoyQTI9s5l2ZnX8kcfxyS9FDiaoUS-RFsAqrh29Sp_WlqoEg6W61BEFtAVQg1YF9XJYYfKx9ZKGnWzpQREaJfZ9DVEzcTqQJIsbd8kUDjIeuiHSkT2GPYqPNo6KosZEYnenlYWhbPWQJc9DesIpvL93ky5mFELEtElXd91Vz2ngSPztu0OAeFlnbDywUTBWa2frOCffwIjO1UZP1Qq_CE3tUehfrvquKs5SCptNxXISAK8Ydd3yfRFdWH8fF8g/p.jpeg",
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
