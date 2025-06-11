import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { getFeaturedEvents } from '../services/events'; // Original import, commented out for now

// These imports are kept exactly as you provided them.
// They are expected to resolve to your local files when compiled.
import EventCard from '../components/events/EventCard';
// import Footer from '../components/Footer.js';
import Features from '../components/ui/Features.js';
// import Pricing from '../components/Pricing.js';
import Services from '../components/ui/Services.js';
// import FAQ from '../components/FAQ.js';
// import CTA from '../components/CTA.js';
import './home.css';
import './bannerSection.css';

// Import the specific shape images from your assets folder
import shape27 from '../assets/images/shapes/shape-27.png';
import shape28 from '../assets/images/shapes/shape-28.png';
import shape29 from '../assets/images/shapes/shape-29.png';
import shape30 from '../assets/images/shapes/shape-30.png';
import shape31 from '../assets/images/shapes/shape-31.png';
import shape32 from '../assets/images/shapes/shape-32.png';

// Mocking getFeaturedEvents for demonstration purposes.
// This will provide placeholder data for your featured events section
// until your backend is connected.
const getFeaturedEvents = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          _id: '1',
          title: 'Innovate Kenya Tech Summit',
          date: 'Oct 26, 2025',
          location: 'KICC, Nairobi',
          imageUrl: 'https://placehold.co/300x200/CCCCCC/000000?text=Tech+Summit' // Generic placeholder
        },
        {
          _id: '2',
          title: 'Rusinga Island Cultural Festival',
          date: 'Nov 15, 2025',
          location: 'Rusinga Island, Lake Victoria',
          imageUrl: 'https://placehold.co/300x200/CCCCCC/000000?text=Cultural+Fest' // Generic placeholder
        },
        {
          _id: '3',
          title: 'Nairobi Marathon',
          date: 'Dec 01, 2025',
          location: 'Uhuru Gardens, Nairobi',
          imageUrl: 'https://placehold.co/300x200/CCCCCC/000000?text=Marathon' // Generic placeholder
        },
        {
          _id: '4',
          title: 'Safaricom Jazz Festival',
          date: 'Jan 20, 2026',
          location: 'Carnivore Grounds, Nairobi',
          imageUrl: 'https://placehold.co/300x200/CCCCCC/000000?text=Jazz+Fest' // Generic placeholder
        },
      ]);
    }, 1000); // Simulate network delay
  });
};

/**
 * Homepage component featuring:
 * - Hero section with call-to-action
 * - Featured events showcase
 * - Responsive layout
 * - Animated transitions
 */
function Home() {
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedEvents = async () => {
      try {
        const events = await getFeaturedEvents(); // This will call the mock function above
        setFeaturedEvents(events);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedEvents();
  }, []);

  return (
    <>
      <section className="banner-style-five centred">
        <div className="pattern-layer">
            {/* Using the imported image variables for background-image */}
            <div className="pattern-1" style={{ backgroundImage: `url(${shape27})` }}></div>
            <div className="pattern-2" style={{ backgroundImage: `url(${shape28})` }}></div>
            <div className="pattern-3 float-bob-y" style={{ backgroundImage: `url(${shape29})` }}></div>
            <div className="pattern-4 rotate-me" style={{ backgroundImage: `url(${shape30})` }}></div>
            <div className="pattern-5 float-bob-y" style={{ backgroundImage: `url(${shape31})` }}></div>
            <div className="pattern-6" style={{ backgroundImage: `url(${shape32})` }}></div>
        </div>
        <div className="auto-container">
            <div className="inner-box">
                <div className="content-box mb_80">
                    <h2>Plan, Promote & <span>Discover Events in Kenya</span><br />All from one place</h2>
                    <p>Eventa helps you create, manage, promote, and discover events — from chama meetings to concerts — with ease and automation.</p>
                    <div className="btn-box">
                        <Link to="/create-event" className="theme-btn btn-one mr_20">Create Event</Link>
                        <Link to="/events" className="theme-btn btn-two mr_20">Browse Events</Link>
                        <Link to="/signup" className="theme-btn btn-two">Get Started Free</Link>
                    </div>
                </div>
                <figure className="image-box">
                  {/* Using a placeholder image for the dashboard screenshot */}
                  {/* <img src="https://placehold.co/800x500/CCCCCC/000000?text=Eventa+Dashboard" alt="Eventa event management dashboard" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x500/CCCCCC/000000?text=Image+Error" }}/> */}
                </figure>
            </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="featured-events">
        <div className="section-header">
          <h2>Featured Events</h2>
          <Link to="/events" className="view-all">
            View All Events →
          </Link>
        </div>

        {loading ? (
          <div className="loading-spinner">Loading featured events...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <div className="events-grid">
            {featuredEvents.map(event => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        )}
      </section>

      <Features />

      {/* Value Proposition */}
      <section className="value-proposition glass-morphic">
        <div className="value-card">
          <div className="value-icon">🎟️</div>
          <h3>Easy Ticketing</h3>
          <p>
            Hassle-free ticket purchasing with secure payments and instant
            confirmation.
          </p>
        </div>
        <div className="value-card">
          <div className="value-icon">📊</div>
          <h3>Powerful Analytics</h3>
          <p>
            Real-time insights into your event performance and attendee
            demographics.
          </p>
        </div>
        <div className="value-card">
          <div className="value-icon">✅</div>
          <h3>Seamless Check-in</h3>
          <p>
            Fast and efficient attendee check-in with QR code scanning.
          </p>
        </div>

      </section>

      <Services />
    </>
  );
}

export default Home;
