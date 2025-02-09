import { useState } from "react";
import Logo from "../assets/logo.jpg";

const Navbar: React.FC = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-900 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-2 h-50 w-50 rouded-50%">
        <img
            src={Logo}
            alt="Hamisha Epic Tour and Travels"
            className="h-12 w-auto"
          />
          <span className="text-2xl font-bold text-[#C56D00]">
            Hamisha Epics Tour
          </span>
        </div>

        {/* Main Navigation */}
        <ul className="hidden md:flex space-x-6 text-white font:bold">
        <li>
            <a href=" /hamisha-epic-tours/destinations" className="hover:text-[#C56D99]">
              Destinations
            </a>
          </li>
          {/* Services Dropdown */}
          <li className="relative">
            <button
              onClick={() =>
                setIsServicesDropdownOpen(!isServicesDropdownOpen)
              }
              className="hover:text-[#C56D00] flex items-center"
            >
              Services
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isServicesDropdownOpen && (
              <ul className="absolute bg-white border rounded shadow-md mt-2 w-48">
                <li>
                  <a
                    href="/holiday-deals"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Holiday Deals
                  </a>
                </li>
                <li>
                  <a
                    href="/bookings"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Bookings
                  </a>
                </li>
                <li>
                  <a
                    href="/installments"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Installments
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Explore Dropdown */}
          <li className="relative">
            <button
              onClick={() =>
                setIsExploreDropdownOpen(!isExploreDropdownOpen)
              }
              className="hover:text-[#C56D00] flex items-center"
            >
              Explore
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isExploreDropdownOpen && (
              <ul className="absolute bg-white border rounded shadow-md mt-2 w-56">
                <li>
                  <a
                    href="/kenya-safaris"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Kenya Safaris
                  </a>
                </li>
                <li>
                  <a
                    href="/tanzania-safaris"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Tanzania Safaris
                  </a>
                </li>
                <li>
                  <a
                    href="/uganda-safaris"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Uganda Safaris
                  </a>
                </li>
                <li>
                  <a
                    href="/international-travels"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    International Travels
                  </a>
                </li>
                <li>
                  <a
                    href="/rwanda-safaris"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Rwanda Safaris
                  </a>
                </li>
                <li>
                  <a
                    href="/tanzania-safari"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Tanzania Safari
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Chats Us */}
          <li>
            <a href="/hamisha-epic-tours/chat" className="hover:text-[#C56D00]">
              Chats Us
            </a>
          </li>

          {/* Signup */}
          <li>
            <a href="/hamisha-epic-tours/signup" className="hover:text-[#C56D00]">
              Signup
            </a>
          </li>

          {/* Login */}
          <li>
            <a href="/hamisha-epic-tours/login" className="hover:text-blue-300">
              Login
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
