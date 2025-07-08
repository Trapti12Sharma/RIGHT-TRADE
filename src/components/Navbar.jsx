import React, { useRef,useState, useEffect } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png"; // update path as per your project

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
const itemRefs = useRef({});

useEffect(() => {
  if (openDropdown && itemRefs.current[openDropdown]) {
    const rect = itemRefs.current[openDropdown].getBoundingClientRect();
    setUnderlineStyle({
      left: rect.left,
      width: rect.width,
    });
  }
}, [openDropdown]);


  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const menuItems = [
    {
      name: "ABOUT",
      dropdown: [
        {
          heading: "ABOUT US",
          links: ["Why FXTM", "Awards", "Fund Safety", "Trading Statistics"],
        },
        {
          heading: "COSTS",
          links: ["Deposits and Withdrawals", "Trading Commissions and Fees"],
        },
      ],
    },
    {
      name: "MARKETS",
      dropdown: [
        { heading: "INSTRUMENTS", links: ["Markets Overview", "Contract Specifications"] },
        { heading: "FX", links: ["Forex", "Major Currency pairs"] },
        { heading: "METALS AND COMMODITIES", links: ["Spot Metals", "CFD Commodities"] },
        { heading: "STOCKS AND INDICES", links: ["Stocks Trading", "Stocks CFDs", "CFD on Indices"] },
        { heading: "CRYPTO", links: ["Crypto CFDs"] },
        { heading: "FUTURE CFDS", links: ["Futures"] },
      ],
    },
    {
      name: "TRADING",
      dropdown: [
        {
          heading: "Accounts",
          links: ["Accounts Overview", "Advantage Account", "Advantage Stocks Account", "Advantage Plus Account", "Demo Accounts"],
        },
        {
          heading: "Platforms",
          links: ["Platforms Overview", "MT4", "MT5", "Mobile Trading"],
        },
        {
          heading: "Tools",
          links: ["Tools Overview", "Pro Trading Tools", "Profit Calculator", "Margin Calculator", "Trading Signals"],
        },
        {
          heading: "Terms",
          links: ["Holiday Trading Schedule", "Leverage and Margin", "Dividends"],
        },
      ],
    },
    {
      name: "EDUCATION",
      dropdown: [
        {
          heading: "Trading Education",
          links: ["Expert Trader", "Education Overview", "Glossary"],
        },
        {
          heading: "Market Analysis",
          links: ["Market Analysis", "Market Analyst Team", "Economic Calendar", "Economic Events"],
        },
        {
          heading: "Top Guides",
          links: [
            "Forex Trading for Beginners",
            "CFD Trading for Beginners",
            "How to trade CFDs on indices",
            "How to trade natural gas",
            "ABC Trading Patterns",
            "Copy Trading: The Ultimate Guide",
          ],
        },
      ],
    },
    {
      name: "AFFILIATES",
      dropdown: [
        {
          links: ["Affiliates", "Commission"],
        },
      ],
    },
  ];

  return (
    <>
      {/* Top Bar (remains unaffected) */}
      <div style={{ 
  fontFamily: '"Source Sans Pro", sans-serif', 
fontweight: 400,
  fontSize: '0.835rem'
    }} className="bg-[#0d141e] text-white text-sm w-full">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center space-x-12 pr-24">
          {/* Search and Top Bar Items */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setShowSearch(true)}
            onMouseLeave={() => setShowSearch(false)}
          >
            {showSearch ? (
             <div
  className={`transition-all duration-300 ease-in-out overflow-hidden ${
    showSearch ? "w-48 opacity-100" : "w-0 opacity-0"
  } flex items-center bg-[#1f2937] px-3 py-1 rounded`}
>
  <input
    type="text"
    placeholder="Search"
    className="bg-transparent text-white focus:outline-none w-full"
  />
  <FaSearch className="ml-2 cursor-pointer" />
</div>
            ) : (
              <FaSearch className="cursor-pointer" />
            )}
          </div>
          <span className="cursor-pointer">HELP CENTRE</span>
          <span className="cursor-pointer">CONTACT US</span>
          <span className="cursor-pointer flex items-center gap-1">
            EN <FaChevronDown size={10} />
          </span>
          <button className="bg-[#ff4c1b] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#e03f10] transition text-sm">
            OPEN ACCOUNT
          </button>
          <span className="cursor-pointer">LOGIN</span>
        </div>
      </div>

      {/* Sticky White Navbar that changes on scroll */}
      <div style={{ 
  fontFamily: '"Source Sans Pro", sans-serif', 
  fontSize: '16px'
    }}
        className={`sticky top-0 z-50 transition-all duration-300 ease-in-out shadow ${
          scrolled
            ? "bg-[rgba(26,29,48,0.76)] text-white backdrop-blur-md"
            : "bg-white text-black"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 pt-2 flex items-center space-x-14">
          {/* Logo */}
          <div>
            <span className="text-2xl font-bold"> <img
                        src={logo}
                        alt="FXTM"
                        className="w-50 h-15"
                      /></span>
          </div>

          {/* Menu Items */}
              <ul className="flex space-x-10 font-medium text-sm relative">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative cursor-pointer"
              ref={(el) => (itemRefs.current[item.name] = el)}
              onMouseEnter={() => setOpenDropdown(item.name)}
              onMouseLeave={() => {
                setTimeout(() => {
                  if (!isDropdownHovered) setOpenDropdown(null);
                }, 100);
              }}
            >
              <div className="flex flex-col items-center">
                <button className="cursor-pointer">{item.name}</button>
              </div>

              {/* Dropdown */}
              {openDropdown === item.name && (
                <div
                  className={`fixed left-0 w-full bg-[#10162f] text-white py-10 px-20 z-40 text-sm transition-all duration-300 ${
                    scrolled ? "top-[65px]" : "top-[115px]"
                  }`}
                  onMouseEnter={() => setIsDropdownHovered(true)}
                  onMouseLeave={() => {
                    setIsDropdownHovered(false);
                    setOpenDropdown(null);
                  }}
                >
                  {/* Orange line aligned to nav item */}
                  <span
                    className="absolute top-0 h-1 bg-[#ff4c1b] transition-all duration-300"
                    style={{
                      left: underlineStyle.left,
                      width: underlineStyle.width,
                      position: "absolute",
                    }}
                  ></span>

                  <div className="max-w-7xl mx-auto flex ml-13 gap-8">
                    {item.dropdown.map((section, idx) => (
                      <div key={idx}>
                        {section.heading && (
                          <h4 className="text-[#ff4c1b] font-bold mb-4 text-base">
                            {section.heading}
                          </h4>
                        )}
                        <ul className="space-y-3">
                          {section.links.map((link, index) => (
                            <li
                              key={index}
                              className="cursor-pointer px-3 py-1 rounded-md hover:bg-gray-600"
                            >
                              {link}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
