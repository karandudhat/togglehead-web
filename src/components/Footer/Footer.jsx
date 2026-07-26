import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <img
        src={`${process.env.PUBLIC_URL}/footer-image.png`}
        alt=""
        className="footer-bg-image"
        aria-hidden="true"
      />
      <div className="footer-container">
        <div className="footer-col">
          <h4 className="footer-title">Contact us</h4>
          <ul className="footer-list">
            <li>Address: amet, consetetur sadipscing elitr, sed diam</li>
            <li>Email id: eirmod tempor invidunt ut labore et dolore</li>
            <li>Phone no: 123456789</li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-title">Follow us</h4>
          <div className="social-icons">
            <a href="#fb"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#in"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#ig"><i className="fa-brands fa-instagram"></i></a>
            <a href="#tw"><i className="fa-brands fa-twitter"></i></a>
            <a href="#yt"><i className="fa-brands fa-youtube"></i></a>
            <a href="#qu"><i className="fa-brands fa-quora"></i></a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-title">Head Office</h4>
          <ul className="footer-list with-icons">
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</span>
            </li>
            <li>
              <i className="fa-solid fa-clock"></i>
              <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</span>
            </li>
            <li>
              <i className="fa-solid fa-clock"></i>
              <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</span>
            </li>
            <li>
              <i className="fa-solid fa-train"></i>
              <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2021 All Rights Reserved. Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
