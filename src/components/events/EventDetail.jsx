import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { getEventById, deleteEvent } from '../../services/events';
import useAuth from '../../hooks/useAuth';
import GlassCard from '../ui/GlassCard';
// import './cards.css';

/**
 * Event detail page with complete information
 * Features:
 * - Detailed event display
 * - Edit/delete options for organizers
 * - Ticket purchase section
 * - Responsive layout
 */
function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [ticketCount, setTicketCount] = useState(1);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getEventById(id);
        setEvent(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load event');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await deleteEvent(id);
        navigate('/events');
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to delete event');
      }
    }
  };

  const handlePurchase = () => {
    // In a real app, this would integrate with a payment gateway
    alert(`Purchased ${ticketCount} ticket(s) for ${event.title}`);
    navigate('/dashboard');
  };

  if (loading) return <div className="loading-spinner">Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!event) return <div className="not-found">Event not found</div>;

  return (
    <div className="event-detail-page">
      <div className="event-main">
        <GlassCard>
          <div className="event-header">
            <img 
              src={event.imageUrl || '/default-event.jpg'} 
              alt={event.title} 
              className="event-hero-image"
            />
            <div className="event-meta">
              <h1>{event.title}</h1>
              <div className="event-organizer">
                Hosted by {event.organizer?.name || 'Unknown Organizer'}
              </div>
            </div>
          </div>
          
          <div className="event-body">
            <div className="event-description">
              <h3>About This Event</h3>
              <p>{event.description}</p>
            </div>
            
            <div className="event-info-grid">
              <div className="info-card">
                <h4>Date & Time</h4>
                <p>{format(new Date(event.date), 'EEEE, MMMM do, yyyy')}</p>
                <p>{event.time}</p>
              </div>
              
              <div className="info-card">
                <h4>Location</h4>
                <p>{event.location}</p>
                {event.venueDetails && <p>{event.venueDetails}</p>}
              </div>
              
              <div className="info-card">
                <h4>Price</h4>
                <p>${event.price.toFixed(2)} per ticket</p>
                <p>{event.capacity - event.ticketsSold} tickets remaining</p>
              </div>
              
              <div className="info-card">
                <h4>Category</h4>
                <p>{event.category}</p>
              </div>
            </div>
          </div>
          
          {user?.id === event.organizer?._id && (
            <div className="event-actions">
              <button 
                className="btn btn-primary"
                onClick={() => navigate(`/events/${event._id}/edit`)}
              >
                Edit Event
              </button>
              <button 
                className="btn btn-danger"
                onClick={handleDelete}
              >
                Delete Event
              </button>
            </div>
          )}
        </GlassCard>
      </div>
      
      <div className="event-sidebar">
        <GlassCard>
          <div className="ticket-widget">
            <h3>Get Tickets</h3>
            <div className="ticket-price">
              ${event.price.toFixed(2)} <span>per ticket</span>
            </div>
            
            <div className="ticket-quantity">
              <label htmlFor="ticketCount">Quantity:</label>
              <select
                id="ticketCount"
                value={ticketCount}
                onChange={(e) => setTicketCount(parseInt(e.target.value))}
              >
                {[...Array(10).keys()].map(num => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="ticket-total">
              Total: ${(event.price * ticketCount).toFixed(2)}
            </div>
            
            <button 
              className="btn btn-success full-width"
              onClick={handlePurchase}
              disabled={event.ticketsSold >= event.capacity}
            >
              {event.ticketsSold >= event.capacity ? 'Sold Out' : 'Purchase Tickets'}
            </button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

export default EventDetail;