import axios from "axios";

const token = import.meta.env.VITE_GITHUB_TOKEN;

export const fetchUserData = async (query, minRepos = 0) => {
  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}+repos:>=${minRepos}`,
    {
      headers: {
        Authorization: token ? `token ${token}` : undefined,
      },
    }
  );

  const users = response.data.items;

  // Fetch extra details like location
  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const userDetails = await axios.get(user.url, {
        headers: {
          Authorization: token ? `token ${token}` : undefined,
        },
      });
      return { ...user, ...userDetails.data };
    })
  );

  return detailedUsers;
};
