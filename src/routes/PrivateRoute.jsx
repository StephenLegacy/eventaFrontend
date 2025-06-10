
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

/**
 * Private route component to protect authenticated routes
 * Features:
 * - Redirects unauthenticated users to login
 * - Preserves intended location for post-login redirect
 */
function PrivateRoute() {
  const { user } = useAuth();
  const location = useLocation(); // ✅ Correct way to access current location

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}

export default PrivateRoute;
