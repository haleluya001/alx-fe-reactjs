import React, { useState } from 'react';
import { fetchGitHubUser } from '../services/githubService';
import UserCard from './UserCard';

const UserSearch = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    const data = await fetchGitHubUser(username);
    if (data) {
      setUser(data);
    } else {
      setUser(null);
      setError('User not found');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '5px', marginRight: '10px', width: '250px' }}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
};

export default UserSearch;
