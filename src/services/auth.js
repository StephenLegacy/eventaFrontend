// src/services/auth.js
import api from './api';

/**
 * Improved Authentication Service
 * With better error handling and response validation
 */
export const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data; // Return the data property explicitly
  } catch (error) {
    console.error('Registration error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);

    console.log('RAW LOGIN RESPONSE:', response); // this is already `response.data`

    const token = response?.token;
    const user = response?.data;

    if (!token || !user) {
      throw new Error('Invalid response structure');
    }

    localStorage.setItem('token', token);

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      ...user
    };
  } catch (error) {
    console.error('Login error:', {
      message: error.message
    });

    throw new Error(error.message || 'Login failed');
  }
};

export const checkAuth = async () => {
  try {
    const response = await api.get('/auth/verify');
    if (!response.data?.user) {
      throw new Error('No user data in verification response');
    }
    return response.data.user;
  } catch (error) {
    console.error('Auth verification error:', error);
    localStorage.removeItem('token'); // Clear invalid token
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
 
};