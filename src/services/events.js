import api from './api';

/**
 * Events service - handles all event-related API calls
 */

/**
 * @desc    Get all events
 * @return  {Promise<Array>} Array of events
 */
export const getEvents = async () => {
  try {
    const response = await api.get('/events');
    return response.data || response;
  } catch (err) {
    handleApiError(err, 'Failed to fetch events');
  }
};

/**
 * @desc    Get single event by ID
 * @param   {string} id - Event ID
 * @return  {Promise<Object>} Event object
 */
export const getEventById = async (id) => {
  try {
    const response = await api.get(`/events/${id}`);
    return response.data || response;
  } catch (err) {
    handleApiError(err, `Failed to fetch event with ID ${id}`);
  }
};

/**
 * @desc    Get events by organizer ID
 * @param   {string} organizerId - Organizer's user ID
 * @return  {Promise<Array>} Array of organizer's events
 */
export const getOrganizerEvents = async (organizerId) => {
  try {
    const response = await api.get(`/events/organizer/${organizerId}`, {
      headers: getAuthHeader()
    });
    return response.data || response;
  } catch (err) {
    handleApiError(err, `Failed to fetch events for organizer ${organizerId}`);
  }
};

/**
 * @desc    Create a new event
 * @param   {FormData} formData - Event data including optional image
 * @return  {Promise<Object>} Created event object
 */
export const createEvent = async (formData) => {
  try {
    const response = await api.post('/events', formData, {
      headers: {
        ...getAuthHeader(),
        'Content-Type': 'multipart/form-data'
      },
      timeout: 10000
    });
    return response.data;
  } catch (err) {
    handleApiError(err, 'Failed to create event');
  }
};

/**
 * @desc    Get featured events
 * @return  {Promise<Array>} Array of featured events
 */
export const getFeaturedEvents = async () => {
  try {
    const response = await api.get('/events/featured');
    return response.data || response;
  } catch (err) {
    handleApiError(err, 'Failed to fetch featured events');
  }
};

/**
 * @desc    Get events for the current attendee
 * @return  {Promise<Array>} Array of attendee's events
 */
export const getAttendeeEvents = async () => {
  try {
    const response = await api.get('/events/attendee', {
      headers: getAuthHeader()
    });
    return response.data || response;
  } catch (err) {
    handleApiError(err, 'Failed to fetch attendee events');
  }
};

/**
 * @desc    Update an existing event
 * @param   {string} id - Event ID to update
 * @param   {Object} eventData - Updated event data
 * @return  {Promise<Object>} Updated event object
 */
export const updateEvent = async (id, eventData) => {
  try {
    const response = await api.put(`/events/${id}`, eventData, {
      headers: getAuthHeader()
    });
    return response.data || response;
  } catch (err) {
    handleApiError(err, `Failed to update event with ID ${id}`);
  }
};

/**
 * @desc    Delete an event
 * @param   {string} id - Event ID to delete
 * @return  {Promise<void>}
 */
export const deleteEvent = async (id) => {
  try {
    await api.delete(`/events/${id}`, {
      headers: getAuthHeader()
    });
  } catch (err) {
    handleApiError(err, `Failed to delete event with ID ${id}`);
  }
};

/**
 * @desc    Purchase tickets for an event
 * @param   {string} eventId - Event ID
 * @param   {number} quantity - Number of tickets to purchase
 * @return  {Promise<Object>} Purchase confirmation
 */
export const purchaseTickets = async (eventId, quantity) => {
  try {
    const response = await api.post(
      `/events/${eventId}/tickets`, 
      { quantity },
      { headers: getAuthHeader() }
    );
    return response.data || response;
  } catch (err) {
    handleApiError(err, `Failed to purchase tickets for event ${eventId}`);
  }
};

// Helper function to get authorization header
const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { 'Authorization': `Bearer ${token}` } : {};
};

// Helper function to handle API errors consistently
const handleApiError = (err, defaultMessage) => {
  if (err.response) {
    // Server responded with error status
    const serverError = err.response.data;
    const errorMessage = serverError?.message || 
                         serverError?.error || 
                         defaultMessage;
    console.error('API Error:', errorMessage, serverError);
    throw new Error(errorMessage);
  } else if (err.request) {
    // Request was made but no response received
    console.error('Network Error:', err.message);
    throw new Error('Network error - please check your connection');
  } else {
    // Request setup error
    console.error('Request Error:', err.message);
    throw err;
  }
};