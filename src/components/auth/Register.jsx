import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/auth';
import './forms.css';
import './buttons.css';
/**
 * Registration component for new users
 * Features:
 * - Form validation
 * - Password confirmation
 * - Error handling
 * - Success feedback
 */
function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.passwordConfirm) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      setSuccess(true);
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container glass-morphic">
      <h2>Create an Account</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && (
        <div className="alert alert-success">
          Registration successful! Redirecting to login...
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="6"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      
      <p className="auth-footer">
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
}

export default Register;