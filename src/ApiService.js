// // import axios from 'axios';

// // // Base URL for your API
// // const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

// // // Create axios instance with default config
// // const apiClient = axios.create({
// //     baseURL: apiBaseUrl,
// //     headers: {
// //         'Content-Type': 'application/json',
// //     },
// // });

// // // Request interceptor to dynamically add Authorization header
// // apiClient.interceptors.request.use(
// //     (config) => {
// //         const accessToken = localStorage.getItem('accessToken');
// //         if (accessToken && !config.headers.Authorization) {
// //             config.headers.Authorization = `Bearer ${accessToken}`;
// //         }
// //         console.log('Request Headers:', config.headers); // Debug headers
// //         return config;
// //     },
// //     (error) => Promise.reject(error)
// // );

// // // Response interceptor for error logging
// // apiClient.interceptors.response.use(
// //     (response) => response,
// //     (error) => {
// //         console.error('API Error:', {
// //             url: error.config?.url,
// //             status: error.response?.status,
// //             data: error.response?.data,
// //             message: error.message,
// //         });
// //         return Promise.reject(error);
// //     }
// // );

// // // API Service functions
// // export const apiService = {
// //     login: async ({ email, password }) => {
// //         const response = await apiClient.post('login/', { email, password }, {
// //             headers: {
// //                 'Content-Type': 'application/json', // Explicitly set, though default
// //                 // No Authorization header needed for login (unless your API requires it)
// //             },
// //         });
// //         console.log('Login API Response:', response.data);
// //         return response.data; // Expected: { access_token, refresh_token }
// //     },
// //     logout: async (accessToken) => {
// //         if (!accessToken) {
// //             throw new Error('No access token provided for logout');
// //         }
// //         const response = await apiClient.post('/logout', {}, {
// //             headers: {
// //                 'Content-Type': 'application/json',
// //                 'Authorization': `Bearer ${accessToken}`, // Explicitly add token
// //             },
// //         });
// //         console.log('Logout API Response:', response.data);
// //         return response.data;
// //     },
// //     createUser: async (userData) => {
// //         const response = await apiClient.post('/users', userData);
// //         return response.data;
// //     },
// //     updateUser: async (userId, userData) => {
// //         const response = await apiClient.put(`/users/${userId}`, userData);
// //         return response.data;
// //     },
// //     deleteUser: async (userId) => {
// //         const response = await apiClient.delete(`/users/${userId}`);
// //         return response.data;
// //     },
// //     getUserById: async (userId) => {
// //         const response = await apiClient.get(`/users/${userId}`);
// //         return response.data;
// //     },
// // };

// // // React Query query functions
// // export const queryFunctions = {
// //     performLogin: ({ email, password }) => apiService.login({ email, password }),
// //     performLogout: () => apiService.logout(), // Simplified, token via interceptor
// //     fetchUserById: (userId) => apiService.getUserById(userId),
// // };

// import axios from 'axios';

// // Base URL for your API
// const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

// // Create axios instance with default config
// const apiClient = axios.create({
//     baseURL: apiBaseUrl,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// // Response interceptor for error logging
// apiClient.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         console.error('API Error:', {
//             url: error.config?.url,
//             status: error.response?.status,
//             data: error.response?.data,
//             message: error.message,
//         });
//         return Promise.reject(error);
//     }
// );

// // API Service functions
// export const apiService = {
//     login: async ({ email, password }) => {
//         const response = await apiClient.post('login/', { email, password }, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         console.log('Login API Response:', response.data);
//         return response.data; // Expected: { access_token, refresh_token }
//     },
//     logout: async (accessToken) => {
//         const response = await apiClient.post('/logout', {}, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${accessToken}`, // Use token directly
//             },
//         });
//         console.log('Logout API Response:', response.data);
//         return response.data;
//     },
//     createUser: async (userData) => {
//         const response = await apiClient.post('/users', userData);
//         return response.data;
//     },
//     updateUser: async (userId, userData) => {
//         const response = await apiClient.put(`/users/${userId}`, userData);
//         return response.data;
//     },
//     deleteUser: async (userId) => {
//         const response = await apiClient.delete(`/users/${userId}`);
//         return response.data;
//     },
//     getUserById: async (userId) => {
//         const response = await apiClient.get(`/users/${userId}`);
//         return response.data;
//     },
// };

// // React Query query functions
// export const queryFunctions = {
//     performLogin: ({ email, password }) => apiService.login({ email, password }),
//     performLogout: (accessToken) => apiService.logout(accessToken),
//     fetchUserById: (userId) => apiService.getUserById(userId),
// };

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

// Response interceptor for error logging
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', {
            url: error.config?.url,
            status: error.response?.status,
            data: error.response?.data,
            message: error.message,
        });
        return Promise.reject(error);
    }
);

// API Service functions
export const apiService = {
    login: async ({ email, password }) => {
        const response = await apiClient.post('login/', { email, password }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Login API Response:', response.data);
        return response.data; // Expected: { access_token, refresh_token }
    },
    logout: async (accessToken) => {
        console.log('Logout Request:', {
            url: `${apiBaseUrl}/logout`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            data: {},
        });
        const response = await apiClient.post('/logout', {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        console.log('Logout API Response:', response.data);
        return response.data;
    },
    getUserDetails: async (accessToken) => {
        const response = await apiClient.get('users/?action=getUserMe', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`, // Use token for auth
            },
        });
        console.log('User Details API Response:', response.data);
        return response.data; // Expected: { message, data: { id, email, is_doctor, is_receptionist, ... } }
    },
    // Other functions (createUser, updateUser, etc.) remain unchanged
};

// React Query query functions
export const queryFunctions = {
    performLogin: ({ email, password }) => apiService.login({ email, password }),
    performLogout: (accessToken) => apiService.logout(accessToken),
    fetchUserDetails: (accessToken) => apiService.getUserDetails(accessToken),
};