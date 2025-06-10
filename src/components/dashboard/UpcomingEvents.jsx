import { format } from 'date-fns';
import GlassCard from '../ui/GlassCard';
import './dashboard.css';

function UpcomingEvents({ events, role }) {
  const upcomingEvents = events
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  if (upcomingEvents.length === 0) return null;

  return (
    <GlassCard className="upcoming-events">
      <h3>Upcoming {role === 'organizer' ? 'Events' : 'Tickets'}</h3>
      <ul className="events-list">
        {upcomingEvents.map(event => (
          <li key={event._id} className="event-item">
            <div className="event-date">
              {format(new Date(event.date), 'MMM dd')}
            </div>
            <div className="event-info">
              <h4>{event.title}</h4>
              <p>{event.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}

export default UpcomingEvents;