import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { getOrganizerEvents, getAttendeeEvents } from '../services/events';
import EventCard from '../components/events/EventCard';
import Analytics from '../components/dashboard/Analytics';
import UpcomingEvents from '../components/dashboard/UpcomingEvents';
import RecentActivity from '../components/dashboard/RecentActivity';
import './dashboard.css';

/**
 * Dashboard Page Component
 * 
 * Features:
 * - Role-based dashboard (Organizer vs Attendee views)
 * - Comprehensive analytics overview
 * - Upcoming events section
 * - Recent activity feed
 * - Quick action buttons
 * - Responsive grid layout
 * - Loading and error states
 */
function Dashboard() {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('upcoming');

  useEffect(() => {
    const fetchEvents = async () => {
      if (!user) return;
      
      try {
        const data = user.role === 'organizer' 
          ? await getOrganizerEvents(user.id)
          : await getAttendeeEvents(user.id);
        setEvents(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [user]);

  if (!user) {
    return (
      <div className="auth-required glass-morphic">
        <h2>Please login to view dashboard</h2>
        <div className="auth-actions">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
          <Link to="/register" className="btn btn-outline">
            Register
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Dashboard Header */}
      <header className="dashboard-header glass-morphic">
        <div className="user-greeting">
          <h1>Welcome back, {user.name}</h1>
          <p className="user-role-badge">
            {user.role === 'organizer' ? 'Event Organizer' : 'Event Attendee'}
          </p>
        </div>
        
        {user.role === 'organizer' && (
          <Link to="/events/new" className="btn btn-primary btn-lg">
            + Create New Event
          </Link>
        )}
      </header>

      {/* Analytics Section */}
      <section className="dashboard-section">
        <Analytics 
          events={events} 
          role={user.role} 
        />
      </section>

      {/* Main Content Area */}
      <div className="dashboard-main">
        {/* Events Section */}
        <section className="dashboard-section events-section">
          <div className="section-header">
            <h2>
              {user.role === 'organizer' ? 'Your Events' : 'Your Tickets'}
            </h2>
            
            <div className="tabs">
              <button 
                className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming
              </button>
              <button 
                className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
                onClick={() => setActiveTab('past')}
              >
                Past
              </button>
            </div>
          </div>

          {loading ? (
            <div className="loading-spinner">Loading your events...</div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : events.length === 0 ? (
            <div className="empty-state glass-morphic">
              {user.role === 'organizer' ? (
                <>
                  <p>You haven't created any events yet.</p>
                  <Link to="/events/new" className="btn btn-primary">
                    Create Your First Event
                  </Link>
                </>
              ) : (
                <>
                  <p>You haven't purchased any tickets yet.</p>
                  <Link to="/events" className="btn btn-primary">
                    Browse Events
                  </Link>
                </>
              )}
            </div>
          ) : (
            <div className="events-grid">
              {events
                .filter(event => 
                  activeTab === 'upcoming' 
                    ? new Date(event.date) >= new Date()
                    : new Date(event.date) < new Date()
                )
                .map(event => (
                  <EventCard 
                    key={event._id} 
                    event={event} 
                    isOrganizer={user.role === 'organizer'}
                  />
                ))}
            </div>
          )}
        </section>

        {/* Sidebar Sections */}
        <aside className="dashboard-sidebar">
          <UpcomingEvents 
            events={events} 
            role={user.role} 
          />
          
          <RecentActivity 
            userId={user.id} 
            role={user.role} 
          />
        </aside>
      </div>
    </div>
  );
}

export default Dashboard;