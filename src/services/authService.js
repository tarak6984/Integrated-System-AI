import { API_BASE_URL, fetchWithCredentials } from '../config/api';

export const authService = {
  async signup(userData) {
    return await fetchWithCredentials(`${API_BASE_URL}/auth/signup`, {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  async login(credentials) {
    return await fetchWithCredentials(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  async logout() {
    return await fetchWithCredentials(`${API_BASE_URL}/auth/logout`, {
      method: 'POST',
    });
  },

  async getCurrentUser() {
    return await fetchWithCredentials(`${API_BASE_URL}/auth/me`);
  },
};
