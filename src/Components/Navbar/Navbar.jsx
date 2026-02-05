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
    <nav className="bg-white text-[#121212] fixed left-0 right-0 z-999 shadow-sm">
      <div className="container mx-auto px-6">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex justify-between items-center py-1">
          <div className="logo cursor-pointer flex items-center gap-2 pb-2">
            <img
              src={logo}
              alt="Logo"
              width={88}
              height={88}
              className="w-17 h-17"
            />
          </div>

          <ul className="flex gap-x-10 items-center font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="bg-linear-to-t from-[#2C5EE9] to-[#7D23CE] text-white px-4 py-2 transition cursor-pointer"
            >
              Sign In
            </a>
            <a
                href="#"
              className="border border-[#2C5EE9] text-[#2C5EE9] px-4 py-2 transition duration-300 hover:bg-linear-to-t hover:from-[#2C5EE9] hover:to-[#7D23CE] hover:text-white"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex lg:hidden justify-between items-center py-4">
          <div className="logo cursor-pointer flex items-center gap-2 pb-3">
            <img
              src={logo}
              alt="Logo"
              width={88}
              height={88}
              className="w-14 h-14"
            />
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
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Our Services
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={closeMenu}
                className="bg-linear-to-t from-[#2C5EE9] to-[#7D23CE] text-white px-4 py-2 transition cursor-pointer"
              >
                Sign In
              </a>
            </li>
            <li>
              <a
                href="#"
                className="border border-[#2C5EE9] text-[#2C5EE9] px-4 py-2 transition duration-300 hover:bg-linear-to-t hover:from-[#2C5EE9] hover:to-[#7D23CE] hover:text-white"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 z-998"></div>
      <div
        className="absolute bottom-0 left-0 h-[5px] bg-linear-to-r from-[#2C5EE9] to-[#7D23CE] z-999"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </nav>
  );
}
