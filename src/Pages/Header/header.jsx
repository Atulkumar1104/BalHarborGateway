import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerStyle, setHeaderStyle] = useState("translate-y-0");
  const navigate = useNavigate();
  const location = useLocation();
  const [lastScrollY, setLastScrollY] = useState(0);

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
    {  text: "About" },
    { path: "/contact", text: "Contact" },
    { path: "/apartments", text: "Apartments" },
  ];

  return (
    <header
      className={`bg-white shadow-md fixed w-full transition-transform duration-300 z-50 ${headerStyle}`}
    >
      <div className="max-w-full ml-16 mr-10 mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Text Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="text-2xl font-bold text-[#ff385c] transition-colors duration-200"
            >
              Bal Harbor Getaway
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className="text-gray-600 hover:text-[#ff385c] px-3 py-2 font-medium transition-colors duration-200"
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
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

      {/* Mobile Navigation */}
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
              className="block text-gray-600 hover:text-orange-600 px-3 py-2 font-medium w-full text-left transition-colors duration-200"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
