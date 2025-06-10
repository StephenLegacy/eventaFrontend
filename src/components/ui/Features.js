import React from 'react';
import './features.css'; // Ensure features.css is in the correct path

// Import image assets
import shape34 from '../../assets/images/shapes/shape-34.png'; // Path from src/components/ui/ to src/assets/images/shapes/shape-34.png
import shape35 from '../../assets/images/shapes/shape-35.png'; // Path from src/components/ui/ to src/assets/images/shapes/shape-35.png


const Features = () => {
  return (
    <section className="feature-style-three pb_150 centred">
      <div className="pattern-layer">
        {/* Referencing imported image variables */}
        <div className="pattern-1" style={{ backgroundImage: `url(${shape34})` }}></div>
        <div className="pattern-2" style={{ backgroundImage: `url(${shape35})` }}></div>
      </div>
      <div className="auto-container">
        <div className="inner-container">
          {/* This image path is a string. Ensure assets/images/shape/shape-33.png is correct. */}
          <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-33.png)' }}></div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-two">
                <div className="inner-box">
                  {/* These icon classes (icon-16, icon-17, icon-18) are expected to be defined
                      in features.css or via an external icon library. */}
                  <div className="icon-box"><i className="icon-16"></i></div>
                  <h3><a href="#">Smart Ticketing</a></h3>
                  <p>Create and manage digital tickets with unique QR codes. Track attendance in real-time and prevent fraud at the gate.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-two">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-17"></i></div>
                  <h3><a href="#">Seamless Payments</a></h3>
                  <p>Accept M-Pesa, credit cards, and mobile wallets with fast, secure transactions powered by top local and global gateways.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-two">
                  <div className="inner-box">
                  <div className="icon-box"><i className="icon-18"></i></div>
                  <h3><a href="#">Event Insights</a></h3>
                  <p>Get detailed analytics on ticket sales, attendee demographics, and real-time check-ins to help you plan better events.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
