import { Link } from 'react-router-dom';
import './notfound.css';

/**
 * 404 Not Found page component
 * Features:
 * - Clean error messaging
 * - Helpful navigation options
 * - Responsive design
 */
function NotFound() {
  return (
    <div className="not-found-page glass-morphic">
      <div className="error-code">404</div>
      <h1 className="error-title">Page Not Found</h1>
      <p className="error-message">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="navigation-options">
        <Link to="/" className="btn btn-primary">
          Go to Homepage
        </Link>
        <Link to="/events" className="btn btn-outline">
          Browse Events
        </Link>
      </div>
    </div>
  );
}

export default NotFound;