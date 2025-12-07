import { API_BASE_URL, fetchWithCredentials } from '../config/api';

export const adminService = {
  async getAllUsers() {
    return await fetchWithCredentials(`${API_BASE_URL}/admin/users`);
  },

  async getStats() {
    return await fetchWithCredentials(`${API_BASE_URL}/admin/stats`);
  },

  async deleteUser(userId) {
    return await fetchWithCredentials(`${API_BASE_URL}/admin/users/${userId}`, {
      method: 'DELETE',
    });
  },
};
