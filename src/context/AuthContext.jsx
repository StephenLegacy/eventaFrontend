import { createContext, useState, useEffect } from 'react';
import { checkAuth } from '../services/auth';

/**
 * Authentication context for managing user state
 * Features:
 * - Persistent login state
 * - User data management
 * - Logout functionality
 */
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on initial load
  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const userData = await checkAuth();
        setUser(userData);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, []);

  const logout = () => {
    // In a real app, you would call a logout API endpoint
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    setUser,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}