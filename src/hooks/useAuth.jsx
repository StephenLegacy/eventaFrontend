import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

/**
 * Custom hook to access authentication context
 * @returns {{
 *   user: Object|null,
 *   isAuthenticated: boolean,
 *   isLoading: boolean,
 *   login: Function,
 *   logout: Function,
 *   setUser: Function,
 *   setIsAuthenticated: Function
 * }} Auth context with helper methods
 */
function useAuth() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  /**
   * Handles user logout
   * - Clears authentication tokens
   * - Resets auth state
   * - Redirects to login page
   * @param {boolean} [redirect=true] Whether to redirect after logout
   */
  const logout = (redirect = true) => {
    try {
      // Clear client-side storage
      localStorage.removeItem('token');
      sessionStorage.removeItem('user');
      
      // Reset context state
      context.setUser(null);
      context.setIsAuthenticated(false);
      
      // Optional redirect
      if (redirect) {
        navigate('/login', { replace: true });
      }
    } catch (error) {
      console.error('Logout failed:', error);
      throw new Error('Failed to logout properly');
    }
  };

  return {
    ...context,
    logout, // Add the logout function to returned context
    /**
     * Convenience property combining user and auth state
     * @returns {boolean}
     */
    get isAuthenticated() {
      return context.isAuthenticated && Boolean(context.user);
    },
    /**
     * Current user data
     * @returns {Object|null}
     */
    get user() {
      return context.user || null;
    }
  };
}

export default useAuth;