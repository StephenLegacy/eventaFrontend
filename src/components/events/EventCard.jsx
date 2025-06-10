import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import GlassCard from '../ui/GlassCard';

function EventCard({ event }) {
  return (
    <GlassCard>
      <div className="event-card">
        <img src={event.imageUrl || '/default-event.jpg'} alt={event.title} className="event-image" />
        <div className="event-details">
          <h3>{event.title}</h3>
          <p className="event-date">
            {format(new Date(event.date), 'MMMM dd, yyyy')} at {event.time}
          </p>
          <p className="event-location">{event.location}</p>
          <p className="event-price">${event.price}</p>
          <Link to={`/events/${event._id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </GlassCard>
  );
}

export default EventCard;
