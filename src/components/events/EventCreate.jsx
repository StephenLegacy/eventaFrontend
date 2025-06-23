import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEvent } from '../../services/events';
import useAuth from '../../hooks/useAuth';
import './forms.css';

export default function EventCreate() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '19:00', // Default time
    location: '',
    price: 0,
    capacity: 100,
    category: 'concert'
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formPayload = new FormData();
      
      // Append all form data
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value);
      });
      
      // Add organizer ID from auth context
      formPayload.append('organizer', user.id);
      
      if (image) {
        formPayload.append('image', image);
      }

      const response = await createEvent(formPayload);
      
      if (!response.success) {
        throw new Error(response.message || 'Event creation failed');
      }

      navigate('/dashboard', { state: { eventCreated: true } });
    } catch (err) {
      console.error('Creation Error:', err.response?.data || err.message);
      setError(err.response?.data?.message || err.message || 'Failed to create event');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container glass-morphic">
      <h2>Create New Event</h2>
      {error && (
        <div className="alert alert-danger">
          <strong>Error:</strong> {error}
          {error.includes('required') && (
            <p className="error-hint">Please fill all required fields</p>
          )}
        </div>
      )}
      
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="title">Event Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            minLength="5"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="5"
            minLength="10"
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Date *</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="time">Time *</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="location">Location *</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">Price ($)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              step="0.01"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="capacity">Capacity *</label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              min="1"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="concert">Concert</option>
              <option value="conference">Conference</option>
              <option value="workshop">Workshop</option>
              <option value="sports">Sports</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="image">Event Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
          />
          <small>Max 5MB (JPEG/PNG)</small>
        </div>
        
        <div className="form-actions">
          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner"></span> Creating...
              </>
            ) : (
              'Create Event'
            )}
          </button>
          <button 
            type="button" 
            className="btn btn-outline"
            onClick={() => navigate(-1)}
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}