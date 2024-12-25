import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-10">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Votereum</h2>
            <p>
              Votereum is revolutionizing the way we vote by leveraging
              blockchain technology.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-gray-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-gray-300">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>Email: support@votereum.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Blockchain St, Cryptoville, USA</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
