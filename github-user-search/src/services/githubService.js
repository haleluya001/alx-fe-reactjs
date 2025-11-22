import axios from 'axios';

/**
 * Fetch a single user by username (public API)
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    return null;
  }
};

/**
 * Fetch multiple users based on advanced search criteria
 * queryParams = { username: string, location: string, minRepos: number }
 */
export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  try {
    let query = '';

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10`);
    return response.data.items; // Array of user results
  } catch (error) {
    console.error('Error fetching advanced users:', error);
    return [];
  }
};
