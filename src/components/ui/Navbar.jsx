import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './navbar.css';

function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    try {
      logout();
      // Force a hard refresh to ensure all state is cleared
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout error:', error);
      window.location.href = '/login'; // Fallback redirect
    }
  };

  return (
    <nav className="navbar glass-morphic">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Eventa
        </Link>
        
        <div className="navbar-links">
          {/* Always visible links */}
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          
          {/* Conditional links */}
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
              <button 
                onClick={handleLogout}
                className="nav-link logout-btn"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;