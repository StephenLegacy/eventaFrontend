import api from './api';

/**
 * Authentication service
 * Handles all auth-related API calls:
 * - Login
 * - Registration
 * - Session verification
 */
export const register = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response;
};

export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  localStorage.setItem('token', response.token);
  return response.user;
};

export const checkAuth = async () => {
  const response = await api.get('/auth/verify');
  return response.user;
};

export const logout = async () => {
  localStorage.removeItem('token');
};