import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <>
      <div className="header">
        <nav className="navbar">
          <a href="/">Luca's</a>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: "#ffffff" }} />
            ) : (
              <FaBars size={30} style={{ color: "#ffffff" }} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" onClick={closeMenu}>
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a href="#testimonials" onClick={closeMenu}>
                Gallery
              </a>
            </li>
            <li className="nav-item">
              {/* <a href="#demo" onClick={closeMenu}>
                Contact
              </a> */}
              <Link to="/contact" className="nav-item" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
