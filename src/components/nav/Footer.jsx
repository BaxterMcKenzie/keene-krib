import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/img/assets/keene-krib-logo.svg" alt="Keene Krib Logo" />
        </div>

        <div className="footer-contact">
          <p>
            <strong>Keene Krib</strong>
            <br /><br />
            Retaining Wall & Piling Experts in Wellington, NZ
            <br />
            Email: <a href="mailto:roan@keenekrib.co.nz">roan@keenekrib.co.nz</a>
            <br />
            Cell: <a href="tel:+64276884445">027 688 4445</a>
            <br />
            Office: <a href="tel:+6443835050">04 383 5050</a>
          </p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-social">
          <a
            href="https://www.facebook.com/KeeneKrib"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Keene Krib. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
