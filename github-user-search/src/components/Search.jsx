import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser(null);

    const data = await fetchUserData(username);

    if (data) {
      setUser(data);
    } else {
      setError("Looks like we can't find the user");
    }

    setLoading(false);
  };

  return (
    <div style={{ marginTop: '20px' }}>
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

      <div style={{ marginTop: '20px' }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {user && (
          <div
            style={{
              border: '1px solid #ccc',
              padding: '15px',
              borderRadius: '8px',
              maxWidth: '400px',
            }}
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              style={{ width: '80px', borderRadius: '50%' }}
            />
            <h3>{user.name || user.login}</h3>
            <p>{user.bio}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
