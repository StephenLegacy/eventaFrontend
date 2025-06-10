import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './navbar.css';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar glass-morphic">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          EventHub
        </Link>
        
        <div className="navbar-links">
          <Link to="/events" className="nav-link">Events</Link>
          
          {user ? (
            <>
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
              <button onClick={logout} className="btn btn-outline">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/contact" className="nav-link">Contact Us</Link>
              <Link to="/about" className="nav-link">About Us</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;