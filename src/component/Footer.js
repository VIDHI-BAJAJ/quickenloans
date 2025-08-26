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
            <li><Link to="#">Budget Planner Calculator</Link></li>
            <li><Link to="#">Extra Repayment Calculator</Link></li>
            <li><Link to="#">How long to Repay Calculator</Link></li>
            <li><Link to="#">Income Annualisation Calculator</Link></li>
            <li><Link to="#">Income Gross up Calculator</Link></li>
            <li><Link to="#">Mortgage Switching Calculator</Link></li>
            <li><Link to="#">Split Loan Calculator</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li><Link to="#">Self-Managed Super Funds</Link></li>
            <li><Link to="#">Business/Vehicle Loan</Link></li>
            <li><Link to="#">Home Loan</Link></li>
            <li><Link to="#">Refinance</Link></li>
            <li><Link to="#">Property Investment</Link></li>
            <li><Link to="#">House & Land Packages</Link></li>
            <li><Link to="#">First Home Buyer</Link></li>
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
          <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 border rounded-full"><FaFacebookF /></Link>
          <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 border rounded-full"><FaInstagram /></Link>
          <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 border rounded-full"><FaLinkedinIn /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
