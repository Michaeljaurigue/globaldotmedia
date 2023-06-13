import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.jpeg";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => {
    setClick(false);
    window.scrollTo(0, 0); // Scroll to top of the page
  };
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="Logo" className="navbar-logo-img" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={handleDropdownToggle}
              onMouseLeave={handleDropdownToggle}
            >
              <Link to="/our-services/" className="nav-links">
                Services
              </Link>
              {isDropdownOpen && (
                <ul className="nav-dropdown">
                  <li className="nav-dropdown-item">
                    <Link
                      to="/book-publishing-and-marketing-service/"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Book Publishing and Marketing Service
                    </Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link
                      to="/digital-marketing-training/"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Digital Marketing Training
                    </Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link
                      to="/social-media-marketing/"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Social Media Marketing
                    </Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link
                      to="/email-marketing/"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Email Marketing
                    </Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link
                      to="/our-services/creative-media-advertising/"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Creative Media Advertising
                    </Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link
                      to="/our-services/digital-marketing-packages/"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Digital Marketing Packages
                    </Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link
                      to="/our-services/linkedin-lead-generation/"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      LinkedIn Lead Generation
                    </Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link
                      to="/our-services/content-marketing/"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Content Marketing
                    </Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link
                      to="/our-services/local-marketing/"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Local Marketing
                    </Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link
                      to="/our-services/market-research/"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Market Research
                    </Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link
                      to="/our-services/mobile-marketing/"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Mobile Marketing
                    </Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link
                      to="/our-services/offline-marketing-consultancy/"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Offline Marketing Consultancy
                    </Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link
                      to="/our-services/online-training/"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Online Training
                    </Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link
                      to="/our-services/pay-per-click-marketing/"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Pay-Per-Click Marketing
                    </Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link
                      to="/our-services/search-engine-optimization/"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Search Engine Optimization
                    </Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link
                      to="/our-services/video-marketing/"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Video Marketing
                    </Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link
                      to="/our-services/website-development/"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Website Development
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link
                to="/maad-blog/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/testimonials/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/events/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={handleDropdownToggle}
              onMouseLeave={handleDropdownToggle}
            >
              <Link to="/maad-blog/businesspodcasts/" className="nav-links">
                Podcast
              </Link>
              {isDropdownOpen && (
                <ul className="nav-dropdown">
                  <li className="nav-dropdown-item">
                    <Link
                      to="/projects/sublink1"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Sublink 1
                    </Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link
                      to="/projects/sublink2"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Sublink 2
                    </Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link
                      to="/projects/sublink3"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Sublink 3
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link
                to="/contact/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;