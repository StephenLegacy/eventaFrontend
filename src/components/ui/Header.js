import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../public/assets/images/logo.png'; // adjust path as needed


//I WILL NOT USE THIS FOR NOW AS I PLAN TO USE NAVBAR.JSX FOR THE SAME PURPOSE

const Header = () => {
  return (
    <header className="main-header header-style-five">
      {/* header-lower */}
      <div className="header-lower">
        <div className="auto-container">
          <div className="outer-box">
            <div className="logo-box">
              <figure className="logo">
                <Link to="/">
                  {/* <img src={logo} alt="Logo" /> */}
                </Link>
              </figure>
            </div>

            <div className="menu-area">
              <div className="mobile-nav-toggler">
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
              </div>

              <nav className="main-menu navbar-expand-md navbar-light clearfix">
                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                  <ul className="navigation clearfix">
                    <li className="current dropdown">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li className="dropdown">
                      <Link to="#">Pages</Link>
                      <ul>
                        <li className="dropdown">
                          <Link to="#">Our Services</Link>
                          <ul>
                            <li><Link to="/service">Services One</Link></li>
                            <li><Link to="/service-2">Services Two</Link></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <Link to="#">FAQs</Link>
                          <ul>
                            <li><Link to="/faq">FAQ’s One</Link></li>
                            <li><Link to="/faq-2">FAQ’s Two</Link></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <Link to="#">Pricing</Link>
                          <ul>
                            <li><Link to="/pricing">Pricing One</Link></li>
                            <li><Link to="/pricing-2">Pricing Two</Link></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <Link to="#">Testimonials</Link>
                          <ul>
                            <li><Link to="/testimonial">Testimonials One</Link></li>
                            <li><Link to="/testimonial-2">Testimonials Two</Link></li>
                            <li><Link to="/testimonial-3">Testimonials Three</Link></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <Link to="#">Shop</Link>
                          <ul>
                            <li><Link to="/shop">Our Shop</Link></li>
                            <li><Link to="/shop-details">Shop Details</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/checkout">Checkout</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/team">Our Team</Link></li>
                        <li><Link to="/error">404</Link></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link to="#">News</Link>
                      <ul>
                        <li><Link to="/blog">Blog Grid</Link></li>
                        <li><Link to="/blog-2">Blog Standard</Link></li>
                        <li><Link to="/blog-details">Blog Details</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="menu-right-content">
              <div className="search-box-outer search-toggler mr_30">
                <i className="icon-1"></i>
              </div>
              <div className="btn-box">
                <Link to="/account" className="theme-btn btn-one">Account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sticky Header */}
      <div className="sticky-header">
        <div className="auto-container">
          <div className="outer-box">
            <div className="logo-box">
              <figure className="logo">
                <Link to="/">
                  {/* <img src={logo} alt="Logo" /> */}
                </Link>
              </figure>
            </div>
            <div className="menu-area">
              <nav className="main-menu clearfix">
                {/* This section will be populated by JS if needed */}
              </nav>
            </div>
            <div className="menu-right-content">
              <div className="search-box-outer search-toggler mr_30">
                <i className="icon-1"></i>
              </div>
              <div className="btn-box">
                <Link to="/account" className="theme-btn btn-one">Account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
