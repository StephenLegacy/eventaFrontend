import './footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="auto-container">
        <div className="widget-section">
          <div className="row clearfix">

            {/* Logo & Intro */}
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget logo-widget">
                <figure className="footer-logo">
                  <a href="/">
                    <img src="assets/images/logo-2.png" alt="Eventa Logo" />
                  </a>
                </figure>
                <p>Your trusted partner in curating world-class events, summits, and festivals across the globe.</p>
                <ul className="social-links clearfix">
                  <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>

            {/* Resources */}
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget ml_60">
                <div className="widget-title">
                  <h3>Resources</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li><a href="/about">Our Story</a></li>
                    <li><a href="/contact">Get in Touch</a></li>
                    <li><a href="/blog">Event Insights</a></li>
                    <li><a href="/partners">Partners</a></li>
                    <li><a href="/support">Support</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Primary Pages */}
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h3>Company</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/media">Media & Press</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/refunds">Refunds & Cancellations</a></li>
                    <li><a href="/sitemap">Sitemap</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget subscribe-widget">
                <div className="widget-title">
                  <h3>Subscribe Newsletter</h3>
                </div>
                <div className="widget-content">
                  <p>Stay in the loop with our latest event launches, ticket offers, and industry news.</p>
                  <div className="form-inner">
                    <form method="post" action="/subscribe">
                      <div className="form-group">
                        <input type="email" name="email" placeholder="Email Address" required />
                        <button type="submit" className="theme-btn btn-one">Subscribe</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom centred">
        <div className="auto-container">
          <div className="copyright">
            <p>&copy; 2025 Eventa. Creating Unforgettable Moments. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
