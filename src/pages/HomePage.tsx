// src/pages/HomePage.tsx
import { Link } from "react-router-dom"; // For navigation between pages
import { useState } from "react";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-10 bg-gradient-to-r from-[#105A89] to-[#C56D00] text-white">
        <h1 className="text-4xl font-bold">Welcome to Hamisha Epic Tours</h1>
        <p className="text-xl mt-4">Experience the best travel deals and memorable adventures!</p>
      </section>

      {/* Trip Search */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center">Find Your Next Trip</h2>
          <div className="mt-4 text-center">
            <input
              type="text"
              className="p-2 border border-gray-300 rounded w-3/4 md:w-1/2"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="mt-4 bg-[#C56D00] text-white p-2 rounded"
              onClick={() => alert(`Searching for: ${searchTerm}`)}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-8 bg-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-semibold">Trip Planning</h3>
            <p className="mt-2">Expert advice to make your trip perfect.</p>
            <Link to="/booking" className="text-[#105A89] mt-4 inline-block">Book Now</Link>
          </div>
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-semibold">Group Travel</h3>
            <p className="mt-2">Organizing seamless group tours for you.</p>
            <Link to="/booking" className="text-[#105A89] mt-4 inline-block">Book Now</Link>
          </div>
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-semibold">Travel Insurance</h3>
            <p className="mt-2">Protect your trip with comprehensive coverage.</p>
            <Link to="/booking" className="text-[#105A89] mt-4 inline-block">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
