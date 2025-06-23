import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from '../components/events/EventCard';
import Spinner from '../components/ui/Spinner';
import { 
  getEvents,
  getFeaturedEvents,
  getAttendeeEvents 
} from '../services/events';
import './events.css';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [viewMode, setViewMode] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        let apiResponse;
        
        switch(viewMode) {
          case 'featured':
            apiResponse = await getFeaturedEvents();
            break;
          case 'my-events':
            apiResponse = await getAttendeeEvents();
            break;
          default:
            apiResponse = await getEvents();
        }

        // Handle different API response structures
        const eventsData = Array.isArray(apiResponse) 
          ? apiResponse 
          : apiResponse?.data || apiResponse?.events || [];

        if (!Array.isArray(eventsData)) {
          throw new Error('Received invalid events data format');
        }

        setEvents(eventsData);
      } catch (err) {
        setError(err.message || 'Failed to load events');
        console.error('Events loading error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [viewMode]);

  const filteredEvents = events.filter(event => {
    const matchesSearch = searchTerm 
      ? (event.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
         event.description?.toLowerCase().includes(searchTerm.toLowerCase()))
      : true;
    
    const matchesCategory = categoryFilter === 'all' 
      ? true 
      : event.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  if (loading) return <Spinner size="large" />;
  
  if (error) return (
    <div className="error-message glass-morphic">
      <h3>Error Loading Events</h3>
      <p>{error}</p>
      <button 
        className="btn btn-primary"
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
    </div>
  );

  return (
    <div className="events-page">
      <div className="events-header">
        <h1>
          {viewMode === 'featured' ? 'Featured Events' : 
           viewMode === 'my-events' ? 'My Events' : 'All Events'}
        </h1>
        
        <div className="view-toggle">
          <button 
            className={`toggle-btn ${viewMode === 'all' ? 'active' : ''}`}
            onClick={() => setViewMode('all')}
          >
            All
          </button>
          <button 
            className={`toggle-btn ${viewMode === 'featured' ? 'active' : ''}`}
            onClick={() => setViewMode('featured')}
          >
            Featured
          </button>
          <button 
            className={`toggle-btn ${viewMode === 'my-events' ? 'active' : ''}`}
            onClick={() => setViewMode('my-events')}
          >
            My Events
          </button>
        </div>
      </div>

      <div className="events-controls">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input glass-morphic"
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="category-select glass-morphic"
        >
          <option value="all">All Categories</option>
          <option value="concert">Concerts</option>
          <option value="conference">Conferences</option>
          <option value="workshop">Workshops</option>
          <option value="sports">Sports</option>
        </select>

        <button 
          className="btn btn-primary"
          onClick={() => navigate('/events/new')}
        >
          Create Event
        </button>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="no-events glass-morphic">
          <p>No events found matching your criteria</p>
          <button 
            className="btn btn-outline"
            onClick={() => {
              setSearchTerm('');
              setCategoryFilter('all');
            }}
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="events-grid">
          {filteredEvents.map(event => (
            <EventCard 
              key={event._id || event.id}
              event={event}
              onClick={() => navigate(`/events/${event._id || event.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}