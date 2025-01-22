import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/home";
import ApartmentDetails from "../Pages/apartmentDetails";
import AboutPage from "../Pages/about";
import ContactPage from "../Pages/contact";
import ApartmentListings from "../Components/demo";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/apartment/:id" element={<ApartmentDetails />} />
      <Route path="/about" element={<AboutPage />} />{" "}
      <Route path="/contact" element={<ContactPage />} />{" "}
      <Route path="/apartments" element={<ApartmentListings />} />{" "}
      {/* Add the AboutPage route */}
    </Routes>
  );
};

export default AppRoutes;
