import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
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
            <a href="#fb"><img src="/footer-icons/Icon awesome-facebook-f.png" alt="Facebook" className="social-icon-img" /></a>
            <a href="#in"><img src="/footer-icons/Icon awesome-linkedin.png" alt="LinkedIn" className="social-icon-img" /></a>
            <a href="#ig"><img src="/footer-icons/Icon awesome-instagram.png" alt="Instagram" className="social-icon-img" /></a>
            <a href="#tw"><img src="/footer-icons/Icon awesome-twitter.png" alt="Twitter" className="social-icon-img" /></a>
            <a href="#yt"><i className="fa-brands fa-youtube social-icon-fa"></i></a>
            <a href="#qu"><img src="/footer-icons/quora.png" alt="Quora" className="social-icon-img" /></a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-title">Head Office</h4>
          <ul className="footer-list with-icons">
            <li>
              <img src="/footer-icons/Icon material-location-on.png" alt="Location" className="footer-icon-img" />
              <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</span>
            </li>
            <li>
              <img src="/footer-icons/Group 17190.png" alt="Clock" className="footer-icon-img" />
              <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</span>
            </li>
            <li>
              <img src="/footer-icons/Group 17190.png" alt="Clock" className="footer-icon-img" />
              <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</span>
            </li>
            <li>
              <img src="/footer-icons/Group 17156.png" alt="Train" className="footer-icon-img" />
              <span>Lorem ipsum asd asdsaweeq Lorem Ipsum</span>
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
