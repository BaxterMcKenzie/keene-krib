import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="header">
      <a href="/">
        <img
          className="logo"
          src="/img/assets/keene-krib-logo.svg"
          alt="Keene Krib Logo"
        />
      </a>
      <div className="nav-links">
        <NavLink to="/" activeclassname="active">
          Home
        </NavLink>
        <NavLink to="/services" activeclassname="active">
          Services
        </NavLink>
        <NavLink to="/about-us" activeclassname="active">
          About Us
        </NavLink>
        <NavLink to="/our-work" activeclassname="active">
          Our Work
        </NavLink>
        <NavLink to="/contact" activeclassname="active">
          Contact
        </NavLink>
      </div>

      <div className="header-button-holder">
        <Link to="/contact" className="secondary-button">
          Contact Us
        </Link>

        <Link to="/contact" className="primary-button">
          Get a Quote
        </Link>
      </div>

      <div className="hamburger" onClick={openModal}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <NavLink to="/" onClick={closeModal}>
              Home
            </NavLink>
            <NavLink to="/services" onClick={closeModal}>
              Services
            </NavLink>
            <NavLink to="/about-us" onClick={closeModal}>
              About Us
            </NavLink>
            <NavLink to="/our-work" onClick={closeModal}>
              Our Work
            </NavLink>
            <NavLink to="/contact" onClick={closeModal}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
