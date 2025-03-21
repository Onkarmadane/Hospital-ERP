// apiService.js
import axios from 'axios';

// Base URL for your API
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

// Create axios instance with default config
const apiClient = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

// API Service functions
export const apiService = {
    login: async ({ email, password }) => {
        const response = await apiClient.post('/login', { email, password });
        return response.data;
    },

    createUser: async (userData) => {
        const response = await apiClient.post('/users', userData);
        return response.data;
    },

    updateUser: async (userId, userData) => {
        const response = await apiClient.put(`/users/${userId}`, userData);
        return response.data;
    },

    deleteUser: async (userId) => {
        const response = await apiClient.delete(`/users/${userId}`);
        return response.data;
    },

    getUserById: async (userId) => {
        const response = await apiClient.get(`/users/${userId}`);
        return response.data;
    },
};

// React Query query functions
export const queryFunctions = {
    // Add login as a mutation function (since it's a POST request)
    performLogin: ({ email, password }) => apiService.login({ email, password }),
    fetchUsers: () => apiService.getUsers(),
    fetchUserById: (userId) => apiService.getUserById(userId),
  };
  
  apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error('API Error:', error);
      return Promise.reject(error);
    }
  );