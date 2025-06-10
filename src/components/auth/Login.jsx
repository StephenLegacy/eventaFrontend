import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/auth';
import useAuth from '../../hooks/useAuth';


import './forms.css';



/**
 * Login component handles user authentication
 * Features:
 * - Form validation
 * - Error handling
 * - Loading state
 * - Redirect after successful login
 */
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userData = await login({ email, password });
      setUser(userData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container glass-morphic">
      <h2>Login to Your Account</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
          />
        </div>
        
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      
      <p className="auth-footer">
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
}

export default Login;