// API service for backend communication

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Something went wrong');
  }
  return response.json();
};

// Get auth token from local storage
const getToken = () => localStorage.getItem('token');

// Common headers with auth token
const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const token = getToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};

export const api = {
  // Auth
  register: async (userData) => {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return handleResponse(response);
  },

  login: async (credentials) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    return handleResponse(response);
  },

  getUserProfile: async () => {
    const response = await fetch(`${API_URL}/auth/me`, {
      headers: getHeaders(),
    });
    return handleResponse(response);
  },

  checkIsAdmin: async () => {
    const response = await fetch(`${API_URL}/auth/isAdmin`, {
      headers: getHeaders(),
    });
    const data = await handleResponse(response);
    return data.isAdmin;
  },

  // Services
  submitReport: async (request) => {
    const response = await fetch(`${API_URL}/services/request`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(request),
    });
    return handleResponse(response);
  },

  getServiceRequests: async () => {
    const response = await fetch(`${API_URL}/services/requests`, {
      headers: getHeaders(),
    });
    return handleResponse(response);
  },

  getUserServiceRequests: async () => {
    const response = await fetch(`${API_URL}/services/user/requests`, {
      headers: getHeaders(),
    });
    return handleResponse(response);
  },

  getServiceStats: async (serviceType) => {
    const response = await fetch(`${API_URL}/services/stats/${serviceType}`, {
      headers: getHeaders(),
    });
    return handleResponse(response);
  },

  getAllProviders: async () => {
    const response = await fetch(`${API_URL}/services/providers`, {
      headers: getHeaders(),
    });
    return handleResponse(response);
  },

  // Tokens
  getTokenBalance: async () => {
    const response = await fetch(`${API_URL}/tokens/balance`, {
      headers: getHeaders(),
    });
    return handleResponse(response);
  },

  getTransactionHistory: async () => {
    const response = await fetch(`${API_URL}/tokens/transactions`, {
      headers: getHeaders(),
    });
    return handleResponse(response);
  },

  initializeUserTokens: async () => {
    const response = await fetch(`${API_URL}/tokens/initialize`, {
      method: 'POST',
      headers: getHeaders(),
    });
    return handleResponse(response);
  },

  rewardDailyEngagement: async () => {
    const response = await fetch(`${API_URL}/tokens/reward/daily`, {
      method: 'POST',
      headers: getHeaders(),
    });
    return handleResponse(response);
  },

  rewardReportSubmission: async () => {
    const response = await fetch(`${API_URL}/tokens/reward/report`, {
      method: 'POST',
      headers: getHeaders(),
    });
    return handleResponse(response);
  }
};