import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaDribbble } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white mt-16">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        {/* Newsletter */}
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
            Stay updated with our latest tips and digital insights!
          </strong>

          <form className="mt-6 flex justify-center">
            <div className="relative w-full max-w-lg">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-full border border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Main Footer */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          {/* Left Section */}
          <div className="mx-auto max-w-sm lg:max-w-none text-center lg:text-left">
            <p className="mt-4 text-gray-500 lg:text-lg">
              We help businesses grow online through creative design, powerful
              development, and strategic digital marketing. Let’s build something
              amazing together.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex justify-center gap-4 lg:justify-start text-xl text-gray-700">
              <Link to="/facebook" className="transition hover:text-gray-900">
                <FaFacebookF />
              </Link>
              <Link to="/instagram" className="transition hover:text-gray-900">
                <FaInstagram />
              </Link>
              <Link to="/twitter" className="transition hover:text-gray-900">
                <FaTwitter />
              </Link>
              <Link to="/dribbble" className="transition hover:text-gray-900">
                <FaDribbble />
              </Link>
            </div>
          </div>

          {/* Right Section: Links */}
          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-gray-900">Services</strong>
              <ul className="mt-6 space-y-1">
                <li>
                  <Link to="/digital-marketing" className="text-gray-700 transition hover:text-gray-700/75">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/branding-design" className="text-gray-700 transition hover:text-gray-700/75">
                    Branding & Design
                  </Link>
                </li>
                <li>
                  <Link to="/mobile-app" className="text-gray-700 transition hover:text-gray-700/75">
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link to="/web-development" className="text-gray-700 transition hover:text-gray-700/75">
                    Web Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900">Company</strong>
              <ul className="mt-6 space-y-1">
                <li>
                  <Link to="/about" className="text-gray-700 transition hover:text-gray-700/75">About Us</Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-700 transition hover:text-gray-700/75">Careers</Link>
                </li>
                <li>
                  <Link to="/our-story" className="text-gray-700 transition hover:text-gray-700/75">Our Story</Link>
                </li>
                <li>
                  <Link to="/team" className="text-gray-700 transition hover:text-gray-700/75">Meet the Team</Link>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900">Support</strong>
              <ul className="mt-6 space-y-1">
                <li>
                  <Link to="/faqs" className="text-gray-700 transition hover:text-gray-700/75">FAQs</Link>
                </li>
                <li>
                  <Link to="/contact-us" className="text-gray-700 transition hover:text-gray-700/75">Contact Us</Link>
                </li>
                <li>
                  <Link to="/live-chat" className="text-gray-700 transition hover:text-gray-700/75">Live Chat Support</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
