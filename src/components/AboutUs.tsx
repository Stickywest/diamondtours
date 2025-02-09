import React from "react";
import ImageGallery from "./ImageGallery.tsx";
import banner from "../assets/about-us banner.jpg";
import mission from "../assets/mision.jpg";
import team from "../assets/team.jpg";

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-blue-100 text-gray-800">
      {/* Hero Section */}
      <div
        className="w-full h-96 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
            About Us
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-7xl px-6 md:px-12 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Your Gateway to Unforgettable Adventures
        </h2>
        <p className="text-lg text-gray-600">
          At <strong>GlobeTrotter Travel</strong>, we are passionate about
          crafting exceptional travel experiences that leave a lasting impact.
          Whether you're exploring pristine beaches, bustling cities, or serene
          mountains, we ensure your journey is as memorable as your destination.
        </p>
      </div>

      {/* Our Mission */}
      <div className="flex flex-col md:flex-row max-w-7xl items-center gap-8 px-6 md:px-12 py-12">
        <img
          src={mission}
          alt="Our Mission"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600">
            Our mission is to connect travelers with the world's most beautiful
            destinations while ensuring comfort, authenticity, and sustainability. 
            With a focus on personalized itineraries and local experiences, we 
            strive to make every trip extraordinary.
          </p>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="bg-gray-100 w-full py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6">
            Meet Our Team
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={team}
              alt="Our Team"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
            />
            <p className="text-lg text-gray-600">
              Our team is made up of experienced travel experts, passionate
              about exploring the world and sharing their knowledge with you.
              From crafting tailored itineraries to ensuring smooth experiences
              at every step, we’re here to guide you.
            </p>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="py-12 w-full bg-blue-100">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Explore Our Destinations
        </h3>
        <ImageGallery />
      </div>
    </div>
  );
};

export default AboutUs;
