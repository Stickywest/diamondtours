import Navbar from "./Navbar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm py-3">
        <div className="container mx-auto flex justify-between items-center px-4 flex-wrap">
          {/* Contact Information */}
          <div className="flex items-center space-x-4">
            <p>
              <i className="fas fa-envelope mr-2"></i>
              <a
                href="mailto:info@traveldreams.com"
                className="hover:underline"
              >
                info@traveldreams.com
              </a>
            </p>
            <p>
              <i className="fas fa-phone mr-2"></i>
              <a href="tel:+123456789" className="hover:underline">
                +123 456 789
              </a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-3">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-400 transition duration-300"
            >
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-500 transition duration-300"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-300 transition duration-300"
            >
              <i className="fab fa-twitter text-lg"></i>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-red-500 transition duration-300"
            >
              <i className="fab fa-youtube text-lg"></i>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-700 transition duration-300"
            >
              <i className="fab fa-linkedin-in text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-white">About TravelDreams</h3>
            <p className="mt-3 text-sm">
              Explore the world with us! We specialize in making your travel
              dreams come true, from exotic locations to local getaways.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Popular Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Travel Packages
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Travel Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white">Contact Us</h3>
            <p className="mt-3 text-sm">
              <i className="fas fa-map-marker-alt mr-2"></i>
              123 Adventure Lane, Wanderlust City, Earth
            </p>
            <p className="mt-2 text-sm">
              <i className="fas fa-envelope mr-2"></i>
              <a
                href="mailto:contact@traveldreams.com"
                className="hover:underline text-gray-400"
              >
                contact@traveldreams.com
              </a>
            </p>
            <p className="mt-2 text-sm">
              <i className="fas fa-phone mr-2"></i>
              <a href="tel:+987654321" className="hover:underline text-gray-400">
                +987 654 321
              </a>
            </p>
          </div>
        </div>

        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p>© {new Date().getFullYear()} TravelDreams. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
