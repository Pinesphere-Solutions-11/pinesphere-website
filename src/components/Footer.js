import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-about">
          <div className="footer-logo">
            <span>Pinesphere</span>Solutions
          </div>
          <p>Creating beautiful digital experiences that drive results for your business.</p>
          <div className="social-links">
            <a href="#" className="social-link"><FaFacebookF /></a>
            <a href="#" className="social-link"><FaTwitter /></a>
            <a href="#" className="social-link"><FaInstagram /></a>
            <a href="#" className="social-link"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Other footer columns... */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services and Support sections can be added similarly */}

      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Pinesphere Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
