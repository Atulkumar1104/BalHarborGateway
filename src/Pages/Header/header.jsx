import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import NotificationBanner from "../../Components/notificationBanner";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerStyle, setHeaderStyle] = useState("translate-y-0");
  const navigate = useNavigate();
  const location = useLocation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  useEffect(() => {
    if (!location.state?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      if (!heroSection) return;

      const heroHeight = heroSection.offsetHeight;
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > heroHeight) {
        setHeaderStyle("-translate-y-full");
      } else {
        setHeaderStyle("translate-y-0");
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigationLinks = [
    { path: "/", text: "Home" },
    { path: "/contact", text: "Contact" },
    { path: "/apartments", text: "Apartments" },
    { path: "/about", text: "About" },
  ];

  return (
    <>
      <div className="fixed w-full z-50">
        {isBannerVisible && <NotificationBanner />}
        <header
          className={`bg-white shadow-md fixed w-full transition-transform duration-300 ${headerStyle}`}
        >
          <div className="max-w-full ml-16 mr-10 mx-auto">
            <div className="flex justify-between items-center h-[62px]">
              <div className="flex-shrink-0 flex items-center">
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="text-2xl font-bold text-[#ff385c] transition-colors duration-200"
                >
                  Bal Harbor Getaway
                </Link>
              </div>

              <nav className="hidden md:flex space-x-8">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={handleLinkClick}
                    className={`relative text-gray-600 hover:text-[#ff385c] px-3 py-2 font-medium transition-colors duration-200
                      ${location.pathname === link.path ? "text-[#ff385c]" : ""}
                      group`}
                  >
                    {link.text}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#ff385c] transform origin-left transition-transform duration-200
                      ${
                        location.pathname === link.path
                          ? "scale-x-100"
                          : "scale-x-0"
                      } 
                      group-hover:scale-x-100`}
                    />
                  </Link>
                ))}
              </nav>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-600 hover:text-orange-600 focus:outline-none transition-colors duration-200"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          <div
            className={`md:hidden bg-white transition-all duration-300 ${
              isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`relative block px-3 py-2 font-medium w-full text-left transition-colors duration-200
                    ${
                      location.pathname === link.path
                        ? "text-[#ff385c]"
                        : "text-gray-600"
                    }
                    hover:text-[#ff385c]`}
                >
                  {link.text}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#ff385c] transform origin-left transition-transform duration-200
                    ${
                      location.pathname === link.path
                        ? "scale-x-100"
                        : "scale-x-0"
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </header>
      </div>
      <div className={isBannerVisible ? "h-[88px]" : "h-96"} />
    </>
  );
};

export default Header;
