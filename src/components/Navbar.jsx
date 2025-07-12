import { useRef, useState, useEffect } from "react"
import { FaSearch, FaChevronDown, FaBars, FaTimes, FaUser, FaFileAlt, FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [showSearch, setShowSearch] = useState(false)
  const [isDropdownHovered, setIsDropdownHovered] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null)
  const itemRefs = useRef({})

  useEffect(() => {
    if (openDropdown && itemRefs.current[openDropdown]) {
      const rect = itemRefs.current[openDropdown].getBoundingClientRect()
      setUnderlineStyle({
        left: rect.left,
        width: rect.width,
      })
    }
  }, [openDropdown])

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

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
          links: [
            "Accounts Overview",
            "Advantage Account",
            "Advantage Stocks Account",
            "Advantage Plus Account",
            "Demo Accounts",
          ],
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
  ]

  const toggleMobileDropdown = (itemName) => {
    setOpenMobileDropdown(openMobileDropdown === itemName ? null : itemName)
  }

  return (
    <>
      {/* Top Bar - Hidden on mobile */}
      <div
        style={{ fontFamily: '"Source Sans Pro", sans-serif', fontWeight: 400, fontSize: "0.835rem" }}
        className="bg-[#0d141e] text-white text-sm w-full hidden lg:block"
      >
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

      {/* Main Navbar */}
      <div
        style={{ fontFamily: '"Source Sans Pro", sans-serif', fontSize: "16px" }}
        className={`sticky top-0 z-50 transition-all duration-300 ease-in-out shadow ${
          scrolled ? "bg-[rgba(26,29,48,0.76)] text-white backdrop-blur-md" : "bg-white text-black"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 pt-2 flex items-center justify-between lg:space-x-14">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <span style={{ cursor: "pointer" }} className="text-2xl font-bold">
                <img src={logo} alt="FXTM" className="w-[170px] h-[60px]" />
              </span>
            </Link>
          </div>

          {/* Desktop Menu Items */}
          <ul className="hidden lg:flex space-x-10 font-medium text-sm relative">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative cursor-pointer"
                ref={(el) => (itemRefs.current[item.name] = el)}
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => {
                  setTimeout(() => {
                    if (!isDropdownHovered) setOpenDropdown(null)
                  }, 100)
                }}
              >
                <div className="flex flex-col items-center">
                  <button className="cursor-pointer">{item.name}</button>
                </div>
                {/* Desktop Dropdown */}
                {openDropdown === item.name && (
                  <div
                    className={`fixed left-0 w-full bg-[#10162f] text-white py-10 px-20 z-40 text-sm transition-all duration-300 ${
                      scrolled ? "top-[65px]" : "top-[115px]"
                    }`}
                    onMouseEnter={() => setIsDropdownHovered(true)}
                    onMouseLeave={() => {
                      setIsDropdownHovered(false)
                      setOpenDropdown(null)
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
                            <h4 className="text-[#ff4c1b] font-bold mb-4 text-base">{section.heading}</h4>
                          )}
                          <ul className="space-y-3">
                            {section.links.map((link, index) => (
                              <li key={index} className="cursor-pointer px-3 py-1 rounded-md hover:bg-gray-600">
                               {link === "Why FXTM" ? (
  <Link to="/WhyFxtm" onClick={() => setIsMobileMenuOpen(false)}>{link}</Link>
) : link === "Awards" ? (
  <Link to="/awards" onClick={() => setIsMobileMenuOpen(false)}>{link}</Link>
) : link === "Fund Safety" ? (
  <Link to="/fundsafety" onClick={() => setIsMobileMenuOpen(false)}>{link}</Link>
) : (
  <span className="cursor-pointer">{link}</span>
)}

                                
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

          {/* Mobile Menu Button and Login */}
          <div className="flex items-center space-x-4 lg:hidden">
            <span className="cursor-pointer text-sm font-medium">LOGIN</span>
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2">
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />

          {/* Mobile Menu */}
          <div className="absolute inset-0 bg-[#1a1d30] text-white overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-600">
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <FaTimes size={20} />
              </button>
              <div className="flex items-center">
                <img src={logo} alt="FXTM" className="w-[80px] h-[40px]" />
              </div>
              <span className="text-sm font-medium">LOGIN</span>
            </div>

            {/* Navigation Items */}
            <div className="p-4">
              {menuItems.map((item) => (
                <div key={item.name} className="border-b border-gray-600 last:border-b-0">
                  <button
                    onClick={() => toggleMobileDropdown(item.name)}
                    className="flex items-center justify-between w-full py-4 text-left font-medium"
                  >
                    <span>{item.name}</span>
                    <FaChevronDown
                      className={`transition-transform duration-200 ${
                        openMobileDropdown === item.name ? "rotate-180" : ""
                      }`}
                      size={12}
                    />
                  </button>

                  {/* Mobile Dropdown Content */}
                  {openMobileDropdown === item.name && (
                    <div className="pb-4 pl-4">
                      {item.dropdown.map((section, idx) => (
                        <div key={idx} className="mb-4">
                          {section.heading && (
                            <h4 className="text-[#ff4c1b] font-bold mb-2 text-sm">{section.heading}</h4>
                          )}
                          <ul className="space-y-2">
                            {section.links.map((link, index) => (
  <li key={index} className="cursor-pointer px-3 py-1 rounded-md hover:bg-gray-600">
    {link === "Why FXTM" ? <Link to="/WhyFxtm">{link}</Link> :
     link === "Awards" ? <Link to="/awards">{link}</Link> :
     link === "Fund Safety" ? <Link to="/fundsafety">{link}</Link> :
     <span className="cursor-pointer">{link}</span>}
  </li>
))}

                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="p-4 mt-8">
              {/* Action Buttons */}
              <div className="flex items-center justify-center space-x-6 mb-6">
                <button className="bg-[#ff4c1b] text-white px-8 py-3 rounded-full font-semibold text-sm">
                  OPEN ACCOUNT
                </button>
                <FaUser size={20} className="cursor-pointer" />
                <FaFileAlt size={20} className="cursor-pointer" />
                <FaEnvelope size={20} className="cursor-pointer" />
              </div>

              {/* Promotional Section
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-3">Power up your trading skills</h3>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                  Master the markets and skill up to the next level on our free demo account. Explore hundreds of
                  instruments and tools, and practice trading with zero risk. And when you feel more confident, switch
                  over to a live account and start trading for real.
                </p>
                <button className="bg-transparent border border-[#ff4c1b] text-[#ff4c1b] px-6 py-2 rounded-full font-semibold text-sm">
                  Open Demo
                </button>
              </div>

              {/* Risk Warning */}
              {/* <div className="text-xs text-gray-400 text-center">
                <p>
                  <strong>Risk warning:</strong> Trading is risky. Your capital is at risk.
                </p>
              </div>  */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
