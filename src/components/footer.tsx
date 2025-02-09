import React from "react";
import Logo from "../assets/logo.jpg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-1000 text-white py-8 mx-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
        {/* First Column: Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about-us" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/bookings" className="hover:text-gray-400">
                Bookings
              </a>
            </li>
            <li>
              <a href="/explore" className="hover:text-gray-400">
                Explore
              </a>
            </li>
            <li>
              <a href="/destinations" className="hover:text-gray-400">
                Destinations
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Second Column: Social Media Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                X 
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Third Column: Logo */}
        <div className="flex flex-col items-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-24 h-24 rounded-full mb-4"
            width={96}
            height={96}
          />
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
