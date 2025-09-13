import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger icons
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img src={Logo} alt="Logo"  className="w-24 sm:w-28 md:w-32 lg:w-40 h-auto mr-6 sm:mr-8 md:mr-12"/>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-col items-center flex-grow">
            <div className="flex space-x-6 text-sm font-semibold text-gray-900">
              <Link to="/" className="hover:text-green-700">HOME</Link>
              <Link to="/aboutus" className="hover:text-green-700">ABOUT US</Link>
              <Link to="/services" className="hover:text-green-700">SERVICES</Link>
              <Link to="/calculators" className="hover:text-green-700">CALCULATORS</Link>
              <Link to="/testimonials" className="hover:text-green-700">TESTIMONIALS</Link>
              <Link to="/blog" className="hover:text-green-700">BLOG</Link>
            </div>
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex space-x-3">
            <Link to="/contactus">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700">
                CONTACT US
              </button>
            </Link>
            <Link to="/enquire">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600">
                ENQUIRE
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-50 px-6 py-4 space-y-4">
          <div className="flex flex-col space-y-3 font-semibold text-gray-900">
            <Link to="/" className="hover:text-green-700">HOME</Link>
            <Link to="/aboutus" className="hover:text-green-700">ABOUT US</Link>
            <Link to="/services" className="hover:text-green-700">SERVICES</Link>
            <Link to="/calculators" className="hover:text-green-700">CALCULATORS</Link>
            <Link to="/testimonials" className="hover:text-green-700">TESTIMONIALS</Link>
            <Link to="/blog" className="hover:text-green-700">BLOG</Link>
          </div>
          {/* Buttons */}
          <div className="flex flex-col space-y-3 pt-4">
            <Link to="/contactus">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 w-36">
                CONTACT US
              </button>
            </Link>
            <Link to="/enquire">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 w-36">
                ENQUIRE
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
