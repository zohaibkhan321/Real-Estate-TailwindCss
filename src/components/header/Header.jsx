import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

import arrowIcon from "../../assets/arrow.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home"); // Default active link

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu on mobile after clicking
  };

  const linkClasses = (link) =>
    link === activeLink
      ? "text-[#FF5B28] font-bold"
      : "text-[#0F0E0E] font-semibold";

  return (
    <div className="bg-white sticky top-0 left-0 right-0 z-[999999]">
      <div className="max-w-screen-2xl mx-auto py-4 px-5 flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-28"
          />
        </a>

        {/* Hamburger Menu for Small Devices */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <MdClose className="text-2xl text-[#FF5B28]" />
            ) : (
              <MdMenu className="text-2xl text-[#FF5B28]" />
            )}
          </button>
        </div>

        {/* Navigation Menu for Large Devices */}
        <div className="hidden lg:block">
          <nav>
            <ul className="flex items-center gap-8">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#properties", label: "Properties" },
                { href: "#blog", label: "Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={linkClasses(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact Us Button */}
        <div className="hidden lg:block">
          <button className="text-[#0F0E0E] font-semibold border-2 border-[#FF5B28] px-4 py-2 rounded-lg">
            <a href="#contact" className="flex items-center gap-2">
              Contact Us
              <span>
                <img
                  src={arrowIcon}
                  alt="Arrow Icon"
                  className="w-4"
                />
              </span>
            </a>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white shadow-md z-50 lg:hidden">
          <div className="flex justify-between items-center p-4 border-b">
            {/* Logo */}
            <div>
              <img
                src="/logo.png"
                alt="Logo"
                className="w-20"
              />
            </div>

            {/* Close Button */}
            <button onClick={toggleMenu}>
              <MdClose className="text-2xl text-[#FF5B28]" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-4">
            <ul className="flex flex-col gap-6 text-center">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#properties", label: "Properties" },
                { href: "#blog", label: "Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={linkClasses(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button in Drawer */}
          <div className="mt-6 text-center">
            <button className="flex items-center justify-center gap-2 border-2 border-[#FF5B28] px-4 py-2 rounded-lg mx-auto">
              Contact Us
              <span>
                <img
                  src={arrowIcon}
                  alt="Arrow Icon"
                  className="w-4"
                />
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
