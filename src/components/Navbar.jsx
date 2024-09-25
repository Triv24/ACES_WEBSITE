import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  const [scrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false); // State to handle mobile menu toggle

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close
  };

  return (
    <header id="header" className={scrolled ? "header-scrolled" : ""}>
      <div className="containers">
        <div id="logo" className="pull-left">
          <img src="img/ACES Logo White Transparent.png" id="img" alt="" />
        </div>

        <nav id="nav-menu-container">
          <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={() => setIsOpen(false)}>
                Team
              </Link>
            </li>
            <li>
              <Link to="/events" onClick={() => setIsOpen(false)}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/newsletter" onClick={() => setIsOpen(false)}>
                NewsLetter
              </Link>
            </li>
            <li>
              <Link to="/magazine" onClick={() => setIsOpen(false)}>
                Magazine
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            <li className="buy-tickets">
              <a
                href="https://forms.gle/vTMqz9FQrSYNAaVG7"
                target="_blank"
                rel="noreferrer"
              >
                Register Now
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger icon */}
        <div className="mobile-menu-icon" onClick={handleToggle}>
          <span className={isOpen ? "hamburger open" : "hamburger"}></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
