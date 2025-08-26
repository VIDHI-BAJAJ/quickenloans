import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";

const Footer = () => {
  // Office toggle state
  const [openOffice, setOpenOffice] = useState(null);

  const offices = [
    { name: "Sydney", address: "123 George St, Sydney NSW 2000" },
    { name: "Melbourne", address: "456 Collins St, Melbourne VIC 3000" },
    { name: "Brisbane", address: "789 Queen St, Brisbane QLD 4000" },
    { name: "Adelaide", address: "101 King William St, Adelaide SA 5000" },
    { name: "Canberra", address: "202 Northbourne Ave, Canberra ACT 2600" },
    { name: "Tasmania", address: "303 Elizabeth St, Hobart TAS 7000" },
    { name: "Perth", address: "404 St Georges Terrace, Perth WA 6000" },
  ];

  return (
    <footer className="bg-[#38AC42]/[0.60] text-black">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img
            src={Logo}
            alt="Quicken Loans"
            className="w-40 mb-4"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About us</Link></li>
            <li><Link to="/calculators">Calculators</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contactus">Contact</Link></li>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Popular Calculators */}
        <div>
          <h3 className="font-bold mb-4">Popular Calculators</h3>
          <ul className="space-y-2">
            <li><a href="#">Budget Planner Calculator</a></li>
            <li><a href="#">Extra Repayment Calculator</a></li>
            <li><a href="#">How long to Repay Calculator</a></li>
            <li><a href="#">Income Annualisation Calculator</a></li>
            <li><a href="#">Income Gross up Calculator</a></li>
            <li><a href="#">Mortgage Switching Calculator</a></li>
            <li><a href="#">Split Loan Calculator</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="#">Self-Managed Super Funds</a></li>
            <li><a href="#">Business/Vehicle Loan</a></li>
            <li><a href="#">Home Loan</a></li>
            <li><a href="#">Refinance</a></li>
            <li><a href="#">Property Investment</a></li>
            <li><a href="#">House & Land Packages</a></li>
            <li><a href="#">First Home Buyer</a></li>
          </ul>
        </div>

        {/* Offices with collapsible addresses */}
        <div>
          <h3 className="font-bold mb-4">Our Offices</h3>
          <ul>
            {offices.map((office, index) => (
              <li key={index} className="border-b border-black py-2 flex flex-col">
                <button
                  className="flex justify-between items-center w-full font-medium"
                  onClick={() =>
                    setOpenOffice(openOffice === index ? null : index)
                  }
                >
                  {office.name}
                  {openOffice === index ? (
                    <IoIosArrowUp size={18} />
                  ) : (
                    <IoIosArrowDown size={18} />
                  )}
                </button>
                {openOffice === index && (
                  <p className="text-sm mt-2 text-gray-800">{office.address}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black mt-8 py-4 px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">Copyright © 2025 Quicken Loans.</p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Follow us on</span>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 border rounded-full"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 border rounded-full"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 border rounded-full"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
