import axios from "axios";

export const fetchUserData = async (query) => {
  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}`
  );

  const users = response.data.items;

  // Fetch extra details like location
  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const userDetails = await axios.get(user.url);
      return { ...user, ...userDetails.data };
    })
  );

  return detailedUsers;
};
