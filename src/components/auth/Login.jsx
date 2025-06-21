// src/components/auth/Login.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { login } from '../../services/auth';
import { AuthContext } from '../../context/AuthContext';
 

// CSS string remains the same as in your original code
const scopedLoginCss = `
/* login.module.css - Styles with login- prefix for scoping */

/* Main container for authentication forms, leveraging the glassmorphic style */
.login-auth-container.glass-morphic {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 30px;
    max-width: 450px;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    transition: all 0.3s ease-in-out;
}

/* Hover effect for the form container */
.login-auth-container.glass-morphic:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 35px 0 rgba(0, 0, 0, 0.45);
}

/* Form heading */
.login-auth-container.glass-morphic h2 {
    font-size: 2rem;
    color: #ffffff;
    margin-bottom: 25px;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    border-bottom: none;
    padding-bottom: 0;
}

/* Form structure */
.login-auth-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* Form group for labels and inputs */
.login-form-group {
    text-align: left;
}

/* Labels for form inputs */
.login-form-group label {
    display: block;
    margin-bottom: 8px;
    color: #e0e7ff;
    font-weight: 500;
    font-size: 1.05rem;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
}

/* Input fields */
.login-form-group input {
    width: 100%;
    padding: 12px 15px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    color: #ffffff;
    font-size: 1.1rem;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
    outline: none;
}

/* Placeholder text styling */
.login-form-group input::placeholder {
    color: rgba(255, 255, 255, 0.6);
}

/* Focus state for input fields */
.login-form-group input:focus {
    border-color: #90d3ff;
    box-shadow: 0 0 0 3px rgba(144, 211, 255, 0.3);
    background: rgba(255, 255, 255, 0.12);
}

/* Submit button */
.login-btn {
    padding: 15px 25px;
    border: none;
    border-radius: 12px;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    letter-spacing: 0.8px;
    outline: none;
}

/* Primary button style */
.login-btn-primary {
    background: linear-gradient(90deg, #6a82fb, #fc5c7d);
    color: #ffffff;
}

/* Button hover and active states */
.login-btn-primary:not(:disabled):hover {
    background: linear-gradient(90deg, #5165d6, #e34c67);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.login-btn-primary:active {
    transform: translateY(1px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

/* Disabled button state */
.login-btn-primary:disabled {
    background: rgba(106, 130, 251, 0.5);
    cursor: not-allowed;
    opacity: 0.8;
}

/* Alert messages (for error display) */
.login-alert {
    padding: 10px 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    font-size: 0.95rem;
    text-align: left;
    opacity: 0;
    transform: translateY(-10px);
    animation: fadeInSlideDown 0.4s ease-out forwards;
}

/* Danger alert style */
.login-alert-danger {
    background: rgba(255, 76, 76, 0.2);
    color: #ff4c4c;
    border: 1px solid rgba(255, 76, 76, 0.3);
}

/* Success alert style */
.login-alert-success {
    background: rgba(76, 255, 76, 0.2);
    color: #4CAF50;
    border: 1px solid rgba(76, 255, 76, 0.3);
}

/* Keyframes for the alert animation */
@keyframes fadeInSlideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Footer text (e.g., "Don't have an account?") */
.login-auth-footer {
    margin-top: 30px;
    font-size: 1rem;
    color: #c0cffb;
}

/* Link within the footer */
.login-auth-footer a {
    color: #90d3ff;
    font-weight: 500;
    transition: color 0.3s ease-in-out;
}

.login-auth-footer a:hover {
    color: #c9e9ff;
    text-decoration: underline;
}

/* Responsive adjustments for forms */
@media (max-width: 480px) {
    .login-auth-container.glass-morphic {
        padding: 20px;
        border-radius: 15px;
    }

    .login-auth-container.glass-morphic h2 {
        font-size: 1.8rem;
    }

    .login-form-group label,
    .login-form-group input,
    .login-btn {
        font-size: 1rem;
    }

    .login-btn {
        padding: 12px 20px;
    }
}
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);  // get dispatch from context

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      // Use the actual login service instead of mock
      const userData = await login({ email, password });
      
       // Dispatch login to context to update state & localStorage
      dispatch({ type: 'LOGIN', payload: userData });

      setSuccessMessage('Login successful! Redirecting to dashboard...');
      
      // Redirect after successful login
      setTimeout(() => {
        navigate('/dashboard'); // Or your preferred redirect route
      }, 1500);
      
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Add input validation
  const validateForm = () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    await handleSubmit(e);
  };

  // Inject CSS styles
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = scopedLoginCss;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div className="login-auth-container glass-morphic">
      <h2>Login to Your Account</h2>
      {error && <div className="login-alert login-alert-danger">{error}</div>}
      {successMessage && (
        <div className="login-alert login-alert-success">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleFormSubmit} className="login-auth-form">
        <div className="login-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="login-form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="login-btn login-btn-primary"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <p className="login-auth-footer">
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
}

export default function App() {
  return (
    
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #a8c0ff, #3f2b96)',
      fontFamily: '"Inter", sans-serif'
    }}>

      <Login />
    </div>
  );
}