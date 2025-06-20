import React from 'react';
import './contact.css';

// Import images
import shape23 from '../assets/images/shapes/shape-23.png';
import shape24 from '../assets/images/shapes/shape-24.png';
import shape25 from '../assets/images/shapes/shape-25.png';
import shape26 from '../assets/images/shapes/shape-26.png';
import shape68 from '../assets/images/shapes/shape-68.png';
import shape69 from '../assets/images/shapes/shape-69.png';

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Page Title Section */}
  
      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="auto-container">
          <div className="sec-title">
            <span className="sub-title">Contact Info</span>
            <h2>Contact Information</h2>
          </div>
          <div className="info-blocks-grid">
            {/* Location Block */}
            <div className="info-block">
              <div className="icon-box">📍</div>
              <h3>Our Location</h3>
              <p>Crossroads Mall - Karen, <br />Nairobi</p>
            </div>

            {/* Email Address Block */}
            <div className="info-block">
              <div className="icon-box">📧</div>
              <h3>Email Address</h3>
              <p>
                <a href="mailto:oloostephen20191@gmail.com">oloostephen20191@gmail.com</a>
                <br />
                <a href="mailto:support@example.com">support@eventa.com</a>
              </p>
            </div>

            {/* Phone Number Block */}
            <div className="info-block">
              <div className="icon-box">📞</div>
              <h3>Phone Number</h3>
              <p>
                Emergency Cases <br />
                <a href="tel:+254716631667">+(254) 716-631667</a> (24/7)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="max-w-4xl-container">
          <div className="sec-title text-center">
            <span className="sub-title">Contact Form</span>
            <h2>Get in Touch</h2>
          </div>
          <div className="form-inner">
            <form method="post" id="contact-form">
              <div className="form-group">
                <input type="text" name="username" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your email" required />
              </div>
              <div className="form-group">
                <input type="text" name="phone" required placeholder="Phone" />
              </div>
              <div className="form-group">
                <input type="text" name="subject" required placeholder="Subject" />
              </div>
              <div className="col-span-full form-group">
                <textarea name="message" placeholder="Type message" rows="6"></textarea>
              </div>
              <div className="col-span-full message-btn">
                <button className="theme-btn" type="submit" name="submit-form">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map Section - Moved above CTA */}
      <section className="google-map-section">
        <div className="pattern-layer">
          <div className="pattern-1" style={{ backgroundImage: `url(${shape68})` }}></div>
          <div className="pattern-2" style={{ backgroundImage: `url(${shape69})` }}></div>
        </div>
        <div className="auto-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.881728398216!2d36.7202481!3d-1.3224236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11fcbbfe85e9%3A0x3c6076bda06f6f59!2sCrossroads%20Mall%2C%20Langata%20Rd%2C%20Karen%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1715853083629!5m2!1sen!2ske"
            className="map-iframe"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Google Map of Crossroads Mall, Karen, Nairobi"
          ></iframe>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="pattern-layer">
          <div className="pattern-1" style={{ backgroundImage: `url(${shape23})` }}></div>
          <div className="pattern-2" style={{ backgroundImage: `url(${shape24})` }}></div>
          <div className="pattern-3" style={{ backgroundImage: `url(${shape25})` }}></div>
          <div className="pattern-4" style={{ backgroundImage: `url(${shape26})` }}></div>
        </div>
        <div className="max-w-5xl-container inner-content">
          <h2>The #1 rated Event Ticketing & management app on the planet</h2>
          <div className="btn-box">
            <a href="#" className="btn-white">Get Quote Now</a>
            <a href="#" className="btn-blue">Need Support</a>
          </div>
        </div>
      </section>
    </div>
  );
}