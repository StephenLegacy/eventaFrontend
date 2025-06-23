import { Navigate, useLocation, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

/**
 * Enhanced PrivateRoute component that handles:
 * - Route protection
 * - Nested routes (Outlet)
 * - Single child routes
 * - Proper redirect state
 */
export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Handle nested routes
  return children ? children : <Outlet />;
}