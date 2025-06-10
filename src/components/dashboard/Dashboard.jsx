import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getOrganizerEvents } from '../services/events';
import  useAuth from '../hooks/useAuth';
import EventCard from '../components/events/EventCard';
import Analytics from '../components/dashboard/Analytics';
import './dashboard.css';

/**
 * Main dashboard page for organizers
 * Features:
 * - Overview of organizer's events
 * - Quick actions
 * - Analytics summary
 * - Responsive layout
 */
function Dashboard() {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      if (!user) return;
      
      try {
        const data = await getOrganizerEvents(user.id);
        setEvents(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [user]);

  if (!user) return <div className="auth-required">Please login to view dashboard</div>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome back, {user.name}</h1>
        <Link to="/events/new" className="btn btn-primary">
          Create New Event
        </Link>
      </div>
      
      <Analytics events={events} />
      
      <div className="dashboard-section">
        <h2>Your Events</h2>
        {loading ? (
          <div className="loading-spinner">Loading your events...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : events.length === 0 ? (
          <div className="empty-state">
            <p>You haven't created any events yet.</p>
            <Link to="/events/new" className="btn btn-primary">
              Create Your First Event
            </Link>
          </div>
        ) : (
          <div className="events-grid">
            {events.map(event => (
              <EventCard key={event._id} event={event} isOrganizer />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;