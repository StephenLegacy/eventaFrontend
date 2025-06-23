import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { register } from '../../services/auth';

// Mocking the register function for the preview environment.
// In a real application, you would uncomment the actual import above
// and ensure your '../../services/auth' path is correct.
// const register = async ({ name, email, password }) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (email && password && name) {
//         // Simulate successful registration
//         console.log("Mock Registration Success:", { name, email, password });
//         resolve({ message: 'Registration successful!' });
//       } else {
//         // Simulate a registration failure
//         console.error("Mock Registration Failed: Missing details.");
//         reject({ response: { data: { message: 'Missing registration details.' } } });
//       }
//     }, 1000);
//   });
// };


// CSS string containing the glassmorphic styles for the registration form,
// with 'reg-' prefix for all class names to ensure strict scoping.

const scopedRegisterCss = `
  /* Import Google Font - Inter for a modern, professional look */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  /* Container for the registration form to apply glassmorphism */
  .reg-auth-container.glass-morphic {
      background: rgba(255, 255, 255, 0.15); /* Semi-transparent white background for glass effect */
      border-radius: 20px; /* Rounded corners for the container */
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37); /* Stronger shadow for depth */
      backdrop-filter: blur(10px); /* Glassmorphic blur effect */
      -webkit-backdrop-filter: blur(10px); /* Webkit prefix for blur */
      border: 1px solid rgba(255, 255, 255, 0.18); /* Subtle border for definition */
      padding: 40px; /* Ample padding inside the container */
      max-width: 500px; /* Max width for readability of the form */
      width: 100%; /* Make it fluid up to max-width */
      box-sizing: border-box; /* Include padding in element's total width and height */
      transition: transform 0.3s ease-in-out; /* Smooth transition for hover effect */
      display: flex;
      flex-direction: column; /* Ensure content stacks vertically */
      align-items: center; /* Center content horizontally within the container */
      text-align: center; /* Center text within the container */
      font-family: 'Inter', sans-serif; /* Apply Inter font directly to the form */
      color: #e0e7ff; /* Light text color for contrast directly to the form */
  }

  /* Subtle hover effect for the main container */
  .reg-auth-container.glass-morphic:hover {
      transform: translateY(-5px); /* Lift effect on hover */
  }

  /* Heading style for the form title */
  .reg-auth-container.glass-morphic h2 {
      color: #ffffff; /* White color for headings */
      margin-bottom: 25px; /* Spacing below headings */
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); /* Subtle text shadow for headings */
      font-size: 2rem; /* Adjust heading sizes */
      font-weight: 600;
  }

  /* Form Specific Styles */
  .reg-auth-form {
      width: 100%; /* Make form take full width of its container */
      max-width: 400px; /* Max width for form elements */
      margin-bottom: 20px;
  }

  .reg-form-group {
      margin-bottom: 20px; /* Spacing between form groups */
      text-align: left; /* Align labels and inputs to the left */
      width: 100%;
  }

  .reg-form-group label {
      display: block; /* Label on its own line */
      margin-bottom: 8px; /* Space between label and input */
      font-weight: 500; /* Medium font weight for labels */
      color: #c0ccff; /* Slightly darker light blue for labels */
  }

  .reg-form-group input {
      width: 100%; /* Full width for input fields */
      padding: 12px 15px; /* Comfortable padding */
      border: 1px solid rgba(255, 255, 255, 0.3); /* Subtle border */
      background: rgba(255, 255, 255, 0.1); /* Semi-transparent input background */
      border-radius: 10px; /* Rounded input fields */
      color: #ffffff; /* White text in inputs */
      font-size: 1.05rem;
      outline: none; /* Remove outline on focus */
      transition: border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
  }

  .reg-form-group input:focus {
      border-color: #90d3ff; /* Highlight border on focus */
      background: rgba(255, 255, 255, 0.2); /* Slightly more opaque on focus */
      box-shadow: 0 0 0 3px rgba(144, 211, 255, 0.3); /* Soft glow on focus */
  }

  /* Placeholder text color */
  .reg-form-group input::placeholder {
      color: rgba(255, 255, 255, 0.6);
  }

  /* Buttons */
  .reg-btn {
      display: inline-block;
      padding: 12px 25px;
      border-radius: 10px; /* Rounded buttons */
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease; /* Smooth transitions for all button properties */
      text-decoration: none; /* Remove underline for anchor-like buttons */
      text-align: center;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Soft shadow for buttons */
      border: none; /* Remove default button border */
  }

  .reg-btn-primary {
      background: linear-gradient(45deg, #007bff, #0056b3); /* Blue gradient for primary button */
      color: #ffffff;
      width: 100%; /* Full width for button */
      max-width: 400px; /* Max width for button */
      margin-top: 10px; /* Space above button */
      position: relative;
      overflow: hidden;
      z-index: 1;
  }

  .reg-btn-primary:before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: 0.5s;
      z-index: -1;
  }

  .reg-btn-primary:hover:before {
      left: 100%;
  }

  .reg-btn-primary:hover {
      transform: translateY(-3px); /* Lift effect on hover */
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
      background: linear-gradient(45deg, #0056b3, #007bff); /* Slight gradient shift on hover */
  }

  .reg-btn-primary:disabled {
      background: #6c757d; /* Grey out when disabled */
      cursor: not-allowed;
      box-shadow: none;
      transform: none;
      opacity: 0.8;
  }

  /* Alert Messages (for success/error feedback) */
  .reg-alert {
      padding: 12px 20px;
      border-radius: 10px;
      margin-bottom: 20px;
      width: 100%;
      max-width: 400px;
      box-sizing: border-box;
      text-align: center;
      font-weight: 500;
      font-size: 1.05rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .reg-alert-danger {
      background-color: rgba(220, 53, 69, 0.8); /* Red background for errors */
      color: #ffffff;
      border: 1px solid rgba(255, 99, 71, 0.5);
  }

  .reg-alert-success {
      background-color: rgba(40, 167, 69, 0.8); /* Green background for success */
      color: #ffffff;
      border: 1px solid rgba(144, 238, 144, 0.5);
  }

  /* Auth Footer (for the login link) */
  .reg-auth-footer {
      margin-top: 25px;
      color: #c0ccff; /* Light blue text for footer */
      font-size: 1em;
  }

  .reg-auth-footer a {
      color: #90d3ff; /* Light blue for links */
      text-decoration: none;
      font-weight: 600;
  }

  .reg-auth-footer a:hover {
      text-decoration: underline;
      color: #c9e9ff;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
      .reg-auth-container.glass-morphic {
          padding: 25px; /* Reduce padding on smaller screens */
          border-radius: 15px;
      }

      .reg-auth-container.glass-morphic h2 {
          font-size: 1.8rem; /* Adjust heading sizes */
      }

      .reg-form-group input, .reg-btn {
          padding: 10px 12px;
          font-size: 1rem;
      }
  }

  @media (max-width: 480px) {
      .reg-auth-container.glass-morphic {
          border-radius: 15px; /* Slightly less rounded corners */
          padding: 20px;
      }

      .reg-auth-container.glass-morphic h2 {
          font-size: 1.5rem;
          margin-bottom: 20px;
      }

      .reg-form-group {
          margin-bottom: 15px;
      }

      .reg-form-group label {
          font-size: 0.95em;
      }

      .reg-alert {
          padding: 10px 15px;
          font-size: 0.95rem;
      }

      .reg-auth-footer {
          font-size: 0.9em;
      }
  }
`;

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

  // Effect to inject the scoped CSS into the document head
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = scopedRegisterCss;
    document.head.appendChild(styleTag);

    // Cleanup function to remove the style tag when the component unmounts
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount


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
    // Main container for the registration form, using prefixed class names
    <div className="reg-auth-container glass-morphic">
      <h2>Create an Account</h2>
      {error && <div className="reg-alert reg-alert-danger">{error}</div>}
      {success && (
        <div className="reg-alert reg-alert-success">
          Registration successful! Redirecting to login...
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="reg-auth-form">
        <div className="reg-form-group">
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
        
        <div className="reg-form-group">
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
        
        <div className="reg-form-group">
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
        
        <div className="reg-form-group">
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
        
        <button type="submit" className="reg-btn reg-btn-primary" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      
      <p className="reg-auth-footer">
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
}

/**
 * The main App component serves as the entry point for the React application.
 * It renders the Register component and provides global styling for the background
 * and centering, similar to how the Login component example was structured.
 */
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
      <Register />
    </div>
  );
}
