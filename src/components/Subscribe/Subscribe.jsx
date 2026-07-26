import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
  return (
    <section className="subscribe-section">
      <div className="subscribe-container">
        <div className="subscribe-left">
          <h2 className="subscribe-title">Subscribe</h2>
          <p className="subscribe-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
          <div className="subscribe-form">
            <input 
              type="email" 
              placeholder="Enter your Email Address" 
              className="subscribe-input" 
            />
            <button className="subscribe-btn">
              Subscribe Now <span className="btn-arrow">►</span>
            </button>
          </div>
        </div>
        <div className="subscribe-right">
          <img 
            src={process.env.PUBLIC_URL + '/mobilr-image.png'} 
            alt="Subscribe illustration" 
            className="subscribe-img" 
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
