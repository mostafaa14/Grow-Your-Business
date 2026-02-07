import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { IoClose } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollTop / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-white text-[#121212] fixed left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex justify-between items-center py-4">
          <div className="logo cursor-pointer flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-20 h-20" />
          </div>

          <ul className="flex gap-x-10 items-center font-medium">
            <li>
              <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
            </li>
            <li>
              <Link to="/our-services" className="hover:text-indigo-600 transition">Our Services</Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-indigo-600 transition">Contact Us</Link>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <Link
              to="/signin"
              className="bg-linear-to-t from-[#2C5EE9] to-[#7D23CE] text-white px-4 py-2 rounded transition"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="border border-[#2C5EE9] text-[#2C5EE9] px-4 py-2 rounded transition hover:bg-linear-to-t hover:from-[#2C5EE9] hover:to-[#7D23CE] hover:text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex lg:hidden justify-between items-center py-4">
          <div className="logo cursor-pointer flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-16 h-16" />
          </div>
          <button onClick={toggleMenu} className="text-3xl cursor-pointer">
            {isMenuOpen ? <IoClose /> : <RiMenu2Line />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden flex-col items-center gap-5 transition-all duration-300 ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 gap-3 pb-7 font-medium mb-5">
            <li>
              <Link to="/" onClick={closeMenu} className="hover:text-indigo-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu} className="hover:text-indigo-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/our-services" onClick={closeMenu} className="hover:text-indigo-600 transition">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={closeMenu} className="hover:text-indigo-600 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/signin"
                onClick={closeMenu}
                className="bg-linear-to-t from-[#2C5EE9] to-[#7D23CE] text-white px-4 py-2 rounded transition"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                onClick={closeMenu}
                className="border border-[#2C5EE9] text-[#2C5EE9] px-4 py-2 rounded transition hover:bg-linear-to-t hover:from-[#2C5EE9] hover:to-[#7D23CE] hover:text-white"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200"></div>
      <div
        className="absolute bottom-0 left-0 h-[5px] bg-linear-to-r from-[#2C5EE9] to-[#7D23CE]"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </nav>
  );
}
