import React, { useState } from 'react';
import { fetchAdvancedUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);

    const results = await fetchAdvancedUsers({ username, location, minRepos });

    if (results.length) {
      setUsers(results);
    } else {
      setError("Looks like we cant find the user");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <form onSubmit={handleSearch} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded mb-3 flex items-center gap-4">
            <img src={user.avatar_url} alt={user.login} className="w-16 rounded-full" />
            <div>
              <h3 className="font-bold">{user.login}</h3>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
