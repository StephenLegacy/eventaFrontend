import React from 'react';
// CHANGE 1: Import Carousel from react-responsive-carousel
import { Carousel } from 'react-responsive-carousel';
// CHANGE 2: Import react-responsive-carousel's default styles
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './testimonials.css'; // Your existing CSS file
import shape45 from '../../assets/images/shapes/shape-45.png';
import shape63 from '../../assets/images/shapes/shape-63.png';

const Testimonials = () => {
  // You can keep carouselOptions if you want to map them later,
  // but react-responsive-carousel uses different prop names.
  // We will pass props directly to the Carousel component.

  return (
    <>
      {/* testimonial-section */}
      <section className="testimonial-section centred pb_140">
        <div className="shape">
          <div className="shape-3" style={{ backgroundImage: `url(${shape45})` }}></div>
          <div className="shape-2" style={{ backgroundImage: `url(${shape63})` }}></div>
        </div>
        <div className="auto-container">
          <div className="sec-title mb_55">
            <span className="sub-title">Testimonials</span>
            <h2>Love from Users</h2>
          </div>
          {/* CHANGE 3: Replace OwlCarousel with Carousel and update props */}
          <Carousel
            showArrows={true}        // Show navigation arrows (equivalent to OwlCarousel's nav: false, but shows arrows)
            infiniteLoop={true}      // Loop through items (equivalent to loop: true)
            showThumbs={false}       // Hide thumbnail navigation
            showStatus={false}       // Hide current slide status (e.g., "1 of 5")
            autoPlay={true}          // Autoplay the carousel (equivalent to autoplay: true)
            interval={5000}          // Autoplay speed (5 seconds, equivalent to autoplayTimeout)
            transitionTime={1000}    // Transition speed (equivalent to smartSpeed)
            stopOnHover={true}       // Pause auto-play on hover
            centerMode={false}       // Set to true if you want partial slides on sides

            // For responsive behavior like OwlCarousel's 'items', you might need to adjust your CSS
            // or use react-responsive-carousel's 'responsive' prop if you need more complex breakpoints,
            // but for 1 item per slide, this setup works well.
            // If you want multiple items per slide (like your OwlCarousel config),
            // you'd typically need to render multiple testimonial-block-one items within a single Carousel child div,
            // or look into other libraries like react-multi-carousel or Swiper.
            // For simplicity, this example assumes one testimonial per slide as it's common for testimonials.
          >
            <div className="testimonial-block-one">
              <div className="inner-box">
                <figure className="thumb-box">
                  <img src="assets/images/resource/testimonial-1.png" alt="Nia Kamau" />
                </figure>
                <h4>Nia Kamau</h4>
                <span className="designation">Event Organizer</span>
                <ul className="rating">
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                </ul>
                <p>"Eventa made selling tickets for our cultural night so smooth. Setup was fast and customer support was on point!"</p>
              </div>
            </div>
            <div className="testimonial-block-one">
              <div className="inner-box">
                <figure className="thumb-box">
                  <img src="assets/images/resource/testimonial-2.png" alt="David Smith" />
                </figure>
                <h4>David Smith</h4>
                <span className="designation">Concert Promoter</span>
                <ul className="rating">
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                </ul>
                <p>"I’ve used several platforms but Eventa is by far the most intuitive for managing large crowds and tracking sales."</p>
              </div>
            </div>
            <div className="testimonial-block-one">
              <div className="inner-box">
                <figure className="thumb-box">
                  <img src="assets/images/resource/testimonial-3.png" alt="Aisha Bello" />
                </figure>
                <h4>Aisha Bello</h4>
                <span className="designation">Creative Director</span>
                <ul className="rating">
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                </ul>
                <p>"From customized branding to secure check-ins, Eventa helped our fashion show feel professional and seamless."</p>
              </div>
            </div>
            <div className="testimonial-block-one">
              <div className="inner-box">
                <figure className="thumb-box">
                  <img src="assets/images/resource/testimonial-4.png" alt="Jason Lee" />
                </figure>
                <h4>Jason Lee</h4>
                <span className="designation">Tech Meetup Host</span>
                <ul className="rating">
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                </ul>
                <p>"We’ve run four events using Eventa this year and every one of them felt easier than the last. Highly recommend!"</p>
              </div>
            </div>
            <div className="testimonial-block-one">
              <div className="inner-box">
                <figure className="thumb-box">
                  <img src="assets/images/resource/testimonial-5.png" alt="Faith Mwangi" />
                </figure>
                <h4>Faith Mwangi</h4>
                <span className="designation">Wedding Planner</span>
                <ul className="rating">
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                  <li><i className="icon-19"></i></li>
                </ul>
                <p>"Ticketing used to be a mess. With Eventa, we manage RSVPs, send reminders, and even scan guests at the gate—stress-free!"</p>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
      {/* testimonial-section end */}
    </>
  );
};

export default Testimonials;