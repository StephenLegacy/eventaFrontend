import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFeaturedEvents } from '../services/events';
import EventCard from '../components/events/EventCard';
// import Footer from '../components/Footer.js'; 
import Features from '../components/ui/Features.js'; 
// import Pricing from '../components/Pricing.js';   
// import Services from '../components/Services.js'; 
// import FAQ from '../components/FAQ.js';        
// import CTA from '../components/CTA.js'; 
import './home.css';

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
        const events = await getFeaturedEvents();
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
    <div className="home-page fade-in">
      {/* Hero Section */}
      <section className="hero-section glass-morphic">
        <div className="hero-content">
          <h1>Discover Amazing Events Near You</h1>
          <p className="hero-subtitle">
            Join thousands of participants at our curated selection of concerts, 
            workshops, conferences and more.
          </p>
          <div className="hero-actions">
            <Link to="/events" className="btn btn-primary btn-lg">
              Browse Events
            </Link>
            <Link to="/events/new" className="btn btn-outline btn-lg">
              Create Event
            </Link>
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
    </div>
  );
}

export default Home;