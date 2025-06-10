import { useState } from 'react';
import EventCard from './EventCard';
import './eventlist.css';

/**
 * EventList Component
 * 
 * Features:
 * - Displays list of events with filtering options
 * - Uses placeholder data (to be replaced with API data)
 * - Responsive grid layout
 * - Category filtering
 * - Search functionality
 * 
 * TODO: Replace placeholder data with API calls when backend is connected
 */

function EventList() {
  // State for filters and search
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // PLACEHOLDER DATA - REMOVE WHEN CONNECTING TO BACKEND
  const placeholderEvents = [
    {
      _id: '1',
      title: 'Tech Conference 2023',
      description: 'Annual technology conference featuring the latest innovations',
      date: '2023-12-15',
      time: '09:00',
      location: 'Convention Center, San Francisco',
      price: 199,
      capacity: 500,
      ticketsSold: 320,
      category: 'conference',
      imageUrl: 'https://source.unsplash.com/random/600x400/?conference'
    },
    {
      _id: '2',
      title: 'Summer Music Festival',
      description: '3-day outdoor festival with top artists',
      date: '2023-07-21',
      time: '12:00',
      location: 'Central Park, New York',
      price: 89,
      capacity: 10000,
      ticketsSold: 8500,
      category: 'concert',
      imageUrl: 'https://source.unsplash.com/random/600x400/?concert'
    },
    {
      _id: '3',
      title: 'Startup Workshop',
      description: 'Hands-on workshop for aspiring entrepreneurs',
      date: '2023-09-05',
      time: '10:30',
      location: 'Innovation Hub, Austin',
      price: 49,
      capacity: 50,
      ticketsSold: 32,
      category: 'workshop',
      imageUrl: 'https://source.unsplash.com/random/600x400/?workshop'
    },
    {
      _id: '4',
      title: 'Charity Gala Dinner',
      description: 'Elegant evening supporting local charities',
      date: '2023-11-18',
      time: '19:00',
      location: 'Grand Ballroom, Chicago',
      price: 150,
      capacity: 200,
      ticketsSold: 145,
      category: 'other',
      imageUrl: 'https://source.unsplash.com/random/600x400/?gala'
    }
  ];

  // Filter events based on selected category and search query
  const filteredEvents = placeholderEvents.filter(event => {
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="event-list-container">
      {/* Filter Controls */}
      <div className="event-filters glass-morphic">
        <div className="search-control">
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="category-filter">
          <label htmlFor="category">Filter by:</label>
          <select
            id="category"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="conference">Conferences</option>
            <option value="concert">Concerts</option>
            <option value="workshop">Workshops</option>
            <option value="sports">Sports</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="events-grid">
          {filteredEvents.map(event => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      ) : (
        <div className="no-results glass-morphic">
          <h3>No events found</h3>
          <p>Try adjusting your search or filters</p>
          <button 
            className="btn btn-outline"
            onClick={() => {
              setSearchQuery('');
              setCategoryFilter('all');
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default EventList;
