// frontend/src/services/api.js
const BASE_URL = 'http://localhost:8000/api';

export const apiService = {
  async login(credentials) {
    const response = await fetch(`${BASE_URL}/auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return response.json();
  },

  async getDirections(startId, endId) {
    const response = await fetch(`${BASE_URL}/directions/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        start_location: startId,
        end_location: endId,
      }),
    });
    return response.json();
  },

  // ... other API methods
};
