import React from 'react';
import './about.css'; // Importing component-specific CSS
import Testimonials from '../components/ui/Testimonials'; // Importing another UI component

// --- SHAPE IMPORTS ---
// Importing various shape images used for backgrounds and patterns
import shape5 from '../assets/images/shapes/shape-5.png';
import shape6 from '../assets/images/shapes/shape-6.png';
import shape7 from '../assets/images/shapes/shape-7.png';
import shape8 from '../assets/images/shapes/shape-8.png';
import shape9 from '../assets/images/shapes/shape-9.png';
import shape64 from '../assets/images/shapes/shape-64.png';
import shape65 from '../assets/images/shapes/shape-65.png';
import shape67 from '../assets/images/shapes/shape-67.png';
import shape39 from '../assets/images/shapes/shape-39.png';
import shape31 from '../assets/images/shapes/shape-31.png';
import shape36 from '../assets/images/shapes/shape-36.png';
import shape37 from '../assets/images/shapes/shape-37.png';
import shape38 from '../assets/images/shapes/shape-38.png';
import shape19 from '../assets/images/shapes/shape-19.png';
import shape23 from '../assets/images/shapes/shape-23.png';
import shape24 from '../assets/images/shapes/shape-24.png';
import shape25 from '../assets/images/shapes/shape-25.png';
import shape26 from '../assets/images/shapes/shape-26.png';

// --- RESOURCE AND ICON IMPORTS ---
// Importing specific images for main content and icons.
// Assuming .png extensions for icon-7 and icon-1 based on icon-9.png.
// Please verify filenames and extensions in your 'src/assets/images' folders.
import about5 from '../assets/images/resource/about-5.jpg';
import icon7 from '../assets/images/icons/icon-7.png';
import icon from '../assets/images/icons/icon-1.png'; // Corrected to icon-1.png
import icon9 from '../assets/images/icons/icon-9.png';
import icon3 from '../assets/images/icons/icon-3.png';
import icon4 from '../assets/images/icons/icon-4.png';
import icon5 from '../assets/images/icons/icon-5.png';
import video2 from '../assets/images/resource/video-2.jpg'; // Video placeholder image import

const About = () => {
  return (
    <>
      {/* --- Page Title Section --- */}
      {/* This section provides a hero banner with a title, subtitle, and descriptive text.
          It includes decorative background patterns using imported shape images. */}
      <section className="page-title centred pt_130 pb_150">
        <div className="pattern-layer">
          <div className="pattern-1" style={{ backgroundImage: `url(${shape67})` }}></div>
          <div className="pattern-2" style={{ backgroundImage: `url(${shape65})` }}></div>
        </div>
        <div className="auto-container">
          <div className="content-box">
            <span className="sub-title-three">About us</span>
            {/* <h1>About Us</h1> */}
            <p>
              Simplify Ticketing. Maximize Attendance <br /> At Eventa, we believe organizing events should be as exciting as attending them. Our mission is to empower creators, organizers, and communities with smart, seamless tools that make event management simple—from planning to check-in.
            </p>
            <p>
              Born from a passion for innovation and real-world event experience, Eventa is designed to take the hassle out of ticketing. Whether you're hosting a concert, a conference, or a local meetup, our platform helps you sell tickets, manage attendees, and track your success—all in one place.
            </p>
            <p>We're not just building software—we're building a movement to make every event more engaging, accessible, and stress-free.</p>
          </div>
        </div>
      </section>
      {/* --- Page Title Section End --- */}

      {/* --- About Style Three Section --- */}
      <section className="about-style-three pb_150">
        <div className="pattern-layer" style={{ backgroundImage: `url(${shape67})` }}></div>
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image_block_five">
                <div className="image-box mr_80">
                  <figure className="image">
                    {/* Main image for the about section */}
                    <img src={about5} alt="about5" />
                  </figure>
                  <ul className="image-content clearfix">
                    <li>
                      <div className="icon">
                        {/* Icon for 'People' feature */}
                        <img src={icon7} alt="icon7" />
                      </div>
                      <h6>People</h6>
                    </li>
                    <li className="load">
                      <div className="icon">
                        {/* Icon for 'Revenue' feature */}
                        <img src={icon} alt="5" />
                      </div>
                      <h6>Revenue</h6>
                    </li>
                    <li>
                      <button type="button"></button>
                      <div className="icon">
                        {/* Icon for 'Reports' feature */}
                        <img src={icon9} alt="" />
                      </div>
                      <h6>Reports</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_four">
                <div className="content-box ml_40">
                  <div className="sec-title mb_25">
                    <span className="sub-title">AT A GLANCE</span>
                    <h2>Eventa App at a glance now</h2>
                  </div>
                  <div className="text-box mb_40">
                    <p>
                      At Eventa, we give event creators the tools to turn ideas into unforgettable experiences. 
                      Whether you're planning a concert, a meetup, or a cosplay expo, Eventa helps you manage 
                      ticketing, promote with ease, and focus on what really matters—the magic of the moment.
                    </p>
                  </div>
                  <div className="inner-box">
                    <div className="single-item mb_40">
                      <div className="icon-box">

                        {/* ICON FONT USAGE: This `<i>` tag with a class expects a CSS icon 
                        font library to be loaded. */}

                        <i className="icon-13"></i>
                      </div>
                      <h3>Keep it simple and easy</h3>
                      <p>Easily create your account and get the event started</p>
                    </div>
                    <div className="single-item">
                      <div className="icon-box">
                        {/* ICON FONT USAGE: This `<i>` tag with a class expects a CSS icon font library to be loaded. */}
                        <i className="icon-14"></i>
                      </div>
                      <h3>Track attendance</h3>
                      <p>See your guests hassle free</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* --- Rating Section --- */}
      {/* This section showcases client ratings and achievements, featuring images and star ratings. */}
      <section className="rating-section pb_150">
        <div className="auto-container">
          <div className="inner-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 rating-block">
                <div className="rating-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      {/* Icon for 'Top 100 Software Company' rating */}
                      <img src={icon3} alt="" />
                    </div>
                    <h5>Top 100 Software Company</h5>
                    <ul className="rating-box">
                      <li><i className="icon-19"></i></li> {/* ICON FONT USAGE: Assumed to be a star icon font class */}
                      <li><i className="icon-19"></i></li>
                      <li><i className="icon-19"></i></li>
                      <li><i className="icon-19"></i></li>
                      <li><i className="icon-19"></i></li>
                      <li><span>4.7/5</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 rating-block">
                <div className="rating-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      {/* Icon for 'Top 20 Software Products' rating (first instance) */}
                      <img src={icon4} alt="" />
                    </div>
                    <h5>Top 20 Software Products</h5>
                    <ul className="rating-box">
                      <li><i className="icon-19"></i></li>
                      <li><i className="icon-19"></i></li>
                      <li><i className="icon-19"></i></li>
                      <li><i className="icon-19"></i></li>
                      <li><i className="icon-19"></i></li>
                      <li><span>5.0/5</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 rating-block">
                <div className="rating-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      {/* Icon for 'Top 20 Software Products' rating (second instance) */}
                      <img src={icon5} alt="" />
                    </div>
                    <h5>Top 20 Software Products</h5>
                    <ul className="rating-box">
                      <li><i className="icon-19"></i></li>
                      <li><i className="icon-19"></i></li>
                      <li><i className="icon-19"></i></li>
                      <li><i className="icon-19"></i></li>
                      <li><i className="icon-19"></i></li>
                      <li><span>4.9/5</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- Rating Section End --- */}


      {/* This section highlights core features of the Eventa platform with descriptive text and icons. */}
      <section className="feature-style-two pb_120 centred">
        <div className="auto-container">
          <div data-animation-box className="sec-title mb_55">
            <span data-animation-text className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">We Are Enterprise Ready</span>
            <h2>The Power Of Eventa</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                <div className="inner-box">
                  <div className="icon-box">
                    {/* ICON FONT USAGE: This `<i>` tag with a class expects a CSS icon font library to be loaded. */}
                    <i className="icon-16"></i>
                  </div>

                  <h3>
                    <a href="#">Easy Event Creation</a>
                  </h3>
                  <p>Create events in minutes with a sleek, intuitive interface.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
                <div className="inner-box">
                  <div className="icon-box">
                    {/* ICON FONT USAGE: This `<i>` tag with a class expects a CSS icon font library to be loaded. */}
                    <i className="icon-17"></i>
                  </div>
                  <h3>
                    <a href="#">Smart ticketing system</a>
                  </h3>
                  <p>Customize ticket types, pricing, and availability.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1100">
                <div className="inner-box">
                  <div className="icon-box">

                    {/* ICON FONT USAGE: This `<i>` tag with a class expects a CSS icon font library to be loaded. */}
                    <i className="icon-18"></i>

                  </div>
                  <h3>
                    <a href="#">Real time analytics</a>
                  </h3>
                  <p>Track ticket sales, attendee engagement, and more..</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1300">
                <div className="inner-box">
                  <div className="icon-box">
                    {/* ICON FONT USAGE: This `<i>` tag with a class expects a CSS icon font library to be loaded. */}
                    <i className="icon-21"></i>
                  </div>
                  <h3>
                    <a href="#">Secure Payments</a>
                  </h3>
                  <p>Accept major payment methods with seamless checkout.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- Feature Style Two Section End --- */}

      {/* --- Glance Section --- */}

      {/* This section provides a "glance" at the app's overall impact, featuring patterns and a title. */}
      <section className="glance-section centred">
        <div className="auto-container">
          <div className="inner-container">
            <div className="pattern-layer">
              {/* Background patterns using imported shape images */}
              <div className="pattern-1" style={{ backgroundImage: `url(${shape5})` }}></div>
              <div className="pattern-2" style={{ backgroundImage: `url(${shape6})` }}></div>
              <div className="pattern-3 rotate-me" style={{ backgroundImage: `url(${shape7})` }}></div>
              <div className="pattern-4 rotate-me" style={{ backgroundImage: `url(${shape8})` }}></div>
              <div className="pattern-5 rotate-me" style={{ backgroundImage: `url(${shape9})` }}></div>
            </div>
            <div className="sec-title light mb_80">
              <span className="sub-title">AT A GLANCE</span>
              <h2>
                Eventa App <br />a glance now
              </h2>
              <p>The global leader in event management</p>
            </div>
            {/* Placeholder for a dashboard image, currently commented out */}
            {/* <figure className="image-box><img src="assets/images/resource/dashboard-1.jpg" alt=""></figure> 
            Our dashboard will go here*/}
          </div>
        </div>
      </section>
      {/* --- Glance Section End --- */}

      {/* --- Working Style Three Section --- */}
      {/* This section explains how the Eventa app works in a step-by-step manner. */}
      <section className="working-style-three about-page centred pt_150 pb_120">
        <div className="pattern-layer">
          {/* Background patterns using imported shape images */}
          <div className="pattern-1 float-bob-y" style={{ backgroundImage: `url(${shape39})` }}></div>
          <div className="pattern-2 float-bob-y" style={{ backgroundImage: `url(${shape31})` }}></div>
        </div>
        <div className="auto-container">
          <div data-animation-box className="sec-title mb_55">
            <span data-animation-text className="sub-title overlay-anim-white-bg" data-animation="overlay-animation">How it Works</span>
            <h2>How it works</h2>
          </div>
          <div className="upper-box mb_50 p_relative">
            <div className="image-shape">
              {/* Decorative shapes for the video section */}
              <div className="shape-1" style={{ backgroundImage: `url(${shape36})` }}></div>
              <div className="shape-2 rotate-me" style={{ backgroundImage: `url(${shape37})` }}></div>
              <div className="shape-3 rotate-me" style={{ backgroundImage: `url(${shape38})` }}></div>
            </div>
            {/* Video section - untouched as per request */}
            <div className="video-inner" style={{ backgroundImage: `url(${video2})` }}>
              {/* Video coming soon */}
              <div className="video-btn">
                <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s" className="lightbox-image video-btn" data-caption="">
                  {/* ICON FONT USAGE: This `<i>` tag with a class expects a CSS icon font library to be loaded. */}
                  <i className="icon-15"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 working-block">
              <div className="working-block-two">
                <div className="inner-box">
                  {/* Background shape for the working block */}
                  <div className="shape" style={{ backgroundImage: `url(${shape19})` }}></div>
                  <div className="icon-box">
                    {/* ICON FONT USAGE: This `<i>` tag with a class expects a CSS icon font library to be loaded. */}
                    <i className="icon-10"></i>
                  </div>
                  <h3>Step 1: Create Account</h3>
                  <p>Easily create your free account, Get free quote</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 working-block">
              <div className="working-block-two">
                <div className="inner-box">
                  {/* Background shape for the working block */}

                  <div className="shape" style={{ backgroundImage: `url(${shape19})` }}></div>
                  <div className="icon-box">

                    {/* ICON FONT USAGE: This `<i>` tag with a class expects a CSS icon font library to be loaded. */}
                    <i className="icon-11"></i>
                  </div>
                  <h3>Step 2: Create an event</h3>
                  <p>Set up your event</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 working-block">
              <div className="working-block-two">
                <div className="inner-box">
                  <div className="icon-box">
                    {/* ICON FONT USAGE: This `<i>` tag is currently empty. If an icon is intended,
                        it needs a class like `icon-XX` or a different icon library component. */}
                    <i className=""></i>
                  </div>
                  <h3>Configure payments</h3>
                  <p>Securely manage payment or host a free event</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- Working Style Three Section End --- */}

      {/* --- Testimonials Section --- */}
   
      <Testimonials />
      {/* --- Testimonials Section End --- */}

      {/* --- CTA Section --- */}
      {/* This section presents a call to action with a title and buttons. */}
      <section className="cta-section">
        <div className="bg-color"></div>
        <div className="auto-container">
          <div className="inner-container">
            <div className="pattern-layer">
              {/* Background patterns using imported shape images */}
              <div className="pattern-1" style={{ backgroundImage: `url(${shape23})` }}></div>
              <div className="pattern-2 rotate-me" style={{ backgroundImage: `url(${shape24})` }}></div>
              <div className="pattern-3 rotate-me" style={{ backgroundImage: `url(${shape25})` }}></div>
              <div className="pattern-4 rotate-me" style={{ backgroundImage: `url(${shape26})` }}></div>
            </div>
            <div className="inner-box">
              <h2>
                The #1 rated Event Ticketing & management <br />
                on the planet
              </h2>
              <div className="btn-box">
                <a href="#" className="theme-btn btn-two mr_20">
                  Get Quote Now
                </a>
                <a href="#" className="theme-btn btn-one">
                  Need Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- CTA Section End --- */}
    </>
  );
};

export default About;