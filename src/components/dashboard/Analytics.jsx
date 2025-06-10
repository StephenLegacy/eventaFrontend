import { format } from 'date-fns';
import GlassCard from '../ui/GlassCard';
import './dashboard.css';

/**
 * Analytics component showing key metrics for organizer
 * Features:
 * - Revenue, tickets sold, upcoming events counts
 * - Responsive card layout
 * - Clean data visualization
 */
function Analytics({ events }) {
  // Calculate analytics data
  const totalEvents = events.length;
  const upcomingEvents = events.filter(event => new Date(event.date) > new Date()).length;
  const pastEvents = totalEvents - upcomingEvents;
  
  const totalTicketsSold = events.reduce((sum, event) => sum + event.ticketsSold, 0);
  const totalRevenue = events.reduce((sum, event) => sum + (event.ticketsSold * event.price), 0);
  
  // Find next event
  const nextEvent = events
    .filter(event => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))[0];

  return (
    <div className="analytics-grid">
      <GlassCard>
        <div className="metric-card">
          <h3>Total Events</h3>
          <div className="metric-value">{totalEvents}</div>
        </div>
      </GlassCard>
      
      <GlassCard>
        <div className="metric-card">
          <h3>Upcoming Events</h3>
          <div className="metric-value">{upcomingEvents}</div>
        </div>
      </GlassCard>
      
      <GlassCard>
        <div className="metric-card">
          <h3>Tickets Sold</h3>
          <div className="metric-value">{totalTicketsSold}</div>
        </div>
      </GlassCard>
      
      <GlassCard>
        <div className="metric-card">
          <h3>Total Revenue</h3>
          <div className="metric-value">${totalRevenue.toFixed(2)}</div>
        </div>
      </GlassCard>
      
      {nextEvent && (
        <GlassCard className="next-event-card">
          <div className="next-event">
            <h3>Next Event</h3>
            <div className="next-event-title">{nextEvent.title}</div>
            <div className="next-event-date">
              {format(new Date(nextEvent.date), 'MMM do, yyyy')} at {nextEvent.time}
            </div>
            <div className="next-event-tickets">
              {nextEvent.ticketsSold} / {nextEvent.capacity} tickets sold
            </div>
          </div>
        </GlassCard>
      )}
    </div>
  );
}

export default Analytics;