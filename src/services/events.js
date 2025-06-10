import api from './api';

/**
 * Events service
 * Handles all event-related API calls:
 * - Fetching events
 * - Creating/updating/deleting events
 * - Ticket operations
 */
export const getEvents = async () => {
  const response = await api.get('/events');
  return response.events;
};

export const getEventById = async (id) => {
  const response = await api.get(`/events/${id}`);
  return response.event;
};

export const getOrganizerEvents = async (organizerId) => {
  const response = await api.get(`/events/organizer/${organizerId}`);
  return response.events;
};

export const createEvent = async (eventData) => {
  const response = await api.post('/events', eventData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.event;
};

export const updateEvent = async (id, eventData) => {
  const response = await api.put(`/events/${id}`, eventData);
  return response.event;
};

export const deleteEvent = async (id) => {
  await api.delete(`/events/${id}`);
};

export const purchaseTickets = async (eventId, quantity) => {
  const response = await api.post(`/events/${eventId}/tickets`, { quantity });
  return response;
};

export const getFeaturedEvents = async () => {
  const response = await api.get('/events/featured');
  return response.events;
};

export const getAttendeeEvents = async () => {
  // This endpoint might vary based on your API design.
  // Common patterns include:
  // - '/events/attendee' (if attendee ID is handled by JWT/session on backend)
  // - '/attendees/:id/events' (if you need to pass attendee ID)
  // - '/events?attendeeId=' (if using query parameters)
  const response = await api.get('/events/attendee');
  return response.events; // Assuming your API returns events in a 'events' property
};
