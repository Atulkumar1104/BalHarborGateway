import React from "react";
import Header from "./Pages/Header/header";
import Footer from "./Pages/Footer/footer";
import AppRoutes from "./Router/routers";

function Layout() {
  return (
    <div>
      <Header />
      <AppRoutes /> {/* Render the routes here */}
      <Footer />
    </div>
  );
}

export default Layout;
