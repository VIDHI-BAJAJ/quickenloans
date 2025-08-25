/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import Banner from "../images/banner.jpg"
import Homeimage from "../images/icon/homeimages.png"
import Dollar from "../images/icon/dollar.png"
import Women from "../images/women.png"
import Family from "../images/family.jpg"
import { MessageCircle, Clock, Users, RotateCcw } from "lucide-react";

const Home = () => {
  const handleFirstHomeBuyer = () => {
    console.log('Navigate to First Home Buyer page');
    alert('Navigating to First Home Buyer options...');
  };

  const handleRefinancing = () => {
    console.log('Navigate to Refinancing page');
    alert('Navigating to Refinancing options...');
  };

    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Sample lender data - replace with your actual logo URLs
  const lenders = [
    { name: 'NAB', logo: 'https://via.placeholder.com/120x60/FF6B6B/FFFFFF?text=NAB', id: 1 },
    { name: 'Commonwealth Bank', logo: 'https://via.placeholder.com/120x60/FFD93D/000000?text=CBA', id: 2 },
    { name: 'ANZ', logo: 'https://via.placeholder.com/120x60/4ECDC4/FFFFFF?text=ANZ', id: 3 },
    { name: 'Westpac', logo: 'https://via.placeholder.com/120x60/45B7D1/FFFFFF?text=WESTPAC', id: 4 },
    { name: 'Macquarie', logo: 'https://via.placeholder.com/120x60/96CEB4/FFFFFF?text=MACQUARIE', id: 5 },
    { name: 'ING', logo: 'https://via.placeholder.com/120x60/FECA57/000000?text=ING', id: 6 },
    { name: 'Suncorp', logo: 'https://via.placeholder.com/120x60/FF9FF3/000000?text=SUNCORP', id: 7 },
    { name: 'Bank of Melbourne', logo: 'https://via.placeholder.com/120x60/54A0FF/FFFFFF?text=BOM', id: 8 },
    { name: 'St George', logo: 'https://via.placeholder.com/120x60/5F27CD/FFFFFF?text=ST.GEORGE', id: 9 },
    { name: 'Bendigo Bank', logo: 'https://via.placeholder.com/120x60/00D2D3/FFFFFF?text=BENDIGO', id: 10 },
    { name: 'Adelaide Bank', logo: 'https://via.placeholder.com/120x60/FF6348/FFFFFF?text=ADELAIDE', id: 11 },
    { name: 'Heritage Bank', logo: 'https://via.placeholder.com/120x60/2ED573/FFFFFF?text=HERITAGE', id: 12 }
  ];

  // Logo component
  const LenderLogo = ({ lender }) => (
    <div className="flex items-center justify-center min-w-[180px] h-20 bg-white rounded-xl shadow-sm border border-gray-100 mx-3 p-4 hover:shadow-md transition-shadow duration-300">
      <img 
        src={lender.logo} 
        alt={`${lender.name} logo`}
        className="max-h-12 max-w-full object-contain filter hover:brightness-110 transition-all duration-300"
        onError={(e) => {
          // Fallback if image fails to load
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      <span className="hidden text-gray-600 font-medium text-sm">
        {lender.name}
      </span>
    </div>
  );

  // Create array of logos for seamless infinite scroll
  const logoElements = lenders.map((lender) => (
    <LenderLogo key={lender.id} lender={lender} />
  ));

  const [rent, setRent] = useState(150);

  // Rent for 2 years (weekly rent × 104 weeks)
  const total = rent * 104;

  const services = [
  {
    title: "BUSINESS/VEHICLE LOAN",
    description:
      "House and land packages allows you to pay your builder at various stages during construction so that your loan amount increases as per the construction schedule.",
    image: Family
  },
  {
    title: "FIRST HOME BUYER",
    description:
      "House and land packages allows you to pay your builder at various stages during construction so that your loan amount increases as per the construction schedule.",
    image: Family
  },
  {
    title: "HOUSE & LAND PACKAGES",
    description:
      "House and land packages allows you to pay your builder at various stages during construction so that your loan amount increases as per the construction schedule.",
   image: Family
  },
  {
    title: "FIRST HOME BUYER",
    description:
      "House and land packages allows you to pay your builder at various stages during construction so that your loan amount increases as per the construction schedule.",
    image: Family
  },
  {
    title: "REFINANCE",
    description:
      "House and land packages allows you to pay your builder at various stages during construction so that your loan amount increases as per the construction schedule.",
    image: Family
  },
  {
    title: "SELF-MANAGED SUPER FUNDS",
    description:
      "House and land packages allows you to pay your builder at various stages during construction so that your loan amount increases as per the construction schedule.",
   image: Family
  },
];
const features = [
  {
    icon: <MessageCircle className="w-6 h-6 text-white" />,
    bgColor: "bg-orange-500",
    title: "Quick & Easy",
    description:
      "Money matters are sometimes quite complicated. And we understand that you don’t want to be busy with it every day. That is why we like to make your financial matters simple and clear.",
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    bgColor: "bg-teal-600",
    title: "Save Time & Paper Work",
    description:
      "We will provide guidance throughout your loan approval process and back you with expert advice at every step. Assisting you to make your first home buying experience a hundred folds easier.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    bgColor: "bg-green-600",
    title: "Personalised Services",
    description:
      "Our Services are tailored to our client's specific needs, abilities, and expectations. We provide professional advice tailored to your specific needs.",
  },
  {
    icon: <RotateCcw className="w-6 h-6 text-white" />,
    bgColor: "bg-red-600",
    title: "Ongoing Support",
    description:
      "You have normal and human contact with us. Whether you prefer to look at the site, call or just walk in: you will always receive an answer in clear language.",
  },
];


  return (
    <>
    <section>
<div className="relative  overflow-hidden">
  {/* Background Family Image */}
  <div>
    <img
      src={Banner}
      alt="Logo"
      className="absolute inset-0 w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] object-cover"
    />
    {/* Content overlay */}
    <div className="relative z-10 flex items-center justify-center sm:justify-start px-4 sm:px-8 pt-40 sm:pt-16 md:pt-24">
      <div className="w-full max-w-2xl flex justify-center sm:block">
        {/* White Content Box */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-15 md:p-2 w-full max-w-md sm:max-w-md sm:ml-8 md:ml-16  mt-10 sm:-mt-12 md:mt-10 md:p-5">
          {/* Header Section */}
          <div className="mb-6 sm:mb-8 text-center sm:text-left">
            <h2 className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-600 mb-2 sm:mb-4 tracking-wide uppercase md:ml-3 md:mt-5">
              YOUR DREAMS ... OUR MISSION !
            </h2>
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tight mb-4 sm:mb-8">
              Discover your options
            </h1>
          </div>

          {/* Options */}
          <div className="space-y-4 sm:space-y-6">
            {/* First Home Buyer Option */}
            <div
              onClick={handleFirstHomeBuyer}
              className="group cursor-pointer py-3 sm:py-4 border-b border-gray-200 transition-colors duration-300 rounded-lg px-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 pt-1">
                    <img
                      src={Homeimage}
                      alt="Home"
                      className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-green-600"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-1">
                      Looking to buy a new house ?
                    </p>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-black group-hover:text-green-600 transition-colors duration-300">
                      First Home Buyer
                    </h3>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-2 sm:ml-4">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Refinancing Option */}
            <div
              onClick={handleRefinancing}
              className="group cursor-pointer py-3 sm:py-4  transition-colors duration-300 rounded-lg px-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 pt-1">
                    <img
                      src={Dollar}
                      alt="Dollar"
                      className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-green-600"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-1">
                      Refinancing your existing Loan?
                    </p>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-black group-hover:text-green-600 transition-colors duration-300">
                      Refinancing
                    </h3>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-2 sm:ml-4">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
<section>
    <div className="w-full py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div 
          className={`text-center mb-12 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-lg font-medium text-green-600 mb-3 tracking-wide">
            Some of our trusted lenders Include
          </h3>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Let us find a suitable provider from our{' '}
            <span className="text-green-600">28+ Lender Panel</span>
          </h2>
        </div>

        {/* Animated Logo Carousel */}
        <div 
          className={`relative transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Gradient overlays for seamless edge effect */}
          <div className="absolute left-0 top-0 w-16 md:w-24 h-full bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 md:w-24 h-full bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling container */}
          <div className="flex animate-scroll-left group">
            {logoElements}
            {/* Duplicate for seamless loop */}
            {logoElements}
          </div>
        </div>
        </div>
         <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        
        .group:hover .animate-scroll-left {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .animate-scroll-left {
            animation-duration: 25s;
          }
        }
        
        @media (max-width: 480px) {
          .animate-scroll-left {
            animation-duration: 20s;
          }
        }
      `}</style>
    </div>
    </section>
       <section className="py-12 md:px-6 md:px-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-green-600">
          Our Services
        </h2>
        <p className="text-gray-600 mt-2">
          Let us find a suitable provider from our 28+ Lender Panel
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
   <section className="py-12 px-6 md:px-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why choose ?</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Quicken Loans
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our services are fully personalized and tailored to your specific
            needs, abilities, and expectations, ensuring you receive expert
            advice every step of the way. We understand that money matters can
            often be complicated, which is why we strive to make your financial
            journey simple, clear, and stress-free.
          </p>
        </div>

        {/* Right Features Grid with lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border-l md:border-gray-300">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 p-6 border-t sm:border-t-0 sm:border-b md:border-gray-300
              ${index % 2 === 0 ? "sm:border-r" : ""}
              `}
            >
              <div
                className={`${feature.bgColor} w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0`}
              >
                {feature.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
<section>
   <div className="w-full relative">
      {/* Background Image */}
      <div className="w-full h-[500px] relative">
        <img
          src={Family}
          alt="Family in kitchen"
          className="w-full h-full object-cover"
        />

        {/* White + Green Card */}
        <div className="absolute top-32 md:left-10 left-6 max-w-lg w-[90%] md:w-[500px] shadow-xl">
          {/* White Section */}
          <div className="bg-white p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
              Ever wondered if your rent money could be put to better use?
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              How much rent do you pay per week? Rent Calculation
            </p>

            {/* Slider */}
            <input
              type="range"
              min="50"
              max="2000"
              step="10"
              value={rent}
              onChange={(e) => setRent(Number(e.target.value))}
              className="w-full accent-orange-500"
            />
            <div className="text-2xl font-semibold text-center mt-2">
              ${rent}
            </div>
          </div>

          {/* Green Section (attached) */}
          <div className="bg-green-600 text-white text-center p-8">
            <p className="text-lg mb-2">
              Over a two year period, you would pay your landlord
            </p>
            <h3 className="text-5xl font-bold mb-2">
              ${total.toLocaleString()}
            </h3>
            <p className="text-sm">
              Get out of the rental trap and own your own home today!
            </p>
          </div>
        </div>
      </div>
    </div>
          {/* Bottom Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 pt-40 px-6 md:px-12 items-center mt-12 sm:">
        {/* Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4 md:-ml-24">
            Mortgage Brokers & Finance Specialist in Los Angeles
          </h2>
          <p className="text-gray-700 mb-6 md:-ml-24">
            If you are looking for mortgage brokers in Melbourne, Sydney,
            Brisbane, Adelaide & Canberra we can meet you anytime at your
            convenience and start a professional relationship that will make you
            one step closer to your financial goals. At AFHL, we are proud to be
            the mortgage broker and financial advisor of your choice. Understanding
            the needs and difficulties in securing your dream home buying plan in
            Australia, we are always ready to guide you with expert advice.
          </p>
          <p className="text-gray-700 md:-ml-24">
            We provide business support services such as accounting, bookkeeping,
            business advisory and taxation. Our mortgage services include home loan,
            first home buyers, re-financing, property investment, house and land
            package and vehicle loan. We also assist in a self-managed super fund
            invested in homes, commercial properties investment.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center md:ml-24">
          <img
            src= {Women}
            alt="Professional woman"
            className="w-72 md:w-96 object-contain"
          />
        </div>
      </div>
    </section>
      </>
    // Scroll Animation End 
  );
};

export default Home;

