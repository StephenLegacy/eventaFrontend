import React from 'react';
import './services.css';

// Import shape images used in background patterns
// Corrected path from 'shape' to 'shapes'
// Import shape images used in background patterns
// Corrected path from 'shape' to 'shapes'
import shape41 from '../../assets/images/shapes/shape-41.png'; // Corrected path
import shape40 from '../../assets/images/shapes/shape-40.png'; // Corrected path

// Import resource images for service blocks
// import eventCreationImage from '../../assets/images/resource/event-creation.jpeg';
// import onlineTicketingImage from '../../assets/images/resource/online-ticketing.jpeg';
// import checkInImage from '../../assets/images/resource/check-in.jpeg';
// import analyticsImage from '../../assets/images/resource/analytics.jpeg';

/**
 * Services component displays a section outlining the key services offered.
 * It features background patterns and individual service blocks with icons and descriptions.
 */
const Services = () => {
  return (
    <section className="service-style-two pb_150">
      {/* Background pattern layer using imported image */}
      <div className="pattern-layer" style={{ backgroundImage: `url(${shape41})` }}></div>
      <div className="auto-container">
        <div className="inner-container">
          {/* Decorative shape using imported image */}
          <div className="shape" style={{ backgroundImage: `url(${shape40})` }}></div>
          {/* Section title and subtitle */}
          <div data-animation-box className="sec-title mb_55 centred">
            <span data-animation-text className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">What We Offer</span>
            <h2>Services Included</h2>
          </div>
          <div className="row clearfix">
            {/* Service Block 1: Event Creation */}
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div className="service-block-one">
                <div className="inner-box">
                  <h3>Event Creation</h3>
                  <p>Set up events in minutes — define venue, date, ticket types, and branding in a clean dashboard.</p>
                  <div className="link">
                    {/* Placeholder link, consider updating with actual route or action */}
                    <a href="#">
                      <i className="icon-23"></i> {/* Assuming 'icon-23' is defined in your CSS */}
                    </a>
                  </div>
                 
                  {/* Service image using imported variable */}
                  {/* <figure className="image">
                    <img
                      src={eventCreationImage}
                      alt="Event Creation"
                      // Fallback in case image fails to load
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/CCCCCC/000000?text=Error" }}
                    />
                  </figure> */}

                </div>
              </div>
            </div>
            {/* Service Block 2: Online Ticketing */}
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div className="service-block-one">
                <div className="inner-box">
                  <h3>Online Ticketing</h3>
                  <p>Sell tickets online securely through mobile money and cards, with instant confirmation & QR codes.</p>
                  <div className="link">
                    {/* Placeholder link, consider updating with actual route or action */}
                    <a href="#">
                      <i className="icon-23"></i> {/* Assuming 'icon-23' is defined in your CSS */}
                    </a>
                  </div>
                  
                  {/* Service image using imported variable
                  <figure className="image">
                    <img
                      src={onlineTicketingImage}
                      alt="Online Ticketing"
                      // Fallback in case image fails to load
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/CCCCCC/000000?text=Error" }}
                    />
                  </figure> */}

                </div>
              </div>
            </div>
            {/* Service Block 3: Check-In System */}
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div className="service-block-one">
                <div className="inner-box">
                  <h3>Check-In System</h3>
                  <p>Use our mobile check-in app or dashboard to scan QR codes and track attendance in real-time.</p>
                  <div className="link">
                    {/* Placeholder link, consider updating with actual route or action */}
                    <a href="#">
                      <i className="icon-23"></i> {/* Assuming 'icon-23' is defined in your CSS */}
                    </a>
                  </div>

                  {/* Service image using imported variable */}
                  {/* <figure className="image">
                    <img
                      src={checkInImage}
                      alt="Check-In System"
                      // Fallback in case image fails to load
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/CCCCCC/000000?text=Error" }}
                    />
                  </figure>
                   */}
                </div>
              </div>
            </div>
            {/* Service Block 4: Analytics & Reports */}
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div className="service-block-one">
                <div className="inner-box">
                  <h3>Analytics & Reports</h3>
                  <p>Gain insights with reports on ticket sales, attendance, and customer behavior to optimize future events.</p>
                  <div className="link">
                    {/* Placeholder link, consider updating with actual route or action */}
                    <a href="#">
                      <i className="icon-23"></i> {/* Assuming 'icon-23' is defined in your CSS */}
                    </a>
                  </div>

                  {/* Service image using imported variable */}
                  {/* <figure className="image">
                    <img
                      src={analyticsImage}
                      alt="Analytics & Reports"
                      // Fallback in case image fails to load
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/CCCCCC/000000?text=Error" }}
                    />
                  </figure> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
