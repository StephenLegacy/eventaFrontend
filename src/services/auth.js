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
    
    // Validate response structure
    if (!response.data?.token) {
      throw new Error('Invalid response structure - no token received');
    }
    
    // Store token securely
    localStorage.setItem('token', response.data.token);
    
    // Return normalized user data
    return {
      id: response.data.user?.id,
      email: response.data.user?.email || credentials.email,
      name: response.data.user?.name,
      ...response.data.user // Include any additional user fields
    };
    
  } catch (error) {
    console.error('Login error:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });
    
    throw new Error(
      error.response?.data?.message || 
      error.response?.data?.error ||
      'Login failed. Please try again.'
    );
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
  // Optional: Add API call to backend logout if needed
};